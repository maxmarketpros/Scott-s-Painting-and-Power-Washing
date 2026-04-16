import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/structured-data";
import { ArrowRight, MapPin, PaintBucket, DollarSign, Home, Calendar } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Painting FAQ Columbus OH | Costs, Timing & Local Answers",
  description:
    "Everything Columbus OH homeowners ask us before hiring a painter — pricing, prep, paint brands, historic districts, HOAs, timing, and warranties. From Scott's Painting.",
  path: "/painting-faq-columbus-oh",
});

// Columbus-specific FAQs — unique content, not shared with other pages
const columbusFaqs = [
  // Pricing
  {
    id: "clb-faq-price-interior",
    question: "How much does interior painting cost in Columbus, OH?",
    answer:
      "For a standard 2,000 sq ft Columbus home, interior painting typically runs between $4,500 and $8,500 depending on ceiling height, trim complexity, color changes, and whether plaster repair is needed. Clintonville and German Village homes often come in higher because of settled plaster, ornate moldings, and the extra prep century-old walls require. Pickerington or Grove City builder-grade homes usually come in at the lower end. We provide written, itemized estimates after an in-person walkthrough.",
  },
  {
    id: "clb-faq-price-exterior",
    question: "How much does exterior painting cost for a Columbus house?",
    answer:
      "Exterior painting in Columbus ranges roughly $5,500 to $18,000+ depending on home size, surface type (vinyl, wood, brick, aluminum, stucco), number of stories, and condition. A 2,500 sq ft two-story colonial in Worthington Hills in sound condition typically runs $7,500–$12,000 with premium paint and proper prep. Historic Victorians in Clintonville or German Village can reach $15,000–$25,000 with multi-color schemes and lead-safe prep.",
  },
  {
    id: "clb-faq-price-powerwash",
    question: "What's the typical cost for power washing in Columbus?",
    answer:
      "Most Columbus single-family homes run $325 to $625 for a full exterior soft wash including siding, soffits, fascia, and one concrete surface (driveway or sidewalk). Add $150–$300 for a pool deck, patio, or detached garage. Historic brick homes require masonry-safe soft washing with biocide treatment, which adds $75–$150 to protect soft-fired brick and mortar joints.",
  },
  {
    id: "clb-faq-cabinet-price",
    question: "What does cabinet painting cost in Columbus?",
    answer:
      "Cabinet painting in Columbus typically runs $2,800 to $5,500 for a standard 30-door kitchen, depending on cabinet material, color, hardware swap-out, and finish grade. We remove doors and drawer fronts, spray them in our dust-free shop booth using cabinet-rated enamel, and reinstall with new hinges if requested. Turnaround is usually 5–7 working days.",
  },

  // Historic & older homes
  {
    id: "clb-faq-historic-district",
    question: "Do you work in Columbus historic districts like German Village and Victorian Village?",
    answer:
      "Yes, regularly. Both German Village Society and Victorian Village Commission require specific paint color approvals and surface treatments. We've completed dozens of projects that passed review. We gather the required color chips, take before-photos for submission, coordinate inspections, and use breathable masonry coatings on historic brick so your project stays compliant and your building stays healthy.",
  },
  {
    id: "clb-faq-lead-paint",
    question: "Do you handle lead paint in older Columbus homes?",
    answer:
      "Yes. Every home built before 1978 in Columbus is assumed to contain lead paint until a test proves otherwise — and most homes in Olde Towne East, German Village, Hilltop, Clintonville, and Franklinton were built well before that. Our painters are EPA Lead-Safe Renovator (RRP) certified. We follow full containment protocols, use HEPA cleanup, and document the process. It's federal law and it protects your family.",
  },
  {
    id: "clb-faq-plaster-walls",
    question: "Can you paint over old plaster walls in Columbus century homes?",
    answer:
      "Absolutely — most of the homes we paint in Clintonville, Victorian Village, and Olde Towne East have original plaster. We skim-coat cracked areas, repair settlement cracks with mesh tape and joint compound, spot-prime repairs with a bonding primer, and apply two finish coats. Plaster takes paint beautifully when it's prepped right; it's just more labor-intensive than drywall.",
  },
  {
    id: "clb-faq-brick-painting",
    question: "Should I paint brick on my Columbus home?",
    answer:
      "It depends on the brick's condition. Soft-fired brick on century Victorians and Italianates near Schiller Park often shouldn't be painted — trapped moisture causes spalling and permanent damage. Harder modern brick (1970s onward) can be painted with breathable mineral silicate coatings if you want a change. We walk through the pros and cons during the estimate so you make an informed decision. Painting brick is essentially permanent.",
  },

  // HOA & suburbs
  {
    id: "clb-faq-hoa",
    question: "Can you work with HOA color restrictions in Columbus suburbs?",
    answer:
      "Yes. We regularly submit color chips and contractor insurance certificates to HOAs in Upper Arlington, New Albany, Dublin, Westerville, Worthington, and Grove City communities. We handle the paperwork and wait for written approval before scheduling paint dates, so your project doesn't stall in review or trigger a covenant violation.",
  },
  {
    id: "clb-faq-vinyl-siding",
    question: "Can you paint vinyl siding on Columbus suburban homes?",
    answer:
      "Yes, with vinyl-safe coatings. Standard latex paint causes thermal expansion warping on vinyl in a single Ohio summer. We stock vinyl-safe paint lines (Sherwin-Williams VinylSafe, Benjamin Moore Regal Select Exterior in vinyl-safe colors) formulated to reflect heat and flex with the panels. Done right, painted vinyl in Hilliard, Reynoldsburg, or Grove City lasts 7–10 years.",
  },

  // Timing & scheduling
  {
    id: "clb-faq-when-paint",
    question: "When is the best time of year to paint a house in Columbus?",
    answer:
      "For exterior work in Columbus, the ideal window is mid-April through early November when surface temperatures are between 50°F and 85°F. Late spring and early fall are especially reliable. Interior work happens year-round since we control indoor conditions with HVAC. We typically book exteriors 4–8 weeks out in peak season (May–August), so plan ahead if you want a specific window.",
  },
  {
    id: "clb-faq-how-long",
    question: "How long does a typical Columbus painting project take?",
    answer:
      "Interior: A typical 2,000 sq ft Columbus home interior repaint takes 3–6 working days with a 2-person crew. Exterior: A similar home takes 5–8 working days including pressure washing, prep, primer, and two finish coats. Historic homes with extensive carpentry repairs or multi-color schemes can stretch to 2–3 weeks. We provide a day-by-day schedule at contract signing.",
  },
  {
    id: "clb-faq-booking-lead",
    question: "How far in advance should I book a Columbus painter?",
    answer:
      "For exterior work between May and September, 6–10 weeks of lead time is typical. April and October–November book a bit less tightly. Interior work can usually be scheduled within 2–4 weeks year-round. If you're targeting specific dates around a move, birthday party, or home sale, call us as early as possible — (614) 809-9730.",
  },

  // Process & crew
  {
    id: "clb-faq-crew",
    question: "Will the same crew be on my Columbus job every day?",
    answer:
      "Yes. We run W-2 employee crews, not rotating subcontractors. You'll see the same lead painter and team each day until the project is complete, with one named project manager as your point of contact from estimate through final walkthrough.",
  },
  {
    id: "clb-faq-insurance",
    question: "Are you insured for work in Columbus?",
    answer:
      "Yes. We carry full general liability and workers' compensation coverage, and we provide certificates of insurance on request. We can also list your HOA or property management company as an additional insured, which is standard for access to Muirfield Village, New Albany Country Club, and similar gated Columbus-area communities.",
  },
  {
    id: "clb-faq-warranty",
    question: "What warranty do you offer on Columbus painting projects?",
    answer:
      "Our exterior work comes with a 3-year workmanship warranty against peeling, blistering, and excessive fading on properly-prepped surfaces. Interior work carries a 2-year warranty. We also honor manufacturer warranties on Sherwin-Williams and Benjamin Moore paints, which typically extend 10–25 years depending on product line. Warranty details are included in every contract in writing.",
  },

  // Paint brands
  {
    id: "clb-faq-brands",
    question: "What paint brands do you use on Columbus homes?",
    answer:
      "We primarily use Sherwin-Williams and Benjamin Moore. For Columbus exteriors, our go-to is Sherwin-Williams Emerald for top-tier durability in freeze-thaw conditions, with Duration as a mid-tier option. Interior work typically uses Sherwin-Williams Duration Home or Benjamin Moore Regal Select. We can also match specific products you prefer — just let us know at the estimate.",
  },
  {
    id: "clb-faq-color-help",
    question: "Can you help me choose paint colors for my Columbus home?",
    answer:
      "Yes, free color consultation is included with every estimate. We've specified palettes for hundreds of Columbus homes and know which colors read well in Central Ohio's light, coordinate with common brick tones, meet historic district guidelines, and hold up against our UV exposure. For complex projects we can also arrange a paid color consultation with a certified designer.",
  },
];

export default function PaintingFAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Painting FAQ Columbus OH", href: "/painting-faq-columbus-oh" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQPageSchema(columbusFaqs)),
        }}
      />

      <PageHero
        heading="Painting FAQ — Columbus, OH"
        subtitle="Every question Columbus homeowners ask us before signing a painting contract — answered in plain English by a crew that's been working this city for 25+ years."
        imageKey="service-1-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Painting FAQ Columbus OH" },
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
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Columbus Painting Guide"
              heading="Straight Answers About Painting in Columbus, OH"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                After 25+ years of painting in Columbus — from German Village rowhouses to
                New Albany Georgians, Clintonville bungalows to Hilliard two-stories — we've
                heard every question a homeowner can ask. This page collects the most common
                ones in one place, with honest, specific answers tailored to Columbus homes,
                neighborhoods, and conditions.
              </p>
              <p>
                If you're trying to budget a project, understand what goes into a quote, or
                figure out whether to paint now or wait, start here. When you're ready for a
                real number on your specific home, call{" "}
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="font-semibold text-primary-600 hover:underline"
                >
                  {businessConfig.phone}
                </a>{" "}
                or{" "}
                <Link
                  href="/contact-us"
                  className="font-semibold text-primary-600 hover:underline"
                >
                  request a free estimate
                </Link>
                .
              </p>
            </div>

            {/* Quick category jump */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { icon: DollarSign, label: "Pricing Questions", count: 4 },
                { icon: Home, label: "Historic & Older Homes", count: 4 },
                { icon: MapPin, label: "HOAs & Suburbs", count: 2 },
                { icon: Calendar, label: "Timing & Process", count: 5 },
                { icon: PaintBucket, label: "Brands & Colors", count: 2 },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <cat.icon className="h-5 w-5 text-primary-500" />
                  <span className="text-sm font-semibold text-foreground">
                    {cat.label}
                  </span>
                  <span className="ml-auto text-xs text-muted">
                    {cat.count} Q&apos;s
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* All FAQs */}
      <FAQSection
        eyebrow="Columbus Painting Questions"
        heading="17 Most Common Questions From Columbus Homeowners"
        subtitle="Click any question to expand the answer. Most cover pricing, historic-home specifics, HOA rules, process, and paint selection."
        items={columbusFaqs}
        bgColor="surface"
      />

      {/* Related local resources */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="More Columbus Resources"
              heading="Helpful Next Steps"
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <Link
                href="/areas/columbus-oh"
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
              >
                <MapPin className="h-6 w-6 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-600">
                  Columbus Area Page
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Neighborhoods we serve, local landmarks, and climate considerations
                  specific to Columbus.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  View Page <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/painting-cost-calculator"
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
              >
                <DollarSign className="h-6 w-6 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-600">
                  Cost Calculator
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Get a ballpark price for your Columbus project in 30 seconds based on
                  size and service type.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Try It <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/blog/house-painting-cost-ohio"
                className="group rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg"
              >
                <PaintBucket className="h-6 w-6 text-primary-500" />
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary-600">
                  Full Pricing Guide
                </h3>
                <p className="mt-2 text-sm text-muted">
                  2026 Ohio house painting costs broken down by home size, paint grade,
                  and prep level.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        heading="Still Have a Columbus Painting Question?"
        text="We're happy to answer any question not covered here. Call us or send a message — a real person will get back to you the same day."
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
