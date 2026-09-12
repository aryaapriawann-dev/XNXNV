interface DividerProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
}

/**
 * Divider component for separating content
 * Supports horizontal and vertical orientations with optional label
 */
export default function Divider({
  orientation = "horizontal",
  label,
  className = "",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={`w-px bg-zinc-200 dark:bg-zinc-800 ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-4 py-4 ${className}`}>
      <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
      {label && (
        <span className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
    </div>
  );
}
