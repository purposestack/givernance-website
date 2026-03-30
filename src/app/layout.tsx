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
  title: "Givernance — The nonprofit CRM built for Europe",
  description:
    "A GDPR-native, affordable CRM designed for European nonprofits (2–200 staff). Built to replace Salesforce complexity with calm, purpose-built software.",
  metadataBase: new URL("https://givernance.org"),
};

export const viewport: Viewport = {
  themeColor: "#2E7D5E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <AxeDev />
        {children}
      </body>
    </html>
  );
}
