"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Feature = { label: string; soon?: boolean };
type Tier = {
  id: "starter" | "organization" | "scale";
  name: string;
  tagline: string;
  audience: string;
  cta: string;
  features: Feature[];
  limitsTitle?: string;
  limits?: string[];
};

type Currency = "EUR" | "CHF";
type Billing = "annual" | "monthly";

const PRICES: Record<string, { annual: number; monthly: number } | null> = {
  starter: { annual: 79, monthly: 99 },
  organization: { annual: 399, monthly: 499 },
  scale: null,
};
const SCALE_FROM = 999;

function format(amount: number, currency: Currency): string {
  const value = Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
  return currency === "EUR" ? `€${value}` : `CHF ${value}`;
}

export function PricingPlans() {
  const t = useTranslations("pricing");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [billing, setBilling] = useState<Billing>("annual");
  const tiers = t.raw("tiers") as Tier[];
  const per = t("perMonth");

  return (
    <section
      id="plans"
      className="py-20 lg:py-28 border-b border-border"
      aria-labelledby="plans-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 id="plans-heading" className="font-serif text-3xl lg:text-4xl leading-tight">
            {t("tiersHeading")}
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            {/* Billing toggle */}
            <div
              className="inline-flex rounded-full border border-border bg-card p-1"
              role="group"
              aria-label={t("billingLabel")}
            >
              {(["annual", "monthly"] as Billing[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  aria-pressed={billing === option}
                  className={`min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors ${
                    billing === option
                      ? "bg-deep-section text-cream"
                      : "text-ink/70 hover:text-deep-text"
                  }`}
                >
                  {t(option)}
                  {option === "annual" && (
                    <span
                      className={`ml-1.5 hidden font-mono text-[0.625rem] uppercase tracking-wider sm:inline ${
                        billing === "annual" ? "text-cream" : "text-ember-text"
                      }`}
                    >
                      {t("annualSave")}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Currency toggle */}
            <div
              className="inline-flex rounded-full border border-border bg-card p-1"
              role="group"
              aria-label={t("currencyLabel")}
            >
              {(["EUR", "CHF"] as Currency[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCurrency(option)}
                  aria-pressed={currency === option}
                  className={`min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors ${
                    currency === option
                      ? "bg-deep-section text-cream"
                      : "text-ink/70 hover:text-deep-text"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-ember-text">{t("launchNote")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {tiers.map((tier, index) => {
            const price = PRICES[tier.id];
            const highlighted = tier.id === "organization";
            const previousName = index > 0 ? tiers[index - 1].name : null;

            return (
              <article
                key={tier.id}
                className={`flex h-full flex-col rounded-2xl border bg-card p-7 lg:p-8 transition-colors ${
                  highlighted
                    ? "border-deep-text shadow-medium ring-1 ring-deep-text"
                    : "border-border"
                }`}
                aria-labelledby={`tier-${tier.id}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 id={`tier-${tier.id}`} className="font-serif text-2xl">
                    {tier.name}
                  </h3>
                  {highlighted && (
                    <span className="mono-label rounded-full bg-deep-section px-2.5 py-1 text-cream">
                      {t("mostChosen")}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{tier.tagline}</p>

                {/* Price block */}
                <div className="mt-6 min-h-[5.5rem]">
                  {price ? (
                    <>
                      <p className="font-serif text-4xl text-ink">
                        {format(price[billing], currency)}
                        <span className="ml-1 text-base font-sans text-ink/70">{per}</span>
                      </p>
                      <p className="mt-1 text-xs text-ink/70">
                        {billing === "annual"
                          ? `${t("billedAnnually")} · ${format(price.annual * 12, currency)}`
                          : t("billedMonthly")}
                      </p>
                      {billing === "annual" && (
                        <p className="mt-1 text-xs font-medium text-ember-text">
                          {t("foundingPrice", {
                            price: format(price.annual * 0.5, currency),
                            per,
                          })}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="font-serif text-4xl text-ink">{t("customPrice")}</p>
                      <p className="mt-1 text-xs text-ink/70">
                        {t("fromLabel")} {format(SCALE_FROM, currency)}
                        {per}
                      </p>
                    </>
                  )}
                </div>

                <Link
                  href="/demo"
                  className={`mt-2 inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full px-5 text-sm font-medium transition-colors ${
                    highlighted
                      ? "bg-deep-section text-cream hover:bg-ink"
                      : "border border-deep-text text-deep-text hover:bg-sage-light/50"
                  }`}
                >
                  {tier.cta}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>

                <p className="mt-7 text-sm text-ink/75">{tier.audience}</p>

                {previousName && (
                  <p className="mt-6 text-sm font-medium text-deep-text">
                    {t("includesPrevious", { plan: previousName })}
                  </p>
                )}

                <ul className="mt-4 space-y-3" aria-label={tier.name}>
                  {tier.features.map((feature) => (
                    <li key={feature.label} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-deep-text"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <span className="text-ink/80">
                        {feature.label}
                        {feature.soon && (
                          <span className="ml-2 inline-block rounded-full bg-sage-light px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-deep-section align-middle">
                            {t("soonBadge")}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.limits && tier.limits.length > 0 && (
                  <div className="mt-7 border-t border-border pt-5">
                    <p className="mono-label text-ink/70">{tier.limitsTitle}</p>
                    <ul className="mt-3 space-y-2">
                      {tier.limits.map((limit) => (
                        <li key={limit} className="text-xs text-ink/70 leading-relaxed">
                          {limit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
