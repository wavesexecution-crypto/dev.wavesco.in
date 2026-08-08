import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-muted",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("flex flex-col gap-5", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
