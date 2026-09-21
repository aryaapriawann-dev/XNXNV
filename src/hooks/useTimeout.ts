// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
// docs: tambah komentar tipe pada fungsi
import { useState, useEffect, useCallback, useRef } from "react";

interface UseTimeoutReturn {
  isRunning: boolean;
  isComplete: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

/**
 * Hook for timeout with start/stop/reset controls.
 * Fires onComplete after ms milliseconds, auto-stops on unmount.
 */
export function useTimeout(
  ms: number = 0,
  options: { autoStart?: boolean; onComplete?: () => void } = {}
): UseTimeoutReturn {
  const { autoStart = false, onComplete } = options;
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clear();
    setIsRunning(true);
    setIsComplete(false);
    timerRef.current = setTimeout(() => {
      setIsRunning(false);
      setIsComplete(true);
      onComplete?.();
    }, ms);
  }, [ms, onComplete, clear]);

  const stop = useCallback(() => {
    clear();
    setIsRunning(false);
    setIsComplete(false);
  }, [clear]);

  const reset = useCallback(() => {
    clear();
    setIsRunning(false);
    setIsComplete(false);
  }, [clear]);

  useEffect(() => {
    if (autoStart) start();
    return clear;
  }, [autoStart, start, clear]);

  return { isRunning, isComplete, start, stop, reset };
}
