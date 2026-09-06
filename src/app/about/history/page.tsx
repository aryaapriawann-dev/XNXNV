"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  History,
  Rocket,
  Shield,
  Globe,
  Users,
  Award,
  Zap,
  RotateCcw,
  ChevronRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  desc: string;
  category: string;
  location: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "awal", label: "Awal Mula" },
  { id: "produk", label: "Produk" },
  { id: "ekspansi", label: "Ekspansi" },
  { id: "penghargaan", label: "Penghargaan" },
] as const;

const MILESTONES: Milestone[] = [
  {
    id: "1",
    year: "2018",
    title: "XVPNX Didirikan di Jakarta",
    desc: "Berawal dari tim kecil 5 orang dengan visi menghadirkan koneksi internet yang aman dan cepat untuk semua orang Indonesia.",
    category: "awal",
    location: "Jakarta",
  },
  {
    id: "2",
    year: "2019",
    title: "Peluncuran Aplikasi Versi 1.0",
    desc: "Rilis perdana aplikasi XVPNX untuk Windows dan Android dengan 20 server di 8 negara dan 10 ribu pengguna pertama.",
    category: "produk",
    location: "Jakarta",
  },
  {
    id: "3",
    year: "2020",
    title: "Tembus 1 Juta Pengguna",
    desc: "Lonjakan pengguna saat kerja remote meningkat. Menambah 100 server baru dan meluncurkan fitur Kill Switch otomatis.",
    category: "ekspansi",
    location: "Nasional",
  },
  {
    id: "4",
    year: "2021",
    title: "Ekspansi Server Global 50+ Negara",
    desc: "Jaringan berkembang ke 50+ negara dengan protokol WireGuard, kecepatan naik 3x lipat dibanding versi sebelumnya.",
    category: "ekspansi",
    location: "Global",
  },
  {
    id: "5",
    year: "2022",
    title: "Sertifikasi Audit Keamanan Independen",
    desc: "Lolos audit no-logs policy oleh auditor independen dan meraih sertifikasi ISO 27001 untuk manajemen keamanan informasi.",
    category: "penghargaan",
    location: "Jakarta",
  },
  {
    id: "6",
    year: "2023",
    title: "Peluncuran XVPNX untuk Bisnis",
    desc: "Memperkenalkan paket tim dan enterprise dengan dasbor admin, dedicated IP, dan dukungan prioritas 24/7.",
    category: "produk",
    location: "Jakarta",
  },
  {
    id: "7",
    year: "2024",
    title: "Penghargaan VPN Terbaik Indonesia",
    desc: "Dinobatkan sebagai layanan VPN terbaik pilihan pengguna Indonesia dengan rating 4,9 dan 5 juta unduhan aplikasi.",
    category: "penghargaan",
    location: "Jakarta",
  },
  {
    id: "8",
    year: "2025",
    title: "Fitur AI Smart Routing",
    desc: "Meluncurkan routing cerdas berbasis AI yang otomatis memilih server tercepat, plus dukungan 10 perangkat sekaligus.",
    category: "produk",
    location: "Global",
  },
  {
    id: "9",
    year: "2026",
    title: "10 Juta Pengguna & Kantor Baru",
    desc: "Merayakan 10 juta pengguna aktif, membuka kantor baru di Surabaya dan Bandung dengan tim 150+ orang.",
    category: "ekspansi",
    location: "Surabaya",
  },
];

const CATEGORY_ICON: Record<string, typeof Rocket> = {
  awal: Rocket,
  produk: Zap,
  ekspansi: Globe,
  penghargaan: Award,
};

export default function HistoryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MILESTONES.filter((m) => {
      const matchCat = category === "all" || m.category === category;
      const matchQ =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.desc.toLowerCase().includes(q) ||
        m.year.includes(q) ||
        m.location.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm mb-6">
            <History className="w-4 h-4" />
            Tentang Kami
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Sejarah Perjalanan XVPNX
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Dari startup kecil di Jakarta hingga melayani 10 juta pengguna —
            simak tonggak penting perjalanan kami dari tahun ke tahun.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-zinc-400">
            <Link href="/about" className="hover:text-white transition-colors">
              Tentang
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Sejarah</span>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-white dark:bg-slate-900 border-b border-zinc-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari tahun, judul, atau lokasi..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-zinc-50 dark:bg-slate-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    category === c.id
                      ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {c.label}
                </button>
              ))}
              {(query || category !== "all") && (
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-slate-700"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              )}
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Menampilkan {filtered.length} dari {MILESTONES.length} tonggak sejarah
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-zinc-50 dark:bg-slate-950 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-zinc-200 dark:border-slate-800">
              <History className="w-12 h-12 mx-auto text-zinc-300 dark:text-slate-600 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada hasil ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                Coba kata kunci atau kategori lain.
              </p>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Tampilkan Semua
              </button>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-slate-800 md:-translate-x-1/2" />
              <div className="space-y-8">
                {filtered.map((m, idx) => {
                  const Icon = CATEGORY_ICON[m.category] ?? History;
                  const side = idx % 2 === 0;
                  return (
                    <div
                      key={m.id}
                      className={`relative flex gap-6 md:gap-0 ${
                        side ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className="relative z-10 shrink-0 ml-0 md:mx-auto">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shadow-lg">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div
                        className={`flex-1 md:w-[calc(50%-2.5rem)] md:flex-none ${
                          side
                            ? "md:mr-auto md:pr-0 md:pl-10 md:order-2"
                            : "md:ml-auto md:pl-0 md:pr-10 md:order-1 md:text-right"
                        }`}
                      >
                        <article className="bg-white dark:bg-slate-900 rounded-2xl border border-zinc-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div
                            className={`flex flex-wrap items-center gap-2 mb-3 ${
                              side ? "" : "md:justify-end"
                            }`}
                          >
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold">
                              <CalendarDays className="w-3.5 h-3.5" />
                              {m.year}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5" />
                              {m.location}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                            {m.title}
                          </h2>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {m.desc}
                          </p>
                        </article>
                      </div>
                      <div className="hidden md:block md:w-[calc(50%-2.5rem)] md:flex-none" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mini stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Users, val: "150+", label: "Tim" },
              { icon: Globe, val: "50+", label: "Negara Server" },
              { icon: Shield, val: "ISO 27001", label: "Sertifikasi" },
              { icon: Award, val: "10 Jt+", label: "Pengguna" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-zinc-200 dark:border-slate-800 p-5 text-center"
              >
                <s.icon className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                <div className="text-xl font-bold text-zinc-900 dark:text-white">
                  {s.val}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Jadilah Bagian dari Cerita Berikutnya
          </h2>
          <p className="text-blue-100 mb-8">
            Perjalanan kami belum selesai. Bergabunglah dengan jutaan pengguna
            yang mempercayakan keamanannya kepada XVPNX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              Lihat Paket
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
