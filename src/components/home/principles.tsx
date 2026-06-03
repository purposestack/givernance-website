import { getTranslations } from "next-intl/server";

type PrincipleItem = { n: string; title: string; body: string };

export async function Principles() {
  const t = await getTranslations("principles");
  const items = t.raw("items") as PrincipleItem[];

  return (
    <section
      id="infrastructure"
      className="py-24 lg:py-32 border-b border-border"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <p className="mono-label text-deep-text mb-5">{t("kicker")}</p>
            <h2 id="principles-heading" className="font-serif text-4xl lg:text-5xl leading-tight">
              {t("title")}
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 text-lg text-ink/75 leading-relaxed self-end max-w-[52ch]">
            {t("body")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
          {items.map((p) => (
            <article
              key={p.n}
              className="border-r border-b border-border p-7 lg:p-8 bg-cream hover:bg-sage-light/40 transition-colors"
            >
              <p className="font-mono text-xs text-ember-text mb-8">{p.n}</p>
              <h3 className="font-serif text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
