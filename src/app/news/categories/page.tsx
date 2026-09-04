"use client";

import { useState } from "react";
import { Calendar, User, Clock, Search, Filter, ChevronLeft, ChevronRight, TrendingUp, Globe, Zap, Shield, Code, CheckCircle } from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: number;
  image: string;
  trending?: boolean;
  featured?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua", icon: Globe },
  { id: "technology", label: "Technology", icon: Code },
  { id: "business", label: "Business", icon: TrendingUp },
  { id: "security", label: "Security", icon: Shield },
  { id: "innovation", label: "Innovation", icon: Zap },
] as const;

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    title: "AI Revolution: How Machine Learning is Transforming Business Operations",
    excerpt: "Explore how artificial intelligence and machine learning are reshaping business processes and driving innovation across industries.",
    category: "technology",
    author: "John Smith",
    publishDate: "2026-09-01",
    readTime: 8,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=AI+Revolution",
    trending: true,
    featured: true,
  },
  {
    id: "2",
    title: "Cybersecurity Best Practices for Modern Enterprises",
    excerpt: "Essential security strategies and best practices to protect your organization from evolving cyber threats in 2026.",
    category: "security",
    author: "Jane Doe",
    publishDate: "2026-08-28",
    readTime: 6,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Cybersecurity",
    trending: true,
  },
  {
    id: "3",
    title: "The Future of Remote Work: Trends and Technologies",
    excerpt: "Discover the latest trends shaping the future of remote work and the technologies enabling distributed teams.",
    category: "business",
    author: "Bob Johnson",
    publishDate: "2026-08-25",
    readTime: 5,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Remote+Work",
  },
  {
    id: "4",
    title: "Blockchain Innovation: Beyond Cryptocurrency",
    excerpt: "How blockchain technology is revolutionizing supply chain, healthcare, and financial services industries.",
    category: "innovation",
    author: "Alice Williams",
    publishDate: "2026-08-22",
    readTime: 7,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Blockchain",
    featured: true,
  },
  {
    id: "5",
    title: "Cloud Computing Trends: Multi-Cloud and Edge Computing",
    excerpt: "Understanding the shift towards multi-cloud strategies and edge computing for improved performance and reliability.",
    category: "technology",
    author: "Charlie Brown",
    publishDate: "2026-08-20",
    readTime: 6,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Cloud+Computing",
  },
  {
    id: "6",
    title: "Data Privacy Regulations: What Your Business Needs to Know",
    excerpt: "Navigate the complex landscape of data privacy regulations including GDPR, CCPA, and emerging global standards.",
    category: "security",
    author: "Diana Prince",
    publishDate: "2026-08-18",
    readTime: 9,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Data+Privacy",
  },
  {
    id: "7",
    title: "Sustainable Tech: Green Computing and Environmental Impact",
    excerpt: "How technology companies are reducing their carbon footprint and embracing sustainable practices.",
    category: "innovation",
    author: "Eve Wilson",
    publishDate: "2026-08-15",
    readTime: 5,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Sustainable+Tech",
    trending: true,
  },
  {
    id: "8",
    title: "Startup Funding Landscape: Investment Trends in 2026",
    excerpt: "Analysis of current venture capital trends and what startups need to know about raising funding.",
    category: "business",
    author: "Frank Miller",
    publishDate: "2026-08-12",
    readTime: 7,
    image: "https://placehold.co/800x450/1e293b/cbd5e1?text=Startup+Funding",
  },
];

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default function NewsCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = NEWS_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const trendingCount = filteredArticles.filter(a => a.trending).length;
  const featuredCount = filteredArticles.filter(a => a.featured).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            News & Articles
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Tetap update dengan berita terbaru seputar teknologi, bisnis, dan inovasi
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari artikel (e.g. AI, blockchain, remote work)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Kategori: <strong className="text-slate-200">{selectedCategory === "all" ? "Semua" : CATEGORIES.find(c => c.id === selectedCategory)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Articles: <strong className="text-slate-200">{filteredArticles.length}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>Trending: <strong className="text-slate-200">{trendingCount}</strong></span>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article) => {
            const CategoryData = CATEGORIES.find(c => c.id === article.category);
            const CategoryIcon = CategoryData?.icon || Globe;

            return (
              <div
                key={article.id}
                className={`bg-slate-900 rounded-xl border overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all ${
                  article.featured
                    ? "border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border-slate-800"
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  {article.featured && (
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                  {article.trending && (
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      TRENDING
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium mb-3 inline-flex ${
                    article.category === "technology" ? "bg-blue-500/10 text-blue-400" :
                    article.category === "business" ? "bg-green-500/10 text-green-400" :
                    article.category === "security" ? "bg-red-500/10 text-red-400" :
                    "bg-purple-500/10 text-purple-400"
                  }`}>
                    <CategoryIcon className="w-3 h-3" />
                    <span className="capitalize">{CategoryData?.label || article.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-400 transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentArticles.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada artikel ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
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
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
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
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
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
