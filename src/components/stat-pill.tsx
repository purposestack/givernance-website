export function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div
      className="rounded-card border border-border bg-paper/90 px-4 py-4"
      aria-label={`${value} ${label}`}
      role="img"
    >
      <div className="text-[28px] font-semibold tracking-tight text-text" aria-hidden="true">
        {value}
      </div>
      <div className="mt-1 text-[13px] text-muted" aria-hidden="true">{label}</div>
    </div>
  );
}
