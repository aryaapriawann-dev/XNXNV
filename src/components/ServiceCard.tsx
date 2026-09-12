"use client";

/**
 * Service card component displaying service info with icon, title, description, and features.
 */
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  id: number;
}

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon, title, description, features, price } = service;

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{price}</span>
      </div>
    </div>
  );
}
