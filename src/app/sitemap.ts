import type { MetadataRoute } from "next";

const baseUrl = "https://givernance.org";

const locales = ["en", "fr", "de", "nl", "es"];

function localePath(locale: string, path = ""): string {
  const prefix = locale === "en" ? baseUrl : `${baseUrl}/${locale}`;
  return `${prefix}${path}`;
}

function alternatesFor(path = ""): Record<string, string> {
  return Object.fromEntries(locales.map((locale) => [locale, localePath(locale, path)]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = locales.map((locale) => ({
    url: localePath(locale),
    lastModified: "2026-03-30",
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: { languages: alternatesFor() },
  }));

  const pricing = locales.map((locale) => ({
    url: localePath(locale, "/pricing"),
    lastModified: "2026-06-19",
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: { languages: alternatesFor("/pricing") },
  }));

  return [...home, ...pricing];
}
