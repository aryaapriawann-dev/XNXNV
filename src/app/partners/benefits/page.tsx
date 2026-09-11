"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Handshake, ChevronRight, Building2, Users, Award, Zap } from "lucide-react";

const BENEFITS = [
  { id: "1", title: "Eksklusif Akses Premium", deskripsi: "Mitra mendapatkan akses premium ke semua fitur dan tools khusus mitra.", icon: Award, views: 2100, order: 1 },
  { id: "2", title: "Prioritas Support 24/7", deskripsi: "Layanan support 24/7 dengan prioritas tinggi untuk masalah kritis.", icon: Zap, views: 1850, order: 2 },
  { id: "3", title: "Diskon Khusus Mitra", deskripsi: "Diskon hingga 30% untuk layanan dan produk yang dipilih.", icon: Building2, views: 1950, order: 3 },
  { id: "4", title: "Pelatihan Bersertifikat", deskripsi: "Program pelatihan bersertifikat untuk tim mitra secara gratis.", icon: Users, views: 1680, order: 4 },
  { id: "5", title: "Akses Early Beta", deskripsi: "Akses awal ke fitur beta sebelum dirilis secara umum.", icon: Star, views: 1420, order: 5 },
  { id: "6", title: "Networking Event Eksklusif", deskripsi: "Undangan ke event eksklusif untuk networking dengan mitra lainnya.", icon: Handshake, views: 1200, order: 6 },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "eksklusif", label: "Eksklusif" },
  { id: "support", label: "Support" },
  { id: "diskon", label: "Diskon" },
  { id: "pelatihan", label: "Pelatihan" },
  { id: "networking", label: "Networking" },
];

const ICON_MAP: Record<string, typeof Award> = {
  Award,
  Zap,
  Building2,
  Users,
  Star,
  Handshake,
};

export default function BenefitsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "views" | "a-z">("default");

  const filtered = useMemo(() => {
    let result = BENEFITS.filter((item) => {
      const matchCat = cat === "all" || item.title.toLowerCase().includes(cat === "all" ? "" : "");
      const matchSearch = item.title.toLowerCase().includes(q.toLowerCase()) || item.deskripsi.toLowerCase().includes(q.toLowerCase());
      return matchSearch;
    });

    if (sortBy === "views") {
      result = [...result].sort((a, b) => b.views - a.views);
    } else if (sortBy === "a-z") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [q, sortBy]);

  const stats = useMemo(() => ({
    total: BENEFITS.length,
    totalViews: BENEFITS.reduce((acc, b) => acc + b.views, 0),
    avgViews: Math.round(BENEFITS.reduce((acc, b) => acc + b.views, 0) / BENEFITS.length),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Partners</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Manfaat Mitra</h1>
          <p className="text-lg text-zinc-300">Keuntungan eksklusif yang kami sediakan untuk mitra kami.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Handshake className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Manfaat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Eye className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.totalViews.toLocaleString("id-ID")}</p>
              <p className="text-sm text-zinc-500">Total Dilihat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Award className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgViews}</p>
              <p className="text-sm text-zinc-500">Rata-rata Views</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari manfaat..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="views">Paling Dilihat</option>
              <option value="a-z">A-Z</option>
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
            {filtered.map((item) => {
              const Icon = ICON_MAP[item.title.toLowerCase().includes("eksklusif") ? "Award" : item.title.toLowerCase().includes("support") ? "Zap" : item.title.toLowerCase().includes("diskon") ? "Building2" : item.title.toLowerCase().includes("pelatihan") ? "Users" : item.title.toLowerCase().includes("beta") ? "Star" : "Handshake"];
              return (
                <div key={item.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{item.title}</h2>
                      <p className="text-xs text-zinc-400">{item.views.toLocaleString("id-ID")} views</p>
                    </div>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">{item.deskripsi}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400 order-2 md:order-1">#{item.order}</span>
                    <Link
                      href="/partners/spotlight"
                      className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline order-1 md:order-2"
                    >
                      Selengkapnya →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada manfaat yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/partners/spotlight"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Sorotan Mitra <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
