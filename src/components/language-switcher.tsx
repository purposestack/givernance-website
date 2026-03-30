"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = ["en", "fr", "de", "nl", "es"] as const;

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label={t("switchLanguage")}
        className="appearance-none cursor-pointer rounded-full border border-border bg-paper py-1.5 pl-3 pr-6 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:bg-soft hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {code.toUpperCase()}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2 h-3 w-3 text-muted"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 4.5L6 7.5L9 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
