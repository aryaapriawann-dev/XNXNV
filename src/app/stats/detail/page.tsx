"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Briefcase, Activity, ArrowUpRight, Calendar, DollarSign } from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: number;
  icon: React.ElementType;
  color: string;
}

const stats: Stat[] = [
  {
    id: "1",
    label: "Total Revenue",
    value: 5234000,
    unit: "IDR",
    trend: 12.5,
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    id: "2",
    label: "Active Users",
    value: 15428,
    unit: "",
    trend: 8.3,
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: "3",
    label: "Projects Completed",
    value: 234,
    unit: "",
    trend: 15.2,
    icon: Briefcase,
    color: "text-indigo-600",
  },
  {
    id: "4",
    label: "Growth Rate",
    value: 28.7,
    unit: "%",
    trend: 4.1,
    icon: TrendingUp,
    color: "text-purple-600",
  },
];

const performanceData = [
  { month: "Jan", value: 45000, target: 40000 },
  { month: "Feb", value: 52000, target: 50000 },
  { month: "Mar", value: 48000, target: 45000 },
  { month: "Apr", value: 61000, target: 55000 },
  { month: "May", value: 58000, target: 60000 },
  { month: "Jun", value: 72000, target: 65000 },
];

export default function StatsDetailPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false);
  const [counterValues, setCounterValues] = useState<Record<string, number>>({});
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat) => {
              const endValue = stat.value;
              const duration = 2000;
              const startValue = 0;
              let startTime: number | null = null;

              const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
                setCounterValues((prev) => ({
                  ...prev,
                  [stat.id]: currentValue,
                }));

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              requestAnimationFrame(animate);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("id-ID");
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Detailed Statistics
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Analisis mendalam performa dan metrik bisnis kami dalam format interaktif.
          </p>
        </div>
      </section>

      {/* Main Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color.replace("text-", "bg-")} bg-opacity-10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend > 0
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}>
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.trend}%
                  </div>
                </div>
                <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-1">
                  {formatNumber(counterValues[stat.id] || 0)}{stat.unit}
                </div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Chart */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Revenue Performance
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Grafik pertumbuhan pendapatan bulanan menunjukkan tren positif berkelanjutan dengan peningkatan rata-rata 12% per bulan.
              </p>
              <div className="space-y-4">
                {performanceData.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium text-zinc-900 dark:text-white">{item.month}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-zinc-900 dark:text-white">
                          {formatNumber(item.value)}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Actual</div>
                      </div>
                      <div className="h-8 w-1 bg-indigo-600 rounded-full" style={{ height: `${(item.value / 80000) * 64}px` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                Monthly Revenue Chart
              </h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {performanceData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full max-w-[60px]">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.value / 80000) * 100}%` }}
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-zinc-200 dark:bg-zinc-700 rounded-t-md opacity-30"
                        style={{ height: `${(item.target / 80000) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-full" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Target</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Revenue by Category", value: 45, icon: DollarSign, color: "bg-blue-500" },
              { title: "Customer Segments", value: 32, icon: Users, color: "bg-green-500" },
              { title: "Product Performance", value: 23, icon: Activity, color: "bg-purple-500" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-6`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">{item.value}%</div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Analisis Lebih Detail?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi tim analytics kami untuk custom report dan dashboard.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
            Hubungi Tim
          </button>
        </div>
      </section>
    </div>
  );
}
