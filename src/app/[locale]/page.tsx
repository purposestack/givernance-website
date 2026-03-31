import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { FadeIn } from "@/components/fade-in";
import { HeroDashboard } from "@/components/hero-dashboard";
import { Card } from "@/components/card";
import { PrimaryButton } from "@/components/primary-button";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { Footer } from "@/components/footer";
import {
  ShieldCheck,
  Mail,
  Bot,
  Database,
  QrCode,
  HandHeart,
  BarChart3,
  Users,
  Landmark,
  CreditCard,
  Star,
  CheckCircle,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const trustStrip = [
    {
      title: t("trustStrip.gdprTitle"),
      description: t("trustStrip.gdprDescription"),
      icon: ShieldCheck,
    },
    {
      title: t("trustStrip.postalTitle"),
      description: t("trustStrip.postalDescription"),
      icon: Mail,
    },
    {
      title: t("trustStrip.aiTitle"),
      description: t("trustStrip.aiDescription"),
      icon: Bot,
    },
    {
      title: t("trustStrip.dataTitle"),
      description: t("trustStrip.dataDescription"),
      icon: Database,
    },
  ];

  const painPoints = [
    t("problem.pain1"),
    t("problem.pain2"),
    t("problem.pain3"),
    t("problem.pain4"),
  ];

  const alternativePoints = [
    t("problem.alt1"),
    t("problem.alt2"),
    t("problem.alt3"),
    t("problem.alt4"),
  ];

  const productCards = [
    {
      title: t("product.postalTitle"),
      description: t("product.postalDescription"),
      icon: Mail,
    },
    {
      title: t("product.qrTitle"),
      description: t("product.qrDescription"),
      icon: QrCode,
    },
    {
      title: t("product.donationTitle"),
      description: t("product.donationDescription"),
      icon: CreditCard,
    },
    {
      title: t("product.grantsTitle"),
      description: t("product.grantsDescription"),
      icon: HandHeart,
    },
    {
      title: t("product.impactTitle"),
      description: t("product.impactDescription"),
      icon: BarChart3,
    },
    {
      title: t("product.volunteersTitle"),
      description: t("product.volunteersDescription"),
      icon: Users,
    },
    {
      title: t("product.financeTitle"),
      description: t("product.financeDescription"),
      icon: Landmark,
    },
  ];

  const aiModes = [
    {
      title: t("ai.manualTitle"),
      description: t("ai.manualDescription"),
    },
    {
      title: t("ai.assistedTitle"),
      description: t("ai.assistedDescription"),
    },
    {
      title: t("ai.autopilotTitle"),
      description: t("ai.autopilotDescription"),
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="hero-gradient absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>{t("hero.eyebrow")}</SectionEyebrow>
              <h1
                id="hero-heading"
                className="mt-6 font-heading text-4xl leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[68px]"
              >
                {t("hero.heading").split(".")[0]}.{" "}
                <em className="font-heading italic text-primary not-italic">
                  {t("hero.heading").split(".").slice(1).join(".").trim()}
                </em>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {t("hero.description")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton label={t("hero.bookDemo")} href="/demo" />
              </div>
              {/* Quick win 1 — CTA reassurance */}
              <p className="mt-3 text-[13px] text-muted">{t("hero.ctaReassurance")}</p>
            </FadeIn>

            {/* Quick win 3 — Floating dashboard with dramatic shadow */}
            <FadeIn delay={0.1} className="hidden lg:block">
              <div className="relative">
                {/* Ambient green halo */}
                <div
                  className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/12 via-primary/4 to-transparent blur-2xl"
                  aria-hidden="true"
                />
                {/* Dashboard with deep shadow + subtle 3D tilt */}
                <div
                  className="relative overflow-hidden rounded-2xl ring-1 ring-primary/10 transform-gpu"
                  style={{
                    boxShadow:
                      "0 32px 100px -20px rgba(46,125,94,0.25), 0 8px 32px -8px rgba(0,0,0,0.15)",
                    transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)",
                  }}
                >
                  <HeroDashboard />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Quick win 2 — Social Proof Strip ── */}
        <div className="border-y border-border bg-primary-50">
          <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-medium text-muted">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                {t("social.built")}
              </span>
              <span className="hidden text-border sm:block" aria-hidden="true">·</span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                {t("social.hosted")}
              </span>
              <span className="hidden text-border sm:block" aria-hidden="true">·</span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                {t("social.mockups")}
              </span>
            </div>
          </div>
        </div>

        {/* ── Trust Strip ── */}
        <section
          className="mx-auto max-w-7xl px-6 py-6 lg:px-8"
          aria-labelledby="trust-strip-heading"
        >
          <h2 id="trust-strip-heading" className="sr-only">{t("trustStrip.heading")}</h2>
          <FadeIn>
            <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustStrip.map((item, index) => (
                <li key={item.title}>
                  <Card
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    tone={index === 0 ? "green" : "default"}
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        {/* ── Why Switch ── */}
        <section
          id="why-switch"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
          aria-labelledby="why-switch-heading"
        >
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <FadeIn>
              <SectionEyebrow>{t("problem.eyebrow")}</SectionEyebrow>
              <h2
                id="why-switch-heading"
                className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]"
              >
                {t("problem.heading")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {t("problem.description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 rounded-panel border border-border bg-paper p-6 shadow-medium md:grid-cols-2">
                {/* Pain points (red) */}
                <div className="rounded-card border border-red-light-border bg-red-light-bg p-5">
                  <p className="text-sm font-semibold text-red-dark" id="patchwork-heading">
                    {t("problem.patchworkHeading")}
                  </p>
                  <ul className="mt-4 space-y-3" aria-labelledby="patchwork-heading">
                    {painPoints.map((point) => (
                      <li
                        key={point}
                        className="rounded-[14px] bg-white/80 p-3 text-[13px] leading-6 text-red-dark"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Givernance alternative (green) */}
                <div className="rounded-card border border-green-soft-border bg-primary-50 p-5">
                  <p className="text-sm font-semibold text-primary-dark" id="alternative-heading">
                    {t("problem.alternativeHeading")}
                  </p>
                  <ul className="mt-4 space-y-3" aria-labelledby="alternative-heading">
                    {alternativePoints.map((point) => (
                      <li
                        key={point}
                        className="rounded-[14px] bg-white/80 p-3 text-[13px] leading-6 text-primary-dark"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Product ── */}
        <section
          id="product"
          className="scroll-mt-20 border-y border-border bg-paper"
          aria-labelledby="product-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>{t("product.eyebrow")}</SectionEyebrow>
              <div className="mt-6 max-w-3xl">
                <h2
                  id="product-heading"
                  className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]"
                >
                  {t("product.heading")}
                </h2>
                <p className="mt-6 text-base leading-8 text-muted">
                  {t("product.description")}
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {productCards.map((item, index) => (
                  <li key={item.title}>
                    <Card
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      tone={index < 3 ? "soft" : "default"}
                    />
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
        </section>

        {/* ── AI Section (dark navy) ── */}
        <section id="ai" className="scroll-mt-20 bg-navy text-paper" aria-labelledby="ai-heading">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>{t("ai.eyebrow")}</SectionEyebrow>
              <div className="mt-6 max-w-3xl">
                <h2
                  id="ai-heading"
                  className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]"
                >
                  {t("ai.heading")}
                </h2>
                <p className="mt-6 text-base leading-8 text-navy-muted">
                  {t("ai.description")}
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <ul className="mt-12 grid gap-4 lg:grid-cols-3">
                {aiModes.map((mode, index) => (
                  <li
                    key={mode.title}
                    className={`rounded-card border p-6 ${
                      index === 1
                        ? "border-primary-light bg-primary-light/14"
                        : "border-white/10 bg-white/4"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{mode.title}</h3>
                      {index === 1 && (
                        <div className="rounded-full bg-primary-50/12 px-3 py-1 text-[11px] font-medium text-ai-badge">
                          {t("ai.defaultBadge")}
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-navy-muted">
                      {mode.description}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-card border border-white/10 bg-white/4 p-5 text-sm leading-6 text-navy-muted">
                {t("ai.guardrail")}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Quick win 4 — Pricing Hint ── */}
        <section
          className="border-y border-border bg-gradient-to-b from-bg to-soft"
          aria-labelledby="pricing-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <FadeIn>
              <div className="text-center">
                <SectionEyebrow>{t("pricing.eyebrow")}</SectionEyebrow>
                <h2
                  id="pricing-heading"
                  className="mt-4 font-heading text-[28px] leading-tight tracking-tight text-text sm:text-[36px]"
                >
                  {t("pricing.heading")}
                </h2>
                <p className="mt-4 text-base text-muted">{t("pricing.subheading")}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {/* Starter */}
                <div className="rounded-panel border border-border bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(46,125,94,0.15)]">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {t("pricing.starterName")}
                  </p>
                  <p className="mt-3 font-heading text-4xl italic text-text">
                    {t("pricing.starterPrice")}
                  </p>
                  <p className="mt-1 text-sm text-muted">{t("pricing.starterLimit")}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted">
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.starterF1")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.starterF2")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.starterF3")}
                    </li>
                  </ul>
                </div>

                {/* Growth — highlighted with full primary bg */}
                <div className="relative rounded-panel bg-primary p-6 text-paper shadow-[0_24px_80px_-12px_rgba(46,125,94,0.35)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_32px_80px_-12px_rgba(46,125,94,0.45)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-primary shadow-sm">
                      {t("pricing.popular")}
                    </span>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                    {t("pricing.growthName")}
                  </p>
                  <p className="mt-3 font-heading text-4xl italic text-white">
                    {t("pricing.growthPrice")}
                    <span className="text-xl not-italic text-white/60">{t("pricing.growthPriceSuffix")}</span>
                  </p>
                  <p className="mt-1 text-sm text-white/60">{t("pricing.growthLimit")}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/60" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.growthF1")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/60" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.growthF2")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-white/60" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.growthF3")}
                    </li>
                  </ul>
                </div>

                {/* Impact */}
                <div className="rounded-panel border border-border bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(46,125,94,0.15)]">
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                    {t("pricing.impactName")}
                  </p>
                  <p className="mt-3 font-heading text-4xl italic text-text">
                    {t("pricing.impactPrice")}
                    <span className="text-xl not-italic text-muted">{t("pricing.impactPriceSuffix")}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{t("pricing.impactLimit")}</p>
                  <ul className="mt-6 space-y-2 text-sm text-muted">
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.impactF1")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.impactF2")}
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                      {t("pricing.impactF3")}
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-muted">
                {t("pricing.footer")}{" "}
                <Link href="/demo" className="text-primary hover:underline">
                  {t("pricing.footerCta")}
                </Link>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── Final CTA (dramatic dark navy with radial green glow) ── */}
        <section
          id="demo"
          className="relative scroll-mt-20 overflow-hidden bg-navy"
          aria-labelledby="cta-heading"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(46,125,94,0.15),transparent)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>{t("cta.eyebrow")}</SectionEyebrow>
              <h2
                id="cta-heading"
                className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] text-paper sm:text-[42px] lg:text-[52px]"
              >
                {t("cta.heading")}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-navy-muted">
                {t("cta.description")}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <PrimaryButton label={t("cta.bookDemo")} href="/demo" />
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
