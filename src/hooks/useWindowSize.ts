'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseWindowSizeReturn {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  orientation: 'portrait' | 'landscape';
}

export function useWindowSize(): UseWindowSizeReturn {
  const [windowSize, setWindowSize] = useState<UseWindowSizeReturn>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth <= 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth > 768 && window.innerWidth <= 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth > 1024 : false,
    orientation: typeof window !== 'undefined'
      ? window.innerWidth > window.innerHeight
        ? 'landscape'
        : 'portrait'
      : 'portrait',
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      isDesktop: window.innerWidth > 1024,
      orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowSize;
}

/**
 * Hook for tracking window dimensions
 * Returns width, height, device type, and orientation
 */
export function useWindowScroll(): { scrollX: number; scrollY: number; scrollPercentage: number } {
  const [scroll, setScroll] = useState({ scrollX: 0, scrollY: 0, scrollPercentage: 0 });

  const updateScroll = useCallback(() => {
    setScroll({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
      scrollPercentage: window.scrollY / ((document.documentElement.scrollHeight || 1) - window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, [updateScroll]);

  return scroll;
}
