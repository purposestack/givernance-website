import { Navigation } from "@/components/navigation";
import { FadeIn } from "@/components/fade-in";
import { HeroDashboard } from "@/components/hero-dashboard";
import { Card } from "@/components/card";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
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

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="hero-gradient absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>Built for European nonprofits</SectionEyebrow>
              <h1 id="hero-heading" className="mt-6 font-heading text-4xl leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[68px]">
                Run your mission. Not your spreadsheets.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Givernance is a GDPR-native CRM for European nonprofits.
                Manage donors, postal campaigns, online giving, grants, and
                impact reporting in one calm system — without Salesforce
                complexity or cost.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton label="Book a demo" href="/demo" />
                <SecondaryButton
                  label="Explore the mockups"
                  href="/mockups"
                />
              </div>
              <p className="mt-5 text-[13px] leading-6 text-muted">
                AI-assisted by default. You stay in control of every
                sensitive decision. Fast to set up, affordable to run.
              </p>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <StatPill value="2–200" label="staff" />
                <StatPill value="86" label="interactive mockups" />
                <StatPill value="17" label="core modules" />
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
          <h2 id="trust-strip-heading" className="sr-only">Key benefits</h2>
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
              <SectionEyebrow>Why teams switch</SectionEyebrow>
              <h2 id="why-switch-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                You chose Salesforce for the free seats. Then your team grew.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Rising licence costs, consultant dependency, retrofitted GDPR
                workflows, and reporting workarounds in spreadsheets — sound
                familiar? You deserve a system built for how your organisation
                actually works.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 rounded-panel border border-border bg-paper p-6 shadow-medium md:grid-cols-2">
                {/* Pain points (red) */}
                <div className="rounded-card border border-red-light-border bg-red-light-bg p-5">
                  <p className="text-sm font-semibold text-red-dark" id="patchwork-heading">
                    The patchwork stack
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
                    The Givernance alternative
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
                Built for real fundraising work
              </SectionEyebrow>
              <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 id="fundraising-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                    Your campaigns. Your channels. One system.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted">
                    Plan nominative postal campaigns, generate QR-coded appeals,
                    manage door-drops by geography, publish donation pages,
                    connect Stripe, and track campaign ROI — all in one place.
                  </p>
                </div>
                <div className="shrink-0 rounded-full border border-border bg-bg px-4 py-3 text-[13px] text-muted">
                  Built around how European nonprofits actually raise funds.
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
            <SectionEyebrow>One calmer system</SectionEyebrow>
          </FadeIn>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <h2 id="product-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                Your donors at the centre. Everything else connected.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Givernance starts with the donor lifecycle — who gives, how
                much, and why — then connects programmes, grants, volunteers,
                and reporting around that relationship.
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
              <SectionEyebrow>AI with guardrails</SectionEyebrow>
              <div className="mt-6 max-w-3xl">
                <h2 id="ai-heading" className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                  Less admin. Same control.
                </h2>
                <p className="mt-6 text-base leading-8 text-navy-muted">
                  AI handles the repetitive work — duplicate detection, data
                  clean-up, suggested next steps — so your team can focus on
                  relationships. You always decide what happens next.
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
                          Default
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
                No irreversible action without your confirmation. Every AI
                decision is logged and auditable.
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
              <SectionEyebrow>Made for European realities</SectionEyebrow>
              <h2 id="security-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                GDPR-native. Not GDPR-patched.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Consent tracking, audit logs, data residency, and right-to-erasure
                are built in from day one — not bolted on after the fact.
                Your compliance team will thank you.
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
                <SectionEyebrow>See the product</SectionEyebrow>
                <h2 id="resources-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                  Click through it yourself.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  Explore 86 interactive mockups across donor management,
                  campaigns, compliance, reporting, and AI-assisted workflows.
                  This is not a slide deck — it is a product you can navigate.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <StatPill value="86" label="interactive mockups" />
                  <StatPill value="17" label="modules" />
                  <StatPill value="11" label="conversational screens" />
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
            <SectionEyebrow>Ready to explore</SectionEyebrow>
            <h2 id="cta-heading" className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
              Ready to see what calmer nonprofit software looks like?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
              Book a 30-minute demo and walk through the workflows that
              matter most to your organisation — donor management, postal
              campaigns, online giving, and reporting.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PrimaryButton label="Book a demo" href="/demo" />
              <SecondaryButton label="Explore the mockups" href="/mockups" />
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ── Section data ── */

const trustStrip = [
  {
    title: "GDPR-native",
    description:
      "Consent, auditability, and privacy controls built in from the start.",
    icon: ShieldCheck,
  },
  {
    title: "Postal + digital fundraising",
    description:
      "Support the channels nonprofits actually use, not just generic forms.",
    icon: Mail,
  },
  {
    title: "Human-controlled AI",
    description:
      "AI suggests and explains. You confirm what matters.",
    icon: Bot,
  },
  {
    title: "Your data, always",
    description: "Export everything, any time. No lock-in.",
    icon: Database,
  },
];

const painPoints = [
  "You pay more every time the team grows",
  "You depend on consultants for simple changes",
  "You patch GDPR across disconnected tools",
  "You adapt a US-centric model to European realities",
  "You struggle to export your own data cleanly",
];

const alternativePoints = [
  "One calm system for fundraising and operations",
  "Designed for European nonprofits from day one",
  "AI that helps — you stay in control",
  "Clear reporting without consultant fees",
  "Your data is always yours to export",
];

const fundraisingCards = [
  {
    title: "Postal campaigns",
    description:
      "Personalised letters, merge fields, and print-ready PDFs — the workflow your team already runs.",
    icon: Mail,
  },
  {
    title: "QR attribution",
    description:
      "Every mailing carries a unique QR code so you know exactly which campaign drove which gift.",
    icon: QrCode,
  },
  {
    title: "Door-drops",
    description:
      "Target geographic zones and automatically create constituent records when gifts arrive.",
    icon: Map,
  },
  {
    title: "Donation pages",
    description: "Branded giving pages and embeddable widgets, live in minutes.",
    icon: HandHeart,
  },
  {
    title: "Stripe Connect",
    description:
      "Your organisation connects its own Stripe account. Givernance never handles your funds.",
    icon: CreditCard,
  },
  {
    title: "Campaign ROI",
    description:
      "Cost vs. donations raised, broken down by channel — no spreadsheet required.",
    icon: BarChart3,
  },
];

const platformCards = [
  {
    title: "Donors & donations",
    description:
      "Constituents, gifts, receipts, lifecycle stages, and campaign attribution.",
    icon: Users,
  },
  {
    title: "Grants",
    description: "Applications, deadlines, tranches, and funder reporting.",
    icon: FileText,
  },
  {
    title: "Programmes & beneficiaries",
    description:
      "Service delivery without fragmenting your constituent record.",
    icon: HandHeart,
  },
  {
    title: "Volunteers",
    description:
      "Shifts, hours, background checks, and recognition in one place.",
    icon: Users,
  },
  {
    title: "Impact & reporting",
    description: "Connect outcomes to fundraising and operations data.",
    icon: BarChart3,
  },
  {
    title: "Finance handoff",
    description:
      "Export journal entries and fund balances — not a full accounting system.",
    icon: Landmark,
  },
];

const platformBullets = [
  "Donor lifecycle as the core model, not an add-on",
  "Every module shares the same constituent record",
  "Stays calm even when your workflows get complex",
];

const aiModes = [
  {
    title: "Manual",
    description: "Full human control. AI stays out of the way.",
  },
  {
    title: "Assisted",
    description:
      "The default. AI proposes and explains — your team decides.",
  },
  {
    title: "Autopilot",
    description:
      "For routine work you trust to run automatically, with clear exceptions and full audit trails.",
  },
];

const securityCards = [
  {
    title: "Privacy from day one",
    description:
      "Consent history, audit logs, and right-to-erasure — built in, not bolted on.",
  },
  {
    title: "European operational fit",
    description:
      "Postal campaigns, SEPA payments, EU tax receipts, and finance handoff designed into the product.",
  },
  {
    title: "Calm by design",
    description:
      "Less configuration overhead, fewer consultants, more time for the work that matters.",
  },
];

const resourceCards = [
  {
    title: "Dashboard",
    description: "Daily priorities, campaign health, donor follow-up.",
  },
  {
    title: "Campaign wizard",
    description: "Postal and digital workflows with QR attribution.",
  },
  {
    title: "Donation pages",
    description: "Public giving flows with Stripe Connect.",
  },
  {
    title: "AI hub",
    description: "Guided work with explanations and audit trails.",
  },
];
