import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path
        d="M2 9c2.2-2.6 4.6-2.6 6.8 0s4.6 2.6 6.8 0 4.6-2.6 6.8 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M2 14c2.2-2.6 4.6-2.6 6.8 0s4.6 2.6 6.8 0 4.6-2.6 6.8 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-accent">
        <LogoMark className="h-4 w-4" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-foreground">
        WavesCo
      </span>
    </span>
  );
}
