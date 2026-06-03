import { getTranslations } from "next-intl/server";

export async function MarqueeStrip() {
  const t = await getTranslations();
  const items = t.raw("marquee") as string[];

  return (
    <section
      className="border-b border-border bg-sage-light/30"
      aria-label={t("marqueeLabel")}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        {items.map((label) => (
          <div key={label} className="flex items-center gap-2 text-sm text-deep-text">
            <span className="size-1.5 rounded-full bg-ember" aria-hidden="true" />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
