import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Book a demo — Givernance",
  description:
    "See Givernance in action. Book a 30-minute on-screen walkthrough with our team and discover how Givernance can transform your nonprofit's donor management.",
  openGraph: {
    title: "Book a demo — Givernance",
    description:
      "See Givernance in action. Book a 30-minute on-screen walkthrough with our team.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function DemoLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <>{children}</>;
}
