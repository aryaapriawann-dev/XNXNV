"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav className={`flex items-center text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.isActive ? (
              <span className="font-medium text-zinc-900 dark:text-zinc-50">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </Link>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 text-zinc-400 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
