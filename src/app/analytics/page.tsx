"use client";

import { useState, useEffect } from "react";
import { BarChart, LineChart, PieChart, TrendingUp, TrendingDown, Users, Zap, DollarSign, Activity, Calendar, Filter, ChevronDown, ChevronUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

interface ChartData {
  label: string;
  value: number;
}

const StatCard = ({ title, value, trend, icon, color }: StatCardProps) => {
  const isPositive = trend >= 0;
  
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-20`}>
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {Math.abs(trend)}%
        </div>
      </div>
      <h3 className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-zinc-900 dark:text-white">{value}</p>
    </div>
  );
};

const ChartCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 text-sm">{description}</p>
    </div>
    {children}
  </div>
);

const StatCardSimple = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{label}</p>
    <p className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
  </div>
);

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30");
  const [isLoading, setIsLoading] = useState(false);

  // Mock data
  const statCards: StatCardProps[] = [
    {
      title: "Total Pengunjung",
      value: "156.2K",
      trend: 12.5,
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      color: "bg-indigo-600"
    },
    {
      title: "Konversi",
      value: "4.8%",
      trend: 2.3,
      icon: <Zap className="h-6 w-6 text-amber-600" />,
      color: "bg-amber-600"
    },
    {
      title: "Pendapatan",
      value: "Rp 2.4B",
      trend: 8.7,
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      color: "bg-green-600"
    },
    {
      title: "Interaksi",
      value: "89.3K",
      trend: -1.2,
      icon: <Activity className="h-6 w-6 text-pink-600" />,
      color: "bg-pink-600"
    }
  ];

  const trafficData: ChartData[] = [
    { label: "Jan", value: 45000 },
    { label: "Feb", value: 52000 },
    { label: "Mar", value: 48000 },
    { label: "Apr", value: 61000 },
    { label: "Mei", value: 58000 },
    { label: "Jun", value: 67000 },
    { label: "Jul", value: 72000 },
    { label: "Agu", value: 69000 },
    { label: "Sep", value: 75000 },
  ];

  const channelData: ChartData[] = [
    { label: "Organik", value: 45 },
    { label: "Sosial", value: 25 },
    { label: "Langsung", value: 20 },
    { label: "Referral", value: 10 }
  ];

  const deviceData: ChartData[] = [
    { label: "Desktop", value: 65 },
    { label: "Mobile", value: 30 },
    { label: "Tablet", value: 5 }
  ];

  const pageViewsData: ChartData[] = [
    { label: "Home", value: 45000 },
    { label: "Services", value: 32000 },
    { label: "Portfolio", value: 28000 },
    { label: "Blog", value: 22000 },
    { label: "Contact", value: 18000 }
  ];

  const revenueData: ChartData[] = [
    { label: "Jan", value: 125000000 },
    { label: "Feb", value: 138000000 },
    { label: "Mar", value: 142000000 },
    { label: "Apr", value: 156000000 },
    { label: "Mei", value: 149000000 },
    { label: "Jun", value: 167000000 },
    { label: "Jul", value: 182000000 },
    { label: "Agu", value: 175000000 },
    { label: "Sep", value: 195000000 },
  ];

  const handleTimeRangeChange = (range: string) => {
    setIsLoading(true);
    setTimeRange(range);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Analytics & Insights</h1>
          <p className="text-zinc-600 dark:text-zinc-400">Pantau performa dan pertumbuhan bisnis Anda secara real-time</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mr-3">Periode:</span>
            {["7", "30", "90", "365"].map((range) => (
              <button
                key={range}
                onClick={() => handleTimeRangeChange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                {range === "7" ? "Minggu ini" : range === "30" ? "30 Hari" : range === "90" ? "90 Hari" : "1 Tahun"}
              </button>
            ))}
            <button className="ml-2 px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center gap-1 text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Custom</span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 text-sm font-medium">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Chart */}
          <div className="lg:col-span-2">
            <ChartCard
              title="Traffic Overview"
              description="Perkembangan jumlah pengunjung dalam periode terpilih"
            >
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {trafficData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div className="relative w-full">
                      <div
                        className="bg-indigo-600 rounded-t-lg transition-all duration-500 hover:bg-indigo-700"
                        style={{ height: `${(data.value / 80000) * 100}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {data.value.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">{data.label}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          {/* Channel Distribution */}
          <div>
            <ChartCard
              title="Channel Distribution"
              description="Distribution trafik berdasarkan sumber"
            >
              <div className="h-48 flex items-center justify-center">
                <div className="relative w-40 h-40 rounded-full border-8 border-indigo-100 dark:border-indigo-900/30">
                  <div
                    className="absolute top-0 left-1/2 h-1/2 w-1/2 bg-gradient-to-b from-indigo-600 to-indigo-400 rounded-tr-full"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                  <div
                    className="absolute top-0 left-1/2 h-1/2 w-1/2 bg-gradient-to-b from-amber-500 to-amber-300 rounded-tl-full"
                    style={{ transform: "rotate(45deg) scaleY(0.5)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-bl-full"
                  />
                  <div
                    className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-gradient-to-t from-pink-500 to-pink-300 rounded-br-full"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-4">
                {channelData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === 0 ? "bg-indigo-600" : index === 1 ? "bg-amber-500" : index === 2 ? "bg-emerald-500" : "bg-pink-500"
                        }`}
                      />
                      <span className="text-zinc-700 dark:text-zinc-300">{data.label}</span>
                    </div>
                    <span className="font-semibold text-zinc-900 dark:text-white">{data.value}%</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>
        </div>

        {/* Additional Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <ChartCard
            title="Revenue Trend"
            description="Pertumbuhan pendapatan bulanan"
          >
            <div className="h-48 flex items-end justify-between gap-3">
              {revenueData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full max-w-[40px]">
                    <div
                      className="bg-gradient-to-t from-green-600 to-green-400 rounded-lg transition-all duration-500 hover:from-green-700 hover:to-green-500"
                      style={{ height: `${(data.value / 200000000) * 100}%` }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Rp {(data.value / 1000000).toFixed(0)}jt
                    </div>
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">{data.label}</span>
                </div>
              ))}
            </div>
          </ChartCard>

          {/* Device Distribution */}
          <ChartCard
            title="Device Distribution"
            description="Penggunaan perangkat oleh pengunjung"
          >
            <div className="flex flex-col justify-center h-48 gap-4">
              {deviceData.map((data, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300">{data.label}</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{data.value}%</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        index === 0 ? "bg-indigo-600" : index === 1 ? "bg-blue-500" : "bg-zinc-400"
                      }`}
                      style={{ width: `${data.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>
        </div>

        {/* Page Views */}
        <ChartCard
          title="Top Performing Pages"
          description="Halaman dengan jumlah view terbanyak"
        >
          <div className="space-y-4">
            {pageViewsData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white">{data.label}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Page</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-zinc-900 dark:text-white">{data.value.toLocaleString()}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Views</p>
                  </div>
                  <div className="h-8 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${(data.value / 50000) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <StatCardSimple label="Total Transaksi" value="1,234" />
          <StatCardSimple label="Rata-rata Order Value" value="Rp 850K" />
          <StatCardSimple label="Customer Retention" value="89%" />
        </div>
      </div>
    </div>
  );
}
