"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Bookmark, Trash2, ChevronRight } from "lucide-react";

interface SavedPost {
  id: string;
  title: string;
  kategori: string;
  penulis: string;
  tanggal: string;
  baca: string;
}

const INITIAL: SavedPost[] = [
  { id: "1", title: "Panduan SEO 2026 untuk Pemula", kategori: "Pemasaran", penulis: "Dewi Lestari", tanggal: "28 Sep 2026", baca: "8 mnt" },
  { id: "2", title: "Membangun Design System dengan Tailwind", kategori: "Desain", penulis: "Rizky Pratama", tanggal: "25 Sep 2026", baca: "12 mnt" },
  { id: "3", title: "Next.js 16: Fitur Baru Favorit Kami", kategori: "Teknologi", penulis: "Andi Wijaya", tanggal: "20 Sep 2026", baca: "6 mnt" },
  { id: "4", title: "Strategi Pricing untuk SaaS Lokal", kategori: "Bisnis", penulis: "Sari Utami", tanggal: "15 Sep 2026", baca: "10 mnt" },
  { id: "5", title: "Optimasi Core Web Vitals Praktis", kategori: "Teknologi", penulis: "Budi Santoso", tanggal: "10 Sep 2026", baca: "9 mnt" },
  { id: "6", title: "Copywriting Landing Page yang Konversi", kategori: "Pemasaran", penulis: "Dewi Lestari", tanggal: "5 Sep 2026", baca: "7 mnt" },
];

export default function BookmarksPage() {
  const [saved, setSaved] = useState<SavedPost[]>(INITIAL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      saved.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.kategori.toLowerCase().includes(query.toLowerCase())
      ),
    [saved, query]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Artikel Tersimpan</h1>
          <p className="text-lg text-zinc-300">
            {saved.length} artikel Anda simpan untuk dibaca nanti.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari artikel tersimpan..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-zinc-500 py-12">
              {saved.length === 0
                ? "Belum ada artikel tersimpan."
                : "Tidak ada yang cocok dengan pencarian."}
            </p>
          ) : (
            <ul className="space-y-4">
              {filtered.map((p) => (
                <li
                  key={p.id}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <Bookmark className="h-6 w-6 text-zinc-900 dark:text-white shrink-0 mt-1" />
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {p.kategori} • {p.baca}
                    </span>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {p.title}
                    </h2>
                    <p className="text-sm text-zinc-500">
                      {p.penulis} • {p.tanggal}
                    </p>
                  </div>
                  <button
                    onClick={() => setSaved((s) => s.filter((x) => x.id !== p.id))}
                    title="Hapus bookmark"
                    className="p-2 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/blog/trending"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Jelajahi Trending <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/blog/topics"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-slate-700 rounded-full font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors"
            >
              Semua Topik
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
