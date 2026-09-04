"use client";

import { useState, useEffect } from "react";
import { Search, Calendar, User, Clock, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NewsCategory {
  id: string;
  name: string;
  count: number;
  icon: string;
  color: string;
  description: string;
}

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

const categories: NewsCategory[] = [
  { id: "1", name: "Technology", count: 128, icon: "💻", color: "bg-blue-500", description: "Latest in tech, programming, and digital innovation" },
  { id: "2", name: "AI & ML", count: 87, icon: "🤖", color: "bg-purple-500", description: "Artificial Intelligence and Machine Learning developments" },
  { id: "3", name: "Startups", count: 45, icon: "🚀", color: "bg-green-500", description: "Startup ecosystem, funding, and growth stories" },
  { id: "4", name: "Design", count: 32, icon: "🎨", color: "bg-pink-500", description: "UI/UX design trends and best practices" },
  { id: "5", name: "Cloud", count: 56, icon: "☁️", color: "bg-orange-500", description: "Cloud computing, DevOps, and infrastructure" },
  { id: "6", name: "Security", count: 29, icon: "🔒", color: "bg-red-500", description: "Cybersecurity threats and protection strategies" },
];

const recentNews: NewsArticle[] = [
  {
    id: "1",
    title: "Next.js 16带来全新的性能优化",
    category: "Technology",
    author: "Jane Doe",
    date: "2026-09-03",
    readTime: "5 min read",
    excerpt: "Versi terbaru Next.js membawa peningkatan signifikan pada rendering speed dan caching strategy.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "AI Generatif Mengubah Landscape Pengembangan Software",
    category: "AI & ML",
    author: "John Smith",
    date: "2026-09-02",
    readTime: "8 min read",
    excerpt: "Model AI generatif mulai mempercepat proses coding dan testing secara signifikan.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Funding Raise Terbesar di Q3 2026",
    category: "Startups",
    author: "Emily Chen",
    date: "2026-09-01",
    readTime: "6 min read",
    excerpt: "Startup teknologi lokal berhasil mengumpulkan dana sebesar $50 juta untuk ekspansi pasar.",
    image: "https://images.unsplash.com/photo-1552664630-4c35992f0c25?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "Dark Mode Design System Guidelines",
    category: "Design",
    author: "Michael Brown",
    date: "2026-08-31",
    readTime: "4 min read",
    excerpt: "Panduan komprehensif untuk membuat design system yang konsisten di mode gelap dan terang.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "Kubernetes Best Practices for Production",
    category: "Cloud",
    author: "Sarah Wilson",
    date: "2026-08-30",
    readTime: "10 min read",
    excerpt: "Tips dan trik mengoptimalkan Kubernetes deployment di environment produksi.",
    image: "https://images.unsplash.com/photo-1516789193334-731d1d556778?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Zero Trust Security Model Explained",
    category: "Security",
    author: "David Lee",
    date: "2026-08-29",
    readTime: "7 min read",
    excerpt: "Memahami pendekatan zero trust untuk keamanan infrastruktur digital modern.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function NewsCategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>(recentNews);

  useEffect(() => {
    let result = recentNews;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(result);
  }, [activeCategory, searchQuery]);

  const getCategoryColor = (category: string) => {
    const cat = categories.find((c) => c.name === category);
    return cat?.color || "bg-zinc-500";
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            News Categories
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Jelajahi artikel-artikel teknologi terkini berdasarkan kategori yang Anda minati.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              Semua Artikel
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.name
                    ? `${category.color} text-white shadow-lg shadow-${category.color.split("-")[1]}-600/20`
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {category.icon}
                {category.name}
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{categories.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Kategori</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {categories.reduce((acc, c) => acc + c.count, 0)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Artikel</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{recentNews.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Artikel Terbaru</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Akurasi Informasi</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {searchQuery ? `Hasil pencarian: "${searchQuery}"` : activeCategory === "all" ? "Artikel Terbaru" : `Artikel dari ${activeCategory}`}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredNews.length} artikel
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group flex flex-col bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{article.author}</span>
                      </div>
                      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
                      <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{formatDate(article.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">Tidak ada artikel ditemukan</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah kata kunci atau kategori pencarian Anda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Jangan Lewatkan Update Terbaru</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Subscribe newsletter kami untuk mendapatkan artikel teknologi terkini langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Subscribe Sekarang
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Lihat Semua Kategori
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
