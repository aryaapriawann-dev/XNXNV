"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Calendar, ChevronRight, Users, Video, Globe, TrendingUp } from "lucide-react";

const DATA = [
  { id: "1", title: "Webinar SEO 2026", date: "20 Sep 2026", peserta: 1250, kategori: "webinar", ringkasan: "Strategi SEO terbaru dengan studi kasus klien.", fasilitator: "Ahmad Rizky", durasi: "90 menit" },
  { id: "2", title: "Workshop Next.js Pemula", date: "12 Sep 2026", peserta: 320, kategori: "workshop", ringkasan: "Hands-on membangun aplikasi pertama dengan Next.js.", fasilitator: "Sari Dewi", durasi: "180 menit" },
  { id: "3", title: "Konferensi Digital UMKM", date: "30 Agu 2026", peserta: 2800, kategori: "konferensi", ringkasan: "2.800 pelaku UMKM belajar go-digital.", fasilitator: "Budi Santoso", durasi: "480 menit" },
  { id: "4", title: "Meetup Developer Jakarta", date: "15 Agu 2026", peserta: 150, kategori: "meetup", ringkasan: "Ngobrol santai soal AI dan web performance.", fasilitator: "Maya Putri", durasi: "60 menit" },
  { id: "5", title: "Webinar Copywriting", date: "2 Agu 2026", peserta: 980, kategori: "webinar", ringkasan: "Teknik menulis landing page yang konversi.", fasilitator: "Hendri Wijaya", durasi: "60 menit" },
  { id: "6", title: "Workshop UI Figma", date: "20 Jul 2026", peserta: 210, kategori: "workshop", ringkasan: "Dari wireframe ke prototype siap handoff.", fasilitator: "Rina Marlina", durasi: "150 menit" },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "webinar", label: "Webinar" },
  { id: "workshop", label: "Workshop" },
  { id: "konferensi", label: "Konferensi" },
  { id: "meetup", label: "Meetup" },
];

export default function WebinarsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "peserta" | "terbaru">("default");

  const filtered = useMemo(() => {
    let result = DATA.filter((item) => {
      const matchCat = cat === "all" || item.kategori === cat;
      const matchSearch = item.title.toLowerCase().includes(q.toLowerCase()) || item.ringkasan.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "peserta") {
      result = [...result].sort((a, b) => b.peserta - a.peserta);
    } else if (sortBy === "terbaru") {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: DATA.length,
    totalPeserta: DATA.reduce((acc, d) => acc + d.peserta, 0),
    avgPeserta: Math.round(DATA.reduce((acc, d) => acc + d.peserta, 0) / DATA.length),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Acara</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Webinar</h1>
          <p className="text-lg text-zinc-300">Belajar langsung dari para ahli.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Calendar className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Webinar</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Users className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalPeserta.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Peserta</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <TrendingUp className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgPeserta}</p>
              <p className="text-sm text-zinc-500">Rata-rata Peserta</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari webinar..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="peserta">Terbanyak Peserta</option>
              <option value="terbaru">Terbaru</option>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span className="text-sm text-zinc-500">{item.date}</span>
                  <span className="text-xs text-zinc-400">•</span>
                  <span className="text-xs text-zinc-400">{item.durasi}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{item.ringkasan}</p>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <Video className="w-4 h-4" />
                    <span>{item.peserta.toLocaleString("id-ID")} peserta</span>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">{item.fasilitator}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada webinar yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/events/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Daftar Webinar <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
