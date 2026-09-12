"use client";

/**
 * Keyboard navigation component for menu items.
 * Adds keyboard support for menu navigation.
 */
import { useEffect, useRef } from "react";

interface KeyboardNavigationProps {
  children: React.ReactNode;
  items?: Array<{ id?: string; disabled?: boolean }>;
}

export default function KeyboardNavigation({ children, items = [] }: KeyboardNavigationProps) {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = itemRefs.current.findIndex((el) => el?.contains(document.activeElement));
      let nextIndex = currentIndex;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = Math.min(currentIndex + 1, items.length - 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = Math.max(currentIndex - 1, 0);
      } else if (e.key === "Home") {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        nextIndex = items.length - 1;
      } else if (e.key === "Escape") {
        (document.activeElement as HTMLElement)?.blur();
        return;
      }

      if (nextIndex !== currentIndex && itemRefs.current[nextIndex]) {
        itemRefs.current[nextIndex]?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items]);

  return (
    <div className="relative">
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el as HTMLElement;
          }}
          tabIndex={0}
          role="menuitem"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
