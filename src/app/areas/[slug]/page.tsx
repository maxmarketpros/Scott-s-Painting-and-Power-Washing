import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { areas } from "@/config/areas";
import { services } from "@/config/services";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
} from "@/lib/structured-data";
import { ArrowRight, Phone, Thermometer, MapPin } from "lucide-react";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};

  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const areaLabel = area.type === "county" ? area.name : `${area.name}, OH`;
  const popularServices = services.filter((s) =>
    area.popularServices.includes(s.slug)
  );
  const placesList = area.neighborhoods || area.includedCities || [];
  const placesTitle = area.type === "county" ? "Cities We Serve" : "Neighborhoods We Paint";
  const faqItems = area.faqs.map((f, i) => ({
    id: `area-${area.slug}-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Areas", href: "/areas" },
              { name: areaLabel, href: `/areas/${area.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQPageSchema(faqItems)),
        }}
      />

      <PageHero
        heading={area.h1}
        subtitle={area.intro[0]}
        imageKey={area.heroImageKey}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/areas" },
          { label: areaLabel },
        ]}
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Intro Section — all intro paragraphs */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="About the Area"
              heading={`Your Trusted Painter in ${areaLabel}`}
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {area.intro.slice(1).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {area.landmarks.length > 0 && (
              <div className="mt-10 rounded-2xl border border-border bg-surface p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
                  <MapPin className="h-4 w-4" />
                  Local Landmarks We Know
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {area.landmarks.map((landmark) => (
                    <li key={landmark} className="text-base text-foreground">
                      • {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <BenefitGrid
        benefits={area.whyChooseUs}
        eyebrow="Why Choose Us"
        heading={`Why ${areaLabel} Homeowners Choose Scott's Painting`}
        subtitle={`Local knowledge and experience that makes a visible difference on every ${area.name} project.`}
        bgColor="surface"
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
        secondaryCta={{
          label: `Call ${businessConfig.phone}`,
          href: `tel:${businessConfig.phoneRaw}`,
        }}
      />

      {/* Popular Services in This Area */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Services"
            heading={`Popular Painting Services in ${areaLabel}`}
            subtitle={`Based on what ${area.name} homeowners request most often, these are our top services here.`}
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-white p-5 shadow-card transition-shadow hover:shadow-lg"
              >
                <span className="text-base font-semibold text-foreground group-hover:text-primary-600">
                  {service.title}
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Neighborhoods / Cities served */}
      {placesList.length > 0 && (
        <section className="section-padding bg-surface">
          <Container>
            <SectionHeading
              eyebrow={area.type === "county" ? "Cities" : "Neighborhoods"}
              heading={placesTitle}
              subtitle={
                area.type === "county"
                  ? `We work throughout ${area.name}, including these cities and communities.`
                  : `We've painted homes in every corner of ${area.name}. Here are some of the neighborhoods we serve most.`
              }
              align="center"
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {placesList.map((place) => (
                <div
                  key={place}
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-foreground"
                >
                  <MapPin className="mr-2 inline h-4 w-4 text-primary-500" />
                  {place}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Climate Notes */}
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary-100 bg-primary-50 p-8 md:p-12">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-primary-700">
              <Thermometer className="h-5 w-5" />
              Local Climate & Paint Considerations
            </div>
            <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
              Why {areaLabel} Homes Need a Specialist
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground-light md:text-lg">
              {area.climateNotes}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection
        eyebrow="Common Questions"
        heading={`${areaLabel} Painting FAQs`}
        subtitle={`Answers to the questions ${area.name} homeowners ask us most.`}
        items={faqItems}
        bgColor="surface"
      />

      <CTASection
        heading={`Ready to Start Your Project in ${areaLabel}?`}
        text={`Call ${businessConfig.phone} or request a free, no-obligation estimate. We'll schedule a walk-through, talk through options, and send you a written quote — no pressure.`}
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
