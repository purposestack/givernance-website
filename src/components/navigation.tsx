"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LogoMark } from "./logo-mark";
import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const homePrefix = isHome ? "" : "/";

  const navLinks = [
    { label: t("infrastructure"), href: `${homePrefix}#infrastructure` },
    { label: t("product"), href: `${homePrefix}#product` },
    { label: t("governance"), href: `${homePrefix}#governance` },
    { label: t("pilots"), href: `${homePrefix}#pilots` },
  ];

  const close = useCallback(() => {
    setMobileOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, select, [tabindex]:not([tabindex="-1"])',
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("a[href], button")
        ?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [mobileOpen, close]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-border"
        aria-label={t("mainNavLabel")}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label={t("home")}>
            <LogoMark className="size-7 transition-transform group-hover:-rotate-6" />
            <span className="font-serif text-lg tracking-tight">Givernance</span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink/70 hover:text-deep transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/demo"
              className="hidden sm:inline-flex items-center gap-1.5 bg-deep-section text-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-ink transition-colors whitespace-nowrap min-h-[44px]"
            >
              {t("bookDemo")}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Link>
            <button
              ref={triggerRef}
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-border bg-cream p-3 transition-colors hover:bg-sage-light/40 lg:hidden min-h-[44px] min-w-[44px]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? (
                <X className="size-5 text-ink" strokeWidth={1.7} aria-hidden="true" />
              ) : (
                <Menu className="size-5 text-ink" strokeWidth={1.7} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-cream/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileNavLabel")}
            className="fixed top-0 right-0 z-[60] flex h-full w-80 max-w-[85vw] flex-col bg-cream border-l border-border shadow-hero"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <span className="font-serif text-base">{t("menuTitle")}</span>
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center justify-center rounded-full border border-border p-3 transition-colors hover:bg-sage-light/40 min-h-[44px] min-w-[44px]"
                aria-label={t("closeMenu")}
              >
                <X className="size-5 text-ink" strokeWidth={1.7} aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex flex-col gap-1 px-4 py-6"
              aria-label={t("mobileNavLabel")}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className="px-4 py-3 text-base text-ink hover:text-deep transition-colors rounded-lg hover:bg-sage-light/40 min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/demo"
                onClick={close}
                className="mt-4 mx-4 inline-flex items-center justify-center gap-1.5 bg-deep-section text-cream px-4 py-3 rounded-full text-sm font-medium hover:bg-ink transition-colors min-h-[44px]"
              >
                {t("bookDemo")}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
              <div className="mt-4 px-4">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
