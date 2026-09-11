"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Headphones, Clock, ChevronRight, LifeBuoy, MessageSquare, Mail, Phone, CheckCircle } from "lucide-react";

const SUPPORT_SECTIONS = [
  {
    id: "1",
    title: "Saluran Kontak",
    description: "Pilih saluran yang paling sesuai dengan kebutuhan dan urgensi masalah Anda.",
    channels: [
      { name: "Live Chat 24/7", desc: "Obrolan langsung dengan dukungan kami.", response: "≤ 2 menit", icon: Headphones },
      { name: "Email Support", desc: "Kirim pertanyaan detail untuk investigasi.", response: "≤ 4 jam", icon: Mail },
      { name: "Telepon", desc: "Hubungi kami untuk penanganan segera.", response: "≤ 5 menit", icon: Phone },
    ],
    stats: { channels: "3 aktif", avgResponse: "3.3 menit", availability: "24/7" },
  },
  {
    id: "2",
    title: "Dasbor Tiket",
    description: "Pantau status ticket support Anda dan kirim update informasi secara real-time.",
    channels: [
      { name: "Buat Tiket Baru", desc: "Untuk masalah yang memerlukan investigasi mendalam.", response: "≤ 2 jam", icon: Clock },
      { name: "Lihat Status Tiket", desc: "Pantau progress dan update resolusi ticket Anda.", response: "Real-time", icon: LifeBuoy },
      { name: "Tiket Prioritas", desc: "Untuk masalah kritis dengan penanganan cepat.", response: "≤ 30 menit", icon: CheckCircle },
    ],
    stats: { openTickets: "12", resolvedToday: "47", satisfaction: "96%" },
  },
  {
    id: "3",
    title: "Pertanyaan Umum",
    description: "Temukan jawaban atas pertanyaan umum yang sering diajukan oleh pengguna kami.",
    channels: [
      { name: "FAQ Dasar", desc: "Pertanyaan umum tentang layanan kami.", response: "Langsung", icon: LifeBuoy },
      { name: "Troubleshooting", desc: "Solusi untuk masalah umum yang Anda hadapi.", response: "Langsung", icon: LifeBuoy },
      { name: "Keamanan & Privasi", desc: "Informasi tentang kebijakan dan praktik kami.", response: "Langsung", icon: CheckCircle },
    ],
    stats: { articles: "24", helpfulRate: "94%", updatedAt: "2 hari lalu" },
  },
];

export default function SupportPage() {
  const [q, setQ] = useState("");
  const [selectedSection, setSelectedSection] = useState(0);

  const filteredChannels = useMemo(() => {
    const section = SUPPORT_SECTIONS[selectedSection];
    const query = q.toLowerCase();
    if (!query) return section.channels;
    return section.channels.filter((ch) =>
      ch.name.toLowerCase().includes(query) ||
      ch.desc.toLowerCase().includes(query)
    );
  }, [q, selectedSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pusat Support</h1>
          <p className="text-lg text-zinc-300">Temukan solusi, hubungi kami, dan pantau status masalah Anda.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {SUPPORT_SECTIONS.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(idx)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                  selectedSection === idx
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari bagian support..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Headphones className="h-6 w-6 text-zinc-900 dark:text-white" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {SUPPORT_SECTIONS[selectedSection].title}
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {SUPPORT_SECTIONS[selectedSection].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredChannels.map((channel) => (
              <div
                key={channel.name}
                className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <channel.icon className="h-6 w-6 text-zinc-900 dark:text-white" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{channel.name}</h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{channel.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">{channel.response}</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {filteredChannels.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada channel yang ditemukan.</p>
          )}

          <div className="mt-8 p-6 rounded-2xl bg-zinc-100 dark:bg-slate-800">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Statistik Sekarang</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SUPPORT_SECTIONS[selectedSection].stats.channels}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Channel Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SUPPORT_SECTIONS[selectedSection].stats.avgResponse}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Avg Response</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{SUPPORT_SECTIONS[selectedSection].stats.availability}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Tersedia</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/support/lines"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Lihat Semua Saluran <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
