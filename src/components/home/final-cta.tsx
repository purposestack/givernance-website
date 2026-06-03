import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function FinalCTA() {
  const t = await getTranslations("cta");

  return (
    <section
      id="demo"
      className="bg-deep-section text-cream py-24 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p className="mono-label text-sage-mid mb-6">{t("kicker")}</p>
        <h2
          id="cta-heading"
          className="font-serif text-4xl lg:text-6xl leading-tight text-balance mb-10"
        >
          {t("titleLead")}{" "}
          <span className="italic text-sage-light">{t("titleAccent")}</span>
        </h2>
        <p className="text-lg text-cream/75 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("body")}
        </p>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 bg-cream text-deep-section px-8 py-4 rounded-full text-base font-medium hover:bg-sage-light transition-colors min-h-[44px]"
        >
          {t("bookDemo")}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mono-label text-cream/70 mt-8">{t("replyNote")}</p>
      </div>
    </section>
  );
}
