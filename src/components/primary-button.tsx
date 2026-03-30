import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const className =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-green transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function PrimaryButton({
  label,
  href,
}: {
  label: string;
  href?: string;
}) {
  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
        <ArrowRight
          className="h-4 w-4"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {label}
      <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
    </button>
  );
}
