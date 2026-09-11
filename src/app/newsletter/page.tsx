"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Mail, ChevronRight, Clock, Send, TrendingUp, BookOpen, Zap } from "lucide-react";

const FEATURED_SECTIONS = [
  {
    id: "1",
    title: "Berlangganan Newsletter",
    description: "Dapatkan insight mingguan langsung ke inbox Anda tanpa spam.",
    items: [
      { name: "Edisi Mingguan", desc: "Rangkuman artikel dan tips terbaru setiap Jumat.", icon: Mail },
      { name: "Alert Segment", desc: "Notifikasi konten khusus sesuai minat Anda.", icon: TrendingUp },
      { name: "E-Book Eksklusif", desc: "Panduan mendalam yang hanya tersedia untuk pelanggan.", icon: BookOpen },
      { name: "Early Access", desc: "Akses lebih dulu ke fitur dan promo terbaru.", icon: Zap },
    ],
    stats: { subscribers: "2.500+", avgOpenRate: "38%", bouncedRate: "2.1%" },
  },
  {
    id: "2",
    title: "Manajemen Preferensi",
    description: "Atur topik yang ingin Anda terima dan frekuensi notifikasi.",
    items: [
      { name: "Topik Analitik", desc: "Data-driven insight dan tren pasar.", icon: TrendingUp },
      { name: "Tips & Tutorial", desc: "Panduan praktis dan best practice.", icon: BookOpen },
      { name: "Berita Produkt},", desc: "Rilis fitur dan update produk.", icon: Zap },
      { name: "Event & Webinar", desc: "Jadwal acara dan undangan eksklusif.", icon: Mail },
    ],
    stats: { activeUsers: "1.800+", segments: "6", campaigns: "12/bulan" },
  },
];

export default function NewsletterPage() {
  const [q, setQ] = useState("");
  const [selectedFeature, setSelectedFeature] = useState(0);

  const filteredItems = useMemo(() => {
    const f = FEATURED_SECTIONS[selectedFeature];
    const query = q.toLowerCase();
    if (!query) return f.items;
    return f.items.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  }, [q, selectedFeature]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pusat Newsletter</h1>
          <p className="text-lg text-zinc-300">Kelola berlangganan, preferensi, dan pantau performa kampanye Anda.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setSelectedFeature(0)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                selectedFeature === 0
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
              }`}
            >
              Berlangganan
            </button>
            <button
              onClick={() => setSelectedFeature(1)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                selectedFeature === 1
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
              }`}
            >
              Preferensi
            </button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari bagian newsletter..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              {FEATURED_SECTIONS[selectedFeature].title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {FEATURED_SECTIONS[selectedFeature].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <item.icon className="h-6 w-6 text-zinc-900 dark:text-white mb-3" />
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{item.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada item yang ditemukan.</p>
          )}

          <div className="mt-8 p-6 rounded-2xl bg-zinc-100 dark:bg-slate-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Statistik Sekarang</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{FEATURED_SECTIONS[selectedFeature].stats.subscribers}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Subscribers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{FEATURED_SECTIONS[selectedFeature].stats.avgOpenRate}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Avg Open Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{FEATURED_SECTIONS[selectedFeature].stats.bounceRate}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Bounced Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{FEATURED_SECTIONS[selectedFeature].stats.campaigns}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Campaigns/Bulan</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/newsletter/archive"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Arsip <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
