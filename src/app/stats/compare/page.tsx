"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, TrendingDown, Minus, Filter } from "lucide-react";

interface StatRow {
  id: string;
  layanan: string;
  kategori: string;
  harian: number;
  mingguan: number;
  bulanan: number;
  tahunan: number;
  satuan: string;
}

type Periode = "harian" | "mingguan" | "bulanan" | "tahunan";

const PERIODS: { id: Periode; label: string }[] = [
  { id: "harian", label: "Harian" },
  { id: "mingguan", label: "Mingguan" },
  { id: "bulanan", label: "Bulanan" },
  { id: "tahunan", label: "Tahunan" },
];

const STATS: StatRow[] = [
  { id: "1", layanan: "VPN Personal", kategori: "Konsumer", harian: 12500, mingguan: 82000, bulanan: 340000, tahunan: 3900000, satuan: "pengguna" },
  { id: "2", layanan: "VPN Bisnis", kategori: "Enterprise", harian: 3200, mingguan: 21500, bulanan: 89000, tahunan: 1020000, satuan: "perusahaan" },
  { id: "3", layanan: "Server Jakarta", kategori: "Infrastruktur", harian: 98500, mingguan: 680000, bulanan: 2900000, tahunan: 34000000, satuan: "koneksi" },
  { id: "4", layanan: "Server Singapura", kategori: "Infrastruktur", harian: 76200, mingguan: 520000, bulanan: 2250000, tahunan: 26500000, satuan: "koneksi" },
  { id: "5", layanan: "Dedicated IP", kategori: "Enterprise", harian: 850, mingguan: 5900, bulanan: 24000, tahunan: 280000, satuan: "pelanggan" },
  { id: "6", layanan: "Paket Keluarga", kategori: "Konsumer", harian: 4100, mingguan: 28000, bulanan: 118000, tahunan: 1350000, satuan: "keluarga" },
  { id: "7", layanan: "Trial Gratis", kategori: "Konsumer", harian: 15600, mingguan: 105000, bulanan: 430000, tahunan: 5100000, satuan: "pendaftar" },
];

const formatAngka = (n: number): string => n.toLocaleString("id-ID");

export default function StatsComparePage() {
  const [periode, setPeriode] = useState<Periode>("bulanan");
  const [kategoriFilter, setKategoriFilter] = useState<string>("all");

  const kategoris = ["all", ...Array.from(new Set(STATS.map((s) => s.kategori)))];
  const filtered = STATS.filter((s) => kategoriFilter === "all" || s.kategori === kategoriFilter);
  const sorted = [...filtered].sort((a, b) => b[periode] - a[periode]);
  const maxVal = Math.max(...sorted.map((s) => s[periode]), 1);
  const total = sorted.reduce((acc, s) => acc + s[periode], 0);

  const getTrend = (row: StatRow) => {
    if (periode === "harian") return row.mingguan / 7 > row.harian ? "down" : "up";
    if (periode === "mingguan") return row.bulanan / 4 > row.mingguan ? "down" : "up";
    if (periode === "bulanan") return row.tahunan / 12 > row.bulanan ? "down" : "up";
    return "flat";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <BarChart3 className="w-4 h-4" />
            <span>Statistik Layanan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Perbandingan Statistik
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Bandingkan performa tiap layanan berdasarkan periode waktu dan kategori.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Periode */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Filter className="w-4 h-4 text-slate-400" />
          <div className="flex flex-wrap gap-2">
            {PERIODS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriode(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  periode === p.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-8">
          {kategoris.map((k) => (
            <button
              key={k}
              onClick={() => setKategoriFilter(k)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                kategoriFilter === k
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {k === "all" ? "Semua Kategori" : k}
            </button>
          ))}
        </div>

        {/* Ringkasan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Total Periode {PERIODS.find((p) => p.id === periode)?.label}</p>
            <p className="text-2xl font-bold text-white">{formatAngka(total)}</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Layanan Teratas</p>
            <p className="text-2xl font-bold text-blue-400">{sorted[0]?.layanan ?? "-"}</p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Jumlah Layanan</p>
            <p className="text-2xl font-bold text-white">{sorted.length}</p>
          </div>
        </div>

        {/* Tabel */}
        <div className="overflow-x-auto bg-slate-900/70 border border-slate-800 rounded-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-left text-slate-400">
                <th className="px-5 py-4 font-medium">Peringkat</th>
                <th className="px-5 py-4 font-medium">Layanan</th>
                <th className="px-5 py-4 font-medium">Kategori</th>
                <th className="px-5 py-4 font-medium text-right">Nilai ({PERIODS.find((p) => p.id === periode)?.label})</th>
                <th className="px-5 py-4 font-medium">Tren</th>
                <th className="px-5 py-4 font-medium w-1/4">Proporsi</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, idx) => {
                const trend = getTrend(row);
                const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
                const trendColor = trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-slate-400";
                return (
                  <tr key={row.id} className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-300">#{idx + 1}</td>
                    <td className="px-5 py-4 font-medium text-white">{row.layanan}</td>
                    <td className="px-5 py-4">
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-blue-400 border border-slate-700">
                        {row.kategori}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-slate-100">
                      {formatAngka(row[periode])} <span className="font-normal text-slate-500">{row.satuan}</span>
                    </td>
                    <td className="px-5 py-4">
                      <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                    </td>
                    <td className="px-5 py-4">
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          style={{ width: `${(row[periode] / maxVal) * 100}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800 mt-6">
            <p className="text-lg font-semibold text-slate-300">Tidak ada data pada kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
}
