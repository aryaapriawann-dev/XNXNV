"use client";

import { ReactNode, useState } from "react";

/**
 * Tooltip component that shows content on hover
 * Supports top, bottom, left, and right positions
 */
interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function Tooltip({
  children,
  content,
  position = "top",
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className={className}>
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div
            className={`absolute ${positionClasses[position]} z-50 px-2 py-1 text-xs font-medium text-white bg-zinc-900 rounded-md shadow-lg animate-in fade-in-0 duration-100`}
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
}
