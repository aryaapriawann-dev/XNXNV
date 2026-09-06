"use client";

import { useState } from "react";
import { Search, Clock, Heart, MessageCircle, ChevronRight, BookOpen, TrendingUp, Eye, Flame, Calendar } from "lucide-react";

interface TrendingPost {
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
  trendScore: number;
}

const categories = [
  { id: "all", name: "Semua Kategori" },
  { id: "teknologi", name: "Teknologi" },
  { id: "bisnis", name: "Bisnis" },
  { id: "desain", name: "Desain" },
  { id: "pemasaran", name: "Pemasaran" },
  { id: "pengembangan", name: "Pengembangan" },
  { id: "tutorial", name: "Tutorial" },
];

const periods = [
  { id: "all", name: "Semua Waktu" },
  { id: "harian", name: "Harian" },
  { id: "mingguan", name: "Mingguan" },
  { id: "bulanan", name: "Bulanan" },
];

const trendingPosts: TrendingPost[] = [
  {
    id: "1",
    title: "Masa Depan Pengembangan Web di 2026",
    excerpt: "Jelajahi tren dan teknologi terbaru yang membentuk masa depan pengembangan web tahun ini.",
    category: "Teknologi",
    tags: ["Web", "Tren", "JavaScript"],
    author: "Budi Santoso",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-01",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    views: 45200,
    likes: 2340,
    comments: 145,
    trendScore: 98,
  },
  {
    id: "2",
    title: "Membangun Aplikasi Skalabel dengan Next.js 16",
    excerpt: "Pelajari cara membangun aplikasi skalabel dan performan dengan fitur terbaru Next.js.",
    category: "Pengembangan",
    tags: ["Next.js", "React", "Skalabilitas"],
    author: "Siti Rahma",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-28",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2070&auto=format&fit=crop",
    views: 38900,
    likes: 1980,
    comments: 132,
    trendScore: 95,
  },
  {
    id: "3",
    title: "Prinsip Desain UI/UX yang Wajib Diketahui Developer",
    excerpt: "Prinsip desain esensial yang membantu developer menciptakan antarmuka lebih baik.",
    category: "Desain",
    tags: ["UI/UX", "Aksesibilitas"],
    author: "Andi Pratama",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-25",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop",
    views: 31400,
    likes: 1650,
    comments: 98,
    trendScore: 91,
  },
  {
    id: "4",
    title: "Strategi Pemasaran Digital untuk Startup",
    excerpt: "Strategi pemasaran efektif yang wajib dipertimbangkan setiap startup di 2026.",
    category: "Pemasaran",
    tags: ["Startup", "SEO", "Media Sosial"],
    author: "Dewi Lestari",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-22",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    views: 28700,
    likes: 1520,
    comments: 87,
    trendScore: 88,
  },
  {
    id: "5",
    title: "Mendalami Fitur Modern CSS",
    excerpt: "Bedah mendalam fitur CSS modern yang mengubah cara kita membangun website.",
    category: "Pengembangan",
    tags: ["CSS", "Responsif"],
    author: "Rizky Hidayat",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-20",
    readTime: 9,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    views: 24100,
    likes: 1310,
    comments: 74,
    trendScore: 84,
  },
  {
    id: "6",
    title: "Bisnis Pengembangan Perangkat Lunak",
    excerpt: "Pertimbangan bisnis kunci untuk proyek dan produk pengembangan perangkat lunak.",
    category: "Bisnis",
    tags: ["Bisnis", "Manajemen Proyek"],
    author: "Putri Ayu",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-18",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    views: 19800,
    likes: 1140,
    comments: 62,
    trendScore: 79,
  },
  {
    id: "7",
    title: "Panduan Lengkap Pola React",
    excerpt: "Pola React esensial dan praktik terbaik untuk aplikasi yang mudah dirawat.",
    category: "Pengembangan",
    tags: ["React", "Pola", "Komponen"],
    author: "Agus Wijaya",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-15",
    readTime: 15,
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2070&auto=format&fit=crop",
    views: 35600,
    likes: 2230,
    comments: 189,
    trendScore: 93,
  },
  {
    id: "8",
    title: "AI dalam Pengembangan Web Modern",
    excerpt: "Bagaimana kecerdasan buatan mengubah alur kerja dan perkakas pengembangan web.",
    category: "Teknologi",
    tags: ["AI", "Otomatisasi"],
    author: "Maya Putri",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-12",
    readTime: 11,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    views: 42300,
    likes: 2560,
    comments: 178,
    trendScore: 96,
  },
];

export default function BlogTrendingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activePeriod, setActivePeriod] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = trendingPosts
    .filter((post) => {
      const categoryMatch = activeCategory === "all" || post.category.toLowerCase() === categories.find((c) => c.id === activeCategory)?.name.toLowerCase();
      const searchMatch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => b.trendScore - a.trendScore);

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
  };

  const getRankBadge = (index: number) => {
    if (index === 0) return "bg-amber-500 text-white";
    if (index === 1) return "bg-zinc-400 text-white";
    if (index === 2) return "bg-orange-600 text-white";
    return "bg-white/20 text-white";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310159-5b5f2269596b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-6">
            <Flame className="h-4 w-4" /> Paling Banyak Dibaca Minggu Ini
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Blog Trending</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Artikel paling populer dan paling banyak dibaca pembaca kami, diperbarui setiap hari.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{trendingPosts.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Artikel Trending</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {trendingPosts.reduce((acc, p) => acc + p.views, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Tayang</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {trendingPosts.reduce((acc, p) => acc + p.likes, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Suka</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {trendingPosts.reduce((acc, p) => acc + p.comments, 0).toLocaleString("id-ID")}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Komentar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Periode:
            </span>
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setActivePeriod(period.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activePeriod === period.id
                    ? "bg-orange-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {period.name}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              <Search className="h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari artikel trending..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-orange-600" /> Peringkat Trending
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredPosts.length} dari {trendingPosts.length} artikel
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${getRankBadge(index)}`}>
                        #{index + 1}
                      </span>
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Flame className="h-3 w-3" /> {post.trendScore}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs">
                      <Eye className="h-4 w-4" /> {post.views.toLocaleString("id-ID")} tayang
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs">
                        <Clock className="h-3 w-3" /> {post.readTime} menit baca
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <img src={post.authorAvatar} alt={post.author} className="h-8 w-8 rounded-full" />
                        <div>
                          <div className="text-sm font-semibold text-zinc-900 dark:text-white">{post.author}</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">{getFormattedDate(post.publishedAt)}</div>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:gap-2 transition-all">
                        Baca <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <Heart className="h-4 w-4" /> {post.likes.toLocaleString("id-ID")}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <MessageCircle className="h-4 w-4" /> {post.comments.toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Tidak ada artikel ditemukan</h3>
              <p className="text-zinc-500 dark:text-zinc-400">Coba ubah filter kategori atau kata kunci pencarian</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Dapatkan update trending tiap minggu!</h2>
          <p className="text-zinc-300 text-xl mb-10">Daftarkan email Anda untuk ringkasan artikel trending langsung ke inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button type="submit" className="px-8 py-4 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
