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
        <section className="relative overflow-hidden">
          <div className="hero-gradient absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>Built for European nonprofits</SectionEyebrow>
              <h1 className="mt-6 font-heading text-4xl leading-[1.02] tracking-[-0.035em] sm:text-[54px] lg:text-[68px]">
                The nonprofit CRM built for how Europe actually fundraises.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Run donor management, postal appeals, public donation pages,
                grants, volunteers, impact reporting, and finance handoff in one
                GDPR-native system — without Salesforce complexity.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton label="Book a demo" href="/demo" />
                <SecondaryButton
                  label="Explore the mockups"
                  href="/mockups"
                />
              </div>
              <p className="mt-5 text-[13px] leading-6 text-muted">
                AI-assisted by default. Human-controlled for sensitive actions.
                Fast to set up, affordable to run.
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
          aria-label="Key benefits"
        >
          <FadeIn>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustStrip.map((item, index) => (
                <Card
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  tone={index === 0 ? "green" : "default"}
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* ── Why Switch ── */}
        <section
          id="why-switch"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <FadeIn>
              <SectionEyebrow>Why teams switch</SectionEyebrow>
              <h2 className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                Salesforce made sense. Then your nonprofit had to actually use
                it.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Too many nonprofits outgrow the free-seats story and end up with
                rising license costs, consultant dependency, retrofitted GDPR
                workflows, and reporting workarounds in spreadsheets.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 rounded-panel border border-border bg-paper p-6 shadow-medium md:grid-cols-2">
                {/* Pain points (red) */}
                <div className="rounded-card border border-red-light-border bg-red-light-bg p-5">
                  <div className="text-sm font-semibold text-red-dark">
                    The patchwork stack
                  </div>
                  <div className="mt-4 space-y-3">
                    {painPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-[14px] bg-white/80 p-3 text-[13px] leading-6 text-red-dark"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Givernance alternative (green) */}
                <div className="rounded-card border border-green-soft-border bg-primary-50 p-5">
                  <div className="text-sm font-semibold text-primary-dark">
                    The Givernance alternative
                  </div>
                  <div className="mt-4 space-y-3">
                    {alternativePoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-[14px] bg-white/80 p-3 text-[13px] leading-6 text-primary-dark"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Fundraising ── */}
        <section
          id="fundraising"
          className="scroll-mt-20 border-y border-border bg-paper"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>
                Built for real fundraising work
              </SectionEyebrow>
              <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <h2 className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                    More than a donor database. A system for the campaigns you
                    actually run.
                  </h2>
                  <p className="mt-6 text-base leading-8 text-muted">
                    Plan nominative postal campaigns, generate QR-linked asks,
                    manage door-drops by geography, publish donation pages,
                    connect Stripe, and follow campaign ROI in one flow.
                  </p>
                </div>
                <div className="shrink-0 rounded-full border border-border bg-bg px-4 py-3 text-[13px] text-muted">
                  Built around the fundraising workflows European nonprofits
                  really use.
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {fundraisingCards.map((item, index) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    tone={index % 3 === 0 ? "soft" : "default"}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Platform Overview ── */}
        <section
          id="product"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
        >
          <FadeIn>
            <SectionEyebrow>One calmer system</SectionEyebrow>
          </FadeIn>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <h2 className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                Fundraising at the center. Everything else connected around it.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Givernance starts with the donor lifecycle, then connects the
                rest of the organisation around that relationship.
              </p>
              <div className="mt-8 max-w-md space-y-3">
                {platformBullets.map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 text-sm leading-6 text-muted"
                  >
                    <ChevronRight
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {platformCards.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── AI Section (dark navy) ── */}
        <section className="bg-navy text-paper">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FadeIn>
              <SectionEyebrow>AI with guardrails</SectionEyebrow>
              <div className="mt-6 max-w-3xl">
                <h2 className="font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                  AI that reduces admin without removing control.
                </h2>
                <p className="mt-6 text-base leading-8 text-navy-muted">
                  Givernance uses AI to cut repetitive work, improve data
                  quality, and guide everyday tasks — while keeping people in
                  charge of sensitive decisions.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {aiModes.map((mode, index) => (
                  <div
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
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-card border border-white/10 bg-white/4 p-5 text-sm leading-6 text-navy-muted">
                No irreversible action without confirmation. Full auditability
                when AI is involved.
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Security ── */}
        <section
          id="security"
          className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <FadeIn>
              <SectionEyebrow>Made for European realities</SectionEyebrow>
              <h2 className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                Privacy, payments, and nonprofit workflows that feel local.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Givernance is built for European organisations that need
                GDPR-native controls, EU-friendly fundraising workflows, and
                software that feels practical instead of imported.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid gap-4 md:grid-cols-3">
                {securityCards.map((item, index) => (
                  <div
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
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Resources ── */}
        <section
          id="resources"
          className="scroll-mt-20 border-y border-border bg-paper"
        >
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <FadeIn>
                <SectionEyebrow>See the product</SectionEyebrow>
                <h2 className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
                  Not a concept deck. A real product vision you can click
                  through.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  Explore interactive mockups across the core modules and see
                  how Givernance handles donor workflows, campaigns, compliance,
                  reporting, and AI-assisted work.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <StatPill value="86" label="interactive mockups" />
                  <StatPill value="17" label="modules" />
                  <StatPill value="11" label="conversational screens" />
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {resourceCards.map((item, index) => (
                    <div
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
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <FadeIn>
            <SectionEyebrow>Ready to explore</SectionEyebrow>
            <h2 className="mt-6 font-heading text-[32px] leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[52px]">
              See what a calmer nonprofit system could look like.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
              Book a demo to walk through the fundraising workflows that matter
              most to your organisation — from donor management and postal
              campaigns to online giving and reporting.
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
      "AI suggests and explains. Your team confirms what matters.",
    icon: Bot,
  },
  {
    title: "Export-first",
    description: "Your data stays yours.",
    icon: Database,
  },
];

const painPoints = [
  "Pay more as the team grows",
  "Depend on specialist admins for simple changes",
  "Patch GDPR across disconnected tools",
  "Adapt a US-centric model to European realities",
  "Struggle to export cleanly when you want to move",
];

const alternativePoints = [
  "One calmer system for fundraising and operations",
  "European nonprofit fit from day one",
  "Human-controlled AI instead of admin sprawl",
  "Clear reporting without consultant dependency",
  "Export-first posture and practical setup",
];

const fundraisingCards = [
  {
    title: "Postal campaigns",
    description:
      "Create structured mail campaigns with the operational steps fundraising teams actually need.",
    icon: Mail,
  },
  {
    title: "QR tracking",
    description:
      "Track which campaign drove which donation and what each mailing produced.",
    icon: QrCode,
  },
  {
    title: "Door-drops",
    description:
      "Manage geographic campaigns and capture new donors when gifts come in.",
    icon: Map,
  },
  {
    title: "Public donation pages",
    description: "Launch branded giving pages and embeddable donation flows.",
    icon: HandHeart,
  },
  {
    title: "Stripe Connect",
    description:
      "Let each nonprofit connect its own Stripe account without platform fund handling.",
    icon: CreditCard,
  },
  {
    title: "Campaign ROI",
    description:
      "See cost versus donations received without rebuilding the math in spreadsheets.",
    icon: BarChart3,
  },
];

const platformCards = [
  {
    title: "Donors and donations",
    description:
      "Constituents, gifts, receipts, lifecycle stages, and campaign attribution.",
    icon: Users,
  },
  {
    title: "Grants",
    description: "Track applications, deadlines, reporting, and follow-up.",
    icon: FileText,
  },
  {
    title: "Programs and beneficiaries",
    description:
      "Support delivery work without fragmenting the nonprofit record.",
    icon: HandHeart,
  },
  {
    title: "Volunteers",
    description:
      "Coordinate people, schedules, and contributions in one place.",
    icon: Users,
  },
  {
    title: "Impact and reporting",
    description: "Connect outcomes back to fundraising and operations.",
    icon: BarChart3,
  },
  {
    title: "Finance handoff",
    description:
      "Give finance what it needs without pretending to be a full accounting tool.",
    icon: Landmark,
  },
];

const platformBullets = [
  "Donor lifecycle built as the core model, not an add-on",
  "Operational modules connected to the same nonprofit record",
  "A product that remains calm even when workflows get dense",
];

const aiModes = [
  {
    title: "Manual",
    description: "For strict human-only workflows.",
  },
  {
    title: "Assisted",
    description:
      "The default. AI proposes, explains, and helps your team move faster.",
  },
  {
    title: "Autopilot",
    description:
      "For mature teams automating routine work with clear exceptions and audit trails.",
  },
];

const securityCards = [
  {
    title: "Privacy that isn't retrofitted",
    description:
      "Consent history, auditability, and safer handling of sensitive nonprofit data.",
  },
  {
    title: "Operational fit",
    description:
      "European fundraising channels, receipt workflows, and finance handoff designed into the product.",
  },
  {
    title: "A calmer product culture",
    description:
      "Less corporate theatre, less configuration overhead, more day-to-day usefulness.",
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
