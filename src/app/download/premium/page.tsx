"use client";

import { useState } from "react";
import { Download, Star, Lock, Shield, Zap, Crown, Search, Filter, CheckCircle } from "lucide-react";

interface PaketPremium {
  id: string;
  nama: string;
  deskripsi: string;
  kategori: "VPN Config" | "Script" | "Tools" | "Tutorial" | "Bundle";
  ukuran: string;
  diunduh: number;
  tanggal: string;
  harga: string;
  tags: string[];
  fitur: string[];
  populer?: boolean;
}

const kategoriList = ["Semua", "VPN Config", "Script", "Tools", "Tutorial", "Bundle"];

const paketPremium: PaketPremium[] = [
  {
    id: "1",
    nama: "Config Pack Ultimate",
    deskripsi: "Kumpulan konfigurasi VPN premium untuk semua provider besar. Diperbarui setiap minggu.",
    kategori: "VPN Config",
    ukuran: "12.4 MB",
    diunduh: 8921,
    tanggal: "2024-09-01",
    harga: "Rp 99.000",
    tags: ["Config", "VPN", "Premium", "Multi-Provider"],
    fitur: ["Update mingguan", "100+ server", "Bypass semua ISP", "Support 24/7"],
    populer: true,
  },
  {
    id: "2",
    nama: "Auto-Reconnect Script Pro",
    deskripsi: "Script otomatis reconnect VPN saat koneksi putus. Mendukung Windows, Linux, dan macOS.",
    kategori: "Script",
    ukuran: "345 KB",
    diunduh: 5234,
    tanggal: "2024-08-20",
    harga: "Rp 49.000",
    tags: ["Script", "Auto-Reconnect", "Cross-Platform"],
    fitur: ["Multi-platform", "Ping monitor", "Log otomatis", "Custom interval"],
  },
  {
    id: "3",
    nama: "VPN Speed Optimizer",
    deskripsi: "Tools optimasi kecepatan koneksi VPN dengan algoritma routing cerdas.",
    kategori: "Tools",
    ukuran: "8.7 MB",
    diunduh: 3412,
    tanggal: "2024-08-15",
    harga: "Rp 79.000",
    tags: ["Tools", "Speed", "Optimizer", "Routing"],
    fitur: ["Smart routing", "Bandwidth test", "Server benchmark", "One-click optimize"],
  },
  {
    id: "4",
    nama: "Panduan Setup VPN Lengkap",
    deskripsi: "Tutorial PDF + video lengkap setup VPN dari nol hingga mahir untuk semua platform.",
    kategori: "Tutorial",
    ukuran: "2.1 GB",
    diunduh: 2156,
    tanggal: "2024-07-30",
    harga: "Rp 149.000",
    tags: ["Tutorial", "PDF", "Video", "Beginner"],
    fitur: ["42 chapter", "Video HD", "Latihan soal", "Sertifikat"],
    populer: true,
  },
  {
    id: "5",
    nama: "Enterprise Config Bundle",
    deskripsi: "Paket konfigurasi khusus enterprise dengan enkripsi tingkat militer dan multi-hop.",
    kategori: "Bundle",
    ukuran: "28 MB",
    diunduh: 1890,
    tanggal: "2024-09-05",
    harga: "Rp 299.000",
    tags: ["Enterprise", "Bundle", "Multi-hop", "Enkripsi"],
    fitur: ["Multi-hop VPN", "AES-256", "No-log policy", "Dedicated IP"],
  },
  {
    id: "6",
    nama: "Shadowsocks Config Pack",
    deskripsi: "Config Shadowsocks premium untuk bypass firewall ketat. Server Asia Tenggara.",
    kategori: "VPN Config",
    ukuran: "890 KB",
    diunduh: 6743,
    tanggal: "2024-08-28",
    harga: "Rp 59.000",
    tags: ["Shadowsocks", "Config", "Asia", "Bypass"],
    fitur: ["Server SEA", "Obfuscation", "UDP support", "Update bulanan"],
  },
  {
    id: "7",
    nama: "Bandwidth Monitor Script",
    deskripsi: "Script pemantau bandwidth real-time dengan grafik dan notifikasi Telegram.",
    kategori: "Script",
    ukuran: "210 KB",
    diunduh: 4321,
    tanggal: "2024-07-15",
    harga: "Rp 39.000",
    tags: ["Script", "Bandwidth", "Monitor", "Telegram"],
    fitur: ["Real-time graph", "Alert Telegram", "Export CSV", "Ringan"],
  },
  {
    id: "8",
    nama: "All-in-One Starter Bundle",
    deskripsi: "Bundel lengkap untuk pemula: config, script, tools, dan tutorial dalam satu paket.",
    kategori: "Bundle",
    ukuran: "3.4 GB",
    diunduh: 9876,
    tanggal: "2024-09-03",
    harga: "Rp 199.000",
    tags: ["Bundle", "Starter", "All-in-One", "Pemula"],
    fitur: ["Semua kategori", "Panduan setup", "Discord support", "Update 1 tahun"],
    populer: true,
  },
  {
    id: "9",
    nama: "WireGuard Config Generator",
    deskripsi: "Tools generate konfigurasi WireGuard otomatis dengan antarmuka GUI yang mudah.",
    kategori: "Tools",
    ukuran: "15.2 MB",
    diunduh: 2987,
    tanggal: "2024-08-10",
    harga: "Rp 89.000",
    tags: ["WireGuard", "Generator", "GUI", "Tools"],
    fitur: ["GUI friendly", "QR code export", "Peer management", "Key rotation"],
  },
  {
    id: "10",
    nama: "Masterclass VPN Engineering",
    deskripsi: "Kursus lanjutan membangun server VPN sendiri dari nol dengan keamanan enterprise.",
    kategori: "Tutorial",
    ukuran: "5.8 GB",
    diunduh: 1234,
    tanggal: "2024-09-01",
    harga: "Rp 499.000",
    tags: ["Masterclass", "Engineering", "Advanced", "Server"],
    fitur: ["80+ jam video", "Lab praktik", "Proyek akhir", "Lifetime access"],
  },
];

const getKategoriIcon = (kategori: string) => {
  switch (kategori) {
    case "VPN Config": return <Shield className="h-6 w-6 text-indigo-500" />;
    case "Script": return <Zap className="h-6 w-6 text-yellow-500" />;
    case "Tools": return <Star className="h-6 w-6 text-blue-500" />;
    case "Tutorial": return <Crown className="h-6 w-6 text-amber-500" />;
    case "Bundle": return <Lock className="h-6 w-6 text-emerald-500" />;
    default: return <Download className="h-6 w-6 text-zinc-500" />;
  }
};

const getKategoriColor = (kategori: string) => {
  switch (kategori) {
    case "VPN Config": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
    case "Script": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Tools": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "Tutorial": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    case "Bundle": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    default: return "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400";
  }
};

export default function DownloadPremiumPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [query, setQuery] = useState("");
  const [diunduhIds, setDiunduhIds] = useState<string[]>([]);

  const paketFiltered = paketPremium.filter((p) => {
    const cocokKategori = kategoriAktif === "Semua" || p.kategori === kategoriAktif;
    const q = query.toLowerCase();
    const cocokCari =
      p.nama.toLowerCase().includes(q) ||
      p.deskripsi.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return cocokKategori && cocokCari;
  });

  const handleUnduh = (id: string) => {
    setDiunduhIds((prev) => [...prev, id]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            Akses Premium Eksklusif
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Unduhan Premium
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Akses koleksi paket premium kami — config VPN, script otomasi, tools, dan tutorial eksklusif untuk performa terbaik.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{paketPremium.length}+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Paket Premium</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">
                {paketPremium.reduce((s, p) => s + p.diunduh, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Total Unduhan</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">5</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kategori</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Akses Penuh</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-10 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {kategoriList.map((k) => (
                <button
                  key={k}
                  onClick={() => setKategoriAktif(k)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    kategoriAktif === k
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari paket premium..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Paket */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {paketFiltered.length} paket dari kategori &quot;{kategoriAktif}&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paketFiltered.map((paket) => (
              <div
                key={paket.id}
                className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 ${
                  paket.populer
                    ? "bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/40 dark:to-indigo-900/20 border-2 border-indigo-300 dark:border-indigo-700 shadow-lg"
                    : "bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {/* Badge Populer */}
                {paket.populer && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold shadow">
                      <Crown className="h-3 w-3" />
                      Terpopuler
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
                      {getKategoriIcon(paket.kategori)}
                    </div>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getKategoriColor(paket.kategori)}`}>
                      {paket.kategori}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{paket.ukuran}</span>
                </div>

                {/* Judul & Deskripsi */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{paket.nama}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">{paket.deskripsi}</p>

                {/* Fitur */}
                <ul className="space-y-1 mb-4">
                  {paket.fitur.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {paket.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-4 mb-4">
                  <span>📅 {paket.tanggal}</span>
                  <span>⬇️ {paket.diunduh.toLocaleString("id-ID")}</span>
                </div>

                {/* Harga & Tombol */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{paket.harga}</span>
                  <button
                    onClick={() => handleUnduh(paket.id)}
                    disabled={diunduhIds.includes(paket.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      diunduhIds.includes(paket.id)
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 cursor-default"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
                    }`}
                  >
                    <Download className="h-4 w-4" />
                    {diunduhIds.includes(paket.id) ? "Terunduh" : "Unduh Sekarang"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {paketFiltered.length === 0 && (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">Tidak ada paket yang ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Paket Kustom?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Kami menyediakan paket premium yang disesuaikan dengan kebutuhan spesifik tim atau bisnis Anda.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Hubungi Tim Kami
          </a>
        </div>
      </section>
    </div>
  );
}
