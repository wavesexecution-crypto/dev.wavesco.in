"use client";

import { useEffect } from "react";

/**
 * Locks page scroll while `active` is true using the `position: fixed` on
 * <body> technique. This keeps the page exactly where it is on mobile (the
 * `overflow: hidden` approach alone lets Safari/Chrome keep scrolling), and
 * restores the previous scroll position on unlock.
 *
 * A padding-right equal to the scrollbar width is applied while locked so the
 * disappearing scrollbar doesn't shift the layout.
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    const body = document.body;
    const savedScrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const hasScrollbar =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight;

    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };

    body.style.position = "fixed";
    body.style.top = `-${savedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    if (hasScrollbar && scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      body.style.paddingRight = prev.paddingRight;
      window.scrollTo(0, savedScrollY);
    };
  }, [active]);
}
