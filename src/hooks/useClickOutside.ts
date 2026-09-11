'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for detecting if a click event occurred outside a referenced element.
 * Returns true when a click outside is detected since last reset.
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  events?: string[]
): void {
  const { current } = ref;
  const savedHandler = useCallback(handler, [handler]);

  useEffect(() => {
    if (!current || typeof document === 'undefined') return;

    const onClickOutside = (event: MouseEvent | TouchEvent) => {
      if (event && event.target && !current.contains(event.target as Node)) {
        savedHandler(event);
      }
    };

    const onClick = onClickOutside.bind(null);
    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      if (touch && current && !current.contains(touch.target as Node)) {
        savedHandler(e);
      }
    };

    const eventArray = events || ['mousedown', 'touchstart'];
    eventArray.forEach((eventName) => {
      document.addEventListener(eventName, onClickOutside, true);
    });

    // Separate handling for touchend to capture outside touches
    document.addEventListener('touchend', onTouchEnd, true);

    return () => {
      eventArray.forEach((eventName) => {
        document.removeEventListener(eventName, onClickOutside, true);
      });
      document.removeEventListener('touchend', onTouchEnd, true);
    };
  }, [ref, savedHandler, events]);
}

/**
 * Hook for click outside detection with a boolean state.
 * Returns true when a click outside is detected.
 */
export function useIsClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: () => void
): boolean {
  const [isOutside, setIsOutside] = useState<boolean>(false);

  const handleClickOutside = useCallback(() => {
    setIsOutside(true);
    handler();
  }, [handler]);

  useEffect(() => {
    if (!ref.current || typeof document === 'undefined') return;

    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setIsOutside(true);
        handler();
      }
    };

    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [ref, handleClickOutside]);

  return isOutside;
}
