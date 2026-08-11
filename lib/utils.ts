import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combine class names safely with Tailwind-aware merging. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
