"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Headphones, Phone, Mail, Clock, ChevronRight, LifeBuoy } from "lucide-react";

const SUPPORT_CHANNELS = [
  { id: "1", name: "Live Chat (24/7)", desc: "Obrolan langsung dengan tim support kami. Tersedia setiap saat tanpa antrian.", type: "chat", responseTime: "< 2 menit", availability: "Online sepanjang hari", icon: Headphones },
  { id: "2", name: "Kirim Email", desc: "Kirimkan pertanyaan detail dan kami akan membalas dalam waktu singkat.", type: "email", responseTime: "< 4 jam kerja", availability: "Respons dalam 1 hari kerja", icon: Mail },
  { id: "3", name: "Telepon", desc: "Hubungi kami secara langsung untuk masalah yang memerlukan penanganan segera.", type: "telepon", responseTime: "< 5 menit", availability: "Senin–Jumat, 08:00–20:00 WIB", icon: Phone },
  { id: "4", name: "Forum Komunitas", desc: "Diskusi bersama pengguna lain dan tim developer kami secara terbuka.", type: "forum", responseTime: "< 1 jam", availability: "24/7 aktif", icon: LifeBuoy },
  { id: "5", name: "Sistem Tiket", desc: "Untuk permasalahan yang memerlukan investigasi lebih lanjut dan pelacakan progress.", type: "ticket", responseTime: "< 2 jam", availability: "Prioritas tinggi", icon: Clock },
  { id: "6", name: "WhatsApp", desc: "Untuk pertanyaan cepat dan notifikasi status ticket Anda secara real-time.", type: "whatsapp", responseTime: "< 10 menit", availability: "Senin–Sabtu, 09:00–18:00 WIB", icon: Phone },
];

const CHANNEL_TYPES = ["Semua", "chat", "email", "telepon", "forum", "ticket", "whatsapp"];
const RESPONSE_STATS = {
  average: SUPPORT_CHANNELS.reduce((acc, ch) => {
    const num = parseInt(ch.responseTime.replace(/[^0-9]/g, ""));
    return acc + (isNaN(num) ? 0 : num);
  }, 0) / SUPPORT_CHANNELS.length,
  fastest: SUPPORT_CHANNELS.reduce((acc, ch) => {
    const num = parseInt(ch.responseTime.replace(/[^0-9]/g, ""));
    return isNaN(num) ? acc : Math.min(acc, num);
  }, Infinity),
};

export default function LinesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Semua");

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return SUPPORT_CHANNELS.filter((channel) => {
      const matchType = typeFilter === "Semua" || channel.type === typeFilter.toLowerCase();
      const matchSearch = channel.name.toLowerCase().includes(query) || channel.desc.toLowerCase().includes(query);
      return matchType && matchSearch;
    });
  }, [search, typeFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Saluran Support</h1>
          <p className="text-lg text-zinc-300">Temukan cara terbaik untuk menghubungi kami sesuai kebutuhan Anda.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Headphones className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{SUPPORT_CHANNELS.length}</p>
              <p className="text-sm text-zinc-500">Saluran Support</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{RESPONSE_STATS.fastest} min</p>
              <p className="text-sm text-zinc-500">Respon Tercepat</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <LifeBuoy className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">24/7</p>
              <p className="text-sm text-zinc-500">Dukungan Aktif</p>
            </div>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari saluran support..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CHANNEL_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  typeFilter === type
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {type === "Semua" ? "Semua" : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((channel) => (
              <div
                key={channel.id}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <channel.icon className="h-6 w-6 text-zinc-900 dark:text-white" />
                  <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{channel.name}</h2>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{channel.desc}</p>
                <div className="space-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-green-500" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LifeBuoy className="w-3 h-3 text-indigo-500" />
                    <span>Respon waktu: {channel.responseTime}</span>
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
              Lihat Pertanyaan Umum <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
