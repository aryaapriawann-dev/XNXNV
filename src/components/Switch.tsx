"use client";

import { InputHTMLAttributes, forwardRef } from "react";

/**
 * Switch component (toggle) with configurable size
 * Renders as a checkbox input with toggle styling
 */
interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, size = "md", className = "", ...props }, ref) => {
    const sizeClasses = {
      sm: {
        container: "w-8 h-4",
        circle: "h-3 w-3",
        translate: "translate-x-4",
      },
      md: {
        container: "w-11 h-6",
        circle: "h-4 w-4",
        translate: "translate-x-5",
      },
      lg: {
        container: "w-14 h-8",
        circle: "h-5 w-5",
        translate: "translate-x-7",
      },
    };

    const sz = sizeClasses[size];

    return (
      <label className={`inline-flex items-center gap-2 ${className}`}>
        <div className="relative">
          <input
            type="checkbox"
            ref={ref}
            className="sr-only"
            {...props}
          />
          <div
            className={`inline-block bg-zinc-300 dark:bg-zinc-600 rounded-full transition-colors ${sz.container}`}
          >
            <div
              className={`absolute top-0.5 left-0.5 bg-white dark:bg-zinc-900 rounded-full shadow transition-transform ${sz.circle} ${props.checked ? sz.translate : "translate-x-0"}`}
            />
          </div>
        </div>
        {label && <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
