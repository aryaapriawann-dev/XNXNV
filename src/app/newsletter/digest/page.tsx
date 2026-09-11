"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mail, ChevronRight, Clock, Send } from "lucide-react";

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

export default function ArchivePage() {
  const [q, setQ] = useState("");
  const [tagFilter, setTagFilter] = useState("semua");

  const filtered = useMemo(() => {
    const query = q.toLowerCase();
    return EDITIONS.filter((edition) => {
      const matchTag = tagFilter === "semua" || edition.tag === tagFilter;
      const matchSearch = edition.subject.toLowerCase().includes(query) ||
        edition.excerpt.toLowerCase().includes(query);
      return matchTag && matchSearch;
    });
  }, [q, tagFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Arsip Newsletter</h1>
          <p className="text-lg text-zinc-300">Kumpulan newsletter yang pernah kami kirimkan ke Anda.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Mail className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{EDITIONS.length}</p>
              <p className="text-sm text-zinc-500">Total Edisi</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {EDITIONS.reduce((acc, e) => acc + e.reads, 0).toLocaleString("id-ID")}
              </p>
              <p className="text-sm text-zinc-500">Total Pembaca</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Send className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {EDITIONS.filter((e) => e.tag === "edisi khusus").length}
              </p>
              <p className="text-sm text-zinc-500">Edisi Khusus</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Mail className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                {(EDITIONS.reduce((acc, e) => acc + e.rating, 0) / EDITIONS.length).toFixed(1)}
              </p>
              <p className="text-sm text-zinc-500">Rating Rata-rata</p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari newsletter..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setTagFilter("semua")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tagFilter === "semua"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
              }`}
            >
              Semua
            </button>
            {["edisi khusus", "update produk", "laporan", "karyawan", "peristiwa"].map((tag) => (
              <button
                key={tag}
                onClick={() => setTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tagFilter === tag
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((edition) => (
              <article
                key={edition.id}
                className="flex gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <Mail className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{edition.subject}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                      {edition.tag}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{edition.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{edition.date}</span>
                    <span>|</span>
                    <span>{edition.reads.toLocaleString("id-ID")} pembaca</span>
                    <span>|</span>
                    <span>Rating: {edition.rating}/5</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0 mt-2" />
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada newsletter yang ditemukan.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/newsletter/digest"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Digest <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
