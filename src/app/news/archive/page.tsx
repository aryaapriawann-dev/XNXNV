"use client";

import { useState } from "react";
import { Newspaper, Search, Filter, ChevronLeft, ChevronRight, Clock, Tag } from "lucide-react";

interface Berita {
  id: string;
  judul: string;
  ringkasan: string;
  kategori: "Pengumuman" | "Pembaruan" | "Keamanan" | "Promo" | "Teknologi";
  tahun: number;
  tanggal: string;
  waktuBaca: number;
}

const KATEGORIS = ["all", "Pengumuman", "Pembaruan", "Keamanan", "Promo", "Teknologi"] as const;
const TAHUNS = ["all", "2026", "2025", "2024"] as const;

const BERITAS: Berita[] = [
  { id: "1", judul: "Server Baru Jakarta 10 Gbps Resmi Beroperasi", ringkasan: "Kami meluncurkan klaster server terbaru di Jakarta dengan bandwidth 10 Gbps untuk kecepatan maksimal.", kategori: "Pengumuman", tahun: 2026, tanggal: "20 Agu 2026", waktuBaca: 3 },
  { id: "2", judul: "Pembaruan Protokol WireGuard 2.0", ringkasan: "Protokol terbaru menghadirkan koneksi 40% lebih cepat dan konsumsi baterai lebih hemat.", kategori: "Pembaruan", tahun: 2026, tanggal: "5 Agu 2026", waktuBaca: 4 },
  { id: "3", judul: "Tips Aman Berinternet di WiFi Publik", ringkasan: "Panduan praktis melindungi data pribadi saat menggunakan WiFi kafe, bandara, dan hotel.", kategori: "Keamanan", tahun: 2026, tanggal: "18 Jul 2026", waktuBaca: 5 },
  { id: "4", judul: "Promo Kemerdekaan: Diskon 50% Paket Tahunan", ringkasan: "Rayakan kemerdekaan dengan diskon spesial untuk semua paket tahunan selama bulan Agustus.", kategori: "Promo", tahun: 2026, tanggal: "1 Agu 2026", waktuBaca: 2 },
  { id: "5", judul: "Memahami Enkripsi AES-256 dengan Mudah", ringkasan: "Penjelasan sederhana tentang standar enkripsi yang melindungi data jutaan pengguna kami.", kategori: "Teknologi", tahun: 2026, tanggal: "12 Jul 2026", waktuBaca: 6 },
  { id: "6", judul: "Ekspansi 25 Server Baru di Asia Tenggara", ringkasan: "Jaringan kami kini mencakup 12 kota baru termasuk Kuala Lumpur, Bangkok, dan Manila.", kategori: "Pengumuman", tahun: 2025, tanggal: "10 Des 2025", waktuBaca: 3 },
  { id: "7", judul: "Fitur Kill Switch Otomatis Kini Tersedia", ringkasan: "Perlindungan ekstra yang memutus internet otomatis jika koneksi VPN terputus sesaat.", kategori: "Pembaruan", tahun: 2025, tanggal: "22 Nov 2025", waktuBaca: 4 },
  { id: "8", judul: "Waspada Phishing Berkedok Layanan VPN", ringkasan: "Kenali ciri-ciri situs palsu yang mengatasnamakan layanan VPN untuk mencuri kredensial.", kategori: "Keamanan", tahun: 2025, tanggal: "30 Okt 2025", waktuBaca: 5 },
  { id: "9", judul: "Promo Akhir Tahun: Gratis 3 Bulan", ringkasan: "Setiap pembelian paket 1 tahun mendapatkan bonus 3 bulan gratis hingga 31 Desember.", kategori: "Promo", tahun: 2025, tanggal: "1 Des 2025", waktuBaca: 2 },
  { id: "10", judul: "Bagaimana VPN Melindungi Pekerja Remote", ringkasan: "Studi tentang peran VPN dalam menjaga keamanan kerja jarak jauh bagi 10.000 perusahaan.", kategori: "Teknologi", tahun: 2024, tanggal: "15 Sep 2024", waktuBaca: 7 },
  { id: "11", judul: "Audit Keamanan Independen 2024 Lulus Sempurna", ringkasan: "Hasil audit pihak ketiga mengonfirmasi kebijakan tanpa log dan keamanan infrastruktur kami.", kategori: "Pengumuman", tahun: 2024, tanggal: "8 Jun 2024", waktuBaca: 4 },
  { id: "12", judul: "Aplikasi Android & iOS Versi Baru Dirilis", ringkasan: "Tampilan baru yang lebih segar, koneksi satu ketuk, dan mode hemat baterai.", kategori: "Pembaruan", tahun: 2024, tanggal: "3 Mar 2024", waktuBaca: 3 },
];

export default function NewsArchivePage() {
  const [kategori, setKategori] = useState<string>("all");
  const [tahun, setTahun] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = BERITAS.filter((b) => {
    const matchKategori = kategori === "all" || b.kategori === kategori;
    const matchTahun = tahun === "all" || String(b.tahun) === tahun;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      b.judul.toLowerCase().includes(q) || b.ringkasan.toLowerCase().includes(q);
    return matchKategori && matchTahun && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilter = () => {
    setKategori("all");
    setTahun("all");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4 border border-blue-500/20">
            <Newspaper className="w-4 h-4" />
            <span>Arsip Berita</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Kabar & Pembaruan Terkini
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Jelajahi seluruh pengumuman, pembaruan produk, dan artikel keamanan dari tim kami.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="relative max-w-2xl mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari berita berdasarkan judul atau isi..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-200"
          />
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap gap-2 mb-4">
          {KATEGORIS.map((k) => (
            <button
              key={k}
              onClick={() => { setKategori(k); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                kategori === k
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {k === "all" ? "Semua Kategori" : k}
            </button>
          ))}
        </div>

        {/* Filter Tahun */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TAHUNS.map((t) => (
            <button
              key={t}
              onClick={() => { setTahun(t); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                tahun === t
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              {t === "all" ? "Semua Tahun" : t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Filter className="w-4 h-4" />
          <span>Total Hasil: <strong className="text-slate-200">{filtered.length}</strong></span>
        </div>

        {/* List */}
        <div className="space-y-4">
          {currentItems.map((b) => (
            <article
              key={b.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all hover:shadow-xl"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20 flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {b.kategori}
                </span>
                <span className="text-xs text-slate-500">{b.tanggal} &bull; {b.tahun}</span>
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" /> {b.waktuBaca} min baca
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors">
                {b.judul}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.ringkasan}</p>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada berita yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba sesuaikan kata kunci atau filter Anda</p>
            <button
              onClick={resetFilter}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page ? "bg-blue-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
