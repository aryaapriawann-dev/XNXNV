"use client";

import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const blogPosts = [
  {
    id: "1",
    title: "Mengapa Next.js 16 Adalah Pilihan Terbaik untuk Startup",
    excerpt: "Panduan lengkap fitur-fitur unggulan Next.js 16 yang bisa mengakselerasi pengembangan aplikasi web Anda.",
    date: "2026-09-01",
    readTime: "5 menit",
    image: "https://placehold.co/600x350/18181b/ffffff?text=Next.js+16",
    category: "Development",
  },
  {
    id: "2",
    title: "Best Practices untuk React Server Components",
    excerpt: "Teknik-teknik efektif untuk memanfaatkan React Server Components dalam aplikasi production.",
    date: "2026-08-28",
    readTime: "7 menit",
    image: "https://placehold.co/600x350/3b82f6/ffffff?text=React+RSC",
    category: "Frontend",
  },
  {
    id: "3",
    title: "Membangun API dengan FastAPI: Panduan Lengkap",
    excerpt: "Pelajari cara membuat REST API yang cepat dan scalable menggunakan FastAPI untuk Python.",
    date: "2026-08-25",
    readTime: "9 menit",
    image: "https://placehold.co/600x350/10b981/ffffff?text=FastAPI",
    category: "Backend",
  },
  {
    id: "4",
    title: "Tips Memilih Tech Stack untuk Project Baru",
    excerpt: "Panduan praktis memilih teknologi yang tepat berdasarkan kebutuhan dan scale project Anda.",
    date: "2026-08-20",
    readTime: "6 menit",
    image: "https://placehold.co/600x350/8b5cf6/ffffff?text=Tech+Stack",
    category: "Engineering",
  },
  {
    id: "5",
    title: "DevOps Essentials: CI/CD Pipeline yang Efektif",
    excerpt: "Panduan lengkap setup CI/CD pipeline menggunakan tools modern seperti GitHub Actions.",
    date: "2026-08-15",
    readTime: "8 menit",
    image: "https://placehold.co/600x350/f59e0b/ffffff?text=DevOps",
    category: "DevOps",
  },
  {
    id: "6",
    title: "AI & Machine Learning di Indonesia: Tren 2026",
    excerpt: "Analisis tren terkini perkembangan AI dan ML di industri teknologi Indonesia.",
    date: "2026-08-10",
    readTime: "6 menit",
    image: "https://placehold.co/600x350/ef4444/ffffff?text=AI+ML",
    category: "AI/ML",
  },
  {
    id: "7",
    title: "TypeScript Advanced Patterns yang Harus Anda Kenali",
    excerpt: "Pola-pola TypeScript tingkat lanjut untuk menulis kode yang lebih aman dan maintainable.",
    date: "2026-08-05",
    readTime: "8 menit",
    image: "https://placehold.co/600x350/0ea5e9/ffffff?text=TypeScript",
    category: "Development",
  },
];

const categories = ["Semua", "Development", "Frontend", "Backend", "DevOps", "AI/ML", "Engineering"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "Semua" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Blog Kami
          </h1>
          <p className="text-lg text-zinc-300">
            Berbagi pengetahuan tentang teknologi, development, dan tren terkini.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {filteredPosts.length} artikel ditemukan
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">Tidak ada artikel yang ditemukan.</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("Semua"); }}
                className="mt-4 text-indigo-600 hover:underline"
              >
                Reset filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm text-xs font-medium text-white">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-zinc-500 dark:text-zinc-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-50 font-semibold hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Subscribe ke Newsletter Kami
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Dapatkan update terbaru tentang teknologi dan development langsung di inbox Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
