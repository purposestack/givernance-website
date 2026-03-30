import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { FadeIn } from "@/components/fade-in";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const GITHUB_PAGES_BASE =
  "https://onigam.github.io/givernance/design";

type Screenshot = {
  src: string;
  titleKey: string;
  category: string;
  interactivePath: string;
};

const screenshots: Screenshot[] = [
  {
    src: "/mockups/dashboard.png",
    titleKey: "dashboard",
    category: "core",
    interactivePath: "/dashboard.html",
  },
  {
    src: "/mockups/constituents-list.png",
    titleKey: "constituentsList",
    category: "constituents",
    interactivePath: "/constituents/list.html",
  },
  {
    src: "/mockups/constituents-detail.png",
    titleKey: "constituentsDetail",
    category: "constituents",
    interactivePath: "/constituents/detail.html",
  },
  {
    src: "/mockups/donations-list.png",
    titleKey: "donationsList",
    category: "donations",
    interactivePath: "/donations/list.html",
  },
  {
    src: "/mockups/donations-new.png",
    titleKey: "donationsNew",
    category: "donations",
    interactivePath: "/donations/new.html",
  },
  {
    src: "/mockups/campaigns-list.png",
    titleKey: "campaignsList",
    category: "campaigns",
    interactivePath: "/campaigns/list.html",
  },
  {
    src: "/mockups/grants-kanban.png",
    titleKey: "grantsKanban",
    category: "grants",
    interactivePath: "/grants/kanban.html",
  },
  {
    src: "/mockups/auth-login.png",
    titleKey: "authLogin",
    category: "auth",
    interactivePath: "/auth/login.html",
  },
  {
    src: "/mockups/auth-onboarding-1.png",
    titleKey: "onboarding1",
    category: "auth",
    interactivePath: "/auth/onboarding-1.html",
  },
  {
    src: "/mockups/auth-onboarding-2.png",
    titleKey: "onboarding2",
    category: "auth",
    interactivePath: "/auth/onboarding-2.html",
  },
  {
    src: "/mockups/auth-onboarding-3.png",
    titleKey: "onboarding3",
    category: "auth",
    interactivePath: "/auth/onboarding-3.html",
  },
  {
    src: "/mockups/auth-onboarding-4.png",
    titleKey: "onboarding4",
    category: "auth",
    interactivePath: "/auth/onboarding-4.html",
  },
  {
    src: "/mockups/auth-onboarding-5.png",
    titleKey: "onboarding5",
    category: "auth",
    interactivePath: "/auth/onboarding-5.html",
  },
  {
    src: "/mockups/design-system.png",
    titleKey: "designSystem",
    category: "reference",
    interactivePath: "/design-system.html",
  },
  {
    src: "/mockups/moodboard.png",
    titleKey: "moodboard",
    category: "reference",
    interactivePath: "/moodboard.html",
  },
];

const categories = ["core", "constituents", "donations", "campaigns", "grants", "auth", "reference"] as const;

export default async function MockupsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("mockups");

  const categoryLabels: Record<string, string> = {
    core: t("categoryCore"),
    constituents: t("categoryConstituents"),
    donations: t("categoryDonations"),
    campaigns: t("categoryCampaigns"),
    grants: t("categoryGrants"),
    auth: t("categoryAuth"),
    reference: t("categoryReference"),
  };

  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-bg px-6 pb-16 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <FadeIn>
              <SectionEyebrow>{t("eyebrow")}</SectionEyebrow>
              <h1 className="mt-6 font-heading text-4xl font-medium tracking-tight text-text md:text-5xl">
                {t("heading")}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                {t("description")}
              </p>
              <p className="mt-6">
                <a
                  href={GITHUB_PAGES_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary-50 px-5 py-2.5 text-sm font-medium text-primary-dark transition-colors hover:bg-primary hover:text-white"
                >
                  {t("browseInteractive")}
                  <ExternalLink className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                </a>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Gallery by category */}
        {categories.map((category) => {
          const items = screenshots.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <section
              key={category}
              className="border-t border-border px-6 py-16 lg:px-8"
            >
              <div className="mx-auto max-w-7xl">
                <FadeIn>
                  <h2 className="font-heading text-2xl font-medium tracking-tight text-text">
                    {categoryLabels[category]}
                  </h2>
                </FadeIn>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => (
                    <FadeIn key={item.src} delay={i * 0.05}>
                      <a
                        href={`${GITHUB_PAGES_BASE}${item.interactivePath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden rounded-feature border border-border bg-paper shadow-subtle transition-all hover:-translate-y-1 hover:border-primary hover:shadow-medium"
                      >
                        <div className="relative aspect-video overflow-hidden bg-soft">
                          <Image
                            src={item.src}
                            alt={t(item.titleKey)}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                        <div className="flex items-center justify-between px-5 py-4">
                          <span className="text-sm font-medium text-text">
                            {t(item.titleKey)}
                          </span>
                          <ExternalLink
                            className="h-4 w-4 text-muted transition-colors group-hover:text-primary"
                            strokeWidth={1.7}
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Stats */}
        <section className="border-t border-border bg-soft px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <FadeIn>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="font-heading text-4xl font-medium text-primary">97</p>
                  <p className="mt-1 text-sm text-muted">{t("statScreens")}</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-medium text-primary">16</p>
                  <p className="mt-1 text-sm text-muted">{t("statModules")}</p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-medium text-primary">100%</p>
                  <p className="mt-1 text-sm text-muted">{t("statInteractive")}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
