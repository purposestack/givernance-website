export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className="relative shrink-0" aria-hidden="true">
      <svg
        viewBox="0 0 128 128"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 25C39 32 29 38 18 43C25 59 37 71 52 77C56 66 56 54 50 25Z"
          className="fill-primary"
        />
        <path
          d="M78 25C89 32 99 38 110 43C103 59 91 71 76 77C72 66 72 54 78 25Z"
          className="fill-primary"
        />
        <path
          d="M64 22C54 29 52 39 55 49C58 61 57 74 52 88C48 99 42 108 35 114C49 112 59 106 66 96C74 84 79 70 81 53C83 40 78 29 64 22Z"
          className="fill-primary"
        />
        <path
          d="M44 86C38 88 33 92 29 97C35 98 40 97 45 95C49 93 53 90 56 87C51 85 47 85 44 86Z"
          className="fill-primary"
        />
        <path
          d="M84 86C90 88 95 92 99 97C93 98 88 97 83 95C79 93 75 90 72 87C77 85 81 85 84 86Z"
          className="fill-primary"
        />
      </svg>
    </div>
  );
}
