import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areas } from "@/config/areas";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { ArrowRight, MapPin, Landmark } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Areas",
  description:
    "Scott's Painting and Power Washing serves Central Ohio — Franklin, Licking, and Fairfield counties — including Columbus, Grove City, Pataskala, Newark, Lancaster, and Pickerington.",
  path: "/areas",
});

export default function AreasHubPage() {
  const cities = areas.filter((a) => a.type === "city");
  const counties = areas.filter((a) => a.type === "county");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Service Areas", href: "/areas" },
            ])
          ),
        }}
      />

      <PageHero
        heading="Our Service Areas"
        subtitle="Scott's Painting and Power Washing proudly serves Central Ohio — from our Pickerington home base out across Fairfield, Franklin, and Licking counties."
        imageKey="hero-home"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas" },
        ]}
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Cities */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Cities"
            heading="Cities We Serve"
            subtitle="Click any city to see local landmarks, neighborhoods, and the painting services that matter most there."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg md:p-8"
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
                  <MapPin className="h-4 w-4" />
                  {city.name}, OH
                </div>
                <h2 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary-600 md:text-2xl">
                  Painting & Power Washing in {city.name}
                </h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {city.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all group-hover:gap-3">
                  View {city.name} Page
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Counties */}
      <section className="section-padding bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Counties"
            heading="Counties We Serve"
            subtitle="Broader coverage across Central Ohio — each county page lists the cities we cover and the painting considerations specific to that region."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/areas/${county.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg md:p-8"
              >
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
                  <Landmark className="h-4 w-4" />
                  {county.name}
                </div>
                <h2 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary-600 md:text-2xl">
                  {county.name}, OH
                </h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {county.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all group-hover:gap-3">
                  View {county.name}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Don't See Your Area Listed?"
        text={`We work throughout Central Ohio and may still be able to help. Call ${businessConfig.phone} to confirm coverage for your neighborhood.`}
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      <QuoteSection />
    </>
  );
}
