"use client";

import { useState, useEffect } from "react";

/**
 * Animated counter that animates from 0 to target value on scroll into view
 */
export default function AnimatedCounter({
  target = 0,
  duration = 2000,
  className = "",
}: {
  target?: number;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById("counter") || document.body);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span
      id="counter"
      className={`text-3xl font-bold text-indigo-600 dark:text-indigo-400 ${className}`}
    >
      {count.toLocaleString()}
    </span>
  );
}
