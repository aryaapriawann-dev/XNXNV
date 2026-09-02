"use client";

import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  children: React.ReactNode;
  defaultTab?: string;
  className?: string;
}

export default function Tabs({ 
  tabs, 
  children, 
  defaultTab, 
  className = "" 
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id || ""
  );

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="border-b border-zinc-200 dark:border-zinc-700 mb-6">
        <nav className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id ? "block" : "hidden"
            } animate-in fade-in duration-300`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
