import { siteConfig } from "@/config/site";
import { businessConfig } from "@/config/business";
import type { ServiceConfig, FAQItem } from "@/types";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    founder: {
      "@type": "Person",
      name: businessConfig.ownerName,
    },
    foundingDate: String(businessConfig.yearEstablished),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.coordinates.lat,
      longitude: businessConfig.coordinates.lng,
    },
    image: `${siteConfig.url}/images/logo.webp`,
    openingHoursSpecification: businessConfig.hours.structured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.split("-").map((d) => {
        const map: Record<string, string> = {
          Mo: "Monday",
          Tu: "Tuesday",
          We: "Wednesday",
          Th: "Thursday",
          Fr: "Friday",
          Sa: "Saturday",
          Su: "Sunday",
        };
        return map[d] || d;
      }),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      ...businessConfig.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: {
          "@type": "State",
          name: "Ohio",
        },
      })),
      { "@type": "AdministrativeArea", name: "Fairfield County, OH" },
      { "@type": "AdministrativeArea", name: "Franklin County, OH" },
      { "@type": "AdministrativeArea", name: "Licking County, OH" },
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function generateServiceSchema(service: ServiceConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: businessConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessConfig.address.street,
        addressLocality: businessConfig.address.city,
        addressRegion: businessConfig.address.state,
        postalCode: businessConfig.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: [
      ...businessConfig.serviceAreas.map((area) => ({
        "@type": "City",
        name: area,
        containedInPlace: { "@type": "State", name: "Ohio" },
      })),
      { "@type": "AdministrativeArea", name: "Fairfield County, OH" },
      { "@type": "AdministrativeArea", name: "Franklin County, OH" },
      { "@type": "AdministrativeArea", name: "Licking County, OH" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Services`,
      itemListElement: service.benefits.map((b, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: b.title,
          description: b.description,
        },
      })),
    },
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function generateArticleSchema(args: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  imagePath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.title,
    description: args.description,
    image: args.imagePath ? `${siteConfig.url}${args.imagePath}` : undefined,
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    author: { "@type": "Person", name: args.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.webp`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${args.slug}/`,
  };
}

export function generateFAQPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
