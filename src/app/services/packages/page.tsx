"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Tag, ChevronRight, Check, Clock, ArrowRight, Zap } from "lucide-react";

const PACKAGES = [
  { id: "p1", nama: "Paket Website UMKM", harga: "Mulai Rp2,5jt", kategori: "website", isi: ["Domain + hosting 1 thn", "5 halaman + blog", "WhatsApp chat", "Statistik visitor"], estimasi: "7 hari", hargaPerBuln: "Rp208.333/bulan", popular: true },
  { id: "p2", nama: "Paket Toko Online", harga: "Mulai Rp5jt", kategori: "ecommerce", isi: ["Katalog + QRIS", "Ongkir otomatis", "Laporan penjualan", "Manajemen stok"], estimasi: "14 hari", hargaPerBuln: "Rp416.667/bulan", popular: false },
  { id: "p3", nama: "Paket Aplikasi MVP", harga: "Mulai Rp25jt", kategori: "aplikasi", isi: ["Android + iOS / web", "Auth + database", "Deploy production", "Buku panduan"], estimasi: "45 hari", hargaPerBuln: "Rp555.556/bulan", popular: true },
  { id: "p4", nama: "Paket SEO 3 Bulan", harga: "Rp9jt", kategori: "marketing", isi: ["Audit + 12 artikel", "Optimasi teknis", "Laporan bulanan", "Riset kata kunci"], estimasi: "90 hari", hargaPerBuln: "Rp3jt/bulan", popular: false },
  { id: "p5", nama: "Paket Maintenance", harga: "Rp500rb/bln", kategori: "support", isi: ["Update + backup", "Monitoring 24/7", "2 jam revisi/bln", "Support via chat"], estimasi: "Aktif segera", hargaPerBuln: "Rp500rb/bulan", popular: false },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "website", label: "Website" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "aplikasi", label: "Aplikasi" },
  { id: "marketing", label: "Marketing" },
  { id: "support", label: "Support" },
];

export default function PackagesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sortBy, setSortBy] = useState<"default" | "harga" | "populer">("default");

  const filtered = useMemo(() => {
    let result = PACKAGES.filter((item) => {
      const matchCat = cat === "all" || item.kategori === cat;
      const matchSearch = item.nama.toLowerCase().includes(q.toLowerCase()) || item.isi.join(" ").toLowerCase().includes(q.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortBy === "harga") {
      result = [...result].sort((a, b) => {
        const extractPrice = (str: string) => {
          const num = parseFloat(str.replace(/[^\d,]/g, "").replace(/\./g, ""));
          return isNaN(num) ? 0 : num;
        };
        return extractPrice(a.harga) - extractPrice(b.harga);
      });
    } else if (sortBy === "populer") {
      result = [...result].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return result;
  }, [q, cat, sortBy]);

  const stats = useMemo(() => ({
    total: PACKAGES.length,
    website: PACKAGES.filter((p) => p.kategori === "website").length,
    ecommerce: PACKAGES.filter((p) => p.kategori === "ecommerce").length,
    aplikasi: PACKAGES.filter((p) => p.kategori === "aplikasi").length,
    marketing: PACKAGES.filter((p) => p.kategori === "marketing").length,
    support: PACKAGES.filter((p) => p.kategori === "support").length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Layanan</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Paket Layanan</h1>
          <p className="text-lg text-zinc-300">Harga transparan, isi jelas, tanpa biaya siluman.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Tag className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Paket</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Zap className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.website + stats.ecommerce}</p>
              <p className="text-sm text-zinc-500">Web & Ecom</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">1</p>
              <p className="text-sm text-zinc-500">Maintenance</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari paket..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="harga">Harga Terendah</option>
              <option value="populer">Populer</option>
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
              <div
                key={item.id}
                className={`relative p-6 rounded-2xl border-2 transition-shadow ${
                  item.popular
                    ? "border-indigo-600 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-900/20 dark:to-slate-900 dark:border-indigo-500 shadow-lg shadow-indigo-600/20"
                    : "border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-600 text-white">
                      Paling Populer
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <Tag className="w-5 h-5 text-zinc-400" />
                  <span className="text-xs text-zinc-400 capitalize">{item.kategori}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.nama}</h2>
                <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{item.harga}</p>
                <p className="text-sm text-zinc-400 mb-4">atau {item.hargaPerBuln}</p>
                <p className="text-xs text-zinc-500 mb-4">Estimasi: {item.estimasi}</p>
                <ul className="space-y-2 mb-6">
                  {item.isi.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-slate-700">
                  <Link
                    href="/pricing/calculator"
                    className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Hitung Harga <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-xs text-zinc-400">#{item.id}</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada paket yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/pricing/compare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Bandingkan Layanan <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
