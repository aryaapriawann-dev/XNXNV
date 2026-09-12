"use client";

import { useEffect, useRef } from "react";

/**
 * Track previous value of a prop/state
 * Useful for comparing changes
 *
 * @param value - current value to track
 * @returns previous value from last render, or undefined on first render
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
