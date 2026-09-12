"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Detect when element enters viewport
 * Uses Intersection Observer API
 *
 * @param ref - element ref to observe
 * @param options - IntersectionObserver options (optional)
 * @returns true when element is visible in viewport
 */
export function useOnScreen(
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}
