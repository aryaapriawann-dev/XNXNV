"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Newspaper, ChevronRight, Search } from "lucide-react";

const PRESS = [
  { id: "1", title: "Terbaru: Dukungan Sertifikasi Bisnis Digital", source: "Media Indonesia", date: "Mei 2026", summary: "XNXNV menjadi salah satu vendor terpercaya dalam mendukung program sertifikasi digital nasional." },
  { id: "2", title: "Kolaborasi Strategis dengan Universitas Negeri", source: "Kompas Teknologi", date: "April 2026", summary: "Kerja sama pendidikan untuk pelatihan cybersecurity dan kriptografi bagi mahasiswa teknik." },
  { id: "3", title: "Peluncuran Platform Audit Online", source: "TechInAsia Indonesia", date: "Maret 2026", summary: "Platform baru memungkinkan audit keamanan jarak jauh dengan laporan real-time dan dashboard analitik." },
  { id: "4", title: "Perluas Jaringan Partner di 5 Kota", source: "Bisnis & Karir", date: "Februari 2026", summary: "Ruang kerja baru dibuka di Yogyakarta, Surabaya, Bandung, Medan, dan Makassar." },
  { id: "5", title: "Inisiatif Open Source untuk Keamanan Siber", source: "Open Source News", date: "Januari 2026", summary: "XNXNV merilis library kecil untuk implementasi enkripsi yang bisa digunakan siapa saja di GitHub." },
];

const CATEGORIES = [{ id: "all", label: "Semua" }, { id: "news", label: "Berita" }, { id: "press", label: "Kontak" }, { id: "events", label: "Acara" }];

export default function PressPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return PRESS.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.source.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || item.source.includes(category);
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="py-12 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Liputan Media</h1>
          <p className="text-zinc-300">Pemberitaan dan pengakuan dari media nasional dan internasional.</p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Cari berita atau sumber..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-zinc-900 rounded-xl">
            <Newspaper className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <p className="text-zinc-500">Tidak ada berita yang cocok.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filtered.map((item) => (
              <article key={item.id} className="flex gap-4 p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700">
                <Newspaper className="w-8 h-8 text-indigo-600 shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{item.title}</h2>
                    <span className="text-xs text-zinc-400 shrink-0">{item.date}</span>
                  </div>
                  <p className="text-sm text-indigo-600 font-medium mb-2">{item.source}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="py-8 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-zinc-500 text-sm">
          Ingin meminta wawancara atau informasi pers? Hubungi kami di <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 underline">contact</Link>.
        </div>
      </footer>
    </div>
  );
}
