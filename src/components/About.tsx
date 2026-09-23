"use client";

import Image from "next/image";
import { Award, Users, TrendingUp, Target } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * About section component
 * Displays company stats with icons
 */
const statIcons = [Award, Users, TrendingUp, Target];

export default function About() {
  const { t } = useTranslation();
  const stats = [
    { icon: Award, label: t("about.stats.quality.label"), value: "Premium" },
    { icon: Users, label: t("about.stats.clients.label"), value: "25+" },
    { icon: TrendingUp, label: t("about.stats.growth.label"), value: "200%" },
    { icon: Target, label: t("about.stats.projects.label"), value: "50+" },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                {t("about.title")}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                {t("about.intro")}
              </p>
            </div>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{stat.value}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-indigo-100 to-zinc-200 dark:from-indigo-900/30 dark:to-zinc-800" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
