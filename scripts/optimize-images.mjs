// Build-time image optimizer.
// Reads public/images/*.{jpg,jpeg,png,webp}, writes responsive WebP variants
// to public/images/_opt/{basename}-{width}.webp. Skips work when the output
// is newer than the source (incremental rebuilds).

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(SRC_DIR, "_opt");

const WIDTHS = [384, 640, 828, 1080, 1280, 1920];
const QUALITY = 78;
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
// Files to leave untouched (tiny avatars, the original logo file path is still
// referenced directly by Header/Footer via next/image so the loader will still
// rewrite it — but we also skip originals that are already tiny).
const SKIP_BASENAMES = new Set(["avatar-ken.png", "avatar-michelle.png", "avatar-paul.png"]);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function mtime(file) {
  try {
    const s = await fs.stat(file);
    return s.mtimeMs;
  } catch {
    return 0;
  }
}

async function processOne(srcPath) {
  const base = path.basename(srcPath, path.extname(srcPath));
  const srcMtime = await mtime(srcPath);
  const image = sharp(srcPath);
  const meta = await image.metadata();
  const srcWidth = meta.width ?? WIDTHS[WIDTHS.length - 1];
  const srcBytes = (await fs.stat(srcPath)).size;

  let totalOut = 0;
  let generated = 0;
  let skipped = 0;

  for (const w of WIDTHS) {
    // Don't upscale — if source is smaller than target width, just emit at source width once
    // and stop adding larger buckets.
    const targetWidth = Math.min(w, srcWidth);
    const outPath = path.join(OUT_DIR, `${base}-${w}.webp`);

    const outMtime = await mtime(outPath);
    if (outMtime > srcMtime) {
      const s = await fs.stat(outPath);
      totalOut += s.size;
      skipped += 1;
      // Still stop generating larger buckets once we've hit the source's native width.
      if (targetWidth === srcWidth) break;
      continue;
    }

    await sharp(srcPath)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outPath);

    const s = await fs.stat(outPath);
    totalOut += s.size;
    generated += 1;

    if (targetWidth === srcWidth) break;
  }

  return { base, srcBytes, totalOut, generated, skipped };
}

async function main() {
  await ensureDir(OUT_DIR);

  const entries = await fs.readdir(SRC_DIR, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => SOURCE_EXT.has(path.extname(n).toLowerCase()))
    .filter((n) => !SKIP_BASENAMES.has(n));

  let totalSrc = 0;
  let totalOut = 0;
  let totalGenerated = 0;
  let totalSkipped = 0;

  for (const name of files) {
    const srcPath = path.join(SRC_DIR, name);
    const r = await processOne(srcPath);
    totalSrc += r.srcBytes;
    totalOut += r.totalOut;
    totalGenerated += r.generated;
    totalSkipped += r.skipped;
  }

  const kib = (n) => `${(n / 1024).toFixed(1)} KiB`;
  console.log(
    `[optimize-images] ${files.length} source files · ` +
      `${totalGenerated} generated · ${totalSkipped} cached · ` +
      `originals ${kib(totalSrc)} → variants ${kib(totalOut)}`
  );
}

main().catch((err) => {
  console.error("[optimize-images] failed:", err);
  process.exit(1);
});
