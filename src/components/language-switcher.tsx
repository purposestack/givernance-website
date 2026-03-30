"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
] as const;

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  function handleSwitch(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border bg-paper p-1"
      role="group"
      aria-label={t("switchLanguage")}
    >
      {locales.map((loc) => {
        const isCurrent = currentLocale === loc.code;
        return (
          <button
            key={loc.code}
            type="button"
            onClick={() => !isCurrent && handleSwitch(loc.code)}
            aria-current={isCurrent ? "true" : undefined}
            aria-disabled={isCurrent || undefined}
            aria-label={
              isCurrent
                ? t("currentLanguage")
                : `${t("switchLanguage")}: ${loc.label}`
            }
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isCurrent
                ? "bg-primary text-white cursor-default"
                : "text-muted hover:bg-soft hover:text-text"
            }`}
          >
            {loc.label}
          </button>
        );
      })}
    </div>
  );
}
