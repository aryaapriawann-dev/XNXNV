"use client";

import { useEffect, useRef } from "react";

/**
 * Track previous value of a prop/state
 * Useful for comparing changes
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
