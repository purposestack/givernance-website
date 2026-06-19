import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function PricingCTA() {
  const t = await getTranslations("pricing");

  return (
    <section className="py-24 lg:py-32" aria-labelledby="pricing-cta-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-cta-heading" className="font-serif text-3xl lg:text-5xl leading-tight">
            {t("cta.title")}
          </h2>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">{t("cta.body")}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-deep-section px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink"
            >
              {t("cta.button")}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <p className="mono-label text-ink/70">{t("cta.replyNote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
