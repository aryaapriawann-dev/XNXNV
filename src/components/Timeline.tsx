"use client";

/**
 * Timeline component for displaying chronological items
 * Each item shows title, date, description, and optional location/icon
 */
interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="relative flex gap-4 pl-10">
            <div className="absolute left-2.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-900" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {item.icon && <span className="text-indigo-600">{item.icon}</span>}
                <h4 className="font-medium text-zinc-900 dark:text-zinc-50">{item.title}</h4>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.date}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
              {item.location && (
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">{item.location}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
