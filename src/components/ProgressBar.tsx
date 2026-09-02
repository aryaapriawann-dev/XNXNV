"use client";

interface ProgressBarProps {
  value: number;
  max?: number;
  showValue?: boolean;
  className?: string;
}

export default function ProgressBar({ 
  value, 
  max = 100, 
  showValue = false,
  className = "" 
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        {showValue && (
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {value} / {max}
          </span>
        )}
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
