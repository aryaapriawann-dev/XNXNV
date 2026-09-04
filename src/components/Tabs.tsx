"use client";

import { ReactNode, useState } from "react";

interface TabItem {
  id: string;
  label: string;
  icon?: React.ElementType;
}

interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  className?: string;
  contentRenderer: (activeId: string) => ReactNode;
}

export default function Tabs({
  items,
  defaultActiveId,
  className = "",
  contentRenderer,
}: TabsProps) {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || items[0]?.id || ""
  );

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-1 overflow-x-auto">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-800"
              }`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 min-h-[200px]">
        {contentRenderer(activeId)}
      </div>
    </div>
  );
}
