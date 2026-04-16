import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatItem } from "@/components/ui/StatItem";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { homepageContent } from "@/config/homepage";
import { heroStats } from "@/config/stats";

export function Hero() {
  const { hero } = homepageContent;

  return (
    <section className="relative flex min-h-screen items-center">
      {/* Background Image */}
      <ImageSlot
        imageKey="hero-home"
        fill
        priority
        className="absolute inset-0 z-0"
        overlayClassName="bg-black/55"
        sizes="100vw"
      />

      {/* Content */}
      <Container className="relative z-10 py-32 text-center">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          Trusted Local Service Provider
        </span>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {hero.heading}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={hero.primaryCta.href}
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            {hero.primaryCta.label}
          </Button>
          <Button
            href={hero.secondaryCta.href}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground"
            icon={<Phone className="h-5 w-5" />}
          >
            {hero.secondaryCta.label}
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mx-auto mt-16 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-10">
          {heroStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-x-6 md:gap-x-10">
              <StatItem value={stat.value} label={stat.label} light />
              {i < heroStats.length - 1 && (
                <div className="hidden h-10 w-px bg-white/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
