"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if element is visible in viewport
 *
 * @param ref - element ref to observe
 * @returns true when element is visible in viewport
 */
export function useInView(ref: React.RefObject<HTMLElement | null>): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}
