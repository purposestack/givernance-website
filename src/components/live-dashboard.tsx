"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

function subscribe(callback: () => void): () => void {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
const getSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerSnapshot = () => false;

function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const BARS = [8, 14, 20, 28, 36, 46, 58];
const MAX_VAL = 60;

export function LiveDashboard() {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const actions = t.raw("actions") as string[];
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  /*
   * When reduced-motion is preferred, treat the dashboard as immediately active
   * so all content is visible without animation on first render.
   */
  const [active, setActive] = useState(() => reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  const [roi, setRoi] = useState(() => (reducedMotion ? 4.8 : 0));
  useEffect(() => {
    if (!active || reducedMotion) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setRoi(eased * 4.8);
      if (elapsed < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reducedMotion]);

  const currencyFmt = new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US");
  const roiStr = locale === "fr" ? roi.toFixed(1).replace(".", ",") : roi.toFixed(1);

  return (
    <div
      ref={rootRef}
      className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_30px_80px_-30px_rgba(18,135,118,0.25)]"
      role="img"
      aria-label={t("ariaLabel")}
    >
      <div className="flex items-center justify-between gap-4 mb-8 lg:mb-10">
        {/* Non-heading element: this dashboard sits inside the Hero h1 context, so no heading tag here */}
        <p className="font-sans font-medium text-lg lg:text-2xl text-ink tracking-tight">
          {t("overview")} <span className="text-ink/65">{t("dashboardLabel")}</span>
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ember/15 px-3 py-1.5 text-xs font-medium text-ember-text">
          <Sparkles className="size-3" strokeWidth={2} aria-hidden="true" />
          {t("assistedMode")}
        </span>
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 border border-border rounded-xl p-5 lg:p-6 bg-background/40">
          <div className="flex items-start justify-between gap-3 mb-6">
            <div>
              <p className="font-sans font-semibold text-base lg:text-lg text-ink">
                {t("campaign")}
              </p>
              <p className="text-xs lg:text-sm text-ink/65 mt-1">{t("campaignMeta")}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ember/15 px-2.5 py-1 text-[11px] font-medium text-ember-text shrink-0">
              <span className="size-1.5 rounded-full bg-ember animate-pulse" />
              {t("onTrack")}
            </span>
          </div>

          <div className="relative h-44 lg:h-52">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-t border-border/60" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-end justify-between gap-2 lg:gap-3 pt-2">
              {BARS.map((value, i) => {
                const pct = (value / MAX_VAL) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                    <span
                      className="font-mono text-[10px] lg:text-xs text-ink mb-1 tabular-nums"
                      style={{
                        opacity: active ? 1 : 0,
                        transform: active ? "translateY(0)" : "translateY(4px)",
                        transition: reducedMotion
                          ? undefined
                          : `opacity 400ms ${300 + i * 90}ms ease-out, transform 400ms ${300 + i * 90}ms ease-out`,
                      }}
                    >
                      €{currencyFmt.format(value)}K
                    </span>
                    <div
                      className={`w-full rounded-t-md ${i % 2 === 0 ? "bg-sage-mid" : "bg-deep"}`}
                      style={{
                        height: active ? `${pct}%` : "0%",
                        transition: reducedMotion
                          ? undefined
                          : `height 900ms ${i * 90}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between gap-2 lg:gap-3 mt-2">
            {BARS.map((_, i) => (
              <span
                key={i}
                className="flex-1 text-center text-[10px] lg:text-xs text-ink/65 font-mono"
              >
                {t("day")} {i + 1}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="border border-border rounded-xl p-5 lg:p-6 bg-background/40">
            <p className="font-sans font-semibold text-base text-ink mb-4">
              {t("nextActions")}
            </p>
            <ul className="space-y-3">
              {actions.map((action, i) => (
                <li
                  key={action}
                  className="flex items-start gap-3 text-sm text-ink/80"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateX(0)" : "translateX(-8px)",
                    transition: reducedMotion
                      ? undefined
                      : `opacity 500ms ${700 + i * 250}ms ease-out, transform 500ms ${700 + i * 250}ms ease-out`,
                  }}
                >
                  <span className="grid place-items-center size-5 rounded-full bg-sage-mid shrink-0 mt-0.5">
                    <Check className="size-3 text-cream" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="leading-snug">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-5 lg:p-6 bg-deep-section text-cream relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-12 -right-12 size-48 rounded-full bg-sage-mid/30 blur-3xl"
              style={{
                opacity: active ? 1 : 0,
                transition: reducedMotion ? undefined : "opacity 1200ms 400ms ease-out",
              }}
            />
            <p className="mono-label text-cream/70 mb-3 relative">{t("campaignRoi")}</p>
            <p className="font-sans font-light text-5xl lg:text-6xl tracking-tight tabular-nums relative">
              {roiStr}
              <span className="text-cream/70">×</span>
            </p>
            <div className="border-t border-cream/15 my-4 relative" />
            <div className="grid grid-cols-2 gap-4 relative">
              <div>
                <p className="mono-label text-cream/70 mb-1">{t("mailSent")}</p>
                <p className="font-sans font-medium text-lg tabular-nums">{currencyFmt.format(12400)}</p>
              </div>
              <div>
                <p className="mono-label text-cream/70 mb-1">{t("revenue")}</p>
                <p className="font-sans font-medium text-lg tabular-nums">€{currencyFmt.format(58240)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
