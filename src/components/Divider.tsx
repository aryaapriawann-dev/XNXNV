interface DividerProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  label,
  className = "",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={`w-px bg-zinc-200 dark:bg-zinc-800 ${className}`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`} role="separator">
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
        <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
      </div>
    );
  }

  return (
    <div
      className={`h-px bg-zinc-200 dark:bg-zinc-800 ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
