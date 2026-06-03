import { Check, X } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function WhyChange() {
  const t = await getTranslations("whyChange");
  const statusQuo = t.raw("statusQuo") as string[];
  const withGivernance = t.raw("withGivernance") as string[];

  return (
    <section
      className="bg-deep-section text-cream py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="why-change-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sage-mid/20 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <p className="mono-label text-sage-mid mb-6">{t("kicker")}</p>
        <h2
          id="why-change-heading"
          className="font-serif text-4xl lg:text-5xl leading-tight max-w-[24ch] mb-16 lg:mb-20 text-balance"
        >
          {t("titleLead")}
          <span className="italic text-sage-light"> {t("titleAccent")}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="mono-label text-cream/70 mb-8 pb-4 border-b border-cream/15">
              {t("statusQuoLabel")}
            </p>
            <ul className="space-y-5">
              {statusQuo.map((item) => (
                <li key={item} className="flex gap-4 items-start text-cream/75">
                  <X className="size-4 shrink-0 mt-1 text-cream/40" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-base lg:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mono-label text-sage-mid mb-8 pb-4 border-b border-sage-mid/30">
              {t("withLabel")}
            </p>
            <ul className="space-y-5">
              {withGivernance.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <Check className="size-4 shrink-0 mt-1 text-sage-mid" strokeWidth={2} aria-hidden="true" />
                  <span className="text-base lg:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
