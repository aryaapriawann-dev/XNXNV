"use client";

import { useEffect, useState } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Track window scroll position
 * Returns current X and Y scroll offset
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
