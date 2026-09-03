"use client";

import { InputHTMLAttributes, forwardRef } from "react";

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
        circle: "h-5 w-5",
        translate: "translate-x-5",
      },
      lg: {
        container: "w-14 h-7",
        circle: "h-6 w-6",
        translate: "translate-x-7",
      },
    };

    const sizes = sizeClasses[size];

    return (
      <label className="inline-flex items-center gap-3 cursor-pointer">
        <input ref={ref} type="checkbox" className="sr-only peer" {...props} />
        <div
          className={`${sizes.container} bg-zinc-300 dark:bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500/20 rounded-full peer peer-checked:after:${sizes.translate} peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:${sizes.circle} after:transition-all relative ${className}`}
        />
        {label && (
          <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
