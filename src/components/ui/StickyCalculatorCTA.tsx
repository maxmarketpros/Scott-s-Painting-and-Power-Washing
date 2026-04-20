"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calculator } from "lucide-react";

// Sticky floating CTA that deep-links to the painting cost calculator.
// Mobile: centered pill near the bottom of the viewport.
// Desktop: pill anchored to the bottom-right corner.
// Hidden on the calculator page itself to avoid redundancy.

const CALCULATOR_PATH = "/painting-cost-calculator";

export function StickyCalculatorCTA() {
  const pathname = usePathname();
  const normalized = pathname?.replace(/\/+$/, "") ?? "";
  if (normalized === CALCULATOR_PATH) return null;

  return (
    <Link
      href="/painting-cost-calculator/#calculator"
      aria-label="Jump to the painting cost calculator"
      className={[
        "fixed z-40 inline-flex items-center gap-2 whitespace-nowrap rounded-full",
        "bg-primary-600 px-5 py-3 text-sm font-semibold text-white",
        "shadow-lg shadow-primary-600/30",
        "transition-transform transition-shadow duration-200",
        "hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2",
        // Mobile: centered pill
        "bottom-4 left-1/2 -translate-x-1/2",
        // Desktop: bottom-right pill
        "md:bottom-6 md:right-6 md:left-auto md:translate-x-0",
      ].join(" ")}
    >
      <Calculator className="h-4 w-4" aria-hidden="true" />
      <span>Cost Calculator</span>
    </Link>
  );
}
