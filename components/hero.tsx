import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(closest-side, rgba(37,99,235,0.16), rgba(37,99,235,0.05) 55%, transparent)",
        }}
      />

      <Container className="relative flex flex-1 flex-col justify-center pb-28 pt-36 md:pt-40">
        <div className="flex flex-col gap-8">
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2.5 pr-4 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </div>

          <h1 className="max-w-5xl text-[clamp(2.6rem,7.2vw,6rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-foreground">
            <span className="block">We design websites</span>
            <span className="block">
              people <span className="text-accent-text">remember.</span>
            </span>
          </h1>

          <p
            className="animate-fade-up max-w-xl text-base leading-relaxed text-muted md:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            {site.name} is a small studio for businesses that want to look as
            good online as they are in person. We design, redesign and deploy —
            nothing else.
          </p>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.5s" }}
          >
            <Button href="#projects" size="lg">
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </Button>
            <Button
              href={site.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </Container>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="animate-fade-in absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-faint transition-colors hover:text-muted md:flex"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="animate-bounce-soft">
          <ArrowDown className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
