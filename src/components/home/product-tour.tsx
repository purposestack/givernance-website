import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Module = { n: string; title: string; body: string };

export async function ProductTour() {
  const t = await getTranslations("product");
  const modules = t.raw("modules") as Module[];

  return (
    <section
      id="product"
      className="py-24 lg:py-32 border-b border-border"
      aria-labelledby="product-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="mono-label text-deep-text mb-5">{t("kicker")}</p>
            <h2 id="product-heading" className="font-serif text-4xl lg:text-5xl leading-tight text-balance">
              {t("titleLead")}{" "}
              <span className="italic">{t("titleAccent")}</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-ink/75 leading-relaxed self-end">
            {t("body")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-border">
          {modules.map((m, i) => (
            <article
              key={m.n}
              className={`border-r border-b border-border p-7 lg:p-8 group ${
                i === 0 ? "bg-sage-light/40" : "bg-cream"
              } hover:bg-sage-light/40 transition-colors`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-xs text-deep-text">{m.n}</span>
                <ArrowUpRight
                  className="size-4 text-ink/30 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{m.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{m.body}</p>
            </article>
          ))}
          <article className="border-r border-b border-border p-7 lg:p-8 bg-deep-section text-cream flex flex-col justify-between">
            <span className="mono-label text-sage-mid">+</span>
            <div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {t("ledgerTitle")}
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed">
                {t("ledgerBody")}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
