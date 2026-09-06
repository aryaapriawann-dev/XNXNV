"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  Coffee,
  Rocket,
  Shield,
  Globe,
  Sparkles,
  BookOpen,
  PartyPopper,
} from "lucide-react";

interface Budaya {
  id: string;
  slug: string;
  title: string;
  kategori: string;
  deskripsi: string;
  manfaat: string[];
  lokasi: string;
  jadwal: string;
  ikon: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "kolaborasi", label: "Kolaborasi" },
  { id: "kesejahteraan", label: "Kesejahteraan" },
  { id: "pertumbuhan", label: "Pertumbuhan" },
  { id: "fleksibilitas", label: "Fleksibilitas" },
] as const;

const BUDAYA: Budaya[] = [
  {
    id: "1",
    slug: "kerja-remote-pertama",
    title: "Kerja Remote Pertama",
    kategori: "fleksibilitas",
    deskripsi:
      "Bekerja dari mana saja di Indonesia. Kami percaya hasil lebih penting daripada kehadiran di kantor.",
    manfaat: ["Remote Penuh", "Tunjangan Internet", "Jam Fleksibel"],
    lokasi: "Seluruh Indonesia",
    jadwal: "Setiap Hari",
    ikon: "globe",
  },
  {
    id: "2",
    slug: "jumat-belajar",
    title: "Jumat Belajar",
    kategori: "pertumbuhan",
    deskripsi:
      "Setiap Jumat sore tim berbagi ilmu: demo fitur baru, bedah insiden, atau sesi teknologi terbaru.",
    manfaat: ["Sharing Session", "Sertifikasi", "Mentoring"],
    lokasi: "Online / Jakarta",
    jadwal: "Jumat 15.00 WIB",
    ikon: "book",
  },
  {
    id: "3",
    slug: "kesehatan-mental",
    title: "Kesehatan Mental Utama",
    kategori: "kesejahteraan",
    deskripsi:
      "Cuti kesehatan mental 12 hari per tahun plus konseling gratis. Tidak ada budaya lembur berlebihan.",
    manfaat: ["Cuti 12 Hari", "Konseling Gratis", "No Lembur"],
    lokasi: "Semua Lokasi",
    jadwal: "Kapan Saja",
    ikon: "heart",
  },
  {
    id: "4",
    slug: "kopi-santai",
    title: "Kopi Santai Lintas Tim",
    kategori: "kolaborasi",
    deskripsi:
      "Ngobrol santai 30 menit tiap minggu dengan anggota tim acak. Bangun kedekatan di luar pekerjaan.",
    manfaat: ["Voucher Kopi", "Lintas Divisi", "30 Menit"],
    lokasi: "Online / Offline",
    jadwal: "Rabu Pagi",
    ikon: "coffee",
  },
  {
    id: "5",
    slug: "hackathon-internal",
    title: "Hackathon Internal",
    kategori: "kolaborasi",
    deskripsi:
      "Hackathon 2 hari tiap kuartal. Bentuk tim bebas, bangun prototipe gila, menangkan hadiah menarik.",
    manfaat: ["Hadiah Jutaan", "Bebas Stack", "Demo Day"],
    lokasi: "Jakarta / Bandung",
    jadwal: "Tiap Kuartal",
    ikon: "rocket",
  },
  {
    id: "6",
    slug: "keamanan-transparan",
    title: "Keamanan Transparan",
    kategori: "pertumbuhan",
    deskripsi:
      "Semua keputusan keamanan didokumentasikan terbuka. Setiap anggota bisa ikut audit dan memberi masukan.",
    manfaat: ["Open Doc", "Audit Bersama", "Bug Bounty"],
    lokasi: "Semua Tim",
    jadwal: "Bulanan",
    ikon: "shield",
  },
  {
    id: "7",
    slug: "rayakan-kemenangan",
    title: "Rayakan Kemenangan",
    kategori: "kesejahteraan",
    deskripsi:
      "Tiap rilis besar kami rayakan bersama: makan bersama, bonus tim, dan apresiasi kontributor terbaik.",
    manfaat: ["Bonus Rilis", "Makan Bersama", "Apresiasi"],
    lokasi: "Semua Kantor",
    jadwal: "Tiap Rilis",
    ikon: "party",
  },
  {
    id: "8",
    slug: "inovasi-bebas",
    title: "Inovasi Bebas 20%",
    kategori: "fleksibilitas",
    deskripsi:
      "20% waktu kerja boleh dipakai untuk proyek pribadi yang relevan dengan misi privasi dan keamanan.",
    manfaat: ["20% Waktu", "Dana Prototipe", "Hak Paten Bersama"],
    lokasi: "Remote / Kantor",
    jadwal: "Fleksibel",
    ikon: "sparkles",
  },
];

const ikonMap: Record<string, typeof Heart> = {
  heart: Heart,
  coffee: Coffee,
  rocket: Rocket,
  shield: Shield,
  globe: Globe,
  sparkles: Sparkles,
  book: BookOpen,
  party: PartyPopper,
};

export default function TeamCulturePage() {
  const [selectedKategori, setSelectedKategori] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const filtered = BUDAYA.filter((item) => {
    const cocokKategori =
      selectedKategori === "all" || item.kategori === selectedKategori;
    const q = searchQuery.toLowerCase();
    const cocokCari =
      item.title.toLowerCase().includes(q) ||
      item.kategori.toLowerCase().includes(q) ||
      item.deskripsi.toLowerCase().includes(q) ||
      item.lokasi.toLowerCase().includes(q);
    return cocokKategori && cocokCari;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const currentItems = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Budaya Tim Kami
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Nilai dan kebiasaan yang membuat tim XVPNX solid dan bahagia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari budaya (mis. remote, belajar, kopi)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedKategori(cat.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  selectedKategori === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>
                Kategori:{" "}
                <strong className="text-slate-200">
                  {selectedKategori === "all"
                    ? "Semua"
                    : CATEGORIES.find((c) => c.id === selectedKategori)?.label}
                </strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>
                Budaya:{" "}
                <strong className="text-slate-200">{filtered.length}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => {
            const Ikon = ikonMap[item.ikon] ?? Heart;
            return (
              <div
                key={item.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                        <Ikon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-blue-400 text-sm capitalize">
                          {item.kategori} &middot; {item.jadwal}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {item.deskripsi}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.manfaat.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-500"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-slate-400">
                    <span>{item.lokasi}</span>
                  </div>

                  <Link
                    href="/team/hiring"
                    className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    Gabung Tim Kami
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {currentItems.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Tidak ada budaya ditemukan
            </h3>
            <p className="text-slate-400">
              Coba ubah filter kategori atau kata kunci pencarian Anda
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedKategori("all");
                setCurrentPage(1);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Atur Ulang Filter
            </button>
          </div>
        )}

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
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
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
