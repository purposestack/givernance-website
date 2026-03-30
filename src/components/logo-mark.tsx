import Image from "next/image";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`} aria-hidden="true">
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="40px"
        className="object-contain"
        priority
      />
    </div>
  );
}
