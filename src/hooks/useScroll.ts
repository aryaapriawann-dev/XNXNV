'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Hook for tracking scroll progress as a percentage.
 * Returns the scroll progress percentage (0-100).
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollPercentage)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}

/**
 * Hook for getting scroll direction (up, down, or idle).
 */
export function useScrollDirection(): 'up' | 'down' | 'idle' {
  const [direction, setDirection] = useState<'up' | 'down' | 'idle'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return direction;
}

/**
 * Hook for getting scroll position and percentage.
 */
export function useScrollPosition(): {
  x: number;
  y: number;
  maxY: number;
  percentage: number;
  direction: 'up' | 'down' | 'idle';
} {
  const [scroll, setScroll] = useState<{
    x: number;
    y: number;
    maxY: number;
    percentage: number;
    direction: 'up' | 'down' | 'idle';
  }>({
    x: 0,
    y: 0,
    maxY: 0,
    percentage: 0,
    direction: 'idle',
  });

  const updateScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const x = window.scrollX;
    const y = window.scrollY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = maxY > 0 ? (y / maxY) * 100 : 0;

    setScroll({
      x,
      y,
      maxY,
      percentage: Math.min(100, Math.max(0, percentage)),
      direction: y > 0 ? 'down' : 'up',
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
