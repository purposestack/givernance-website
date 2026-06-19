import { getTranslations } from "next-intl/server";
import { Check, Minus } from "lucide-react";

type Row = {
  label: string;
  starter: string;
  organization: string;
  scale: string;
};

function Cell({ value, includedLabel, notLabel, comingLabel }: { value: string; includedLabel: string; notLabel: string; comingLabel: string }) {
  if (value === "yes") {
    return (
      <>
        <Check className="mx-auto size-4 text-deep-text" strokeWidth={2.2} aria-hidden="true" />
        <span className="sr-only">{includedLabel}</span>
      </>
    );
  }
  if (value === "no") {
    return (
      <>
        <Minus className="mx-auto size-4 text-ink/35" aria-hidden="true" />
        <span className="sr-only">{notLabel}</span>
      </>
    );
  }
  if (value === "2026") {
    return (
      <span
        className="inline-block rounded-full bg-sage-light px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-deep-section"
        aria-label={comingLabel}
      >
        2026
      </span>
    );
  }
  return <span className="text-sm text-ink/80">{value}</span>;
}

export async function PricingMatrix() {
  const t = await getTranslations("pricing");
  const tiers = t.raw("tiers") as { name: string }[];
  const rows = t.raw("matrix.rows") as Row[];
  const includedLabel = t("comparison.legendIncluded");
  const notLabel = t("comparison.legendNot");
  const comingLabel = t("matrix.comingLabel");

  return (
    <section className="py-20 lg:py-28 border-b border-border" aria-labelledby="matrix-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <h2 id="matrix-heading" className="font-serif text-3xl lg:text-4xl leading-tight">
            {t("matrix.title")}
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">{t("matrix.body")}</p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">{t("matrix.title")}</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-4 pr-4 font-serif text-base font-semibold">
                  {t("matrix.featureColumn")}
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    scope="col"
                    className="py-4 px-3 text-center font-serif text-base font-semibold"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="py-3.5 pr-4 text-sm font-medium text-ink/80">
                    {row.label}
                  </th>
                  <td className="py-3.5 px-3 text-center">
                    <Cell value={row.starter} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <Cell value={row.organization} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <Cell value={row.scale} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs text-ink/70">{t("matrix.soonNote")}</p>
      </div>
    </section>
  );
}
