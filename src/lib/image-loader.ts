// Custom next/image loader. Paired with the build-time optimizer
// (scripts/optimize-images.mjs) which writes responsive WebP variants to
// public/images/_opt/{basename}-{width}.webp.
//
// Returning static paths here lets `output: "export"` stay on — Next emits
// <img srcset="..."> pointing at the pre-generated files, no runtime image
// server needed.

type LoaderArgs = {
  src: string;
  width: number;
  quality?: number;
};

const VARIANT_WIDTHS = [384, 640, 828, 1080, 1280, 1920] as const;

// Paths we should never rewrite: already-optimized outputs, raster avatars, SVGs, GIFs, and absolute URLs.
const PASSTHROUGH_PREFIXES = ["/images/_opt/", "/images/avatar-"];
const PASSTHROUGH_EXTENSIONS = [".svg", ".gif"];

function isPassthrough(src: string): boolean {
  if (/^https?:\/\//i.test(src)) return true;
  if (PASSTHROUGH_PREFIXES.some((p) => src.startsWith(p))) return true;
  const lower = src.toLowerCase();
  return PASSTHROUGH_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function bucketWidth(requested: number): number {
  for (const w of VARIANT_WIDTHS) {
    if (w >= requested) return w;
  }
  return VARIANT_WIDTHS[VARIANT_WIDTHS.length - 1];
}

function baseName(src: string): string {
  const file = src.split("/").pop() ?? src;
  const dot = file.lastIndexOf(".");
  return dot === -1 ? file : file.slice(0, dot);
}

export default function imageLoader({ src, width }: LoaderArgs): string {
  // For passthrough paths, append ?w=... so Next sees a distinct URL per
  // requested width (otherwise it warns that the loader ignores width).
  // The static file server ignores the query string.
  if (isPassthrough(src)) return `${src}?w=${width}`;
  if (!src.startsWith("/images/")) return src;

  const bucketed = bucketWidth(width);
  return `/images/_opt/${baseName(src)}-${bucketed}.webp`;
}
