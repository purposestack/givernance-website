import type { MetadataRoute } from "next";

const baseUrl = "https://givernance.org";

const locales = ["en", "fr", "de", "nl", "es"];

const alternateLanguages = Object.fromEntries(
  locales.map((locale) => [
    locale,
    locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
  ]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
    lastModified: "2026-03-30",
    changeFrequency: "weekly" as const,
    priority: 1,
    alternates: {
      languages: alternateLanguages,
    },
  }));
}
