"use client";

import { useState } from "react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Tag,
  CalendarDays,
  User,
  Clock,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Wrench,
} from "lucide-react";

interface ChangeGroup {
  category: "Fitur Baru" | "Peningkatan" | "Keamanan" | "Perbaikan";
  items: string[];
}

interface Release {
  id: string;
  version: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  type: "major" | "minor" | "patch";
  highlights: string[];
  changes: ChangeGroup[];
}

const MAIN_RELEASE: Release = {
  id: "v320",
  version: "v3.2.0",
  title: "Dasbor Analitik Real-Time",
  date: "28 Agustus 2026",
  author: "Tim XVPNX",
  readTime: "5 mnt baca",
  type: "minor",
  highlights: [
    "Widget analitik yang dapat dikustomisasi",
    "Ekspor laporan ke PDF & Excel",
    "Mode gelap otomatis mengikuti sistem",
  ],
  changes: [
    {
      category: "Fitur Baru",
      items: [
        "Widget analitik drag-and-drop yang dapat dikustomisasi sesuai kebutuhan tim.",
        "Ekspor laporan ke PDF & Excel dengan satu klik, termasuk jadwal otomatis harian.",
        "Mode gelap otomatis yang mengikuti preferensi sistem operasi pengguna.",
      ],
    },
    {
      category: "Peningkatan",
      items: [
        "Waktu muat dasbor 40% lebih cepat berkat caching sisi Edge.",
        "Optimasi bundle Tailwind CSS hingga 18% lebih ringan.",
      ],
    },
    {
      category: "Keamanan",
      items: [
        "Patch kerentanan XSS pada editor teks kaya.",
        "Penguatan kebijakan CORS pada endpoint API publik.",
      ],
    },
    {
      category: "Perbaikan",
      items: [
        "Perbaikan sinkronisasi data offline yang sempat tertunda.",
        "Perbaikan overflow tampilan mobile pada modal filter.",
      ],
    },
  ],
};

const RELATED: Release[] = [
  {
    id: "v314",
    version: "v3.1.4",
    title: "Perbaikan Keamanan & Performa",
    date: "15 Agustus 2026",
    author: "Tim XVPNX",
    readTime: "3 mnt baca",
    type: "patch",
    highlights: ["Patch XSS editor", "Muat 40% lebih cepat"],
    changes: [],
  },
  {
    id: "v310",
    version: "v3.1.0",
    title: "Integrasi Pembayaran QRIS",
    date: "1 Agustus 2026",
    author: "Tim XVPNX",
    readTime: "4 mnt baca",
    type: "minor",
    highlights: ["Checkout QRIS instan", "Webhook notifikasi"],
    changes: [],
  },
  {
    id: "v300",
    version: "v3.0.0",
    title: "Arsitektur Baru Berbasis Modul",
    date: "10 Juli 2026",
    author: "Tim XVPNX",
    readTime: "6 mnt baca",
    type: "major",
    highlights: ["Monorepo baru", "API versi 3"],
    changes: [],
  },
  {
    id: "v292",
    version: "v2.9.2",
    title: "Notifikasi Multi-Kanal",
    date: "20 Juni 2026",
    author: "Tim XVPNX",
    readTime: "3 mnt baca",
    type: "patch",
    highlights: ["WhatsApp & email", "Riwayat 90 hari"],
    changes: [],
  },
  {
    id: "v290",
    version: "v2.9.0",
    title: "Mode Kolaborasi Tim",
    date: "5 Juni 2026",
    author: "Tim XVPNX",
    readTime: "4 mnt baca",
    type: "minor",
    highlights: ["Komentar langsung", "Hak akses granular"],
    changes: [],
  },
  {
    id: "v281",
    version: "v2.8.1",
    title: "Optimasi Mobile",
    date: "18 Mei 2026",
    author: "Tim XVPNX",
    readTime: "3 mnt baca",
    type: "patch",
    highlights: ["Navigasi adaptif", "Hemat kuota 30%"],
    changes: [],
  },
  {
    id: "v280",
    version: "v2.8.0",
    title: "Kalender Acara Terpadu",
    date: "2 Mei 2026",
    author: "Tim XVPNX",
    readTime: "4 mnt baca",
    type: "minor",
    highlights: ["Status upcoming otomatis", "Filter kategori"],
    changes: [],
  },
];

const TYPE_LABEL: Record<Release["type"], string> = {
  major: "Major",
  minor: "Minor",
  patch: "Patch",
};

const TYPE_STYLE: Record<Release["type"], string> = {
  major: "bg-purple-600 px-4 py-2 rounded-full text-sm font-medium",
  minor: "bg-blue-600 px-4 py-2 rounded-full text-sm font-medium",
  patch: "bg-emerald-600 px-4 py-2 rounded-full text-sm font-medium",
};

const FILTER_STYLE: Record<string, string> = {
  major: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  minor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  patch: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

const CATEGORY_ICON = {
  "Fitur Baru": Sparkles,
  Peningkatan: Zap,
  Keamanan: ShieldCheck,
  Perbaikan: Wrench,
} as const;

export default function ChangelogDetailPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("semua");

  const filtered = RELATED.filter((r) => {
    const matchFilter = activeFilter === "semua" || r.type === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      r.title.toLowerCase().includes(q) ||
      r.version.toLowerCase().includes(q) ||
      r.highlights.some((h) => h.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  const r = MAIN_RELEASE;

  return (
    <div className="min-h-screen">
      {/* Hero tiru pola news/detail */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/changelog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Changelog
            </Link>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className={TYPE_STYLE[r.type]}>
                <Tag className="w-3.5 h-3.5 inline mr-1" />
                {r.version} &bull; {TYPE_LABEL[r.type]}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {r.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-lg">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {r.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
                {r.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {r.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Isi rilis */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              Sorotan Rilis
            </h2>
            <ul className="space-y-2.5">
              {r.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-lg text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            {r.changes.map((group) => {
              const Icon = CATEGORY_ICON[group.category];
              return (
                <div key={group.category}>
                  <h2 className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                    <Icon className="w-7 h-7 text-blue-500" />
                    {group.category}
                  </h2>
                  <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-slate-700 dark:text-slate-300">
                    {group.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Bagikan catatan rilis ini
            </h3>
            <ShareButtons
              url={`https://xnxv.com/changelog/${r.id}`}
              title={`${r.version} - ${r.title}`}
            />
          </div>
        </div>
      </section>

      {/* Rilis lain + search/filter */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-900 dark:text-white">
            Rilis Lainnya
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
            Jelajahi {RELATED.length} catatan rilis sebelumnya.
          </p>

          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari versi atau fitur, mis. QRIS, mobile..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-200"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["semua", "major", "minor", "patch"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  activeFilter === f
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : `bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 ${f !== "semua" ? FILTER_STYLE[f] : ""}`
                }`}
              >
                {f === "semua" ? "Semua" : TYPE_LABEL[f as Release["type"]]}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/changelog/detail?id=${rel.id}`}
                  className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      {rel.version}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${FILTER_STYLE[rel.type]}`}
                    >
                      {TYPE_LABEL[rel.type]}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {rel.date}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
                    {rel.highlights.join(" • ")}
                  </p>
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium inline-flex items-center gap-1">
                    Lihat detail <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 max-w-2xl mx-auto">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                Tidak ada rilis yang cocok
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Coba kata kunci atau filter lain
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
