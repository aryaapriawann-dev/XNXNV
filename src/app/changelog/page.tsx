"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Tag, CalendarDays, Archive, Sparkles } from "lucide-react";

interface Release {
  id: string;
  version: string;
  title: string;
  date: string;
  type: "major" | "minor" | "patch";
  highlights: string[];
}

const RELEASES: Release[] = [
  {
    id: "1",
    version: "v3.2.0",
    title: "Dasbor Analitik Real-Time",
    date: "2026-08-28",
    type: "minor",
    highlights: ["Widget analitik yang dapat dikustomisasi", "Ekspor laporan ke PDF & Excel", "Mode gelap otomatis mengikuti sistem"],
  },
  {
    id: "2",
    version: "v3.1.4",
    title: "Perbaikan Keamanan & Performa",
    date: "2026-08-15",
    type: "patch",
    highlights: ["Patch kerentanan XSS pada editor", "Waktu muat halaman 40% lebih cepat", "Perbaikan sinkronisasi offline"],
  },
  {
    id: "3",
    version: "v3.1.0",
    title: "Integrasi Pembayaran QRIS",
    date: "2026-08-01",
    type: "minor",
    highlights: ["Checkout QRIS instan", "Webhook notifikasi pembayaran", "Rekonsiliasi otomatis harian"],
  },
  {
    id: "4",
    version: "v3.0.0",
    title: "Arsitektur Baru Berbasis Modul",
    date: "2026-07-10",
    type: "major",
    highlights: ["Struktur monorepo baru", "Migrasi database tanpa downtime", "API versi 3 dengan rate-limit adaptif"],
  },
  {
    id: "5",
    version: "v2.9.2",
    title: "Notifikasi Multi-Kanal",
    date: "2026-06-20",
    type: "patch",
    highlights: ["Notifikasi WhatsApp & email", "Template pesan Bahasa Indonesia", "Riwayat pengiriman 90 hari"],
  },
  {
    id: "6",
    version: "v2.9.0",
    title: "Mode Kolaborasi Tim",
    date: "2026-06-05",
    type: "minor",
    highlights: ["Komentar langsung pada dokumen", "Peran & hak akses granular", "Log aktivitas tim"],
  },
  {
    id: "7",
    version: "v2.8.1",
    title: "Optimasi Mobile",
    date: "2026-05-18",
    type: "patch",
    highlights: ["Navigasi bawah adaptif", "Gambar responsif otomatis", "Penghematan kuota data 30%"],
  },
];

const TYPE_LABEL: Record<Release["type"], string> = {
  major: "Major",
  minor: "Minor",
  patch: "Patch",
};

const TYPE_STYLE: Record<Release["type"], string> = {
  major: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  minor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  patch: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function ChangelogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = RELEASES.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.version.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4 border border-emerald-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Changelog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Rilis Terbaru
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">
            Ikuti perkembangan fitur, perbaikan, dan peningkatan platform kami dari waktu ke waktu.
          </p>
          <Link
            href="/changelog/archive"
            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            <Archive className="w-4 h-4" />
            Lihat Arsip Lengkap
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative max-w-2xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari versi atau fitur, mis. QRIS, analitik..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-200"
          />
        </div>

        <div className="space-y-4">
          {filtered.map((r) => (
            <div
              key={r.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-lg font-mono font-bold text-white">{r.version}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${TYPE_STYLE[r.type]}`}>
                  <Tag className="w-3 h-3 inline mr-1" />
                  {TYPE_LABEL[r.type]}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5" /> {r.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <ul className="space-y-1.5">
                {r.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800 mt-6">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada rilis yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci lain</p>
          </div>
        )}
      </div>
    </div>
  );
}
