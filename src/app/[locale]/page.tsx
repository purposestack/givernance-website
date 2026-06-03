import { setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { Principles } from "@/components/home/principles";
import { WhyChange } from "@/components/home/why-change";
import { ProductTour } from "@/components/home/product-tour";
import { AIGovernance } from "@/components/home/ai-governance";
import { Pilots } from "@/components/home/pilots";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/footer";

export default async function HomePage({
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
        <Hero />
        <MarqueeStrip />
        <Principles />
        <WhyChange />
        <ProductTour />
        <AIGovernance />
        <Pilots />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
