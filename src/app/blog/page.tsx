import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/config/blog";
import { generatePageMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Painting tips, cost guides, and home improvement advice from Scott's Painting and Power Washing in Central Ohio.",
  path: "/blog",
});

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <PageHero
        heading="Blog"
        subtitle="Painting tips, cost guides, and expert advice for Central Ohio homeowners."
        imageKey="service-1-hero"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section-padding">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-lg md:p-8"
              >
                <time className="text-sm font-medium text-muted">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary-600 md:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        heading="Have a Painting Question?"
        text="Our team is happy to answer any questions about your project. Reach out for a free estimate."
        primaryCta={{ label: "Get a Quote", href: "/contact-us" }}
      />
    </>
  );
}
