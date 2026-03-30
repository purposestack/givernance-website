import { Heart, Shield, Users } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { PrimaryButton } from "@/components/primary-button";
import { SecondaryButton } from "@/components/secondary-button";
import { Card } from "@/components/card";
import { StatPill } from "@/components/stat-pill";
import { LogoMark } from "@/components/logo-mark";

const colors = [
  { name: "primary", value: "#2E7D5E", className: "bg-primary" },
  { name: "primary-light", value: "#4CAF82", className: "bg-primary-light" },
  { name: "primary-dark", value: "#1A5240", className: "bg-primary-dark" },
  { name: "primary-hover", value: "#267052", className: "bg-primary-hover" },
  { name: "primary-50", value: "#E8F5EE", className: "bg-primary-50" },
  { name: "navy", value: "#1E293B", className: "bg-navy" },
  { name: "bg", value: "#FAFAF8", className: "bg-bg" },
  { name: "paper", value: "#FFFFFF", className: "bg-paper" },
  { name: "soft", value: "#F2F0EC", className: "bg-soft" },
  { name: "border", value: "#E4E0D9", className: "bg-border" },
  { name: "text", value: "#1C1B19", className: "bg-text" },
  { name: "muted", value: "#6B6760", className: "bg-muted" },
];

export default function DesignTokensPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl px-6 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4">
          <LogoMark className="h-12 w-12" />
          <h1 className="font-heading text-4xl text-text">
            Givernance Design Tokens
          </h1>
        </div>
        <p className="mt-3 text-lg text-muted">
          Visual verification of colours, typography, and reusable components.
        </p>
      </header>

      {/* Colours */}
      <section aria-labelledby="colours-heading" className="mb-16">
        <h2
          id="colours-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Colours
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {colors.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className={`${c.className} mx-auto h-16 w-16 rounded-card border border-border shadow-subtle`}
              />
              <p className="mt-2 text-sm font-medium text-text">{c.name}</p>
              <p className="text-xs text-muted">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section aria-labelledby="typography-heading" className="mb-16">
        <h2
          id="typography-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Typography
        </h2>
        <div className="space-y-6 rounded-panel border border-border bg-paper p-8 shadow-subtle">
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-muted">
              Heading — Instrument Serif
            </p>
            <h3 className="font-heading text-5xl text-text">
              The nonprofit CRM built for Europe
            </h3>
          </div>
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-muted">
              Heading 2 — Instrument Serif
            </p>
            <h3 className="font-heading text-3xl text-text">
              Purpose-built for European nonprofits
            </h3>
          </div>
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-muted">
              Body — Inter
            </p>
            <p className="max-w-prose text-base leading-7 text-text">
              Givernance replaces Salesforce complexity with a calm, affordable
              CRM designed for organisations with 2 to 200 staff. GDPR-native
              from day one, hosted in Europe, with transparent pricing and no
              surprise per-seat fees.
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-muted">
              Muted body — Inter
            </p>
            <p className="max-w-prose text-sm leading-6 text-muted">
              Move your donor data from Salesforce in days, not months. Our
              migration assistant maps your custom fields, validates records, and
              preserves your full donation history.
            </p>
          </div>
        </div>
      </section>

      {/* Shadows */}
      <section aria-labelledby="shadows-heading" className="mb-16">
        <h2
          id="shadows-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Shadows
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "subtle", className: "shadow-subtle" },
            { name: "medium", className: "shadow-medium" },
            { name: "hero", className: "shadow-hero" },
            { name: "green", className: "shadow-green" },
          ].map((s) => (
            <div
              key={s.name}
              className={`${s.className} rounded-card border border-border bg-paper p-6`}
            >
              <p className="text-sm font-medium text-text">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eyebrow */}
      <section aria-labelledby="eyebrow-heading" className="mb-16">
        <h2
          id="eyebrow-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Section Eyebrow
        </h2>
        <div className="flex flex-wrap gap-4">
          <SectionEyebrow>Built for Europe</SectionEyebrow>
          <SectionEyebrow>GDPR-native</SectionEyebrow>
          <SectionEyebrow>Open source</SectionEyebrow>
        </div>
      </section>

      {/* Buttons */}
      <section aria-labelledby="buttons-heading" className="mb-16">
        <h2
          id="buttons-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <PrimaryButton label="Get started free" />
          <PrimaryButton label="Learn more" href="#" />
          <SecondaryButton label="See pricing" />
          <SecondaryButton label="Book a demo" href="#" />
        </div>
      </section>

      {/* Cards */}
      <section aria-labelledby="cards-heading" className="mb-16">
        <h2
          id="cards-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Cards
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Donor management"
            description="Track every relationship, gift, and interaction in one clean timeline."
            icon={Heart}
            tone="default"
          />
          <Card
            title="GDPR compliance"
            description="Consent tracking, data portability, and right-to-erasure built in from day one."
            icon={Shield}
            tone="soft"
          />
          <Card
            title="Team collaboration"
            description="Role-based access, shared views, and audit trails for full transparency."
            icon={Users}
            tone="green"
          />
        </div>
      </section>

      {/* Stat Pills */}
      <section aria-labelledby="stats-heading" className="mb-16">
        <h2
          id="stats-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Stat Pills
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatPill value="86%" label="Faster onboarding" />
          <StatPill value="100%" label="GDPR compliant" />
          <StatPill value="3 days" label="Average migration" />
          <StatPill value="€0" label="Per-seat fees" />
        </div>
      </section>

      {/* Logo */}
      <section aria-labelledby="logo-heading" className="mb-16">
        <h2
          id="logo-heading"
          className="mb-6 font-heading text-2xl text-text"
        >
          Logo Mark
        </h2>
        <div className="flex items-end gap-6">
          <LogoMark className="h-8 w-8" />
          <LogoMark className="h-10 w-10" />
          <LogoMark className="h-14 w-14" />
          <LogoMark className="h-20 w-20" />
        </div>
      </section>
    </main>
  );
}
