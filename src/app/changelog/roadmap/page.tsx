"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Map, ChevronRight } from "lucide-react";

interface Item {
  id: string;
  title: string;
  status: string;
  kategori: string;
  deskripsi: string;
  kuartal: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "sekarang", label: "Dikerjakan" },
  { id: "berikutnya", label: "Berikutnya" },
  { id: "nanti", label: "Nanti" },
] as const;

const ITEMS: Item[] = [
  { id: "1", title: "Dashboard Analitik v2", status: "sekarang", kategori: "Produk", deskripsi: "Visualisasi drag-and-drop dan ekspor terjadwal.", kuartal: "Q4 2026" },
  { id: "2", title: "Aplikasi Mobile Offline", status: "sekarang", kategori: "Mobile", deskripsi: "Mode offline penuh dengan sinkronisasi otomatis.", kuartal: "Q4 2026" },
  { id: "3", title: "Integrasi 20 Payment Gateway", status: "berikutnya", kategori: "Integrasi", deskripsi: "QRIS, VA bank, e-wallet, dan kartu dalam satu API.", kuartal: "Q1 2027" },
  { id: "4", title: "AI Copywriter Bahasa Indonesia", status: "berikutnya", kategori: "AI", deskripsi: "Generator konten otomatis yang paham konteks lokal.", kuartal: "Q1 2027" },
  { id: "5", title: "Marketplace Template", status: "nanti", kategori: "Ekosistem", deskripsi: "Jual-beli template dan komponen buatan komunitas.", kuartal: "Q2 2027" },
  { id: "6", title: "Multi-bahasa 5 Negara", status: "nanti", kategori: "Ekspansi", deskripsi: "Lokalisasi penuh untuk pasar ASEAN.", kuartal: "Q3 2027" },
];

const STATUS_LABEL: Record<string, string> = { sekarang: "Dikerjakan", berikutnya: "Berikutnya", nanti: "Nanti" };

export default function RoadmapPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const filtered = useMemo(
    () => ITEMS.filter((r) => (cat === "all" || r.status === cat) && (r.title + r.deskripsi).toLowerCase().includes(query.toLowerCase())),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Changelog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Peta Jalan Produk</h1>
          <p className="text-lg text-zinc-300">Transparan: ini yang sedang dan akan kami bangun.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari item roadmap..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white" />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c.id ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"}`}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div key={r.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-zinc-500"><Map className="h-4 w-4" />{r.kategori}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">{r.kuartal}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{r.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">{r.deskripsi}</p>
                <p className="text-sm font-semibold text-zinc-500">Status: {STATUS_LABEL[r.status]}</p>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-zinc-500 py-12">Tidak ada item yang cocok.</p>}
          <div className="flex justify-center mt-12">
            <Link href="/changelog/detail" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Lihat Perubahan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
