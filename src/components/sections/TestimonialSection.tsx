import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials, googleReviewsUrl } from "@/config/testimonials";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface TestimonialSectionProps {
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
  bgColor?: "white" | "surface";
  className?: string;
}

// Colored Google "G" logo (inline SVG)
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export function TestimonialSection({
  eyebrow = "Client Reviews",
  heading = "What Our Clients Say",
  subtitle,
  bgColor = "white",
  className,
}: TestimonialSectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        bgColor === "surface" && "bg-surface",
        className
      )}
    >
      <Container>
        {/* Google branding bar */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-card">
            <GoogleLogo className="h-5 w-5" />
            <span className="text-sm font-semibold text-foreground">
              Google Reviews
            </span>
            <span className="text-sm text-muted">·</span>
            <span className="flex items-center gap-1 text-sm font-bold text-foreground">
              5.0
              <span className="text-secondary-400">★★★★★</span>
            </span>
          </div>
        </div>

        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          subtitle={subtitle}
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>

        {/* See More Reviews button */}
        <div className="mt-12 flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border-2 border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-card transition-all hover:border-primary-300 hover:shadow-lg"
          >
            <GoogleLogo className="h-5 w-5" />
            See More Reviews on Google
            <ExternalLink className="h-4 w-4 text-muted" />
          </a>
        </div>
      </Container>
    </section>
  );
}
