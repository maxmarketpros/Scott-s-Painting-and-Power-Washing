import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/config/blog";
import type { BlogSection } from "@/config/blog";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { imageManifest } from "@/config/images";
import { generatePageMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateArticleSchema,
} from "@/lib/structured-data";
import { ArrowRight, ArrowUpRight, User, Clock, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function slugify(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function RenderSection({ section }: { section: BlogSection }) {
  const headingId = slugify(section.heading);
  return (
    <div className="mt-12 first:mt-0">
      <h2
        id={headingId}
        className="scroll-mt-24 text-2xl font-bold text-foreground md:text-3xl"
      >
        {section.heading}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className="mt-4 text-base leading-relaxed text-muted md:text-lg"
        >
          {p}
        </p>
      ))}

      {section.table && (
        <div className="mt-6 overflow-x-auto rounded-xl border border-border">
          <table className="min-w-full divide-y divide-border text-sm">
            <thead className="bg-surface">
              <tr>
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {section.table.rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-4 py-3 text-foreground-light"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.list && (
        section.list.ordered ? (
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-muted md:text-lg">
            {section.list.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted md:text-lg">
            {section.list.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}

      {section.callout && (
        <div className="mt-6 rounded-2xl border border-primary-200 bg-primary-50 p-6 md:p-8">
          <h3 className="text-lg font-bold text-primary-900">
            {section.callout.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-foreground-light">
            {section.callout.text}
          </p>
        </div>
      )}
    </div>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const heroImage = imageManifest[post.heroImageKey];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: heroImage ? `${siteConfig.url}${heroImage.src}` : undefined,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.webp`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
  };

  const faqItems = post.faqs.map((f, i) => ({
    id: `blog-${post.slug}-faq-${i}`,
    question: f.question,
    answer: f.answer,
  }));

  const relatedServices = services.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQPageSchema(faqItems)),
        }}
      />

      <PageHero
        heading={post.title}
        subtitle={post.excerpt}
        imageKey={post.heroImageKey}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="section-padding">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              {post.updated && (
                <span className="text-muted-light">
                  Updated {formatDate(post.updated)}
                </span>
              )}
            </div>

            {/* Intro paragraphs */}
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground-light md:text-lg">
              {post.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg md:text-xl" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Table of Contents */}
            <nav className="mt-10 rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                In This Article
              </h2>
              <ol className="mt-4 space-y-2 text-base">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="flex items-start gap-2 text-foreground-light transition-colors hover:text-primary-600"
                    >
                      <span className="font-semibold text-primary-500">
                        {i + 1}.
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Sections */}
            <div className="mt-10">
              {post.sections.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div className="mt-16 rounded-2xl border border-border bg-surface p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  Related Services
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-card"
                    >
                      <span className="font-semibold text-foreground group-hover:text-primary-600">
                        {service.title}
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-colors group-hover:text-primary-600" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>

      {/* FAQ */}
      <FAQSection
        eyebrow="Frequently Asked Questions"
        heading="Quick Answers to Common Questions"
        items={faqItems}
        bgColor="surface"
      />

      <CTASection
        heading="Ready to Get Started?"
        text="Skip the guesswork — get a free, written estimate from Scott's Painting today."
        primaryCta={{ label: "Get a Free Quote", href: "/contact-us" }}
        secondaryCta={{ label: "Call (614) 809-9730", href: "tel:+16148099730" }}
      />

      <QuoteSection />
    </>
  );
}
