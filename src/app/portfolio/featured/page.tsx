"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Briefcase, ChevronRight, Star, Building2, Calendar, Users, TrendingUp } from "lucide-react";

const PROJECTS = [
  { id: "1", title: "Platform E-Commerce Nasional", deskripsi: "Membangun platform e-commerce nasional dengan modul payments, inventory, dan analytics terintegrasi.", views: 3400, client: "PT Maju Jaya", category: "ecommerce", startDate: "Jan 2026", duration: "12 bulan", status: "Selesai" },
  { id: "2", title: "Aplikasi Mobile Perbankan", deskripsi: "Mengembangkan aplikasi mobile perbankan dengan fitur transfer, mutasi, dan QRIS.", views: 2800, client: "Bank Nusantara", category: "fintech", startDate: "Mar 2026", duration: "8 bulan", status: "Selesai" },
  { id: "3", title: "Sistem Manajemen Akademik", deskripsi: "Sistem manajemen akademik lengkap untuk universitas dengan integrasi LMS.", views: 2200, client: "Universitas Terbuka", category: "edtech", startDate: "Feb 2026", duration: "6 bulan", status: "Selesai" },
  { id: "4", title: "Dashboard Analitik Bisnis", deskripsi: "Dashboard analitik real-time untuk monitoring performa bisnis multi-cabang.", views: 1950, client: "Grup Indo Corp", category: "enterprise", startDate: "Apr 2026", duration: "4 bulan", status: "Selesai" },
  { id: "5", title: "Aplikasi Kesehatan Telemedisin", deskripsi: "Platform telemedisin dengan konsultasi video, rekam medis digital, dan reservasi.", views: 1680, client: "RS Muhammadiyah", category: "healthtech", startDate: "Mei 2026", duration: "6 bulan", status: "Dalam Pengerjaan" },
  { id: "6", title: "Sistem Inventori Modern", deskripsi: "Sistem inventori untuk retail dengan barcode scanning dan laporan otomatis.", views: 1420, client: "Ritel Maju Store", category: "retail", startDate: "Jun 2026", duration: "3 bulan", status: "Dalam Pengerjaan" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "fintech", label: "Fintech" },
  { id: "edtech", label: "EdTech" },
  { id: "enterprise", label: "Enterprise" },
  { id: "healthtech", label: "HealthTech" },
  { id: "retail", label: "Retail" },
];

const STATUS_BADGE: Record<string, { bg: string; text: string }> = {
  "Selesai": { bg: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", text: "Selesai" },
  "Dalam Pengerjaan": { bg: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400", text: "Dalam Pengerjaan" },
};

export default function FeaturedPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    return PROJECTS.filter((item) => {
      const matchCat = cat === "all" || item.category === cat;
      const matchSearch = item.title.toLowerCase().includes(q.toLowerCase()) || item.deskripsi.toLowerCase().includes(q.toLowerCase()) || item.client.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [q, cat]);

  const stats = useMemo(() => ({
    total: PROJECTS.length,
    totalViews: PROJECTS.reduce((acc, p) => acc + p.views, 0),
    completed: PROJECTS.filter((p) => p.status === "Selesai").length,
    inProgress: PROJECTS.filter((p) => p.status === "Dalam Pengerjaan").length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portofolio Unggulan</h1>
          <p className="text-lg text-zinc-300">Proyek terpilih yang menunjukkan keahlian kami dalam berbagai industri.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Briefcase className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Proyek</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalViews.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dilihat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.completed}</p>
              <p className="text-sm text-zinc-500">Selesai</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <TrendingUp className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.inProgress}</p>
              <p className="text-sm text-zinc-500">Dalam Pengerjaan</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari proyek..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              {CATS.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-indigo-600" />
                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 capitalize">
                      {item.category}
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${STATUS_BADGE[item.status].bg}`}>
                    {item.status}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{item.deskripsi}</p>
                <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {item.client}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.startDate} - {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {item.views.toLocaleString("id-ID")} views
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-slate-700">
                  <Users className="w-4 h-4 text-zinc-400" />
                  <Link
                    href="/portfolio/clients"
                    className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                  >
                    Lihat Semua Proyek →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada proyek yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/portfolio/clients"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Klien Kami <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
