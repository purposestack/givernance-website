import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/components/pricing/pricing-hero";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { PricingMatrix } from "@/components/pricing/pricing-matrix";
import { FoundingPartners } from "@/components/pricing/founding-partners";
import { PricingComparison } from "@/components/pricing/pricing-comparison";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingCTA } from "@/components/pricing/pricing-cta";

const ogLocaleMap: Record<string, string> = {
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
  nl: "nl_NL",
  es: "es_ES",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const path = locale === "en" ? "/pricing" : `/${locale}/pricing`;

  return {
    title: t("pricingTitle"),
    description: t("pricingDescription"),
    alternates: {
      canonical: path,
      languages: {
        en: "/pricing",
        fr: "/fr/pricing",
        de: "/de/pricing",
        nl: "/nl/pricing",
        es: "/es/pricing",
      },
    },
    openGraph: {
      title: t("pricingOgTitle"),
      description: t("pricingOgDescription"),
      url: `https://givernance.org${path}`,
      siteName: "Givernance",
      locale: ogLocaleMap[locale] ?? "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("pricingOgTitle"),
      description: t("pricingOgDescription"),
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      <Navigation />
      <main id="main-content">
        <PricingHero />
        <PricingPlans />
        <PricingMatrix />
        <FoundingPartners />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
