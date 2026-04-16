import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SplitSection } from "@/components/sections/SplitSection";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ServiceScopeSection } from "@/components/sections/ServiceScopeSection";
import { TopicCardGrid } from "@/components/sections/TopicCardGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { FeatureList } from "@/components/sections/FeatureList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/config/services";
import { businessConfig } from "@/config/business";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { ArrowRight, Phone } from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const displayArea = businessConfig.displayArea;
const ctaProps = {
  primary: { label: "Get a Quote", href: "/contact-us" },
  secondary: { label: `Call ${businessConfig.phone}`, href: `tel:${businessConfig.phoneRaw}` },
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const h1 = service.h1Override || `${service.title} in ${displayArea}`;
  return generatePageMetadata({
    title: h1,
    description: service.excerpt,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const defaultFeatureListItems = [
    {
      title: "Quality You Can See",
      description:
        "Every project showcases our commitment to precision and craftsmanship. We take pride in delivering work that stands out for its quality and attention to detail.",
    },
    {
      title: "Results That Last",
      description:
        "Our work is built to last. We use premium materials and proven techniques to ensure your investment delivers value for years to come.",
    },
  ];
  const featureItems = service.featureListItems ?? defaultFeatureListItems;
  const featureListItems = service.detailImages.map((imgKey, i) => ({
    title: featureItems[i]?.title ?? defaultFeatureListItems[i]?.title ?? "",
    description:
      featureItems[i]?.description ??
      defaultFeatureListItems[i]?.description ??
      "",
    imageKey: imgKey,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
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
            ])
          ),
        }}
      />

      {/* Page Hero — H1 includes service area */}
      <PageHero
        heading={service.h1Override || `${service.title} in ${displayArea}`}
        subtitle={service.excerpt}
        imageKey={service.heroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* Overview */}
      <SplitSection
        imageKey={service.cardImage}
        imagePosition="right"
        imageAspect="4/3"
      >
        <SectionHeading
          eyebrow={service.overviewEyebrow ?? "Overview"}
          heading={
            service.overviewHeading ?? `Why Choose Our ${service.title}`
          }
        />
        {service.description.map((p, i) => (
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

      {/* Benefits */}
      <BenefitGrid
        benefits={service.benefits}
        eyebrow={service.benefitsEyebrow ?? "What Sets Us Apart"}
        heading={service.benefitsHeading ?? "Key Benefits"}
        subtitle={
          service.benefitsSubtitle ??
          `Here's what makes our ${service.title.toLowerCase()} stand out from the rest.`
        }
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* Feature showcase — alternating rows */}
      <FeatureList features={featureListItems} />

      {/* SEO Topic Section A — above Complete Service Scope */}
      <TopicCardGrid
        eyebrow={service.topicSectionA.eyebrow}
        heading={service.topicSectionA.heading}
        subtitle={service.topicSectionA.subtitle}
        items={service.topicSectionA.items}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* What's Included */}
      <ServiceScopeSection
        items={service.features}
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* SEO Topic Section B — below Complete Service Scope */}
      <TopicCardGrid
        eyebrow={service.topicSectionB.eyebrow}
        heading={service.topicSectionB.heading}
        subtitle={service.topicSectionB.subtitle}
        items={service.topicSectionB.items}
        bgColor="surface"
        primaryCta={ctaProps.primary}
        secondaryCta={ctaProps.secondary}
      />

      {/* FAQ — service-specific (6 questions now) */}
      <FAQSection
        eyebrow={service.faqEyebrow ?? "Common Questions"}
        heading={service.faqHeading ?? `${service.title} FAQ`}
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
