import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { businessConfig } from "@/config/business";
import { cn } from "@/lib/utils";

interface ServiceAreasSectionProps {
  className?: string;
}

export function ServiceAreasSection({ className }: ServiceAreasSectionProps) {
  const cities = businessConfig.serviceAreaCities;

  return (
    <section className={cn("section-padding bg-primary-700", className)}>
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionHeading
            eyebrow="Where We Work"
            heading={businessConfig.serviceAreasHeading}
            subtitle={businessConfig.serviceAreasSubtitle}
            align="center"
            light
          />
        </div>

        {/* Content Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Cities List */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Our Service Areas
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {cities.map((city, i) => (
                <div key={i}>
                  {city.href ? (
                    <Link
                      href={city.href}
                      className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm text-white/90 transition-colors hover:bg-white/15"
                    >
                      <span>{city.name}</span>
                      <ChevronRight className="h-4 w-4 text-white/40" />
                    </Link>
                  ) : (
                    <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 text-sm text-white/90">
                      <span>{city.name}</span>
                      <ChevronRight className="h-4 w-4 text-white/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-white/50">
              Don&apos;t see your area?{" "}
              <Link
                href="/contact-us"
                className="font-medium text-primary-200 underline transition-colors hover:text-white"
              >
                Contact us
              </Link>{" "}
              &mdash; we may still be able to help.
            </p>
          </div>

          {/* Map Embed */}
          <div className="overflow-hidden rounded-2xl shadow-card-hover">
            <MapEmbed className="h-[400px] w-full lg:h-full lg:min-h-[480px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
