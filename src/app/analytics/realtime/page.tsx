"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Activity,
  Users,
  Eye,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

interface Aktivitas {
  id: string;
  peristiwa: string;
  kategori: string;
  waktu: string;
  nilai: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "kunjungan", label: "Kunjungan" },
  { id: "transaksi", label: "Transaksi" },
  { id: "pendaftaran", label: "Pendaftaran" },
] as const;

const AKTIVITAS: Aktivitas[] = [
  { id: "1", peristiwa: "Kunjungan halaman Pricing", kategori: "kunjungan", waktu: "baru saja", nilai: "1 sesi" },
  { id: "2", peristiwa: "Checkout paket Professional", kategori: "transaksi", waktu: "2 mnt lalu", nilai: "Rp499rb" },
  { id: "3", peristiwa: "Pendaftar newsletter baru", kategori: "pendaftaran", waktu: "5 mnt lalu", nilai: "1 user" },
  { id: "4", peristiwa: "Kunjungan halaman Portfolio", kategori: "kunjungan", waktu: "7 mnt lalu", nilai: "3 sesi" },
  { id: "5", peristiwa: "Checkout paket Starter", kategori: "transaksi", waktu: "12 mnt lalu", nilai: "Rp149rb" },
  { id: "6", peristiwa: "Pendaftar webinar", kategori: "pendaftaran", waktu: "18 mnt lalu", nilai: "4 user" },
  { id: "7", peristiwa: "Kunjungan halaman Blog", kategori: "kunjungan", waktu: "21 mnt lalu", nilai: "6 sesi" },
  { id: "8", peristiwa: "Checkout paket Enterprise", kategori: "transaksi", waktu: "30 mnt lalu", nilai: "Rp2,5jt" },
];

const STATS = [
  { label: "Pengunjung Online", value: "128", icon: Users },
  { label: "Halaman Dilihat/mnt", value: "342", icon: Eye },
  { label: "Transaksi Hari Ini", value: "27", icon: ShoppingCart },
];

export default function RealtimePage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  const filtered = useMemo(
    () =>
      AKTIVITAS.filter(
        (a) =>
          (cat === "all" || a.kategori === cat) &&
          a.peristiwa.toLowerCase().includes(query.toLowerCase())
      ),
    [query, cat]
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">
            Analitik
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Realtime</h1>
          <p className="text-lg text-zinc-300">
            Pantau aktivitas situs detik ini —{" "}
            <span className="font-mono font-bold">{clock || "--:--:--"} WIB</span>
          </p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-4"
              >
                <s.icon className="h-8 w-8 text-zinc-900 dark:text-white" />
                <div>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-sm text-zinc-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari aktivitas..."
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
              Tidak ada aktivitas yang cocok.
            </p>
          ) : (
            <ul className="space-y-3">
              {filtered.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <Activity className="h-5 w-5 text-zinc-400" />
                  <div className="flex-1">
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {a.peristiwa}
                    </p>
                    <p className="text-sm text-zinc-500">
                      {a.kategori} • {a.waktu}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {a.nilai}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/analytics/reports"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Laporan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
