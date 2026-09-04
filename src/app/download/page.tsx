"use client";

import { useState } from "react";
import { Download, FileText, Image, Code, Zap, Search, Filter, Clock, Calendar, Star, File, Folder, CheckCircle, AlertCircle } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: "ebook" | "template" | "tool" | "course" | "guide" | "cheatsheet";
  format: "pdf" | "epub" | "zip" | "mp4" | "docx" | "xlsx" | "pptx";
  size: string;
  downloads: number;
  rating: number;
  date: string;
  tags: string[];
}

const CATEGORIES = [
  { id: "all", label: "Semua", icon: File },
  { id: "ebook", label: "E-Book", icon: FileText },
  { id: "template", label: "Template", icon: Folder },
  { id: "tool", label: "Tool", icon: Zap },
  { id: "course", label: "Kursus", icon: Code },
  { id: "guide", label: "Panduan", icon: FileText },
  { id: "cheatsheet", label: "Cheat Sheet", icon: Code },
] as const;

const RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Panduan Lengkap Next.js 16",
    description: "Buku elektornik komprehensif untuk mempelajari Next.js dari dasar hingga mahir",
    category: "ebook",
    format: "pdf",
    size: "45 MB",
    downloads: 12500,
    rating: 4.8,
    date: "2026-08-15",
    tags: ["nextjs", "react", "web", "tutorial"],
  },
  {
    id: "2",
    title: "Tailwind CSS Quick Reference",
    description: "Cheat sheet lengkap utility classes Tailwind CSS untuk developer",
    category: "cheatsheet",
    format: "pdf",
    size: "2 MB",
    downloads: 8900,
    rating: 4.9,
    date: "2026-07-20",
    tags: ["tailwind", "css", "utility"],
  },
  {
    id: "3",
    title: "React Component Templates Pack",
    description: "Kumpulan template komponen React siap pakai untuk dashboard dan landing page",
    category: "template",
    format: "zip",
    size: "15 MB",
    downloads: 6700,
    rating: 4.7,
    date: "2026-06-10",
    tags: ["react", "template", "components"],
  },
  {
    id: "4",
    title: "TypeScript Masterclass",
    description: "Kursus video lengkap TypeScript untuk developer JavaScript",
    category: "course",
    format: "mp4",
    size: "1.2 GB",
    downloads: 4500,
    rating: 4.6,
    date: "2026-05-05",
    tags: ["typescript", "javascript", "course", "video"],
  },
  {
    id: "5",
    title: "Performance Optimization Tools",
    description: "Toolset untuk menganalisis dan mengoptimasi performa web application",
    category: "tool",
    format: "zip",
    size: "8 MB",
    downloads: 3200,
    rating: 4.5,
    date: "2026-04-12",
    tags: ["performance", "tool", "optimizer"],
  },
  {
    id: "6",
    title: "Next.js App Router Guide",
    description: "Panduan mendalam Next.js App Router untuk struktur routing modern",
    category: "guide",
    format: "pdf",
    size: "12 MB",
    downloads: 2800,
    rating: 4.8,
    date: "2026-03-22",
    tags: ["nextjs", "routing", "guide"],
  },
  {
    id: "7",
    title: "React Native UI Kit",
    description: "Kumpulan komponen UI siap pakai untuk React Native application",
    category: "template",
    format: "zip",
    size: "22 MB",
    downloads: 5100,
    rating: 4.4,
    date: "2026-02-18",
    tags: ["react-native", "mobile", "ui", "components"],
  },
];

const formatDownloads = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

export default function DownloadPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"newest" | "popular" | "rating">("popular");

  const filteredResources = RESOURCES.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (activeFilter) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.downloads - a.downloads;
      default:
        return 0;
    }
  });

  const activeCategory = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Download className="w-12 h-12 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Resource Library
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Download e-books, templates, tools, dan kursus untuk mengembangkan skill development Anda
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
              placeholder="Cari resource (e.g. nextjs, react, tool)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Filter className="w-5 h-5 text-slate-500" />
            <span className="text-sm text-slate-400">Urutkan berdasarkan:</span>
            <div className="flex gap-2">
              {[
                { id: "popular", label: "Populer" },
                { id: "newest", label: "Terbaru" },
                { id: "rating", label: "Rating Tertinggi" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id as any)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${
                    activeFilter === filter.id
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedResources.map((resource) => {
            const CategoryIcon = CATEGORIES.find(c => c.id === resource.category)?.icon || File;
            const formatIcons: Record<string, any> = {
              pdf: FileText,
              epub: FileText,
              zip: Folder,
              mp4: Zap,
              docx: FileText,
              xlsx: FileText,
              pptx: FileText,
            };
            const FormatIcon = formatIcons[resource.format] || File;

            return (
              <div
                key={resource.id}
                className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
              >
                <div className="p-6">
                  {/* Resource Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      resource.category === "ebook" ? "bg-purple-500/10 text-purple-400" :
                      resource.category === "template" ? "bg-blue-500/10 text-blue-400" :
                      resource.category === "tool" ? "bg-green-500/10 text-green-400" :
                      resource.category === "course" ? "bg-yellow-500/10 text-yellow-400" :
                      resource.category === "guide" ? "bg-indigo-500/10 text-indigo-400" :
                      "bg-slate-500/10 text-slate-400"
                    }`}>
                      <CategoryIcon className="w-3 h-3" />
                      <span className="capitalize">{resource.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <FormatIcon className="w-3 h-3" />
                      <span className="uppercase">{resource.format}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                        <Download className="w-3 h-3" />
                        <span className="font-medium">{formatDownloads(resource.downloads)}</span>
                      </div>
                      <span className="text-xs text-slate-600">downloads</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="font-medium">{resource.rating}</span>
                      </div>
                      <span className="text-xs text-slate-600">rating</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1 text-slate-400 text-xs mb-1">
                        <Clock className="w-3 h-3" />
                        <span className="font-medium">{resource.size}</span>
                      </div>
                      <span className="text-xs text-slate-600">ukuran</span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(resource.date).toLocaleDateString("id-ID", { month: "short", year: "numeric" })}</span>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {sortedResources.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada resource ditemukan</h3>
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
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50" disabled>
            ← Sebelumnya
          </button>
          <span className="text-slate-300 font-medium">1</span>
          <span className="text-slate-600">...</span>
          <span className="text-slate-400 hover:text-slate-200 cursor-pointer">3</span>
          <button className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50" disabled>
            Lanjut →
          </button>
        </div>
      </div>
    </div>
  );
}
