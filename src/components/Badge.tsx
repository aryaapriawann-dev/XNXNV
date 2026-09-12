"use client";

/**
 * Badge component for displaying labels and status indicators.
 * Supports multiple color variants for different semantic meanings.
 */
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
        secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
        outline: "border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300",
        success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
        error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export { badgeVariants };
export const Badge = badgeVariants;
