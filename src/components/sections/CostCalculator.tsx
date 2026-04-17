"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business";

// Base pricing: Scott's standard rate of $1.50-$2.00 per sqft of painted
// SURFACE AREA (walls / siding — not home floor area). The user still picks
// a bucket based on their home size, and the calculator converts to
// estimated paintable area using industry-standard multipliers:
//   • interior paintable walls ≈ 2.5× home floor (9ft ceilings, typical layout)
//   • exterior siding ≈ 2.0× home floor (mixed-story average)
// Those multipliers are baked into the numbers below.
const pricingTable: Record<
  string,
  Record<string, { low: number; high: number }>
> = {
  "interior-painting": {
    // home floor × 2.5 × $1.50-$2.00
    small: { low: 3750, high: 5000 }, // ~1,000 home → ~2,500 sqft paint
    medium: { low: 5625, high: 7500 }, // ~1,500 home → ~3,750 sqft paint
    large: { low: 9375, high: 12500 }, // ~2,500 home → ~6,250 sqft paint
    xlarge: { low: 13125, high: 17500 }, // ~3,500 home → ~8,750 sqft paint
    xxlarge: { low: 16875, high: 22500 }, // ~4,500 home → ~11,250 sqft paint
  },
  "exterior-painting": {
    // home floor × 2.0 × $1.50-$2.00
    small: { low: 3000, high: 4000 }, // ~2,000 sqft siding
    medium: { low: 4500, high: 6000 }, // ~3,000 sqft siding
    large: { low: 7500, high: 10000 }, // ~5,000 sqft siding
    xlarge: { low: 10500, high: 14000 }, // ~7,000 sqft siding
    xxlarge: { low: 13500, high: 18000 }, // ~9,000 sqft siding
  },
  "house-painting": {
    // Interior + exterior combined with a ~10% bundle discount.
    small: { low: 6075, high: 8100 },
    medium: { low: 9113, high: 12150 },
    large: { low: 15188, high: 20250 },
    xlarge: { low: 21263, high: 28350 },
    xxlarge: { low: 27338, high: 36450 },
  },
  "cabinet-painting": {
    // Flat project ranges — cabinets aren't a per-home-sqft job.
    small: { low: 1800, high: 2800 },
    medium: { low: 2800, high: 4200 },
    large: { low: 4200, high: 5800 },
    xlarge: { low: 5800, high: 8500 },
    xxlarge: { low: 8500, high: 12000 },
  },
  "power-washing": {
    small: { low: 225, high: 400 },
    medium: { low: 325, high: 525 },
    large: { low: 475, high: 750 },
    xlarge: { low: 650, high: 1100 },
    xxlarge: { low: 900, high: 1600 },
  },
  "deck-staining": {
    small: { low: 450, high: 900 },
    medium: { low: 750, high: 1400 },
    large: { low: 1200, high: 2200 },
    xlarge: { low: 1800, high: 3200 },
    xxlarge: { low: 2800, high: 5000 },
  },
};

// Nominal home sqft for each bucket — used to scale percentage-based add-ons
// (ceilings, trim) off the home size rather than off the current price range.
const nominalHomeSqft: Record<string, number> = {
  small: 1000,
  medium: 1500,
  large: 2500,
  xlarge: 3500,
  xxlarge: 4500,
};

// Area multipliers — Columbus is baseline
const areaMultipliers: Record<string, { mult: number; note: string }> = {
  "columbus-oh": { mult: 1.0, note: "Columbus baseline" },
  "grove-city-oh": { mult: 0.95, note: "Efficient suburban routing" },
  "pickerington-oh": { mult: 0.95, note: "Our home base — lower overhead" },
  "pataskala-oh": { mult: 0.92, note: "Rural routing discount" },
  "newark-oh": { mult: 1.05, note: "Historic brick/masonry premium" },
  "lancaster-oh": { mult: 1.1, note: "Historic district premium" },
};

// Condition modifiers
const conditionModifiers: Record<string, { mult: number; label: string; desc: string }> = {
  good: {
    mult: 0.9,
    label: "Good condition",
    desc: "Surfaces are sound, no peeling, minor touch-ups only",
  },
  fair: {
    mult: 1.0,
    label: "Fair condition",
    desc: "Typical wear — some caulking, patching, spot priming needed",
  },
  "needs-prep": {
    mult: 1.2,
    label: "Needs significant prep",
    desc: "Peeling paint, scraping, wood repair, or heavy prep",
  },
};

// Size labels per project type
const sizeLabels: Record<string, Record<string, string>> = {
  "interior-painting": {
    small: "Small (~1,000 sq ft)",
    medium: "Medium (~1,500 sq ft)",
    large: "Large (~2,500 sq ft)",
    xlarge: "X-Large (~3,500 sq ft)",
    xxlarge: "4,500+ sq ft",
  },
  "exterior-painting": {
    small: "Small (~1,000 sq ft)",
    medium: "Medium (~1,500 sq ft)",
    large: "Large (~2,500 sq ft)",
    xlarge: "X-Large (~3,500 sq ft)",
    xxlarge: "4,500+ sq ft",
  },
  "cabinet-painting": {
    small: "Small kitchen (15–20 doors)",
    medium: "Standard (25–35 doors)",
    large: "Large (40–50 doors)",
    xlarge: "Custom / XL kitchen",
    xxlarge: "Oversized + island",
  },
  "power-washing": {
    small: "Small home (<1,500 sq ft)",
    medium: "Medium (~2,000 sq ft)",
    large: "Large (~3,000 sq ft)",
    xlarge: "X-Large (~4,000 sq ft)",
    xxlarge: "Estate (~5,000+ sq ft)",
  },
  "deck-staining": {
    small: "Small deck (<200 sq ft)",
    medium: "Standard (~300 sq ft)",
    large: "Large (~500 sq ft)",
    xlarge: "Wraparound / Multi-level",
    xxlarge: "Estate deck",
  },
  "house-painting": {
    small: "Small (~1,000 sq ft)",
    medium: "Medium (~1,500 sq ft)",
    large: "Large (~2,500 sq ft)",
    xlarge: "X-Large (~3,500 sq ft)",
    xxlarge: "4,500+ sq ft",
  },
};

// Which project types are eligible for the standard paint-job add-ons.
const ADDON_ELIGIBLE = new Set([
  "interior-painting",
  "exterior-painting",
  "house-painting",
]);

// Per-door add-on cost (both sides, standard interior door).
const DOOR_COST = 125;

// Flat gutter paint add-on — single-story / typical lot assumption.
const GUTTERS_COST = 500;

// Ceiling paint adds roughly $1 per sqft of home (varies by ceiling height).
const CEILING_PER_SQFT = 1.0;

// Trim & molding is priced off the base paint job because the square footage
// of trim scales with the house size.
const TRIM_PERCENT = 0.15;

function formatCurrency(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

export function CostCalculator() {
  const [projectType, setProjectType] = useState("interior-painting");
  const [size, setSize] = useState("large");
  const [area, setArea] = useState("columbus-oh");
  const [condition, setCondition] = useState("fair");

  // Add-ons
  const [doorsCount, setDoorsCount] = useState(0);
  const [addCeilings, setAddCeilings] = useState(false);
  const [addGutters, setAddGutters] = useState(false);
  const [addTrim, setAddTrim] = useState(false);

  const showAddons = ADDON_ELIGIBLE.has(projectType);

  const estimate = useMemo(() => {
    const base = pricingTable[projectType]?.[size];
    const areaMod = areaMultipliers[area]?.mult ?? 1.0;
    const condMod = conditionModifiers[condition]?.mult ?? 1.0;
    if (!base) return null;

    const baseLow = base.low * areaMod * condMod;
    const baseHigh = base.high * areaMod * condMod;

    // Add-ons only stack onto paint projects.
    let addOnsLow = 0;
    let addOnsHigh = 0;
    if (showAddons) {
      if (doorsCount > 0) {
        const doorsTotal = doorsCount * DOOR_COST;
        addOnsLow += doorsTotal;
        addOnsHigh += doorsTotal;
      }
      if (addCeilings) {
        const homeSqft = nominalHomeSqft[size] ?? 1500;
        // Give ceilings a small range (±20%) so the estimate stays a range.
        const ceilingMid = homeSqft * CEILING_PER_SQFT;
        addOnsLow += ceilingMid * 0.8;
        addOnsHigh += ceilingMid * 1.2;
      }
      if (addGutters) {
        addOnsLow += GUTTERS_COST * 0.8;
        addOnsHigh += GUTTERS_COST * 1.2;
      }
      if (addTrim) {
        addOnsLow += baseLow * TRIM_PERCENT;
        addOnsHigh += baseHigh * TRIM_PERCENT;
      }
    }

    return {
      low: baseLow + addOnsLow,
      high: baseHigh + addOnsHigh,
      baseLow,
      baseHigh,
      addOnsLow,
      addOnsHigh,
    };
  }, [
    projectType,
    size,
    area,
    condition,
    doorsCount,
    addCeilings,
    addGutters,
    addTrim,
    showAddons,
  ]);

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-10">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
        <Calculator className="h-4 w-4" />
        Cost Calculator
      </div>
      <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
        Estimate Your Painting Project
      </h2>
      <p className="mt-2 text-sm text-muted md:text-base">
        Scott&apos;s base rate runs <strong>$1.50–$2.00 per sqft of painted surface
        area</strong> (walls and siding, not home floor size). Pick your home size
        and we&apos;ll estimate the paintable area for you, then stack on any
        add-ons — doors, ceilings, gutters, trim — to mirror how Scott builds a
        real quote.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Project Type */}
        <div>
          <label
            htmlFor="project-type"
            className="text-sm font-semibold text-foreground"
          >
            Project Type
          </label>
          <select
            id="project-type"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <option value="interior-painting">Interior Painting</option>
            <option value="exterior-painting">Exterior Painting</option>
            <option value="house-painting">Full House Painting (Int + Ext)</option>
            <option value="cabinet-painting">Cabinet Painting</option>
            <option value="power-washing">Power Washing</option>
            <option value="deck-staining">Deck Staining</option>
          </select>
        </div>

        {/* Size */}
        <div>
          <label htmlFor="size" className="text-sm font-semibold text-foreground">
            Project Size
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {Object.entries(sizeLabels[projectType] || {}).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
        </div>

        {/* Area */}
        <div>
          <label htmlFor="area" className="text-sm font-semibold text-foreground">
            Your City
          </label>
          <select
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            <option value="columbus-oh">Columbus, OH</option>
            <option value="grove-city-oh">Grove City, OH</option>
            <option value="pickerington-oh">Pickerington, OH</option>
            <option value="pataskala-oh">Pataskala, OH</option>
            <option value="newark-oh">Newark, OH</option>
            <option value="lancaster-oh">Lancaster, OH</option>
          </select>
        </div>

        {/* Condition */}
        <div>
          <label htmlFor="condition" className="text-sm font-semibold text-foreground">
            Surface Condition
          </label>
          <select
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            {Object.entries(conditionModifiers).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted">
            {conditionModifiers[condition]?.desc}
          </p>
        </div>
      </div>

      {/* Add-Ons */}
      {showAddons && (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <div className="text-sm font-semibold text-foreground">
            Add-Ons{" "}
            <span className="font-normal text-muted">
              (Scott charges separately for these)
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            The base rate covers walls. Pick anything else you want painted and
            we&apos;ll stack it into the estimate.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Doors */}
            <div className="flex flex-col rounded-xl border border-border bg-white p-4">
              <label
                htmlFor="doors-count"
                className="text-sm font-semibold text-foreground"
              >
                Doors to paint
              </label>
              <div className="mt-2 flex items-center gap-3">
                <input
                  id="doors-count"
                  type="number"
                  min={0}
                  max={50}
                  value={doorsCount}
                  onChange={(e) =>
                    setDoorsCount(Math.max(0, Math.min(50, Number(e.target.value) || 0)))
                  }
                  className="w-24 rounded-lg border border-border bg-white px-3 py-2 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
                <span className="text-xs text-muted">
                  ~${DOOR_COST} per door (both sides)
                </span>
              </div>
            </div>

            {/* Ceilings */}
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-primary-300">
              <input
                type="checkbox"
                checked={addCeilings}
                onChange={(e) => setAddCeilings(e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-border text-primary-600 focus:ring-primary-500"
              />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Paint ceilings
                </div>
                <div className="text-xs text-muted">
                  ~${CEILING_PER_SQFT.toFixed(2)}/sqft of home
                </div>
              </div>
            </label>

            {/* Gutters */}
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-primary-300">
              <input
                type="checkbox"
                checked={addGutters}
                onChange={(e) => setAddGutters(e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-border text-primary-600 focus:ring-primary-500"
              />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Paint gutters
                </div>
                <div className="text-xs text-muted">
                  ~${GUTTERS_COST} flat (typical lot)
                </div>
              </div>
            </label>

            {/* Trim / Molding */}
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-white p-4 hover:border-primary-300">
              <input
                type="checkbox"
                checked={addTrim}
                onChange={(e) => setAddTrim(e.target.checked)}
                className="mt-0.5 h-5 w-5 rounded border-border text-primary-600 focus:ring-primary-500"
              />
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Paint trim &amp; molding
                </div>
                <div className="text-xs text-muted">
                  +{Math.round(TRIM_PERCENT * 100)}% of base
                </div>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Estimate */}
      {estimate && (
        <div className="mt-10 rounded-2xl bg-primary-50 p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary-600">
            Estimated Range
          </div>
          <div className="mt-2 flex flex-wrap items-baseline gap-2 text-primary-900">
            <span className="text-3xl font-bold md:text-5xl">
              {formatCurrency(estimate.low)}
            </span>
            <span className="text-xl font-semibold text-primary-500 md:text-2xl">
              – {formatCurrency(estimate.high)}
            </span>
          </div>
          <p className="mt-2 text-sm text-primary-900/80">
            Based on typical {projectType.replace(/-/g, " ")} projects we complete in{" "}
            {area
              .replace("-oh", "")
              .split("-")
              .map((w) => w[0].toUpperCase() + w.slice(1))
              .join(" ")}
            , OH. {areaMultipliers[area]?.note}.
          </p>

          {showAddons && estimate.addOnsHigh > 0 && (
            <div className="mt-4 border-t border-primary-200 pt-4 text-sm text-primary-900/80">
              <div className="flex justify-between gap-4">
                <span>Base {projectType.replace(/-/g, " ")}</span>
                <span className="font-semibold text-primary-900">
                  {formatCurrency(estimate.baseLow)} – {formatCurrency(estimate.baseHigh)}
                </span>
              </div>
              <div className="mt-1 flex justify-between gap-4">
                <span>Add-ons</span>
                <span className="font-semibold text-primary-900">
                  +{formatCurrency(estimate.addOnsLow)} – {formatCurrency(estimate.addOnsHigh)}
                </span>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contact-us"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Get an Exact Quote
            </Button>
            <Button
              href={`tel:${businessConfig.phoneRaw}`}
              variant="outline"
              size="lg"
              icon={<Phone className="h-5 w-5" />}
            >
              Call {businessConfig.phone}
            </Button>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 flex gap-2 rounded-xl border border-border bg-surface p-4">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
        <p className="text-xs leading-relaxed text-muted">
          <strong className="text-foreground">This is an estimate, not a quote.</strong>{" "}
          Every home is different. Exact pricing depends on paint grade, trim complexity,
          number of stories, accessibility, and specific prep requirements we can only
          determine on site. For a real written quote, schedule a free walk-through by
          calling{" "}
          <Link href="/contact-us" className="font-semibold text-primary-600 hover:underline">
            {businessConfig.phone}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
