"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Calendar,
  User,
  MapPin,
  Tag,
  Camera,
  ArrowLeft,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

interface GalleryDetail {
  id: string;
  title: string;
  category: "kantor" | "event" | "produk" | "tim" | "workshop";
  photographer: string;
  date: string;
  location: string;
  tags: string[];
  description: string;
  highlights: string[];
  images: string[];
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "kantor", label: "Kantor" },
  { id: "event", label: "Event" },
  { id: "produk", label: "Produk" },
  { id: "tim", label: "Tim" },
  { id: "workshop", label: "Workshop" },
] as const;

const GALLERY_ITEMS: GalleryDetail[] = [
  {
    id: "1",
    title: "Suasana Kantor Pusat Jakarta",
    category: "kantor",
    photographer: "Dimas Prasetyo",
    date: "20 Agustus 2026",
    location: "Jakarta Selatan",
    tags: ["Kantor", "Workspace", "Kolaborasi"],
    description:
      "Dokumentasi ruang kerja kolaboratif dengan konsep terbuka, area hijau, dan pencahayaan alami di lantai 12 kantor pusat kami.",
    highlights: [
      "Area kolaboratif 300m² dengan 40+ meja kerja",
      "Ruang hijau dalam ruangan untuk fokus kerja",
      "Pencahayaan alami 80% area kerja",
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    ],
  },
  {
    id: "2",
    title: "Tech Summit 2026",
    category: "event",
    photographer: "Sinta Maharani",
    date: "15 Agustus 2026",
    location: "JCC Senayan, Jakarta",
    tags: ["Event", "Konferensi", "Keynote"],
    description:
      "Dokumentasi panggung utama dan sesi keynote Tech Summit 2026 yang dihadiri 500+ peserta dari seluruh Indonesia.",
    highlights: [
      "500+ peserta hadir langsung",
      "12 pembicara industri teknologi",
      "3 sesi panel dan 2 workshop paralel",
    ],
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    ],
  },
  {
    id: "3",
    title: "Peluncuran Dasbor Analitik v3.2",
    category: "produk",
    photographer: "Rizky Ramadhan",
    date: "28 Agustus 2026",
    location: "Studio Produk, Bandung",
    tags: ["Produk", "Dasbor", "Analitik"],
    description:
      "Tangkapan layar dan dokumentasi fitur dasbor analitik real-time terbaru dengan visualisasi interaktif dan ekspor laporan.",
    highlights: [
      "Visualisasi real-time 50+ metrik",
      "Ekspor laporan PDF & Excel sekali klik",
      "Mode gelap dan terang bawaan",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ],
  },
  {
    id: "4",
    title: "Retreat Tim ke Bandung",
    category: "tim",
    photographer: "Ayu Lestari",
    date: "30 Juli 2026",
    location: "Lembang, Bandung",
    tags: ["Tim", "Retreat", "Team Building"],
    description:
      "Kegiatan team building dan perencanaan produk semester dua bersama 45 anggota tim di kawasan sejuk Lembang.",
    highlights: [
      "45 anggota tim dari 6 divisi",
      "Roadmap produk semester dua disepakati",
      "2 hari penuh workshop dan outbound",
    ],
    images: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    ],
  },
  {
    id: "5",
    title: "Workshop React Lanjutan",
    category: "workshop",
    photographer: "Fajar Nugroho",
    date: "22 Juli 2026",
    location: "Bandung Tech Hub",
    tags: ["Workshop", "React", "Pelatihan"],
    description:
      "Sesi praktik langsung React lanjutan bersama 35 peserta, membahas Server Components, caching, dan optimasi performa.",
    highlights: [
      "35 peserta lulus dengan sertifikat",
      "8 jam praktik langsung berpemandu",
      "Repo contoh dan rekaman tersedia",
    ],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      "https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80",
    ],
  },
  {
    id: "6",
    title: "Ruang Rapat Kreatif",
    category: "kantor",
    photographer: "Dimas Prasetyo",
    date: "10 Juli 2026",
    location: "Kantor Cabang Surabaya",
    tags: ["Kantor", "Rapat", "Brainstorming"],
    description:
      "Ruang brainstorming dengan papan tulis interaktif, dinding kaca tulis, dan pencahayaan alami untuk sesi ideasi tim.",
    highlights: [
      "Papan tulis interaktif 75 inci",
      "Kapasitas 12 orang per ruangan",
      "Akustik kedap untuk diskusi fokus",
    ],
    images: [
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    ],
  },
  {
    id: "7",
    title: "Meetup Founder Surabaya",
    category: "event",
    photographer: "Sinta Maharani",
    date: "25 Juni 2026",
    location: "Spazio Tower, Surabaya",
    tags: ["Event", "Komunitas", "Startup"],
    description:
      "Momen networking santai bersama 120+ founder dan komunitas startup Jawa Timur dengan sesi sharing dan demo produk.",
    highlights: [
      "120+ founder dan pegiat startup",
      "10 sesi demo produk komunitas",
      "Koneksi investor dan mentor lokal",
    ],
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
      "https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80",
    ],
  },
  {
    id: "8",
    title: "Sesi Foto Tim Produk",
    category: "tim",
    photographer: "Ayu Lestari",
    date: "12 Juni 2026",
    location: "Studio Jakarta",
    tags: ["Tim", "Profil", "Produk"],
    description:
      "Perkenalan wajah-wajah di balik pengembangan platform kami: desainer, engineer, dan manajer produk dalam satu bingkai.",
    highlights: [
      "18 anggota tim produk difoto",
      "Profil profesional untuk halaman tim",
      "Suasana santai dan autentik",
    ],
    images: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
    ],
  },
];

export default function GalleryDetailPage() {
  const [selectedId, setSelectedId] = useState("1");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const galleryItem =
    GALLERY_ITEMS.find((item) => item.id === selectedId) ?? GALLERY_ITEMS[0];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleSelect = (id: string) => {
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Galeri
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              {galleryItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-pink-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {galleryItem.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
              <div>
                <p className="text-slate-400 flex items-center gap-1 text-sm">
                  <User className="w-4 h-4" /> Fotografer
                </p>
                <p className="text-white font-medium">
                  {galleryItem.photographer}
                </p>
              </div>
              <div>
                <p className="text-slate-400 flex items-center gap-1 text-sm">
                  <Calendar className="w-4 h-4" /> Tanggal
                </p>
                <p className="text-white font-medium">{galleryItem.date}</p>
              </div>
              <div>
                <p className="text-slate-400 flex items-center gap-1 text-sm">
                  <MapPin className="w-4 h-4" /> Lokasi
                </p>
                <p className="text-white font-medium">{galleryItem.location}</p>
              </div>
              <div>
                <p className="text-slate-400 flex items-center gap-1 text-sm">
                  <Camera className="w-4 h-4" /> Kategori
                </p>
                <p className="text-white font-medium capitalize">
                  {galleryItem.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryItem.images.slice(0, 2).map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={img}
                      alt={`${galleryItem.title} foto ${idx + 1}`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={galleryItem.images[2]}
                  alt={`${galleryItem.title} ringkasan`}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                  Ringkasan Galeri
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {galleryItem.description}
                </p>
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">
                  Sorotan Utama
                </h4>
                <ul className="space-y-3">
                  {galleryItem.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <ShareButtons
                    url={`https://xnxv.com/gallery/${galleryItem.id}`}
                    title={galleryItem.title}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ImageIcon className="w-7 h-7 text-pink-600" />
                  Jelajahi Koleksi Lainnya
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  Menampilkan {filteredItems.length} dari {GALLERY_ITEMS.length}{" "}
                  koleksi galeri.
                </p>
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari judul, deskripsi, tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Filter className="w-4 h-4 text-slate-400" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-pink-600 text-white shadow-lg"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {filteredItems.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  Tidak ada koleksi yang cocok
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Coba kata kunci atau kategori lain
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`text-left rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
                      item.id === selectedId
                        ? "border-pink-500 ring-2 ring-pink-500/30 bg-pink-50 dark:bg-slate-800"
                        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-pink-300"
                    }`}
                  >
                    <div className="h-44 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs uppercase tracking-wider text-pink-600 dark:text-pink-400 font-semibold capitalize">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <p className="mt-3 text-sm font-semibold text-pink-600 dark:text-pink-400">
                        {item.id === selectedId
                          ? "Sedang ditampilkan"
                          : "Lihat detail →"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Butuh Dokumentasi Profesional?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Tim kreatif kami siap mengabadikan momen kantor, event, dan produk
              Anda dengan standar kualitas terbaik.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
