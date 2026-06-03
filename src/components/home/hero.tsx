"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/logo-mark";
import { Typewriter } from "@/components/typewriter";
import { LiveDashboard } from "@/components/live-dashboard";

function WaveBackdrop() {
  return (
    <svg
      className="hero-waves pointer-events-none absolute inset-y-0 right-0 w-[60%] h-full"
      viewBox="0 0 800 900"
      preserveAspectRatio="xMaxYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveFade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--color-deep)" stopOpacity="0" />
          <stop offset="70%" stopColor="var(--color-deep)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-ember)" stopOpacity="0.35" />
        </linearGradient>
        <path
          id="wave-path"
          d="M-200,450 C-50,380 50,520 200,450 C350,380 450,520 600,450 C750,380 850,520 1000,450 C1150,380 1250,520 1400,450"
        />
      </defs>
      <g fill="none" stroke="url(#waveFade)" strokeWidth="0.9" strokeLinecap="round">
        {Array.from({ length: 14 }).map((_, i) => (
          <g key={i} transform={`translate(0 ${(i - 6.5) * 42})`}>
            <use
              href="#wave-path"
              className="hero-wave-line"
              style={{
                opacity: 0.55 + (i % 3) * 0.15,
                animationDelay: `${i * -2}s`,
                animationDuration: `${28 + (i % 3) * 4}s`,
              }}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("hero");
  const titleAccents = t.raw("titleAccents") as string[];

  return (
    <header className="relative overflow-hidden border-b border-border" id="hero">
      <WaveBackdrop />
      <div
        className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none bg-ember"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-20 lg:pb-32 relative">
        <div className="max-w-4xl">
          <p className="mono-label text-deep-text mb-8 animate-fade-up">{t("kicker")}</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.05] tracking-tight text-balance max-w-[20ch] animate-fade-up-delay-1">
            <span className="block">{t("titleLead")}</span>
            <Typewriter
              words={titleAccents}
              className="block italic text-deep-text whitespace-nowrap text-[0.55em] sm:text-[0.5em] mt-3"
            />
          </h1>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end animate-fade-up-delay-2 relative">
          <p className="lg:col-span-6 text-lg lg:text-xl text-ink/75 leading-relaxed text-pretty max-w-[52ch]">
            {t("body")}
          </p>
          <div className="lg:col-span-6 lg:flex lg:justify-start">
            <div className="flex flex-col gap-4 items-start">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 bg-deep-section text-cream px-6 py-3.5 rounded-full text-base font-medium hover:bg-ink transition-colors w-fit min-h-[44px]"
              >
                {t("bookDemo")}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <p className="mono-label text-ink/65">{t("replyNote")}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 animate-fade-up-delay-3 relative">
          <div className="relative">
            <div className="absolute -inset-x-4 -bottom-4 h-1/3 bg-sage-light/30 -z-10 rounded-2xl" />
            <LiveDashboard />
            <LogoMark
              className="pointer-events-none select-none absolute -top-6 -right-5 lg:-top-9 lg:-right-9 w-14 lg:w-20 h-auto drop-shadow-[0_14px_32px_rgba(15,42,55,0.22)] animate-slow-spin hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
