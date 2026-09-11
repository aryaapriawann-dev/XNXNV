"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mail, ChevronRight, Star } from "lucide-react";

const EDITIONS = [
  {
    id: "1",
    subject: "Panduan Keamanan Siber untuk UMKM",
    excerpt: "Tips praktis melindungi bisnis Anda dari ancaman siber yang umum di tahun 2025.",
    tag: "edisi khusus",
    reads: 1420,
    date: "Oktober 2025",
    rating: 4.7,
  },
  {
    id: "2",
    subject: "Pembaruan Penelusuran Cepat",
    excerpt: "Cara baru mempercepat proses penelitian pasar dengan alat otomatis yang kami kembangkan.",
    tag: "update produk",
    reads: 980,
    date: "September 2025",
    rating: 4.5,
  },
  {
    id: "3",
    subject: "Analisis Tren Digital Asia Tenggara",
    excerpt: "Apa yang terjadi di ruang digital regional dan implikasinya bagi strategi bisnis Anda.",
    tag: "laporan",
    reads: 2100,
    date: "Agustus 2025",
    rating: 4.9,
  },
  {
    id: "4",
    subject: "Tips Membangun Tim Remote Efektif",
    excerpt: "Strategi nyata yang kami terapkan dalam mengelola tim lintas wilayah tanpa mengurangi kualitas.",
    tag: "karyawan",
    reads: 730,
    date: "Juli 2025",
    rating: 4.3,
  },
  {
    id: "5",
    subject: "Ringkasan Konferensi Keamanan siber Nasional",
    excerpt: "Temuan utama dan wawasan dari para pembicara di acara keamanan siber tingkat nasional kemarin.",
    tag: "peristiwa",
    reads: 1150,
    date: "Juni 2025",
    rating: 4.6,
  },
];

export default function Page() {
  const [q, setQ] = useState("");
  const [tagFilter, setTagFilter] = useState("semua");
  const tags = ["semua", ...Array.from(new Set(EDITIONS.map((e) => e.tag)))];
  const filtered = useMemo(() => EDITIONS.filter((e) => {
    const matchesSearch = e.subject.toLowerCase().includes(q.toLowerCase()) || e.excerpt.toLowerCase().includes(q.toLowerCase());
    const matchesTag = tagFilter === "semua" || e.tag === tagFilter;
    return matchesSearch && matchesTag;
  }), [q, tagFilter]);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Newsletter</h1>
          <p className="text-lg text-zinc-300">Ringkasan isi newsletter yang telah kami kirimkan.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari newsletter..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTagFilter(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tagFilter === t ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}
                >
                  {t === "semua" ? "Semua" : t}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filtered.map((edition) => (
              <div key={edition.id} className="flex gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                <Mail className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{edition.subject}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">{edition.tag}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{edition.excerpt}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{edition.date}</span>
                    <span>{edition.reads.toLocaleString("id-ID")} baca</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span>{edition.rating}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0 mt-2" />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada newsletter yang ditemukan.</p>
          )}
        </div>
      </section>
    </div>
  );
}
