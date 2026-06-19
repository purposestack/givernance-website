import { getTranslations } from "next-intl/server";
import { Check, Minus } from "lucide-react";

type Row = { label: string; sf: string; bl: string; gv: string };

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
  return <span className="text-sm text-ink/70">{value}</span>;
}

export async function PricingComparison() {
  const t = await getTranslations("pricing");
  const rows = t.raw("comparison.rows") as Row[];
  const includedLabel = t("comparison.legendIncluded");
  const notLabel = t("comparison.legendNot");
  const comingLabel = t("matrix.comingLabel");

  return (
    <section className="py-20 lg:py-28 border-b border-border" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-12">
          <p className="mono-label text-deep-text mb-5">{t("comparison.kicker")}</p>
          <h2 id="comparison-heading" className="font-serif text-3xl lg:text-4xl leading-tight">
            {t("comparison.title")}
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed">{t("comparison.body")}</p>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">{t("comparison.title")}</caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-4 pr-4 font-serif text-base font-semibold">
                  {t("comparison.featureColumn")}
                </th>
                <th scope="col" className="rounded-t-xl bg-sage-light/50 py-4 px-3 text-center font-serif text-base font-semibold text-deep-section">
                  {t("comparison.us")}
                </th>
                <th scope="col" className="py-4 px-3 text-center font-serif text-base font-semibold text-ink/70">
                  {t("comparison.competitorA")}
                </th>
                <th scope="col" className="py-4 px-3 text-center font-serif text-base font-semibold text-ink/70">
                  {t("comparison.competitorB")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="py-3.5 pr-4 text-sm font-medium text-ink/80">
                    {row.label}
                  </th>
                  <td className="bg-sage-light/30 py-3.5 px-3 text-center">
                    <Cell value={row.gv} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <Cell value={row.sf} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                  <td className="py-3.5 px-3 text-center">
                    <Cell value={row.bl} includedLabel={includedLabel} notLabel={notLabel} comingLabel={comingLabel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
