import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Explore our full range of painting and power washing services in Central Ohio. Interior painting, exterior painting, cabinet painting, power washing, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        heading="Our Painting & Power Washing Services"
        subtitle="Professional painting, staining, power washing, and more across Fairfield County and Central Ohio."
        imageKey="service-1-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Not Sure Which Service You Need?"
        text="Contact us for a free consultation. We'll assess your needs and recommend the best approach."
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
      />

      {/* Quote Form */}
      <QuoteSection />
    </>
  );
}
