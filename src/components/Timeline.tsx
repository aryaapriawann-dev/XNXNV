"use client";

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
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.id} className="relative pl-12">
            <div className="absolute left-0 top-1.5 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white dark:border-zinc-900 flex items-center justify-center shadow-md">
              {item.icon || (
                <div className="w-3 h-3 bg-white rounded-full" />
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {item.title}
                </h3>
                
                {item.location && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    {item.location}
                  </p>
                )}
                
                <p className="text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
