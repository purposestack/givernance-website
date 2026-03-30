import { Sparkles } from "lucide-react";

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-green-soft-border bg-primary-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-dark">
      <Sparkles
        className="h-3.5 w-3.5"
        strokeWidth={1.7}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
