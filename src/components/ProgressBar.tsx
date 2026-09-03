interface ProgressBarProps {
  value: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  variant = "default",
  size = "md",
  showLabel = false,
  label,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const variantClasses = {
    default: "bg-indigo-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    error: "bg-red-600",
  };

  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={className}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {label}
            </span>
          )}
          {showLabel && (
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={`w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={`h-full ${variantClasses[variant]} transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
