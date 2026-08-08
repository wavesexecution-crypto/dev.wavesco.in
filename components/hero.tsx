"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export function Hero() {
  const reduce = useReducedMotion();

  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-2.5 pr-4 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <h1 className="max-w-5xl text-[clamp(2.6rem,7.2vw,6rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-foreground">
            <motion.span variants={item} className="block text-gradient">
              We design websites
            </motion.span>
            <motion.span variants={item} className="block">
              people{" "}
              <span className="text-gradient-accent">remember.</span>
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.name} is a small studio for businesses that want to look as
            good online as they are in person. We design, redesign and deploy —
            nothing else.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Button href="#projects" size="lg">
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </Button>
            <Button href={site.booking.url} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              Book a Call
              <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-faint transition-colors hover:text-muted md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
