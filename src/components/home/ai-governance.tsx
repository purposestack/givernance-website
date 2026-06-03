import { getTranslations } from "next-intl/server";

type AiMode = { code: string; name: string; body: string; badge?: string };

export async function AIGovernance() {
  const t = await getTranslations("ai");
  const modes = t.raw("modes") as AiMode[];
  const weights = ["border", "ring", "filled"] as const;

  return (
    <section
      id="governance"
      className="py-24 lg:py-32 bg-sage-light/30 border-b border-border"
      aria-labelledby="ai-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="mono-label text-deep-text mb-5">{t("kicker")}</p>
            <h2 id="ai-heading" className="font-serif text-4xl lg:text-5xl leading-tight text-balance">
              {t("titleLead")} <span className="italic">{t("titleAccent")}</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-lg text-ink/75 leading-relaxed self-end">
            {t("body")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">
          {modes.map((mode, i) => {
            const weight = weights[i];
            return (
              <article
                key={mode.code}
                className={`p-8 lg:p-10 bg-cream flex flex-col gap-6 ${
                  weight === "ring" ? "outline outline-2 -outline-offset-2 outline-deep" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`size-12 rounded-full flex items-center justify-center font-mono text-sm font-medium ${
                      weight === "filled"
                        ? "bg-deep-section text-cream"
                        : weight === "ring"
                        ? "bg-deep/10 text-deep-section border border-deep-section"
                        : "border border-ink/20 text-ink/65"
                    }`}
                  >
                    {mode.code}
                  </div>
                  {mode.badge && (
                    <span className="mono-label text-ember-text bg-ember/12 px-2 py-1 rounded">
                      {mode.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-3">{mode.name}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{mode.body}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink/65 max-w-2xl mx-auto">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
