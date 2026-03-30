"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "nl", label: "Nederlands" },
  { code: "es", label: "Español" },
] as const;

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
      <Globe
        className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-muted"
        strokeWidth={1.7}
        aria-hidden="true"
      />
      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label={t("switchLanguage")}
        className="appearance-none rounded-full border border-border bg-paper py-1.5 pl-8 pr-7 text-xs font-medium text-text transition-colors hover:bg-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {locales.map((loc) => (
          <option key={loc.code} value={loc.code}>
            {loc.label}
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
