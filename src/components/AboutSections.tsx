"use client";

/**
 * About section component.
 * Displays company statistics with icons in a grid layout.
 */
import { Award, Users, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Kualitas Terbaik", value: "Premium" },
  { icon: Users, label: "Klien Puas", value: "25+" },
  { icon: TrendingUp, label: "Pertumbuhan", value: "200%" },
  { icon: Target, label: "Proyek Selesai", value: "50+" },
];

export default function AboutSections() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center"
        >
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
            <stat.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
