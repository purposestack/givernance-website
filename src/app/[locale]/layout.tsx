import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AxeDev } from "@/components/axe-dev";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://givernance.org"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: {
        en: "/",
        fr: "/fr",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: locale === "en" ? "https://givernance.org" : `https://givernance.org/${locale}`,
      siteName: "Givernance",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#2E7D5E",
  width: "device-width",
  initialScale: 1,
};

function buildJsonLd(locale: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Givernance",
    url:
      locale === "en"
        ? "https://givernance.org"
        : `https://givernance.org/${locale}`,
    description,
    foundingDate: "2026",
    inLanguage: locale === "fr" ? "fr-FR" : "en-GB",
    areaServed: {
      "@type": "Place",
      name: "Europe",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "metadata" });
  const jsonLd = buildJsonLd(locale, t("description"));

  return (
    <html
      lang={locale === "fr" ? "fr" : "en-GB"}
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          {(await getTranslations("common"))("skipToContent")}
        </a>
        <AxeDev />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
