const toneStyles = {
  default: "border-border bg-paper",
  soft: "border-border bg-soft",
  green: "border-green-soft-border bg-primary-50",
} as const;

export function Card({
  title,
  description,
  icon: Icon,
  tone = "default",
}: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tone?: "default" | "soft" | "green";
}) {
  return (
    <div
      className={`rounded-feature border p-6 shadow-subtle ${toneStyles[tone]}`}
    >
      {Icon ? (
        <div className="mb-4 inline-flex rounded-[12px] border border-border bg-paper p-3">
          <Icon
            className="h-5 w-5 text-primary"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}
