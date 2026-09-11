"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Shield, Lock, Monitor, Globe, Timer, ChevronRight } from "lucide-react";

const AUDIT_DATA = [
  { id: "1", title: "Audit Keamanan Infrastruktur", desc: "Tim Cure53 melakukan audit menyeluruh terhadap infrastruktur server dan jaringan kami.", category: "Audit", year: "2025", status: "Passed 100%", icon: Shield },
  { id: "2", title: "Verifikasi Kebijakan No-Logs", desc: "PwC memverifikasi bahwa kebijakan no-logs kami konsisten diterapkan dalam operasional sehari-hari.", category: "Policy", year: "2025", status: "Verified", icon: Lock },
  { id: "3", title: "Penetration Testing Aplikasi", desc: "Tim penetration test independen menguji kerentanan aplikasi klien kami di berbagai platform.", category: "Security", year: "2025", status: "Zero Critical", icon: Monitor },
  { id: "4", title: "Validasi Implementasi Kriptografi", desc: "Audit terhadap implementasi AES-256 dan ChaCha20-Poly1305 di seluruh layanan kami.", category: "Crypto", year: "2025", status: "Certified", icon: Lock },
  { id: "5", title: "Audit Kepatuhan SOC 2 Type II", desc: "Audit tata kelola keamanan dan privasi data sesuai standar SOC 2 Type II oleh auditor independen.", category: "Compliance", year: "2025", status: "SOC 2 Type II", icon: Globe },
  { id: "6", title: "Review Keamanan Aplikasi Mobile", desc: "Audit keamanan aplikasi mobile kami di iOS dan Android oleh tim security spesialis mobile.", category: "Mobile", year: "2025", status: "Passed", icon: Monitor },
];

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "Audit", label: "Audit" },
  { id: "Policy", label: "Policy" },
  { id: "Security", label: "Security" },
  { id: "Crypto", label: "Crypto" },
  { id: "Compliance", label: "Compliance" },
  { id: "Mobile", label: "Mobile" },
];

export default function AuditsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return AUDIT_DATA.filter((audit) => {
      const matchCategory = category === "all" || audit.category === category;
      const matchSearch = audit.title.toLowerCase().includes(query) || audit.desc.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Keamanan</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Laporan Audit</h1>
          <p className="text-lg text-zinc-300">Transparansi penuh melalui audit pihak ketiga yang kami jalani.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Shield className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{AUDIT_DATA.length}</p>
              <p className="text-sm text-zinc-500">Total Audit</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Lock className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{AUDIT_DATA.filter((a) => a.status.includes("Passed") || a.status.includes("Verified")).length}</p>
              <p className="text-sm text-zinc-500">Tersedia</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Timer className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">2025</p>
              <p className="text-sm text-zinc-500">Tahun Terakhir</p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari audit atau sertifikasi..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === c.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((audit) => (
              <div
                key={audit.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <audit.icon className="h-7 w-7 text-zinc-900 dark:text-white mb-3" />
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{audit.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-3">{audit.desc}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                    {audit.category}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">{audit.year}</span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-zinc-500 dark:text-zinc-400">{audit.status}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada audit yang ditemukan.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/security/audits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Selengkapnya <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
