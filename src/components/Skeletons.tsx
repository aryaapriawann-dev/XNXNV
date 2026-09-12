"use client";
/**
 * Skeletons component for loading states.
 * Renders multiple skeleton placeholders for list/content loading.
 */
export default function Skeletons({ count = 3, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-24 w-full" />
      ))}
    </div>
  );
}
