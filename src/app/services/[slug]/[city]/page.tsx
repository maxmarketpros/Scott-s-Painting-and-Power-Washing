import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ServiceScopeSection } from "@/components/sections/ServiceScopeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/config/services";
import { cityServices } from "@/config/city-services";
import { businessConfig } from "@/config/business";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { ArrowRight, Phone } from "lucide-react";

interface CityServicePageProps {
  params: Promise<{ slug: string; city: string }>;
}

const ctaProps = {
  primary: { label: "Get a Quote", href: "/contact-us" },
  secondary: {
    label: `Call ${businessConfig.phone}`,
    href: `tel:${businessConfig.phoneRaw}`,
  },
};

export function generateStaticParams() {
  return cityServices.map((cs) => ({
    slug: cs.serviceSlug,
    city: cs.citySlug,
  }));
}

export async function generateMetadata({
  params,
}: CityServicePageProps): Promise<Metadata> {
  const { slug, city } = await params;
  const cs = cityServices.find(
    (c) => c.serviceSlug === slug && c.citySlug === city
  );
  if (!cs) return {};

  return generatePageMetadata({
    title: cs.metaTitle,
    description: cs.metaDescription,
    path: `/services/${cs.serviceSlug}/${cs.citySlug}`,
  });
}

export default async function CityServicePage({
  params,
}: CityServicePageProps) {
  const { slug, city } = await params;

  const cs = cityServices.find(
    (c) => c.serviceSlug === slug && c.citySlug === city
  );
  if (!cs) {
    notFound();
  }

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${cs.cityName}, ${cs.state}`,
    description: cs.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: cs.cityName,
      addressRegion: cs.state,
    },
    url: `${siteConfig.url}/services/${cs.serviceSlug}/${cs.citySlug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
              {
                name: `${cs.cityName}, ${cs.state}`,
                href: `/services/${cs.serviceSlug}/${cs.citySlug}`,
              },
            ])
          ),
        }}
      />

      {/* Page Hero — city-specific H1 */}
      <PageHero
        heading={cs.h1}
        subtitle={cs.metaDescription}
        imageKey={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title, href: `/services/${service.slug}` },
          { label: `${cs.cityName}, ${cs.state}` },
        ]}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* City-specific intro copy */}
      <SplitSection
        imageKey={service.cardImage}
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow={`${cs.cityName}, ${cs.state}`}
          heading={`Why Choose Our ${service.title}`}
        />
        {cs.introParapraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-base leading-relaxed text-muted md:text-lg"
          >
            {p}
          </p>
        ))}
        <div className="mt-6 flex flex-wrap gap-4">
          <Button
            href="/contact-us"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Get a Quote
          </Button>
          <Button
            href={`tel:${businessConfig.phoneRaw}`}
            variant="outline"
            icon={<Phone className="h-5 w-5" />}
          >
            {businessConfig.phone}
          </Button>
        </div>
      </SplitSection>

      {/* Benefits — from parent service */}
      <BenefitGrid
        benefits={service.benefits}
        eyebrow="What Sets Us Apart"
        heading="Key Benefits"
        subtitle={`Here's what makes our ${service.title.toLowerCase()} stand out from the rest.`}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* What's Included — from parent service */}
      <ServiceScopeSection
        items={service.features}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* FAQ — from parent service */}
      <FAQSection
        eyebrow="Common Questions"
        heading={`${service.title} FAQ`}
        faqKeys={service.faqKeys}
      />

      {/* CTA — service-specific */}
      <CTASection
        heading={service.ctaHeading}
        text={service.ctaText}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}
