"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, FileText, Download, ChevronRight } from "lucide-react";

interface Laporan {
  id: string;
  title: string;
  kategori: string;
  deskripsi: string;
  tanggal: string;
  format: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "trafik", label: "Trafik" },
  { id: "konversi", label: "Konversi" },
  { id: "pendapatan", label: "Pendapatan" },
  { id: "engagement", label: "Engagement" },
] as const;

const LAPORAN: Laporan[] = [
  {
    id: "1",
    title: "Laporan Trafik Q3 2026",
    kategori: "trafik",
    deskripsi: "Ringkasan kunjungan, sumber trafik, dan halaman terpopuler kuartal berjalan.",
    tanggal: "30 Sep 2026",
    format: "PDF",
  },
  {
    id: "2",
    title: "Analisis Konversi Checkout",
    kategori: "konversi",
    deskripsi: "Corong konversi dari keranjang hingga pembayaran beserta titik drop-off.",
    tanggal: "22 Sep 2026",
    format: "PDF",
  },
  {
    id: "3",
    title: "Pendapatan per Layanan",
    kategori: "pendapatan",
    deskripsi: "Perbandingan pendapatan tiap lini layanan dan tren bulanan.",
    tanggal: "15 Sep 2026",
    format: "XLSX",
  },
  {
    id: "4",
    title: "Engagement Media Sosial",
    kategori: "engagement",
    deskripsi: "Jangkauan, interaksi, dan pertumbuhan pengikut semua kanal sosial.",
    tanggal: "8 Sep 2026",
    format: "PDF",
  },
  {
    id: "5",
    title: "Perilaku Pengunjung Mobile",
    kategori: "trafik",
    deskripsi: "Segmentasi perangkat, durasi sesi, dan halaman keluar pengguna mobile.",
    tanggal: "1 Sep 2026",
    format: "PDF",
  },
  {
    id: "6",
    title: "Retensi Pelanggan Bulanan",
    kategori: "engagement",
    deskripsi: "Kohor retensi, churn, dan nilai seumur hidup pelanggan.",
    tanggal: "25 Agu 2026",
    format: "XLSX",
  },
];

function toCSV(rows: Laporan[]): string {
  const header = "Judul,Kategori,Tanggal,Format";
  const lines = rows.map((r) => `"${r.title}","${r.kategori}","${r.tanggal}","${r.format}"`);
  return [header, ...lines].join("\n");
}

export default function ReportsPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () =>
      LAPORAN.filter(
        (l) =>
          (cat === "all" || l.kategori === cat) &&
          (l.title.toLowerCase().includes(query.toLowerCase()) ||
            l.deskripsi.toLowerCase().includes(query.toLowerCase()))
      ),
    [query, cat]
  );

  const downloadCSV = () => {
    const blob = new Blob([toCSV(filtered)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "laporan-analitik.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">
            Analitik
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Laporan Analitik</h1>
          <p className="text-lg text-zinc-300">
            Unduh dan pelajari laporan kinerja bisnis Anda.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari laporan..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <button
              onClick={downloadCSV}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-colors"
            >
              <Download className="h-5 w-5" /> Unduh CSV ({filtered.length})
            </button>
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
              Tidak ada laporan yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((l) => (
                <div
                  key={l.id}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-zinc-900 dark:text-white" />
                      <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        {l.kategori}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300">
                      {l.format}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {l.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{l.deskripsi}</p>
                  <p className="text-sm text-zinc-500">{l.tanggal}</p>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/analytics/detail"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Analitik Detail <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
