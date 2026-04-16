export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { services } from "@/config/services";
import { cityServices } from "@/config/city-services";
import { areas } from "@/config/areas";
import { blogPosts } from "@/config/blog";

const BASE_URL = "https://scottspaintingpw.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact-us/`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/painting-faq-columbus-oh/`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/painting-cost-calculator/`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}/`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const cityServicePages: MetadataRoute.Sitemap = cityServices.map((cs) => ({
    url: `${BASE_URL}/services/${cs.serviceSlug}/${cs.citySlug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${BASE_URL}/areas/${a.slug}/`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...blogPosts.map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...cityServicePages,
    ...areaPages,
    ...blogPages,
  ];
}
