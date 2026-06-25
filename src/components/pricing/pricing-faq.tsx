import { getTranslations } from "next-intl/server";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

export async function PricingFAQ() {
  const t = await getTranslations("pricing");
  const items = t.raw("faq.items") as Item[];

  return (
    <section className="py-20 lg:py-28 border-b border-border" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 id="faq-heading" className="font-serif text-3xl lg:text-4xl leading-tight">
              {t("faq.title")}
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {/* details/summary provides native disclosure semantics; no dl needed */}
            <div className="divide-y divide-border border-t border-border">
              {items.map((item) => (
                <details key={item.q} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left">
                    <span className="font-serif text-lg text-ink">{item.q}</span>
                    <Plus
                      className="size-5 shrink-0 text-deep-text transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="pb-5 pr-9 text-sm text-ink/70 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
