import type { Transition, Easing } from "framer-motion";

/**
 * Shared motion primitives. Use these instead of hardcoding durations and
 * curves so the entire site has one rhythm.
 */

export const easeOut: Easing = [0.2, 0.8, 0.2, 1];
export const easeInOut: Easing = [0.65, 0, 0.35, 1];

export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
  slower: 0.9,
} as const;

/** A spring transition tuned for hover micro-interactions. */
export const springHover: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.6,
};

/** A page/element fade + lift reveal. */
export const reveal: Transition = {
  duration: duration.slow,
  ease: easeOut,
};

/** Returns true when the user has asked for reduced motion. SSR-safe. */
export function shouldReduceMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
