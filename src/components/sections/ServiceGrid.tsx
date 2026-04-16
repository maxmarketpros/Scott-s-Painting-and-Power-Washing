import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/config/services";
import { businessConfig } from "@/config/business";
import { homepageContent } from "@/config/homepage";

export function ServiceGrid() {
  const { services: content } = homepageContent;

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          subtitle={content.subtitle}
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href="/contact-us"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Get a Quote
          </Button>
          <Button
            href={`tel:${businessConfig.phoneRaw}`}
            variant="outline"
            size="lg"
            icon={<Phone className="h-5 w-5" />}
          >
            {businessConfig.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
