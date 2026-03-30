export function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-card border border-border bg-paper/90 px-4 py-4">
      <div className="text-[28px] font-semibold tracking-tight text-text">
        {value}
      </div>
      <div className="mt-1 text-[13px] text-muted">{label}</div>
    </div>
  );
}
