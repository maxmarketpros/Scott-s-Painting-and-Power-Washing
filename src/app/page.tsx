import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { InfoBar } from "@/components/layout/InfoBar";
import { SplitSection } from "@/components/sections/SplitSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessGrid } from "@/components/sections/ProcessGrid";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ChecklistGrid } from "@/components/sections/ChecklistGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ChecklistItem } from "@/components/ui/ChecklistItem";
import { homepageContent } from "@/config/homepage";
import { homepageFaqKeys } from "@/config/faqs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "painting Fairfield County OH",
    "power washing Columbus OH",
    "house painting Central Ohio",
    "interior painting Pickerington",
    "exterior painting Ohio",
  ],
});

export default function HomePage() {
  const content = homepageContent;

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Info Bar */}
      <InfoBar />

      {/* About Preview */}
      <SplitSection
        imageKey={content.aboutPreview.image}
        imagePosition="right"
        badge={content.aboutPreview.badge}
        imageAspect="4/5"
      >
        <SectionHeading
          eyebrow={content.aboutPreview.eyebrow}
          heading={content.aboutPreview.heading}
        />
        <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
          {content.aboutPreview.paragraph}
        </p>
        <div className="mb-8 space-y-4">
          {content.aboutPreview.bullets.map((bullet, i) => (
            <div key={i}>
              <ChecklistItem text={bullet.title} className="font-semibold" />
              <p className="ml-8 mt-1 text-sm text-muted">
                {bullet.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            href="/contact-us"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Get a Quote
          </Button>
          <Button href="/about-us" variant="outline">
            Learn More
          </Button>
        </div>
      </SplitSection>

      {/* Services */}
      <ServiceGrid />

      {/* Standards */}
      <SplitSection
        imageKey={content.standards.image}
        imagePosition="left"
        badge={content.standards.badge}
        bgColor="surface"
        imageAspect="4/5"
      >
        <SectionHeading
          eyebrow={content.standards.eyebrow}
          heading={content.standards.heading}
        />
        {content.standards.paragraphs.map((p, i) => (
          <p key={i} className="mb-4 text-base leading-relaxed text-muted md:text-lg">
            {p}
          </p>
        ))}
        <ChecklistGrid
          items={content.standards.checklist}
          columns={2}
          className="mt-8"
        />
      </SplitSection>

      {/* Process */}
      <ProcessGrid
        eyebrow={content.process.eyebrow}
        heading={content.process.heading}
        subtitle={content.process.subtitle}
        bgColor="white"
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
        secondaryCta={{ label: "Call (614) 809-9730", href: "tel:+16148099730" }}
      />

      {/* Testimonials */}
      <TestimonialSection
        eyebrow={content.testimonials.eyebrow}
        heading={content.testimonials.heading}
        subtitle={content.testimonials.subtitle}
        bgColor="surface"
      />

      {/* Service Areas */}
      <ServiceAreasSection />

      {/* FAQ */}
      <FAQSection
        id="faq"
        eyebrow={content.faq.eyebrow}
        heading={content.faq.heading}
        subtitle={content.faq.subtitle}
        faqKeys={homepageFaqKeys}
      />

      {/* CTA */}
      <CTASection
        heading={content.cta.heading}
        text={content.cta.text}
        primaryCta={content.cta.primaryCta}
        secondaryCta={content.cta.secondaryCta}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}
