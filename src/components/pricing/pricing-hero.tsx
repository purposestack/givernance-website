import { getTranslations } from "next-intl/server";

export async function PricingHero() {
  const t = await getTranslations("pricing");

  return (
    <section className="py-20 lg:py-28 border-b border-border" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="mono-label text-deep-text mb-5">{t("kicker")}</p>
          <h1
            id="pricing-heading"
            className="font-serif text-4xl lg:text-6xl leading-[1.05]"
          >
            {t("title")}
          </h1>
          <p className="mt-7 text-lg text-ink/75 leading-relaxed max-w-[58ch]">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
