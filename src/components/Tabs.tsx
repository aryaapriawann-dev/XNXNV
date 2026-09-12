"use client";

import { ReactNode, useState } from "react";

/**
 * Tabs component with configurable tabs and content renderer
 * Supports icon in tab labels
 */
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
  onTabChange?: (activeId: string) => void;
}

export default function Tabs({
  items,
  defaultActiveId,
  className = "",
  contentRenderer,
  onTabChange,
}: TabsProps) {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id);

  const handleTabClick = (id: string) => {
    setActiveId(id);
    onTabChange?.(id);
  };

  return (
    <div className={className}>
      <div className="flex border-b border-zinc-200 dark:border-zinc-800">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabClick(item.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeId === item.id
                ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                : "border-transparent text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {item.icon && <span className="mr-2"><item.icon className="w-4 h-4" /></span>}
            {item.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {contentRenderer(activeId)}
      </div>
    </div>
  );
}
