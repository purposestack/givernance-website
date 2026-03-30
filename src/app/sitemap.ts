import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://givernance.org",
      lastModified: "2026-03-30",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
