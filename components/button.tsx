"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_24px_-8px_rgba(37,99,235,0.6)]",
  secondary:
    "border border-line bg-surface/60 text-foreground hover:border-zinc-600 hover:bg-surface",
  ghost: "text-foreground hover:text-white",
};

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-7 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: HTMLMotionProps<"a"> & {
  variant?: Variant;
  size?: keyof typeof sizes;
}) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.a>
  );
}
