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
              <h1 id="hero-heading" className="mt-6 font-heading text-4xl leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[68px]">
                {t("hero.heading")}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {t("hero.description")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton label={t("hero.bookDemo")} href="/demo" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="hidden lg:block">
              <HeroDashboard />
            </FadeIn>
          </div>
        </section>

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
              <h2 id="why-switch-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
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
                <h2 id="product-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
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
                <h2 id="ai-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
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

        {/* ── Final CTA ── */}
        <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24" aria-labelledby="cta-heading">
          <FadeIn>
            <SectionEyebrow>{t("cta.eyebrow")}</SectionEyebrow>
            <h2 id="cta-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
              {t("cta.heading")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
              {t("cta.description")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton label={t("cta.bookDemo")} href="/demo" />
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}
