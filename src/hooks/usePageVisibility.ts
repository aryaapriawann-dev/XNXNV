'use client';

import { useState, useEffect } from 'react';

/**
 * Hook for tracking page visibility state.
 * Returns true when the page is visible to the user.
 */
export function usePageVisibility(): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    setIsVisible(document.visibilityState === 'visible');

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return isVisible;
}

/**
 * Hook for detecting if the user is actively viewing the page.
 * Returns true when the page is visible and not minimized.
 */
export function useIsForeground(): boolean {
  return usePageVisibility();
}

/**
 * Hook that returns true if the user has switched to another tab.
 */
export function useIsBackgrounded(): boolean {
  const isVisible = usePageVisibility();
  return !isVisible;
}
