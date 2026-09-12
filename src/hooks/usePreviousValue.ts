"use client";

import { useEffect, useState } from "react";

/**
 * Hook to track previous value of a prop or state
 * Returns the previous value from the last render
 *
 * @param value - current value to track
 * @returns previous value (undefined on first render)
 */
export function usePrevious<T>(value: T): T | undefined {
  const [previousValue, setPreviousValue] = useState<T | undefined>(undefined);

  useEffect(() => {
    setPreviousValue(value);
  }, [value]);

  return previousValue;
}
