"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./logo-mark";
import { PrimaryButton } from "./primary-button";

import { LanguageSwitcher } from "./language-switcher";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations("nav");

  const navLinks = [
    { label: t("product"), href: "#product" },
    { label: t("whySwitch"), href: "#why-switch" },
    { label: t("fundraising"), href: "#fundraising" },
    { label: t("security"), href: "#security" },
    { label: t("resources"), href: "#resources" },
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
          'a[href], button, [tabindex]:not([tabindex="-1"])',
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
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={t("home")}
          >
            <LogoMark />
            <div>
              <div className="text-base font-semibold tracking-tight">
                Givernance
              </div>
              <div className="hidden whitespace-nowrap text-xs text-muted sm:block">
                {t("tagline")}
              </div>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label={t("mainNavLabel")}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <PrimaryButton label={t("bookDemo")} href="/demo" />
            </div>
            <LanguageSwitcher />
            <button
              ref={triggerRef}
              type="button"
              className="inline-flex rounded-full border border-border bg-paper p-3 transition-colors hover:bg-soft lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileOpen ? (
                <X
                  className="h-5 w-5 text-text"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="h-5 w-5 text-text"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — rendered OUTSIDE <header> to escape its stacking context */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Full-page opaque backdrop — blocks all content underneath */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={
                shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }
              }
              className="fixed inset-0 z-50 bg-bg"
              onClick={close}
              aria-hidden="true"
            />

            {/* Slide-in panel — above the backdrop */}
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={t("mobileNavLabel")}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", damping: 25, stiffness: 300 }
              }
              className="fixed top-0 right-0 z-[60] flex h-full w-80 max-w-[85vw] flex-col bg-paper shadow-hero"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="text-base font-semibold">{t("menuTitle")}</span>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-border p-3 transition-colors hover:bg-soft"
                  aria-label={t("closeMenu")}
                >
                  <X
                    className="h-5 w-5 text-text"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Nav links only — no duplicate CTAs */}
              <nav
                className="flex flex-col gap-1 px-4 py-6"
                aria-label={t("mobileNavLabel")}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={close}
                    className="rounded-card px-4 py-3 text-base font-medium text-text transition-colors hover:bg-soft"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 px-4">
                  <LanguageSwitcher />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
