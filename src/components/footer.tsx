import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./logo-mark";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream pt-20 pb-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-border">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <LogoMark className="size-7" />
              <span className="font-serif text-lg tracking-tight">Givernance</span>
            </div>
            <p className="text-sm text-ink/65 max-w-sm leading-relaxed">{t("tagline")}</p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <p className="mono-label text-ink/65 mb-5">{t("platform")}</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#infrastructure" className="text-ink/75 hover:text-deep transition-colors">
                  {t("infrastructure")}
                </a>
              </li>
              <li>
                <a href="#product" className="text-ink/75 hover:text-deep transition-colors">
                  {t("product")}
                </a>
              </li>
              <li>
                <a href="#governance" className="text-ink/75 hover:text-deep transition-colors">
                  {t("aiGovernance")}
                </a>
              </li>
              <li>
                <a href="#pilots" className="text-ink/75 hover:text-deep transition-colors">
                  {t("earlyAccess")}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label text-ink/65 mb-5">{t("footprint")}</p>
            <ul className="space-y-3 text-sm text-ink/75">
              <li>{t("geneva")}</li>
              <li>{t("paris")}</li>
              <li>{t("hostedInEurope")}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="mono-label text-ink/65">
            © {year} Givernance · {t("copyright")}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="mono-label text-ink/65 hover:text-deep-text transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="mono-label text-ink/65 hover:text-deep-text transition-colors">
              {t("terms")}
            </Link>
            <a href="https://github.com/purposestack" className="mono-label text-ink/65 hover:text-deep-text transition-colors">
              {t("github")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
