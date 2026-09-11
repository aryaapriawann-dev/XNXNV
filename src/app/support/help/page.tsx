"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Headphones, Phone, Mail, Clock, ChevronRight, LifeBuoy, MessageSquare, Bell } from "lucide-react";

const SUPPORT_CHANNELS = [
  {
    id: "1",
    name: "Live Chat (24/7)",
    desc: "Obrolan langsung dengan tim support kami. Tersedia setiap saat tanpa antrian dan di-persona sesuaikan dengan bahasa yang Anda inginkan.",
    type: "Chat",
    responseTime: "≤ 2 menit",
    availability: "Online sepanjang hari",
    satisfaction: "4.8/5",
    icon: Headphones,
  },
  {
    id: "2",
    name: "Kirim Email",
    desc: "Kirimkan pertanyaan detail beserta screenshot dan langkah-langkah yang sudah Anda lakukan sebelumnya.",
    type: "Email",
    responseTime: "≤ 4 jam kerja",
    availability: "Respons dalam 1 hari kerja",
    satisfaction: "4.6/5",
    icon: Mail,
  },
  {
    id: "3",
    name: "Telepon Langsung",
    desc: "Hubungi kami secara langsung untuk masalah yang memerlukan penanganan segera dan penjelasan lisan.",
    type: "Telepon",
    responseTime: "≤ 5 menit",
    availability: "Senin–Jumat, 08:00–20:00 WIB",
    satisfaction: "4.7/5",
    icon: Phone,
  },
  {
    id: "4",
    name: "Forum Komunitas",
    desc: "Diskusi bersama pengguna lain dan tim developer kami secara terbuka. Bagikan experience dan temukan solusi bersama.",
    type: "Forum",
    responseTime: "≤ 1 jam",
    availability: "24/7 aktif",
    satisfaction: "4.5/5",
    icon: MessageSquare,
  },
  {
    id: "5",
    name: "Sistem Tiket",
    desc: "Untuk permasalahan yang memerlukan investigasi lebih lanjut, pelacakan progress, dan dokumentasi formal.",
    type: "Tiket",
    responseTime: "≤ 2 jam",
    availability: "Prioritas tinggi",
    satisfaction: "4.9/5",
    icon: Bell,
  },
  {
    id: "6",
    name: "WhatsApp Business",
    desc: "Untuk pertanyaan cepat dan notifikasi status ticket Anda secara real-time. Mudah diakses dari HP.",
    type: "WhatsApp",
    responseTime: "≤ 10 menit",
    availability: "Senin–Sabtu, 09:00–18:00 WIB",
    satisfaction: "4.4/5",
    icon: Phone,
  },
];

const CHANNEL_TYPES = ["Semua", "Chat", "Email", "Telepon", "Forum", "Tiket", "WhatsApp"];

export default function LinesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Semua");
  const [sortBy, setSortBy] = useState<"default" | "fastest" | "rating">("default");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    let result = SUPPORT_CHANNELS.filter((channel) => {
      const matchType = typeFilter === "Semua" || channel.type === typeFilter;
      const matchSearch = channel.name.toLowerCase().includes(query) ||
        channel.desc.toLowerCase().includes(query);
      return matchType && matchSearch;
    });

    if (sortBy === "fastest") {
      result = [...result].sort((a, b) => {
        const getTime = (ch) => parseInt(ch.responseTime.replace(/[^0-9]/g, ""));
        return getTime(a) - getTime(b);
      });
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => parseFloat(b.satisfaction) - parseFloat(a.satisfaction));
    }

    return result;
  }, [search, typeFilter, sortBy]);

  const stats = useMemo(() => ({
    total: SUPPORT_CHANNELS.length,
    avgResponse: SUPPORT_CHANNELS.reduce((acc, ch) => {
      const num = parseInt(ch.responseTime.replace(/[^0-9]/g, ""));
      return acc + (isNaN(num) ? 0 : num);
    }, 0) / SUPPORT_CHANNELS.length,
    avgRating: SUPPORT_CHANNELS.reduce((acc, ch) => acc + parseFloat(ch.satisfaction), 0) / SUPPORT_CHANNELS.length,
    fastest: SUPPORT_CHANNELS.reduce((acc, ch) => {
      const num = parseInt(ch.responseTime.replace(/[^0-9]/g, ""));
      return isNaN(num) ? acc : Math.min(acc, num);
    }, Infinity),
    highestRating: Math.max(...SUPPORT_CHANNELS.map((ch) => parseFloat(ch.satisfaction))),
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Saluran Support</h1>
          <p className="text-lg text-zinc-300">Temukan cara terbaik untuk menghubungi kami sesuai kebutuhan dan urgensi Anda.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Headphones className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Total Saluran</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.fastest} min</p>
              <p className="text-sm text-zinc-500">Respon Tercepat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <LifeBuoy className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgResponse.toFixed(0)} min</p>
              <p className="text-sm text-zinc-500">Rata-rata Respon</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Mail className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.avgRating.toFixed(1)}/5</p>
              <p className="text-sm text-zinc-500">Rating Rata-rata</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari saluran support..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              {CHANNEL_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type === "Semua" ? "Semua Tipe" : type}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="default">Urutan Default</option>
              <option value="fastest">Terfasts Response</option>
              <option value="rating">Rating Tertinggi</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((channel) => (
              <div
                key={channel.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <channel.icon className="h-6 w-6 text-zinc-900 dark:text-white" />
                  <div>
                    <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{channel.name}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300">
                      {channel.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{channel.desc}</p>
                <div className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-green-500" />
                      {channel.availability}
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Respon: {channel.responseTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-zinc-100 dark:border-slate-800">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-indigo-500" />
                      Satisfaction
                    </span>
                    <span className="font-medium text-indigo-600 dark:text-indigo-400">
                      {channel.satisfaction}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada saluran yang ditemukan.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/support/help"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat FAQ <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
