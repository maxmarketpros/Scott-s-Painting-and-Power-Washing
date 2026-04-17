"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { businessConfig } from "@/config/business";

// ============================================================================
// Scott's stated rate: $1.50–$2.00 per square foot of PAINTED SURFACE —
// walls and siding, not home floor area. The user picks their home size
// (what they actually know), and the calculator converts that to an
// estimated paintable area, then applies Scott's rate directly. The
// conversion is shown in the estimate panel so nothing is hidden.
// ============================================================================

const RATE_LOW = 1.5;
const RATE_HIGH = 2.0;

// Interior wall area per sqft of home floor (walls only — ceilings are an
// add-on). Based on typical 9ft ceilings + typical room layouts.
const INTERIOR_WALL_MULTIPLIER = 1.2;

// Exterior siding area per sqft of home footprint, by story count.
const EXTERIOR_SIDING_MULTIPLIER: Record<string, number> = {
  "1": 1.2,
  "2": 1.8,
  "3": 2.3,
};

// Full-house bundle discount (interior + exterior done together).
const BUNDLE_DISCOUNT = 0.1;

type HomeSize = "small" | "medium" | "large" | "xlarge" | "xxlarge";

const HOME_SIZE_OPTIONS: { value: HomeSize; label: string; sqft: number }[] = [
  { value: "small", label: "Small (~1,000 sqft) — condo or starter home", sqft: 1000 },
  { value: "medium", label: "Medium (~1,500 sqft) — townhouse or small home", sqft: 1500 },
  { value: "large", label: "Large (~2,500 sqft) — typical 3–4 bedroom", sqft: 2500 },
  { value: "xlarge", label: "X-Large (~3,500 sqft) — executive home", sqft: 3500 },
  { value: "xxlarge", label: "4,500+ sqft — estate", sqft: 4500 },
];

// Flat (non-paintable-sqft) project types use their own size labels + prices.
type FlatProject = "cabinet-painting" | "power-washing" | "deck-staining";

const flatPricing: Record<
  FlatProject,
  {
    sizeLabel: string;
    sizes: { value: string; label: string; low: number; high: number }[];
  }
> = {
  "cabinet-painting": {
    sizeLabel: "Kitchen Size",
    sizes: [
      { value: "small", label: "Small kitchen (15–20 doors)", low: 1800, high: 2800 },
      { value: "medium", label: "Standard (25–35 doors)", low: 2800, high: 4200 },
      { value: "large", label: "Large (40–50 doors)", low: 4200, high: 5800 },
      { value: "xlarge", label: "Custom / XL kitchen", low: 5800, high: 8500 },
      { value: "xxlarge", label: "Oversized + island", low: 8500, high: 12000 },
    ],
  },
  "power-washing": {
    sizeLabel: "Home Size",
    sizes: [
      { value: "small", label: "Small home (<1,500 sqft)", low: 225, high: 400 },
      { value: "medium", label: "Medium (~2,000 sqft)", low: 325, high: 525 },
      { value: "large", label: "Large (~3,000 sqft)", low: 475, high: 750 },
      { value: "xlarge", label: "X-Large (~4,000 sqft)", low: 650, high: 1100 },
      { value: "xxlarge", label: "Estate (~5,000+ sqft)", low: 900, high: 1600 },
    ],
  },
  "deck-staining": {
    sizeLabel: "Deck Size",
    sizes: [
      { value: "small", label: "Small deck (<200 sqft)", low: 450, high: 900 },
      { value: "medium", label: "Standard (~300 sqft)", low: 750, high: 1400 },
      { value: "large", label: "Large (~500 sqft)", low: 1200, high: 2200 },
      { value: "xlarge", label: "Wraparound / Multi-level", low: 1800, high: 3200 },
      { value: "xxlarge", label: "Estate deck", low: 2800, high: 5000 },
    ],
  },
};

// Area multipliers — Columbus is baseline.
const areaMultipliers: Record<string, { mult: number; note: string }> = {
  "columbus-oh": { mult: 1.0, note: "Columbus baseline" },
  "grove-city-oh": { mult: 0.95, note: "Efficient suburban routing" },
  "pickerington-oh": { mult: 0.95, note: "Our home base — lower overhead" },
  "pataskala-oh": { mult: 0.92, note: "Rural routing discount" },
  "newark-oh": { mult: 1.05, note: "Historic brick/masonry premium" },
  "lancaster-oh": { mult: 1.1, note: "Historic district premium" },
};

// Condition modifiers.
const conditionModifiers: Record<
  string,
  { mult: number; label: string; desc: string }
> = {
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

const PAINTING_SERVICES = new Set([
  "interior-painting",
  "exterior-painting",
  "house-painting",
]);
const STORIES_RELEVANT = new Set(["exterior-painting", "house-painting"]);

// Add-on rates.
const DOOR_COST = 125;
const GUTTERS_COST = 500;
const CEILING_PER_SQFT = 1.0;
const TRIM_PERCENT = 0.15;

function formatCurrency(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

function cityLabel(area: string) {
  return area
    .replace("-oh", "")
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

export function CostCalculator() {
  const [projectType, setProjectType] = useState("interior-painting");
  const [homeSize, setHomeSize] = useState<HomeSize>("large");
  const [stories, setStories] = useState("2");
  const [flatSize, setFlatSize] = useState("large");
  const [area, setArea] = useState("columbus-oh");
  const [condition, setCondition] = useState("fair");

  // Add-ons
  const [doorsCount, setDoorsCount] = useState(0);
  const [addCeilings, setAddCeilings] = useState(false);
  const [addGutters, setAddGutters] = useState(false);
  const [addTrim, setAddTrim] = useState(false);

  const isPainting = PAINTING_SERVICES.has(projectType);
  const showStories = STORIES_RELEVANT.has(projectType);
  const showAddons = isPainting;

  const estimate = useMemo(() => {
    const areaMod = areaMultipliers[area]?.mult ?? 1.0;
    const condMod = conditionModifiers[condition]?.mult ?? 1.0;

    let paintableSqft = 0;
    let baseLow = 0;
    let baseHigh = 0;
    let bundleDiscountApplied = false;

    if (isPainting) {
      const homeFloor =
        HOME_SIZE_OPTIONS.find((o) => o.value === homeSize)?.sqft ?? 2500;
      const interiorWalls = homeFloor * INTERIOR_WALL_MULTIPLIER;
      const exteriorSiding =
        homeFloor * (EXTERIOR_SIDING_MULTIPLIER[stories] ?? 1.8);

      if (projectType === "interior-painting") {
        paintableSqft = interiorWalls;
      } else if (projectType === "exterior-painting") {
        paintableSqft = exteriorSiding;
      } else {
        paintableSqft = interiorWalls + exteriorSiding;
      }

      baseLow = paintableSqft * RATE_LOW;
      baseHigh = paintableSqft * RATE_HIGH;

      if (projectType === "house-painting") {
        baseLow *= 1 - BUNDLE_DISCOUNT;
        baseHigh *= 1 - BUNDLE_DISCOUNT;
        bundleDiscountApplied = true;
      }

      baseLow *= areaMod * condMod;
      baseHigh *= areaMod * condMod;
    } else {
      const flat = flatPricing[projectType as FlatProject];
      const size = flat?.sizes.find((s) => s.value === flatSize);
      if (!size) return null;
      baseLow = size.low * areaMod * condMod;
      baseHigh = size.high * areaMod * condMod;
    }

    // Add-ons
    let addOnsLow = 0;
    let addOnsHigh = 0;
    if (showAddons) {
      if (doorsCount > 0) {
        const doorsTotal = doorsCount * DOOR_COST;
        addOnsLow += doorsTotal;
        addOnsHigh += doorsTotal;
      }
      if (addCeilings) {
        const homeFloor =
          HOME_SIZE_OPTIONS.find((o) => o.value === homeSize)?.sqft ?? 1500;
        const ceilingMid = homeFloor * CEILING_PER_SQFT;
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
      paintableSqft,
      bundleDiscountApplied,
    };
  }, [
    projectType,
    homeSize,
    stories,
    flatSize,
    area,
    condition,
    doorsCount,
    addCeilings,
    addGutters,
    addTrim,
    isPainting,
    showAddons,
  ]);

  const flatConfig = !isPainting
    ? flatPricing[projectType as FlatProject]
    : null;

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
        Scott charges{" "}
        <strong className="text-foreground">
          $1.50–$2.00 per square foot of painted surface
        </strong>{" "}
        — the actual walls and siding, not your home&apos;s floor size. Tell us your
        home size below and we&apos;ll estimate the paintable area, then let you
        stack on extras like doors, ceilings, gutters, and trim.
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

        {/* Size — dynamic by project type */}
        {isPainting ? (
          <div>
            <label
              htmlFor="home-size"
              className="text-sm font-semibold text-foreground"
            >
              Home Size
            </label>
            <select
              id="home-size"
              value={homeSize}
              onChange={(e) => setHomeSize(e.target.value as HomeSize)}
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            >
              {HOME_SIZE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label
              htmlFor="flat-size"
              className="text-sm font-semibold text-foreground"
            >
              {flatConfig?.sizeLabel ?? "Size"}
            </label>
            <select
              id="flat-size"
              value={flatSize}
              onChange={(e) => setFlatSize(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            >
              {flatConfig?.sizes.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Stories — only for exterior / full house */}
        {showStories && (
          <div>
            <label
              htmlFor="stories"
              className="text-sm font-semibold text-foreground"
            >
              Number of Stories
            </label>
            <select
              id="stories"
              value={stories}
              onChange={(e) => setStories(e.target.value)}
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            >
              <option value="1">1 story</option>
              <option value="2">2 stories</option>
              <option value="3">3 stories</option>
            </select>
            <p className="mt-1 text-xs text-muted">
              Taller homes have more siding per sqft of footprint.
            </p>
          </div>
        )}

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

      {/* Add-Ons — paint projects only */}
      {showAddons && (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <div className="text-sm font-semibold text-foreground">
            Add-Ons{" "}
            <span className="font-normal text-muted">
              (estimated pricing — not final)
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            The base rate covers walls and siding only. Scott prices these
            separately, so check anything else you want painted to see how it
            stacks onto the estimate.
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
                    setDoorsCount(
                      Math.max(0, Math.min(50, Number(e.target.value) || 0))
                    )
                  }
                  className="w-24 rounded-lg border border-border bg-white px-3 py-2 text-base text-foreground focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
                <span className="text-xs text-muted">
                  est. ~${DOOR_COST} per door (both sides)
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
                  est. ~${CEILING_PER_SQFT.toFixed(2)}/sqft of home
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
                  est. ~${GUTTERS_COST} flat (typical lot)
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
                  est. +{Math.round(TRIM_PERCENT * 100)}% of base
                </div>
              </div>
            </label>
          </div>
          <p className="mt-4 text-xs italic text-muted">
            Add-on figures are estimates, not concrete pricing. Scott confirms
            the exact cost on the walk-through.
          </p>
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
            {cityLabel(area)}, OH. {areaMultipliers[area]?.note}.
          </p>

          {/* Painting breakdown */}
          {isPainting && estimate.paintableSqft > 0 && (
            <div className="mt-4 space-y-1 border-t border-primary-200 pt-4 text-sm text-primary-900/80">
              <div className="flex justify-between gap-4">
                <span>Estimated paintable area</span>
                <span className="font-semibold text-primary-900">
                  ~{Math.round(estimate.paintableSqft).toLocaleString()} sqft
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Scott&apos;s rate</span>
                <span className="font-semibold text-primary-900">
                  ${RATE_LOW.toFixed(2)}–${RATE_HIGH.toFixed(2)}/sqft
                </span>
              </div>
              {estimate.bundleDiscountApplied && (
                <div className="flex justify-between gap-4">
                  <span>Full-house bundle</span>
                  <span className="font-semibold text-primary-900">
                    −{Math.round(BUNDLE_DISCOUNT * 100)}%
                  </span>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <span>Base</span>
                <span className="font-semibold text-primary-900">
                  {formatCurrency(estimate.baseLow)} –{" "}
                  {formatCurrency(estimate.baseHigh)}
                </span>
              </div>
              {estimate.addOnsHigh > 0 && (
                <div className="flex justify-between gap-4">
                  <span>Add-ons (est.)</span>
                  <span className="font-semibold text-primary-900">
                    +{formatCurrency(estimate.addOnsLow)} –{" "}
                    {formatCurrency(estimate.addOnsHigh)}
                  </span>
                </div>
              )}
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
          Every home is different. Exact pricing depends on paint grade, trim
          complexity, accessibility, and specific prep requirements we can only
          determine on site. For a real written quote, schedule a free
          walk-through by calling{" "}
          <Link
            href="/contact-us"
            className="font-semibold text-primary-600 hover:underline"
          >
            {businessConfig.phone}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
