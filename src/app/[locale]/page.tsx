import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { FadeIn } from "@/components/fade-in";
import { HeroDashboard } from "@/components/hero-dashboard";
import { Card } from "@/components/card";
import { PrimaryButton } from "@/components/primary-button";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { StatPill } from "@/components/stat-pill";
import { Footer } from "@/components/footer";
import {
  ShieldCheck,
  Mail,
  Bot,
  Database,
  QrCode,
  Map,
  HandHeart,
  CreditCard,
  BarChart3,
  Users,
  FileText,
  Landmark,
  ChevronRight,
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
    t("problem.pain5"),
  ];

  const alternativePoints = [
    t("problem.alt1"),
    t("problem.alt2"),
    t("problem.alt3"),
    t("problem.alt4"),
    t("problem.alt5"),
  ];

  const fundraisingCards = [
    {
      title: t("fundraising.postalTitle"),
      description: t("fundraising.postalDescription"),
      icon: Mail,
    },
    {
      title: t("fundraising.qrTitle"),
      description: t("fundraising.qrDescription"),
      icon: QrCode,
    },
    {
      title: t("fundraising.doorDropTitle"),
      description: t("fundraising.doorDropDescription"),
      icon: Map,
    },
    {
      title: t("fundraising.donationTitle"),
      description: t("fundraising.donationDescription"),
      icon: HandHeart,
    },
    {
      title: t("fundraising.stripeTitle"),
      description: t("fundraising.stripeDescription"),
      icon: CreditCard,
    },
    {
      title: t("fundraising.roiTitle"),
      description: t("fundraising.roiDescription"),
      icon: BarChart3,
    },
  ];

  const platformCards = [
    {
      title: t("platform.donorsTitle"),
      description: t("platform.donorsDescription"),
      icon: Users,
    },
    {
      title: t("platform.grantsTitle"),
      description: t("platform.grantsDescription"),
      icon: FileText,
    },
    {
      title: t("platform.programmesTitle"),
      description: t("platform.programmesDescription"),
      icon: HandHeart,
    },
    {
      title: t("platform.volunteersTitle"),
      description: t("platform.volunteersDescription"),
      icon: Users,
    },
    {
      title: t("platform.impactTitle"),
      description: t("platform.impactDescription"),
      icon: BarChart3,
    },
    {
      title: t("platform.financeTitle"),
      description: t("platform.financeDescription"),
      icon: Landmark,
    },
  ];

  const platformBullets = [
    t("platform.bullet1"),
    t("platform.bullet2"),
    t("platform.bullet3"),
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

  const securityCards = [
    {
      title: t("security.privacyTitle"),
      description: t("security.privacyDescription"),
    },
    {
      title: t("security.europeanTitle"),
      description: t("security.europeanDescription"),
    },
    {
      title: t("security.calmTitle"),
      description: t("security.calmDescription"),
    },
  ];

  const resourceCards = [
    {
      title: t("resources.dashboardTitle"),
      description: t("resources.dashboardDescription"),
    },
    {
      title: t("resources.campaignTitle"),
      description: t("resources.campaignDescription"),
    },
    {
      title: t("resources.donationTitle"),
      description: t("resources.donationDescription"),
    },
    {
      title: t("resources.aiHubTitle"),
      description: t("resources.aiHubDescription"),
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
              <p className="mt-5 text-[13px] leading-6 text-muted">
                {t("hero.subtext")}
              </p>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <StatPill value="2–200" label={t("hero.statStaff")} />
                <StatPill value="86" label={t("hero.statMockups")} />
                <StatPill value="17" label={t("hero.statModules")} />
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

        {/* ── Fundraising ── */}
        <section
          id="fundraising"
          className="scroll-mt-20 border-y border-border bg-paper"
          aria-labelledby="fundraising-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>
                {t("fundraising.eyebrow")}
              </SectionEyebrow>
              <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 id="fundraising-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                    {t("fundraising.heading")}
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted">
                    {t("fundraising.description")}
                  </p>
                </div>
                <div className="shrink-0 rounded-full border border-border bg-bg px-4 py-3 text-[13px] text-muted">
                  {t("fundraising.badge")}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {fundraisingCards.map((item, index) => (
                  <li key={item.title}>
                    <Card
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      tone={index % 3 === 0 ? "soft" : "default"}
                    />
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* ── Platform Overview ── */}
        <section
          id="product"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
          aria-labelledby="product-heading"
        >
          <FadeIn>
            <SectionEyebrow>{t("platform.eyebrow")}</SectionEyebrow>
          </FadeIn>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <h2 id="product-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                {t("platform.heading")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {t("platform.description")}
              </p>
              <ul className="mt-8 max-w-md space-y-3">
                {platformBullets.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <ChevronRight
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {platformCards.map((item) => (
                  <li key={item.title}>
                    <Card
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                    />
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* ── AI Section (dark navy) ── */}
        <section className="bg-navy text-paper" aria-labelledby="ai-heading">
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

        {/* ── Security ── */}
        <section
          id="security"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
          aria-labelledby="security-heading"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <SectionEyebrow>{t("security.eyebrow")}</SectionEyebrow>
              <h2 id="security-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                {t("security.heading")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                {t("security.description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="grid gap-4 md:grid-cols-3">
                {securityCards.map((item, index) => (
                  <li
                    key={item.title}
                    className={`rounded-card border border-border p-6 ${
                      index === 0
                        ? "bg-primary-50"
                        : index === 1
                          ? "bg-ice"
                          : "bg-soft"
                    }`}
                  >
                    <h3 className="text-xl font-semibold tracking-tight text-text">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* ── Resources ── */}
        <section
          id="resources"
          className="scroll-mt-20 border-y border-border bg-paper"
          aria-labelledby="resources-heading"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <FadeIn>
                <SectionEyebrow>{t("resources.eyebrow")}</SectionEyebrow>
                <h2 id="resources-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                  {t("resources.heading")}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  {t("resources.description")}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <StatPill value="86" label={t("resources.statMockups")} />
                  <StatPill value="17" label={t("resources.statModules")} />
                  <StatPill value="11" label={t("resources.statScreens")} />
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {resourceCards.map((item, index) => (
                    <li
                      key={item.title}
                      className={`rounded-card border border-border p-5 ${
                        index % 2 === 0 ? "bg-bg" : "bg-soft"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-text">
                          {item.title}
                        </h3>
                        <ChevronRight
                          className="h-5 w-5 shrink-0 text-primary"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
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
