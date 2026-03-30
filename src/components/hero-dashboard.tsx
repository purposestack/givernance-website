import { getTranslations } from "next-intl/server";
import { CheckCircle2 } from "lucide-react";

const chartBars = [
  "h-[34px]",
  "h-[56px]",
  "h-[42px]",
  "h-[74px]",
  "h-[88px]",
  "h-[68px]",
  "h-[102px]",
];

export async function HeroDashboard() {
  const t = await getTranslations("dashboard");

  const suggestedActions = [
    t("action1"),
    t("action2"),
    t("action3"),
  ];

  return (
    <div className="rounded-panel border border-border bg-white/85 p-4 shadow-hero" aria-hidden="true">
      <div className="rounded-[20px] border border-border bg-soft p-5">
        {/* Header bar */}
        <div className="flex items-center justify-between rounded-card bg-white px-4 py-3">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              {t("todayOverview")}
            </div>
            <div className="mt-1 text-sm font-semibold text-text">
              {t("fundraisingDashboard")}
            </div>
          </div>
          <div className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-dark">
            {t("assistedMode")}
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Campaign card with chart */}
          <div className="rounded-card bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-text">
                  {t("postalSpringAppeal")}
                </div>
                <div className="text-xs text-muted">
                  {t("qrLinkedSegments")}
                </div>
              </div>
              <div className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-dark">
                {t("onTrack")}
              </div>
            </div>

            {/* Bar chart */}
            <div className="mt-6 flex h-40 items-end gap-3 rounded-[14px] border border-green-soft-border bg-gradient-to-b from-chart-bg to-white p-4">
              {chartBars.map((heightClass, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-[10px] ${heightClass} ${
                    i === chartBars.length - 1
                      ? "bg-primary-dark"
                      : "bg-primary opacity-90"
                  }`}
                  role="presentation"
                />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Suggested actions */}
            <div className="rounded-card bg-white p-4">
              <div className="text-sm font-semibold text-text">
                {t("suggestedNextActions")}
              </div>
              <div className="mt-4 space-y-3">
                {suggestedActions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[14px] bg-bg p-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    <span className="text-[13px] leading-6 text-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campaign ROI card */}
            <div className="rounded-card bg-navy p-5 text-white">
              <div className="text-[11px] uppercase tracking-[0.18em] text-navy-muted">
                {t("campaignRoi")}
              </div>
              <div className="mt-3 text-[34px] font-semibold tracking-tight">
                4.8&times;
              </div>
              <div className="mt-1 text-[13px] text-navy-muted">
                {t("costVsDonations")}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[13px]">
                <div className="rounded-[14px] bg-white/10 p-3">
                  <div className="text-navy-muted">{t("mailSent")}</div>
                  <div className="mt-1 font-medium text-white">{t("mailSentValue")}</div>
                </div>
                <div className="rounded-[14px] bg-white/10 p-3">
                  <div className="text-navy-muted">{t("revenue")}</div>
                  <div className="mt-1 font-medium text-white">
                    {t("revenueValue")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
