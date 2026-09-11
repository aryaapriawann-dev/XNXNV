"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Lightbulb, ChevronRight, Clock } from "lucide-react";

const TIPS = [
  { id: "1", judul: "Percepat Website dalam 1 Jam", kategori: "teknis", level: "Pemula", isi: "Kompres gambar, aktifkan cache, dan hapus plugin tak terpakai. Hasilnya bisa terasa dalam waktu singkat." },
  { id: "2", judul: "Judul Iklan yang Diklik", kategori: "pemasaran", level: "Menengah", isi: "Pakai angka spesifik dan janji manfaat yang jelas. Misal: 'Turunkan biaya sebesar 30% dalam 3 bulan'." },
  { id: "3", judul: "Invoice Tepat Waktu Dibayar", kategori: "bisnis", level: "Pemula", isi: "Tenggat jelas, denda transparan, dan pengingat otomatis. Kasus kami: 85% pembayaran tepat waktu." },
  { id: "4", judul: "Backup Sebelum Update", kategori: "teknis", level: "Pemula", isi: "Selalu backup penuh sebelum memperbarui apapun. Simpan di minimal dua lokasi berbeda untuk keamanan." },
  { id: "5", judul: "Konten 1 Jadi 5 Format", kategori: "pemasaran", level: "Menengah", isi: "Daur ulang artikel jadi video pendek, carousel Instagram, tweet thread, dan newsletter. Efisiensi waktu 5x." },
  { id: "6", judul: "Brief Desain Anti Revisi", kategori: "bisnis", level: "Lanjutan", isi: "Sertakan contoh referensi, batasan waktu, dan definisi 'selesai' yang jelas. Kurangi revisi berulang hingga 60%." },
  { id: "7", judul: "A/B Testing Tanpa Ribet", kategori: "pemasaran", level: "Menengah", isi: "Mulai dengan satu variabel saja: headline, warna CTA, atau posisi tombol. Ukur selama minimal 7 hari." },
  { id: "8", judul: "Onboarding Pengguna Baru", kategori: "bisnis", level: "Lanjutan", isi: "Buat jalur singkat 3 langkah pertama. Pengguna yang selesai onboarding cenderung bertahan lebih lama 2x." },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "teknis", label: "Teknis" },
  { id: "pemasaran", label: "Pemasaran" },
  { id: "bisnis", label: "Bisnis" },
];

const LEVELS = ["Pemula", "Menengah", "Lanjutan"];

export default function TipsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "newest" | "a-z">("default");

  const filtered = useMemo(() => {
    let result = TIPS.filter((t) => {
      const matchCat = cat === "all" || t.kategori === cat;
      const matchLevel = levelFilter === "all" || t.level === levelFilter;
      const matchSearch = t.judul.toLowerCase().includes(q.toLowerCase()) || t.isi.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchLevel && matchSearch;
    });

    if (sortBy === "a-z") {
      result = [...result].sort((a, b) => a.judul.localeCompare(b.judul));
    } else if (sortBy === "newest") {
      result = [...result].reverse();
    }

    return result;
  }, [q, cat, levelFilter, sortBy]);

  const stats = useMemo(() => ({
    total: TIPS.length,
    technical: TIPS.filter((t) => t.kategori === "teknis").length,
    marketing: TIPS.filter((t) => t.kategori === "pemasaran").length,
    business: TIPS.filter((t) => t.kategori === "bisnis").length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tips Cepat</h1>
          <p className="text-lg text-zinc-300">Solusi singkat untuk masalah sehari-hari.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Lightbulb className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Total Tips</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.technical}</p>
              <p className="text-sm text-zinc-500">Teknis</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Lightbulb className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.marketing}</p>
              <p className="text-sm text-zinc-500">Pemasaran</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Lightbulb className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.business}</p>
              <p className="text-sm text-zinc-500">Bisnis</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari tips..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="all">Semua Level</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="a-z">A-Z</option>
              <option value="newest">Terbaru</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((c) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mb-1" />
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                    {tip.level}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{tip.judul}</h2>
                <p className="text-zinc-600 dark:text-zinc-400">{tip.isi}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                    {tip.kategori}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada tips yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/faq/search"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Cari FAQ <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
