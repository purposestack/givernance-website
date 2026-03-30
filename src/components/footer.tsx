import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./logo-mark";
import { PrimaryButton } from "./primary-button";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  const productLinks = [
    { label: t("features"), href: "#product" },
    { label: t("whySwitch"), href: "#why-switch" },
    { label: t("fundraising"), href: "#fundraising" },
    { label: t("security"), href: "#security" },
  ];

  const resourceLinks = [
    { label: t("documentation"), href: "/docs" },
    { label: t("contact"), href: "/contact" },
  ];

  const legalLinks = [
    { label: t("privacyPolicy"), href: "/privacy" },
    { label: t("legalNotice"), href: "/legal" },
  ];

  return (
    <footer className="border-t border-border bg-soft" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <span className="text-base font-semibold tracking-tight">
                Givernance
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              {t("brandDescription")}
            </p>
            <p className="mt-3 max-w-xs text-sm italic leading-6 text-muted">
              {t("tagline")}
            </p>
            <div className="mt-6">
              <PrimaryButton label={t("bookDemo")} href="/demo" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-text">{t("productHeading")}</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text">{t("resourcesHeading")}</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text">{t("legalHeading")}</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted">
            {t("copyright", { year })}
          </p>
          <p className="text-sm text-muted">{t("hostedInEurope")}</p>
        </div>
      </div>
    </footer>
  );
}
