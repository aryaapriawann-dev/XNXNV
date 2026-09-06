"use client";

import { useState } from "react";
import { Calendar, Tag, User, ChevronRight, Filter, Search, Newspaper, Clock, Share2, Heart, MessageCircle, TrendingUp, Eye, Flame } from "lucide-react";

interface TrendingNews {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  views: number;
  likes: number;
  comments: number;
  trendingScore: number;
}

const categories = [
  { id: "all", name: "Semua Kategori" },
  { id: "teknologi", name: "Teknologi" },
  { id: "internet", name: "Internet" },
  { id: "keamanan", name: "Keamanan" },
  { id: "vpn", name: "VPN" },
  { id: "bisnis", name: "Bisnis" },
  { id: "tutorial", name: "Tutorial" },
];

const trendingNews: TrendingNews[] = [
  {
    id: "1",
    title: "Tren VPN 2026: Kecepatan dan Privasi Makin Jadi Prioritas",
    excerpt: "Pengguna Indonesia makin peduli privasi. Simak tren VPN terbaru: protokol cepat, server lokal, dan fitur anti pelacakan.",
    category: "VPN",
    tags: ["VPN", "Privasi", "Tren 2026"],
    author: "Arya Apriawan",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-04",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    views: 48200,
    likes: 1240,
    comments: 186,
    trendingScore: 98,
  },
  {
    id: "2",
    title: "Serangan Phishing Naik 40%, Ini Cara Aman Berselancar",
    excerpt: "Laporan keamanan terbaru mencatat lonjakan phishing. Kenali ciri-cirinya dan cara melindungi data pribadi Anda.",
    category: "Keamanan",
    tags: ["Phishing", "Keamanan", "Tips Aman"],
    author: "Siti Rahma",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-03",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    views: 39500,
    likes: 980,
    comments: 142,
    trendingScore: 95,
  },
  {
    id: "3",
    title: "Internet Cepat untuk Streaming: Berapa Mbps yang Cukup?",
    excerpt: "Panduan praktis memilih kecepatan internet untuk streaming 4K, gaming, dan kerja remote tanpa buffering.",
    category: "Internet",
    tags: ["Streaming", "Kecepatan", "Panduan"],
    author: "Budi Santoso",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-02",
    readTime: 5,
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    views: 31200,
    likes: 860,
    comments: 98,
    trendingScore: 91,
  },
  {
    id: "4",
    title: "AI Bantu Deteksi Situs Palsu, Begini Cara Kerjanya",
    excerpt: "Kecerdasan buatan kini dipakai untuk mendeteksi situs palsu secara real-time. Simak cara kerja dan manfaatnya.",
    category: "Teknologi",
    tags: ["AI", "Keamanan", "Inovasi"],
    author: "Dewi Lestari",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-01",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    views: 28700,
    likes: 790,
    comments: 112,
    trendingScore: 88,
  },
  {
    id: "5",
    title: "Kerja Remote Aman: 7 Pengaturan VPN yang Wajib Aktif",
    excerpt: "Kerja dari kafe atau co-working? Aktifkan 7 pengaturan VPN ini agar koneksi tetap aman dan data kantor terlindungi.",
    category: "VPN",
    tags: ["Remote", "VPN", "Tutorial"],
    author: "Andi Pratama",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-30",
    readTime: 9,
    imageUrl: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=2070&auto=format&fit=crop",
    views: 25400,
    likes: 720,
    comments: 87,
    trendingScore: 84,
  },
  {
    id: "6",
    title: "Harga Paket Internet 2026: Perbandingan 5 Provider Besar",
    excerpt: "Bingung pilih provider? Kami bandingkan harga, kecepatan, dan bonus kuota dari 5 provider internet terbesar.",
    category: "Bisnis",
    tags: ["Provider", "Harga", "Perbandingan"],
    author: "Rina Marlina",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-28",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    views: 22100,
    likes: 640,
    comments: 76,
    trendingScore: 81,
  },
  {
    id: "7",
    title: "Cara Ganti Server VPN agar Streaming Makin Lancar",
    excerpt: "Tutorial langkah demi langkah memilih server VPN tercepat untuk streaming, gaming, dan download besar.",
    category: "Tutorial",
    tags: ["VPN", "Streaming", "Tutorial"],
    author: "Fajar Nugroho",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-26",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    views: 19800,
    likes: 590,
    comments: 64,
    trendingScore: 78,
  },
  {
    id: "8",
    title: "Data Bocor? Langkah Cepat yang Harus Dilakukan",
    excerpt: "Dapat notifikasi data bocor? Jangan panik. Ikuti langkah cepat ini untuk mengamankan akun dan mencegah kerugian.",
    category: "Keamanan",
    tags: ["Data Bocor", "Keamanan", "Panduan"],
    author: "Maya Putri",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-24",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    views: 17600,
    likes: 520,
    comments: 59,
    trendingScore: 75,
  },
];

type SortMode = "trending" | "terbaru" | "populer";

export default function NewsTrendingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortMode, setSortMode] = useState<SortMode>("trending");

  const allTags = Array.from(new Set(trendingNews.flatMap((n) => n.tags)));

  const filtered = trendingNews
    .filter((item) => {
      const categoryMatch =
        activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase();
      const tagMatch = activeTag === "all" || item.tags.includes(activeTag);
      const q = searchQuery.toLowerCase();
      const searchMatch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return categoryMatch && tagMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortMode === "trending") return b.trendingScore - a.trendingScore;
      if (sortMode === "populer") return b.views - a.views;
      return +new Date(b.publishedAt) - +new Date(a.publishedAt);
    });

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
  };

  const formatViews = (v: number) =>
    v >= 1000 ? `${(v / 1000).toFixed(1).replace(".", ",")} rb` : `${v}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/40 text-red-300 text-sm font-semibold rounded-full mb-6">
            <Flame className="h-4 w-4" />
            Paling Banyak Dibaca Minggu Ini
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Berita Trending</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Kabar terpanas seputar VPN, keamanan internet, dan teknologi — diperbarui setiap hari.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">{trendingNews.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Berita Trending</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {trendingNews.reduce((acc, n) => acc + n.views, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Dibaca</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {new Set(trendingNews.map((n) => n.category)).size}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Kategori</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {trendingNews.reduce((acc, n) => acc + n.comments, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Komentar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Filter className="h-4 w-4" /> Filter kategori
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8 items-center">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Topik:</span>
            <button
              onClick={() => setActiveTag("all")}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTag === "all"
                  ? "bg-red-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              Semua
            </button>
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTag === tag
                    ? "bg-red-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari berita trending..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <TrendingUp className="h-5 w-5 text-zinc-400 shrink-0" />
              <label htmlFor="sort" className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                Urutkan:
              </label>
              <select
                id="sort"
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-white focus:ring-0 focus:outline-none"
              >
                <option value="trending">Paling Trending</option>
                <option value="populer">Paling Banyak Dibaca</option>
                <option value="terbaru">Terbaru</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "Semua Berita Trending" : categories.find((c) => c.id === activeCategory)?.name}
              {activeTag !== "all" && ` • ${activeTag}`}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filtered.length} dari {trendingNews.length} berita
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, idx) => (
                <div
                  key={item.id}
                  className="group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Flame className="h-3 w-3" />#{idx + 1} TRENDING
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors" aria-label="Bagikan">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors" aria-label="Suka">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs font-medium">
                      <Eye className="h-3 w-3" /> {formatViews(item.views)} dibaca
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs">
                        <Clock className="h-3 w-3" />
                        {item.readTime} menit baca
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400"
                        >
                          <Tag className="h-3 w-3" /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <img src={item.authorAvatar} alt={item.author} className="h-8 w-8 rounded-full" />
                        <div>
                          <div className="text-sm font-semibold text-zinc-900 dark:text-white flex items-center gap-1">
                            <User className="h-3 w-3 text-zinc-400" /> {item.author}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {getFormattedDate(item.publishedAt)}
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm font-medium hover:gap-2 transition-all">
                        Baca <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <Heart className="h-4 w-4" />
                      {item.likes.toLocaleString("id-ID")}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <MessageCircle className="h-4 w-4" />
                      {item.comments.toLocaleString("id-ID")}
                    </div>
                    <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-sm font-semibold">
                      <Newspaper className="h-4 w-4" />
                      Skor {item.trendingScore}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada berita ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori, topik, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jangan ketinggalan berita trending!</h2>
          <p className="text-zinc-300 text-xl mb-10">
            Daftarkan email Anda untuk mendapatkan kabar terpanas langsung ke inbox setiap pagi.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
