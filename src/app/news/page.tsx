"use client";

import { Calendar, User, MessageCircle, Heart, Share2, ArrowRight, Search, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
  likes: number;
  comments: number;
}

const news: News[] = [
  {
    id: "1",
    title: "XNXV Menjuarai Penghargaan Tech Innovation 2024",
    excerpt: "Perusahaan kami telah resmi menerima penghargaan sebagai Tech Innovation Terbaik 2024 dari Asosiasi Teknologi Indonesia.",
    content: "Kami sangat bangga mengumumkan bahwa XNXV telah dinobatkan sebagai Tech Innovation Terbaik 2024. Penghargaan ini memberikan pengakuan atas dedikasi tim kami dalam menghadirkan solusi teknologi yang inovatif dan berdampak positif bagi industri digital di Indonesia. Dalam tahun 2024, kami telah menyelesaikan lebih dari 50 proyek digital dengan berbagai industri, mulai dari fintech, e-commerce, hingga healthcare. Penghargaan ini menjadi motivasi bagi kami untuk terus berinovasi dan memberikan nilai terbaik bagi klien kami.",
    author: "John Doe",
    date: "2024-09-01",
    category: "Perusahaan",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1552664730-d3873f2a4848?q=80&w=2070&auto=format&fit=crop",
    tags: ["penghargaan", "inovasi", "technovation"],
    likes: 156,
    comments: 42,
  },
  {
    id: "2",
    title: "Luncurkan Platform E-Learning Terpadu untuk Pendidikan Digital",
    excerpt: "Kami meluncurkan platform e-learning komprehensif yang dirancang untuk meningkatkan akses pendidikan teknologi di Indonesia.",
    content: "Hari ini kami secara resmi meluncurkan XNXV Learning Platform — sebuah solusi e-learning terpadu yang dirancang untuk mendukung transformasi digital through education. Platform ini menawarkan kurikulum lengkap dalam berbagai teknologi modern termasuk AI, machine learning, mobile development, dan cloud computing. Sejak peluncuran, lebih dari 1000 siswa telah mendaftar dan 250 telah menyelesaikan kursus dasar. Kami bekerja sama dengan para ahli industri dan akademisi untuk memastikan konten yang dihasilkan relevan dengan kebutuhan pasar saat ini.",
    author: "Jane Smith",
    date: "2024-09-02",
    category: "Produk",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
    tags: ["e-learning", "education", "technology"],
    likes: 234,
    comments: 89,
  },
  {
    id: "3",
    title: "Kolaborasi Strategis dengan Industri Lokal untuk Digital Transformation",
    excerpt: "XNXV memperluas jangkauan dengan kolaborasi bersama 10 UMKM lokal untuk transformasi digital their business.",
    content: "Kami telah memulai program kolaborasi digital transformation bersama 10 UMKM lokal di Jakarta dan Bandung. Program ini mencakup audit sistem IT, pelatihan tim, hingga implementasi solusi digital lengkap. Setiap UMKM menerima paket solusi yang disesuaikan dengan kebutuhan spesifik mereka, termasuk website modern, sistem manajemen toko, dan integrasi pembayaran digital. Dalam satu bulan pelaksanaan, kita telah membantu 5 UMKM meningkatkan penjualan online mereka hingga 300%.",
    author: "Budi Santoso",
    date: "2024-09-03",
    category: "Kolaborasi",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    tags: ["UMKM", "digital transformation", "kolaborasi"],
    likes: 178,
    comments: 56,
  },
  {
    id: "4",
    title: "Tech Talk Series: Memahami AI di Dunia Bisnis Modern",
    excerpt: "Acara tech talk kami successfully menarik lebih dari 500 peserta online dari berbagai daerah di Indonesia.",
    content: "Tech Talk Series edisi kali ini berhasil menarik partisipasi aktif dari 500+ peserta online yang antusias mempelajari penerapan AI dalam bisnis. Narasumber dari berbagai perusahaan teknologi terkemuka membagikan insights berharga tentang strategi adopsi AI yang efektif. Materi mencakup penggunaan machine learning untuk prediksi pasar, chatbot untuk customer service, dan computer vision untuk quality control. Rekaman acara akan segera tersedia di channel YouTube kami untuk rewatch. Terima kasih atas antusiasme luar biasa dari komunitas tech Indonesia!",
    author: "Tech Team",
    date: "2024-09-04",
    category: "Acara",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    tags: ["tech talk", "AI", "community"],
    likes: 312,
    comments: 156,
  },
  {
    id: "5",
    title: "XNXV Buka Program Internship 2024",
    excerpt: "Daftar sekarang untuk program magang kami yang memberikan pengalaman kerja langsung di proyek nyata.",
    content: "XNXV resmi membuka pendaftaran untuk Program Internship 2024 bagi mahasiswa dan fresh graduate yang bersemangat di bidang teknologi. Program ini berlangsung selama 6 bulan dengan pembagian waktu antara pelatihan teknis dan implementasi proyek langsung. Peserta akan dibimbing oleh senior engineer berpengalaman dan mendapatkan mentorship pribadi. Program internship tidak hanya menawarkan pengalaman kerja, tetapi juga kesempatan untuk direkrut secara permanen berdasarkan performa. Pendaftaran akan ditutup pada 30 September 2024.",
    author: "HR Team",
    date: "2024-09-05",
    category: "Karier",
    readTime: "3 menit",
    image: "https://images.unsplash.com/photo-1524910771364-713167395555?q=80&w=2070&auto=format&fit=crop",
    tags: ["internship", "karier", "perekrutan"],
    likes: 445,
    comments: 234,
  },
  {
    id: "6",
    title: "Rilis XNXV Mobile App versi 2.0",
    excerpt: "Versi baru aplikasi mobile kami hadir dengan performa lebih cepat dan fitur-fitur baru yang memukau.",
    content: "Kami mengumumkan rilis XNXV Mobile App versi 2.0 dengan berbagai peningkatan signifikan. Versi baru ini menawarkan interface yang lebih responsif, load time yang lebih cepat, dan fitur-fitur baru seperti push notification real-time dan offline mode. Aplikasi ini kini tersedia untuk iOS dan Android dengan kompatibilitas penuh terhadap perangkat terbaru. Sejak peluncuran versi beta, our download count lebih dari 10.000 dengan rating 4.8 dari 5.0 di platform aplikasi. Fitur paling disukai pengguna adalah dark mode yang lengkap dan navigation yang intuitif.",
    author: "Mobile Team",
    date: "2024-09-06",
    category: "Produk",
    readTime: "4 menit",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
    tags: ["mobile app", "rilis", "teknologi"],
    likes: 289,
    comments: 112,
  },
  {
    id: "7",
    title: "Sertifikasi ISO 27001 untuk Keamanan Informasi",
    excerpt: "XNXV resmi bersertifikasi ISO 27001 menunjukkan komitmen kami terhadap standar keamanan informasi internasional.",
    content: "Sertifikasi ISO 27001 yang kami raih hari ini adalah pencapaian penting dalam perjalanan kami menuju standar keamanan informasi global. Proses sertifikasi yang memakan waktu 8 bulan ini melibatkan audit menyeluruh terhadap sistem keamanan, prosedur operasional, dan manajemen risiko kami. Dengan sertifikasi ini, kami dapat menjamin bahwa data pelanggan dilindungi dengan standar keamanan tertinggi. Sistem manajemen keamanan informasi kami mencakup enkripsi data, akses kontrol ketat, dan prosedur respons insiden yang terstandarisasi. Sertifikasi ini berlaku untuk semua layanan teknologi yang kami tawarkan.",
    author: "Security Team",
    date: "2024-09-07",
    category: "Perusahaan",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["iso 27001", "keamanan", "sertifikasi"],
    likes: 198,
    comments: 67,
  },
  {
    id: "8",
    title: "Webinar Gratis: Membangun Startup Tech dari Nol",
    excerpt: "Ikuti webinar gratis bersama founder sukses yang akan membagikan journey mereka membangun startup tech.",
    content: "Kami mengundang Anda untuk menghadiri webinar gratis 'Membangun Startup Tech dari Nol' bersama tiga founder tech yang sukses. Webinar ini akan membahas: ide bisnis yang viable, MVP development, fundraising strategies, dan Scaling startup. Acara akan diselenggarakan secara online pada 15 September 2024 pukul 14.00 WIB. Pendaftaran gratis dan terbatas hanya untuk 200 peserta pertama. Semua peserta akan mendapatkan e-book 'Startup Blueprint Indonesia' secara gratis setelah registrasi berhasil. Jangan lewatkan kesempatan untuk belajar langsung dari pengalaman nyata para founder.",
    author: "Community Team",
    date: "2024-09-08",
    category: "Acara",
    readTime: "2 menit",
    image: "https://images.unsplash.com/photo-1529066253994-af25d12d8757?q=80&w=2070&auto=format&fit=crop",
    tags: ["webinar", "startup", "gratis"],
    likes: 567,
    comments: 289,
  },
];

const categories = ["Semua", "Perusahaan", "Produk", "Acara", "Karier", "Kolaborasi", "Teknologi"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesCategory = selectedCategory === "Semua" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Tech Insights & Updates</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dari XNXV — berita perusahaan, produk baru, dan insights teknologi industri.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article key={item.id} className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {item.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 flex-1">{item.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-600 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-zinc-500 hover:text-indigo-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{item.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">Tidak ada artikel yang ditemukan.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jangan Ketinggalan Update Terbaru</h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Daftar untuk menerima newsletter mingguan kami berisi tech insights, tips terkini, dan update dari XNXV.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
            >
             Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
