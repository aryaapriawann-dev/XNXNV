import { useState, useEffect, useCallback } from "react";

interface UseTimerOptions {
  initialSeconds?: number;
  autoStart?: boolean;
  onComplete?: () => void;
  onTick?: (secondsLeft: number) => void;
}

interface UseTimerReturn {
  seconds: number;
  isRunning: boolean;
  isPaused: boolean;
  isComplete: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (seconds?: number) => void;
  toggle: () => void;
}

/**
 * Hook for countdown timer with start, pause, resume, reset, and toggle controls.
 * Auto-cleans up interval on unmount and supports completion callback.
 *
 * @param seconds - initial countdown seconds
 * @param options - { initialSeconds, autoStart, onComplete, onTick }
 * @returns object with timer state and controls
 */
export function useTimer(
  seconds: number = 0,
  options: UseTimerOptions = {}
): UseTimerReturn {
  const {
    initialSeconds = seconds,
    autoStart = false,
    onComplete,
    onTick,
  } = options;

  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const tick = useCallback(() => {
    setTimeLeft((prev) => {
      if (prev <= 0) {
        setIsRunning(false);
        setIsPaused(false);
        setIsComplete(true);
        onComplete?.();
        return 0;
      }
      onTick?.(prev - 1);
      return prev - 1;
    });
  }, [onComplete, onTick]);

  useEffect(() => {
    if (!isRunning || isPaused) return;

    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [isRunning, isPaused, tick]);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);
    setIsComplete(false);
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
    setIsRunning(false);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
    setIsRunning(true);
  }, []);

  const reset = useCallback(
    (newSeconds?: number) => {
      const secondsToReset = newSeconds !== undefined ? newSeconds : initialSeconds;
      setTimeLeft(secondsToReset);
      setIsRunning(false);
      setIsPaused(false);
      setIsComplete(false);
    },
    [initialSeconds]
  );

  const toggle = useCallback(() => {
    if (isComplete) {
      reset();
      start();
    } else if (isRunning) {
      pause();
    } else {
      resume();
    }
  }, [isRunning, isPaused, isComplete, reset, start, pause, resume]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
  }, [autoStart, start]);

  return {
    seconds: timeLeft,
    isRunning,
    isPaused,
    isComplete,
    start,
    pause,
    resume,
    reset,
    toggle,
  };
}
