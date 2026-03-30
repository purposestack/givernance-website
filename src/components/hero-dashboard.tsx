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

const suggestedActions = [
  "Send thank-you emails to 26 new donors",
  "Review anomaly in QR campaign attribution",
  "Confirm Stripe Connect onboarding for Fondation Horizon",
];

export function HeroDashboard() {
  return (
    <div className="rounded-panel border border-border bg-white/85 p-4 shadow-hero" aria-hidden="true">
      <div className="rounded-[20px] border border-border bg-soft p-5">
        {/* Header bar */}
        <div className="flex items-center justify-between rounded-card bg-white px-4 py-3">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Today&apos;s overview
            </div>
            <div className="mt-1 text-sm font-semibold text-text">
              Fundraising dashboard
            </div>
          </div>
          <div className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-dark">
            Assisted mode
          </div>
        </div>

        {/* Content grid */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Campaign card with chart */}
          <div className="rounded-card bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-text">
                  Postal spring appeal
                </div>
                <div className="text-xs text-muted">
                  QR-linked / 3 donor segments
                </div>
              </div>
              <div className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-dark">
                On track
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
                Suggested next actions
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
                Campaign ROI
              </div>
              <div className="mt-3 text-[34px] font-semibold tracking-tight">
                4.8&times;
              </div>
              <div className="mt-1 text-[13px] text-navy-muted">
                Cost vs donations received
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[13px]">
                <div className="rounded-[14px] bg-white/10 p-3">
                  <div className="text-navy-muted">Mail sent</div>
                  <div className="mt-1 font-medium text-white">12,400</div>
                </div>
                <div className="rounded-[14px] bg-white/10 p-3">
                  <div className="text-navy-muted">Revenue</div>
                  <div className="mt-1 font-medium text-white">
                    &euro;58,240
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
