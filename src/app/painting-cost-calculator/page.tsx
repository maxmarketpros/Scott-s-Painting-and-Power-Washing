import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight, DollarSign, Clock, Shield, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Painting Cost Calculator Ohio | Instant Estimate",
  description:
    "Use our Central Ohio painting cost calculator to estimate interior, exterior, cabinet, power washing, and deck staining prices in Columbus, Grove City, Pataskala, Newark, Lancaster & Pickerington.",
  path: "/painting-cost-calculator",
});

export default function PaintingCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Painting Cost Calculator", href: "/painting-cost-calculator" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Painting Cost Calculator"
        subtitle="Instant pricing estimates for painting, power washing, and deck staining projects across Central Ohio — based on real Scott's Painting quote data."
        imageKey="service-13-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Painting Cost Calculator" },
        ]}
        primaryCta={{ label: "Get a Free Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Intro */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Cost Calculator"
              heading="How Much Will Your Painting Project Cost?"
            />
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Scott&apos;s base rate for interior and exterior painting runs{" "}
              <strong className="text-foreground">
                $1.50–$2.00 per square foot of painted surface
              </strong>{" "}
              — the actual walls and siding getting paint, not the home&apos;s floor
              size. Doors, ceilings, gutters, trim, and molding are priced
              separately. This calculator uses those same numbers across Columbus,
              Grove City, Pickerington, Pataskala, Newark, and Lancaster — no
              national averages, no ballpark guesses.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Pick your home size and project, then check off any add-ons — the
              estimate updates live and we handle the conversion from home size to
              paintable area for you. For an exact number on your home,{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-primary-600 hover:underline"
              >
                request a free walk-through
              </Link>
              .
            </p>
          </div>

          {/* Calculator */}
          <div className="mx-auto mt-12 max-w-4xl">
            <CostCalculator />
          </div>
        </Container>
      </section>

      {/* Why pricing varies */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Pricing Factors"
              heading="What Drives Painting Costs in Central Ohio"
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <DollarSign className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Paint Grade
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Jumping from a builder-grade $35 gallon to a top-tier $90 gallon
                  (Sherwin-Williams Emerald) can add $400–$800 to a typical job — but
                  doubles the lifespan of the coating in Ohio&apos;s freeze-thaw climate.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <Shield className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Prep Work
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Scraping, sanding, caulking, and spot-priming account for 40–60% of
                  total labor. Homes in &quot;needs prep&quot; condition can push a quote
                  20% higher than a sound home of the same size.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <Clock className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Number of Stories
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Two-story and three-story exterior work requires extension ladders,
                  scaffolding, and slower labor output — adding 15–25% to per-square-foot
                  cost compared to a single-story ranch.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <CheckCircle2 className="h-8 w-8 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  Location & Access
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Historic Lancaster and Newark brick homes carry a small premium for
                  masonry-safe products. Rural Pataskala jobs get slight routing
                  discounts. Every city page in our service area notes local factors.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included in every quote */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="What's Included"
              heading="Every Scott's Painting Quote Includes"
              align="center"
            />
            <ul className="mt-10 space-y-4">
              {[
                "Written, itemized line-item estimate (no vague total)",
                "All materials — paint, primers, caulk, patching compound, drop cloths",
                "Full prep work appropriate to your home's condition",
                "Two finish coats on all surfaces (three on extreme color changes)",
                "Daily cleanup and end-of-job walkthrough",
                "3-year exterior / 2-year interior workmanship warranty",
                "Manufacturer paint warranty (Sherwin-Williams & Benjamin Moore)",
                "Licensed, insured, W-2 employee crews",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" />
                  <span className="text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Related resources */}
      <section className="section-padding bg-surface">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Deeper Reading"
              heading="Pricing Resources"
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/house-painting-cost-ohio"
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary-600">
                  Full Ohio Pricing Guide (2026)
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Home size tables, paint brand tiers, prep work cost impact, DIY vs pro
                  comparison, and cost-saving tips without cutting quality.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/blog/exterior-vs-interior-cost"
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary-600">
                  Exterior vs Interior Cost Breakdown
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  Why exterior painting usually costs more per square foot, how to budget
                  each project, and when bundling saves money.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Want an Exact Number?"
        text="Estimates are helpful — real quotes are better. Call Scott's Painting at (614) 809-9730 or request a free on-site walk-through. We'll measure every wall and send you a written, itemized quote the same day."
        primaryCta={{ label: "Get a Free Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      <QuoteSection />
    </>
  );
}
