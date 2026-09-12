interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

/**
 * Progress bar component with configurable value, max, variant, and size
 * Supports optional label display
 */
const variantStyles = {
  default: "bg-indigo-600",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

const sizeStyles = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

export default function ProgressBar({
  value,
  max = 100,
  variant = "default",
  size = "md",
  showLabel = false,
  label,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {(label || showLabel) && (
        <div className="flex items-center justify-between mb-1">
          {label && <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>}
          {showLabel && (
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-zinc-200 dark:bg-zinc-700 rounded-full ${sizeStyles[size]} overflow-hidden`}>
        <div
          className={`h-full ${variantStyles[variant]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
