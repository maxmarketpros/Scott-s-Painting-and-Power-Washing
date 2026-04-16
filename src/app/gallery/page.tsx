import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Gallery",
  description:
    "Browse photos of completed painting, power washing, and staining projects by Scott's Painting and Power Washing across Central Ohio.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        heading="Our Work"
        subtitle="Browse recent painting, power washing, and staining projects from across Central Ohio."
        imageKey="service-2-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <GalleryGrid />

      <CTASection
        heading="Like What You See?"
        text="Contact us today for a free estimate on your next painting or power washing project."
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
      />

      <QuoteSection />
    </>
  );
}
