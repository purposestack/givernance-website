import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";

export async function FoundingPartners() {
  const t = await getTranslations("pricing");
  const commit = t.raw("founding.commit") as string[];
  const perks = t.raw("founding.perks") as string[];

  return (
    <section
      id="founding-partners"
      className="bg-deep-section py-20 lg:py-28 text-cream"
      aria-labelledby="founding-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="mono-label text-sage-mid mb-5">{t("founding.kicker")}</p>
            <h2 id="founding-heading" className="font-serif text-3xl lg:text-4xl leading-tight">
              {t("founding.title")}
            </h2>
            <p className="mt-6 text-lg text-cream/80 leading-relaxed max-w-[46ch]">
              {t("founding.body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink">
                {t("founding.discountLabel")}
              </span>
              <span className="inline-flex items-center rounded-full border border-cream/25 px-4 py-2 text-sm text-cream/85">
                {t("founding.spotsLabel")}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
            <div>
              <h3 className="mono-label text-sage-mid mb-5">{t("founding.commitTitle")}</h3>
              <ul className="space-y-3">
                {commit.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-sage-mid" strokeWidth={2.2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono-label text-sage-mid mb-5">{t("founding.perksTitle")}</h3>
              <ul className="space-y-3">
                {perks.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-sage-mid" strokeWidth={2.2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
