"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Eye, ChevronRight } from "lucide-react";

interface Pilar {
  id: string;
  title: string;
  deskripsi: string;
  kategori: string;
  tahun: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "teknologi", label: "Teknologi" },
  { id: "pasar", label: "Pasar" },
  { id: "sdm", label: "SDM" },
  { id: "dampak", label: "Dampak" },
] as const;

const PILAR: Pilar[] = [
  {
    id: "1",
    title: "Platform AI Lokal Terdepan",
    deskripsi:
      "Menjadi penyedia platform AI berbahasa Indonesia yang paling dipercaya enterprise pada 2028.",
    kategori: "teknologi",
    tahun: "2028",
  },
  {
    id: "2",
    title: "Ekspansi Asia Tenggara",
    deskripsi:
      "Membuka kantor dan melayani klien di 5 negara ASEAN dengan tim lokal di tiap negara.",
    kategori: "pasar",
    tahun: "2029",
  },
  {
    id: "3",
    title: "Akademi Talenta Digital",
    deskripsi:
      "Mencetak 5.000 lulusan siap kerja lewat akademi internal dan kemitraan kampus.",
    kategori: "sdm",
    tahun: "2027",
  },
  {
    id: "4",
    title: "100% Energi Terbarukan",
    deskripsi:
      "Seluruh infrastruktur dan operasional berjalan di atas energi terbarukan.",
    kategori: "dampak",
    tahun: "2030",
  },
  {
    id: "5",
    title: "Ekosistem Open Source",
    deskripsi:
      "Merilis 20 pustaka open source yang dipakai komunitas developer global.",
    kategori: "teknologi",
    tahun: "2027",
  },
  {
    id: "6",
    title: "Perusahaan Paling Diinginkan",
    deskripsi:
      "Masuk 10 besar tempat kerja terbaik Indonesia versi survei independen.",
    kategori: "sdm",
    tahun: "2028",
  },
];

export default function VisionPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () =>
      PILAR.filter(
        (p) =>
          (cat === "all" || p.kategori === cat) &&
          (p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.deskripsi.toLowerCase().includes(query.toLowerCase()))
      ),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">
            Tentang Kami
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Visi 2030</h1>
          <p className="text-lg text-zinc-300">
            Ke mana XNXNV melangkah dalam lima tahun ke depan.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari pilar visi..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === c.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-zinc-500 py-12">
              Tidak ada pilar visi yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-zinc-900 dark:text-white" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {p.kategori}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                      {p.tahun}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {p.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400">{p.deskripsi}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/about/mission"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Misi Kami <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about/history"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-slate-700 rounded-full font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors"
            >
              Sejarah Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
