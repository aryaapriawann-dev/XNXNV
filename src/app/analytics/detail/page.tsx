"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  BarChart3,
  Users,
  ShoppingCart,
  DollarSign,
  MousePointerClick,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Calendar,
  Wallet,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: number;
  icon: LucideIcon;
  color: string;
}

interface Metric {
  id: string;
  nama: string;
  kategori: "Trafik" | "Konversi" | "Pendapatan" | "Engagement";
  nilai: string;
  angka: number;
  tren: number;
  deskripsi: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  {
    id: "1",
    label: "Total Pengunjung",
    value: 482350,
    unit: "",
    trend: 18.2,
    icon: Users,
    color: "text-blue-600",
  },
  {
    id: "2",
    label: "Tingkat Konversi",
    value: 42,
    unit: "%",
    trend: 6.4,
    icon: Target,
    color: "text-green-600",
  },
  {
    id: "3",
    label: "Pendapatan Analitik",
    value: 8750000,
    unit: " IDR",
    trend: 12.5,
    icon: Wallet,
    color: "text-indigo-600",
  },
  {
    id: "4",
    label: "Rasio Pentalan",
    value: 28,
    unit: "%",
    trend: -3.1,
    icon: MousePointerClick,
    color: "text-purple-600",
  },
];

const trafficData = [
  { bulan: "Jan", nilai: 62000, target: 55000 },
  { bulan: "Feb", nilai: 71500, target: 65000 },
  { bulan: "Mar", nilai: 68400, target: 70000 },
  { bulan: "Apr", nilai: 82300, target: 75000 },
  { bulan: "Mei", nilai: 79800, target: 80000 },
  { bulan: "Jun", nilai: 91600, target: 85000 },
  { bulan: "Jul", nilai: 98400, target: 90000 },
];

const metrics: Metric[] = [
  {
    id: "m1",
    nama: "Kunjungan Organik",
    kategori: "Trafik",
    nilai: "186,4 rb",
    angka: 186400,
    tren: 14.2,
    deskripsi: "Pengunjung dari mesin pencari dalam 30 hari terakhir.",
    icon: Eye,
  },
  {
    id: "m2",
    nama: "Kunjungan Rujukan",
    kategori: "Trafik",
    nilai: "92,7 rb",
    angka: 92700,
    tren: 8.9,
    deskripsi: "Pengunjung dari tautan situs mitra dan media sosial.",
    icon: Users,
  },
  {
    id: "m3",
    nama: "Checkout Selesai",
    kategori: "Konversi",
    nilai: "12.480",
    angka: 12480,
    tren: 11.5,
    deskripsi: "Transaksi yang berhasil diselesaikan pengguna.",
    icon: ShoppingCart,
  },
  {
    id: "m4",
    nama: "Pendaftaran Akun",
    kategori: "Konversi",
    nilai: "8.935",
    angka: 8935,
    tren: 6.1,
    deskripsi: "Akun baru yang dibuat melalui halaman pendaftaran.",
    icon: Target,
  },
  {
    id: "m5",
    nama: "Pendapatan Langganan",
    kategori: "Pendapatan",
    nilai: "Rp 5,2 jt",
    angka: 5200000,
    tren: 16.8,
    deskripsi: "Pendapatan berulang dari paket langganan aktif.",
    icon: DollarSign,
  },
  {
    id: "m6",
    nama: "Pendapatan Sekali Bayar",
    kategori: "Pendapatan",
    nilai: "Rp 3,5 jt",
    angka: 3550000,
    tren: 4.7,
    deskripsi: "Pendapatan dari pembelian satu kali dan add-on.",
    icon: Wallet,
  },
  {
    id: "m7",
    nama: "Durasi Sesi Rata-rata",
    kategori: "Engagement",
    nilai: "6 mnt 12 dtk",
    angka: 372,
    tren: 9.3,
    deskripsi: "Rata-rata waktu yang dihabiskan per sesi kunjungan.",
    icon: Calendar,
  },
  {
    id: "m8",
    nama: "Interaksi per Sesi",
    kategori: "Engagement",
    nilai: "8,4 klik",
    angka: 84,
    tren: -2.4,
    deskripsi: "Rata-rata interaksi pengguna dalam satu sesi.",
    icon: BarChart3,
  },
];

const kategoris = ["Semua", "Trafik", "Konversi", "Pendapatan", "Engagement"] as const;

const MAX_TRAFFIC = 100000;

export default function AnalyticsDetailPage() {
  const [mounted, setMounted] = useState(false);
  const [counterValues, setCounterValues] = useState<Record<string, number>>({});
  const [cari, setCari] = useState("");
  const [kategoriAktif, setKategoriAktif] = useState<(typeof kategoris)[number]>("Semua");
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

  const metrikTampil = useMemo(() => {
    const kata = cari.trim().toLowerCase();
    return metrics.filter((m) => {
      const cocokKategori = kategoriAktif === "Semua" || m.kategori === kategoriAktif;
      const cocokCari =
        kata === "" ||
        m.nama.toLowerCase().includes(kata) ||
        m.deskripsi.toLowerCase().includes(kata);
      return cocokKategori && cocokCari;
    });
  }, [cari, kategoriAktif]);

  const formatNumber = (num: number) => {
    return num.toLocaleString("id-ID");
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Detail Analitik
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Pantau trafik, konversi, pendapatan, dan engagement dalam satu dasbor interaktif.
          </p>
        </div>
      </section>

      {/* Statistik Utama */}
      <section className="py-16 bg-white dark:bg-zinc-950" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              const naik = stat.trend > 0;
              return (
                <div
                  key={stat.id}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.color.replace("text-", "bg-")} bg-opacity-10`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        naik
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {naik ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {Math.abs(stat.trend)}%
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-1">
                    {formatNumber(counterValues[stat.id] || 0)}{stat.unit}
                  </div>
                  <div className="text-zinc-500 dark:text-zinc-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grafik Trafik */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Performa Trafik Bulanan
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Kunjungan aktual melampaui target dalam 6 dari 7 bulan terakhir dengan pertumbuhan rata-rata 14% per bulan.
              </p>
              <div className="space-y-4">
                {trafficData.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-indigo-600" />
                      <span className="font-medium text-zinc-900 dark:text-white">{item.bulan}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-zinc-900 dark:text-white">
                          {formatNumber(item.nilai)}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">Aktual</div>
                      </div>
                      <div className="h-8 w-1 bg-indigo-600 rounded-full" style={{ height: `${(item.nilai / MAX_TRAFFIC) * 64}px` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                Grafik Kunjungan Bulanan
              </h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {trafficData.map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full max-w-[60px] h-48">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-zinc-200 dark:bg-zinc-700 rounded-t-md opacity-30"
                        style={{ height: `${(item.target / MAX_TRAFFIC) * 100}%` }}
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md transition-all duration-500"
                        style={{ height: `${(item.nilai / MAX_TRAFFIC) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.bulan}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-full" />
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Aktual</span>
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

      {/* Daftar Metrik + Search/Filter */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Jelajahi Semua Metrik
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Cari dan saring {metrics.length} metrik berdasarkan kategori untuk menemukan wawasan yang Anda butuhkan.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                placeholder="Cari metrik, mis. konversi, trafik..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {kategoris.map((k) => (
                <button
                  key={k}
                  onClick={() => setKategoriAktif(k)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    kategoriAktif === k
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            Menampilkan {metrikTampil.length} dari {metrics.length} metrik
          </p>

          {metrikTampil.length === 0 ? (
            <div className="text-center py-16 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <Search className="h-10 w-10 text-zinc-300 dark:text-zinc-600 mx-auto mb-4" />
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                Tidak ada metrik yang cocok dengan pencarian Anda.
              </p>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm mt-1">
                Coba kata kunci lain atau pilih kategori berbeda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrikTampil.map((m) => {
                const Icon = m.icon;
                const naik = m.tren > 0;
                return (
                  <div
                    key={m.id}
                    className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-indigo-600 bg-opacity-10">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {m.kategori}
                      </span>
                    </div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{m.nama}</h3>
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{m.nilai}</div>
                    <div
                      className={`flex items-center gap-1 text-xs font-medium mb-3 ${
                        naik ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {naik ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {Math.abs(m.tren)}% dibanding bulan lalu
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{m.deskripsi}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Kategori */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kontribusi Trafik", value: 45, icon: Eye, color: "bg-blue-500" },
              { title: "Kontribusi Konversi", value: 32, icon: ShoppingCart, color: "bg-green-500" },
              { title: "Kontribusi Pendapatan", value: 23, icon: DollarSign, color: "bg-purple-500" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-6`}>
                    <Icon className="h-6 w-6" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Laporan Analitik Kustom?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi tim analitik kami untuk dasbor dan laporan yang disesuaikan dengan bisnis Anda.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
            Hubungi Tim
          </button>
        </div>
      </section>
    </div>
  );
}
