"use client";

import { useState } from "react";
import { LineChart, TrendingUp, TrendingDown, Minus, Search, Filter } from "lucide-react";

interface TrendRow {
  id: string;
  layanan: string;
  kategori: string;
  data: number[];
  satuan: string;
}

type Periode = "harian" | "mingguan" | "bulanan" | "tahunan";

const PERIODS: { id: Periode; label: string; titik: string[] }[] = [
  { id: "harian", label: "Harian", titik: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"] },
  { id: "mingguan", label: "Mingguan", titik: ["Min 1", "Min 2", "Min 3", "Min 4", "Min 5", "Min 6"] },
  { id: "bulanan", label: "Bulanan", titik: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"] },
  { id: "tahunan", label: "Tahunan", titik: ["2021", "2022", "2023", "2024", "2025", "2026"] },
];

const TRENDS: TrendRow[] = [
  { id: "1", layanan: "VPN Personal", kategori: "Konsumer", data: [280, 310, 295, 340, 365, 390], satuan: "rb pengguna" },
  { id: "2", layanan: "VPN Bisnis", kategori: "Enterprise", data: [70, 78, 75, 85, 89, 96], satuan: "rb perusahaan" },
  { id: "3", layanan: "Server Jakarta", kategori: "Infrastruktur", data: [2400, 2600, 2500, 2750, 2900, 3100], satuan: "rb koneksi" },
  { id: "4", layanan: "Server Singapura", kategori: "Infrastruktur", data: [1900, 2000, 1950, 2150, 2250, 2400], satuan: "rb koneksi" },
  { id: "5", layanan: "Dedicated IP", kategori: "Enterprise", data: [18, 20, 22, 21, 24, 26], satuan: "rb pelanggan" },
  { id: "6", layanan: "Paket Keluarga", kategori: "Konsumer", data: [95, 105, 100, 112, 118, 128], satuan: "rb keluarga" },
  { id: "7", layanan: "Trial Gratis", kategori: "Konsumer", data: [380, 410, 395, 430, 445, 470], satuan: "rb pendaftar" },
];

const formatAngka = (n: number): string => n.toLocaleString("id-ID");

export default function StatsTrendsPage() {
  const [periode, setPeriode] = useState<Periode>("bulanan");
  const [kategoriFilter, setKategoriFilter] = useState<string>("all");
  const [cari, setCari] = useState<string>("");
  const [aktifId, setAktifId] = useState<string>("1");

  const titik = PERIODS.find((p) => p.id === periode)?.titik ?? [];
  const kategoris = ["all", ...Array.from(new Set(TRENDS.map((t) => t.kategori)))];

  const filtered = TRENDS.filter(
    (t) =>
      (kategoriFilter === "all" || t.kategori === kategoriFilter) &&
      t.layanan.toLowerCase().includes(cari.toLowerCase())
  );

  const aktif = filtered.find((t) => t.id === aktifId) ?? filtered[0];
  const maxAktif = aktif ? Math.max(...aktif.data, 1) : 1;
  const totalAktif = aktif ? aktif.data.reduce((a, b) => a + b, 0) : 0;
  const pertama = aktif?.data[0] ?? 0;
  const terakhir = aktif?.data[(aktif?.data.length ?? 1) - 1] ?? 0;
  const persen = pertama > 0 ? ((terakhir - pertama) / pertama) * 100 : 0;
  const arah = persen > 1 ? "up" : persen < -1 ? "down" : "flat";
  const ArahIcon = arah === "up" ? TrendingUp : arah === "down" ? TrendingDown : Minus;
  const arahWarna =
    arah === "up" ? "text-green-400" : arah === "down" ? "text-red-400" : "text-slate-400";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <LineChart className="w-4 h-4" />
            <span>Tren Statistik</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Tren Pertumbuhan Layanan
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Pantau pergerakan tiap layanan dari waktu ke waktu dan pilih periode yang ingin dianalisis.
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

        {/* Search + Kategori */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={cari}
              onChange={(e) => setCari(e.target.value)}
              placeholder="Cari layanan, mis. VPN Personal..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Ringkasan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Total {aktif?.layanan ?? "-"}</p>
            <p className="text-2xl font-bold text-white">
              {formatAngka(totalAktif)}{" "}
              <span className="text-sm font-normal text-slate-500">{aktif?.satuan}</span>
            </p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Perubahan Periode Ini</p>
            <p className={`text-2xl font-bold flex items-center gap-2 ${arahWarna}`}>
              <ArahIcon className="w-5 h-5" />
              {persen >= 0 ? "+" : ""}
              {persen.toFixed(1)}%
            </p>
          </div>
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-400 mb-1">Layanan Dipantau</p>
            <p className="text-2xl font-bold text-white">{filtered.length}</p>
          </div>
        </div>

        {aktif ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Grafik */}
            <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white">{aktif.layanan}</h2>
                  <p className="text-sm text-slate-400">
                    {aktif.kategori} &bull; {aktif.satuan}
                  </p>
                </div>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${arahWarna}`}>
                  <ArahIcon className="w-4 h-4" />
                  {persen >= 0 ? "Naik" : "Turun"}
                </span>
              </div>
              <div className="flex items-end gap-3 h-56">
                {aktif.data.map((v, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-xs text-slate-400">{formatAngka(v)}</span>
                    <div className="w-full bg-slate-800 rounded-t-lg overflow-hidden flex items-end h-full">
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-lg transition-all"
                        style={{ height: `${(v / maxAktif) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">{titik[i] ?? `P${i + 1}`}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daftar layanan */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-slate-300 px-2 mb-3">
                Pilih Layanan ({filtered.length})
              </h3>
              <div className="space-y-2">
                {filtered.map((t) => {
                  const awal = t.data[0] ?? 0;
                  const akhir = t.data[t.data.length - 1] ?? 0;
                  const naik = akhir >= awal;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setAktifId(t.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                        aktif.id === t.id
                          ? "bg-blue-600/15 border-blue-500/40 text-white"
                          : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{t.layanan}</span>
                        {naik ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {t.kategori} &bull; {formatAngka(akhir)} {t.satuan}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800 mb-8">
            <p className="text-lg font-semibold text-slate-300">Layanan tidak ditemukan</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci atau kategori lain.</p>
          </div>
        )}

        {/* Tabel tren */}
        {filtered.length > 0 && (
          <div className="overflow-x-auto bg-slate-900/70 border border-slate-800 rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-left text-slate-400">
                  <th className="px-5 py-4 font-medium">Layanan</th>
                  <th className="px-5 py-4 font-medium">Kategori</th>
                  {titik.map((t) => (
                    <th key={t} className="px-5 py-4 font-medium text-right">
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setAktifId(row.id)}
                    className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <td className="px-5 py-4 font-medium text-white">{row.layanan}</td>
                    <td className="px-5 py-4">
                      <span className="px-3 py-1 bg-slate-800 rounded-full text-xs text-blue-400 border border-slate-700">
                        {row.kategori}
                      </span>
                    </td>
                    {row.data.map((v, i) => (
                      <td key={i} className="px-5 py-4 text-right text-slate-300">
                        {formatAngka(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
