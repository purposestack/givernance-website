import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { AxeDev } from "@/components/axe-dev";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Givernance — The Nonprofit CRM Built for Europe",
  description:
    "GDPR-native CRM for European nonprofits (2–200 staff). Donor management, postal campaigns, online giving, grants, and impact reporting — without Salesforce complexity.",
  metadataBase: new URL("https://givernance.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Givernance — The Nonprofit CRM Built for Europe",
    description:
      "GDPR-native CRM for European nonprofits. Donor management, postal campaigns, online giving, grants, and reporting in one calm system.",
    url: "https://givernance.org",
    siteName: "Givernance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Givernance — The Nonprofit CRM Built for Europe",
    description:
      "GDPR-native CRM for European nonprofits. Donor management, postal campaigns, online giving, grants, and reporting in one calm system.",
  },
};

export const viewport: Viewport = {
  themeColor: "#2E7D5E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Givernance",
  url: "https://givernance.org",
  description:
    "GDPR-native CRM for European nonprofits (2–200 staff). Donor management, postal campaigns, online giving, grants, and impact reporting.",
  foundingDate: "2026",
  areaServed: {
    "@type": "Place",
    name: "Europe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AxeDev />
        {children}
      </body>
    </html>
  );
}
