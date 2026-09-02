"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const TRANSITION_DURATION = 300;

export default function PageTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setIsTransitioning(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    };

    // Listen to navigation events
    const root = document.documentElement;
    root.addEventListener("navigationstart", handleStart);
    root.addEventListener("navigationend", handleComplete);

    return () => {
      root.removeEventListener("navigationstart", handleStart);
      root.removeEventListener("navigationend", handleComplete);
    };
  }, [pathname]);

  // Initial load
  useEffect(() => {
    setIsLoading(false);
    setIsTransitioning(false);
  }, []);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div className="flex items-center justify-center h-full">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 dark:border-indigo-900 rounded-full" />
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}
