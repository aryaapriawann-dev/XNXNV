"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Target,
  ChevronRight,
} from "lucide-react";

interface Misi {
  id: string;
  title: string;
  deskripsi: string;
  kategori: string;
  target: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "teknologi", label: "Teknologi" },
  { id: "pertumbuhan", label: "Pertumbuhan" },
  { id: "sosial", label: "Sosial" },
  { id: "lingkungan", label: "Lingkungan" },
] as const;

const MISI: Misi[] = [
  {
    id: "1",
    title: "Digitalisasi 10.000 UMKM",
    deskripsi:
      "Membantu sepuluh ribu UMKM go-digital lewat website, katalog online, dan pembayaran digital hingga 2027.",
    kategori: "pertumbuhan",
    target: "10.000 UMKM",
  },
  {
    id: "2",
    title: "Teknologi Lokal Kelas Dunia",
    deskripsi:
      "Membangun produk perangkat lunak karya anak bangsa yang mampu bersaing di pasar global.",
    kategori: "teknologi",
    target: "5 produk global",
  },
  {
    id: "3",
    title: "Literasi Digital Gratis",
    deskripsi:
      "Program pelatihan digital gratis bagi pelajar dan komunitas di 20 kota Indonesia.",
    kategori: "sosial",
    target: "20 kota",
  },
  {
    id: "4",
    title: "Operasional Ramah Lingkungan",
    deskripsi:
      "Menekan jejak karbon operasional dengan pola kerja remote-first dan infrastruktur cloud yang efisien.",
    kategori: "lingkungan",
    target: "-40% emisi",
  },
  {
    id: "5",
    title: "Akses Teknologi Terjangkau",
    deskripsi:
      "Paket layanan dengan harga bersahabat agar bisnis kecil bisa memakai teknologi terbaik.",
    kategori: "teknologi",
    target: "Mulai Rp99rb/bln",
  },
  {
    id: "6",
    title: "Seribu Lapangan Kerja Digital",
    deskripsi:
      "Menciptakan seribu lapangan kerja digital lewat program magang dan kemitraan talenta.",
    kategori: "sosial",
    target: "1.000 talenta",
  },
];

export default function MissionPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(
    () =>
      MISI.filter(
        (m) =>
          (cat === "all" || m.kategori === cat) &&
          (m.title.toLowerCase().includes(query.toLowerCase()) ||
            m.deskripsi.toLowerCase().includes(query.toLowerCase()))
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Misi XNXNV</h1>
          <p className="text-lg text-zinc-300">
            Enam misi yang memandu setiap keputusan dan produk kami.
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
              placeholder="Cari misi..."
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
              Tidak ada misi yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((m) => (
                <div
                  key={m.id}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-zinc-900 dark:text-white" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      {m.kategori}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {m.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {m.deskripsi}
                  </p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Target: {m.target}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/about/vision"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Visi Kami <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-zinc-300 dark:border-slate-700 rounded-full font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-slate-800 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
