import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://givernance.org",
      lastModified: "2026-03-30",
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://givernance.org",
          fr: "https://givernance.org/fr",
        },
      },
    },
    {
      url: "https://givernance.org/fr",
      lastModified: "2026-03-30",
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://givernance.org",
          fr: "https://givernance.org/fr",
        },
      },
    },
  ];
}
