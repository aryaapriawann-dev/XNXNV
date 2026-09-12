"use client";

import { useEffect, useRef } from "react";

/**
 * Declarative setInterval hook
 * Auto-cleans up on unmount
 *
 * @param callback - function to call on each interval tick
 * @param delay - interval delay in milliseconds; pass null to pause
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      savedCallback.current?.();
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
