import { getTranslations } from "next-intl/server";

export async function Pilots() {
  const t = await getTranslations("pilots");

  return (
    <section
      id="pilots"
      className="py-24 lg:py-32 border-b border-border"
      aria-labelledby="pilots-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="mono-label text-deep-text mb-5">{t("kicker")}</p>
          <h2 id="pilots-heading" className="font-serif text-4xl lg:text-5xl leading-tight text-balance">
            {t("titleLead")} <span className="italic">{t("titleAccent")}</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8">
          <p className="text-lg text-ink/75 leading-relaxed">{t("body")}</p>
          <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="mono-label text-ink/65 mb-2">{t("hosted")}</dt>
              <dd className="font-serif text-xl text-deep-text">{t("hostedValue")}</dd>
            </div>
            <div>
              <dt className="mono-label text-ink/65 mb-2">{t("compliance")}</dt>
              <dd className="font-serif text-xl text-deep-text">{t("complianceValue")}</dd>
            </div>
            <div>
              <dt className="mono-label text-ink/65 mb-2">{t("lockin")}</dt>
              <dd className="font-serif text-xl text-deep-text">{t("lockinValue")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
