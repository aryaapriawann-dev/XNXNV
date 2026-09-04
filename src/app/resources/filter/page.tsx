"use client";

import { useState } from "react";
import { FileText, Image, Code, File, Download, Search, Filter, ChevronRight, Clock, Calendar } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: "Documentation" | "Guide" | "Template" | "Tool" | "Tutorial";
  type: "PDF" | "ZIP" | "ZIP" | "URL" | "Video";
  size: string;
  downloads: number;
  date: string;
  rating: number;
}

const categories = [
  { id: "all", name: "All Resources", icon: FileText },
  { id: "documentation", name: "Documentation", icon: FileText },
  { id: "guide", name: "Guides", icon: FileText },
  { id: "template", name: "Templates", icon: File },
  { id: "tool", name: "Tools", icon: Code },
  { id: "tutorial", name: "Tutorials", icon: Image },
];

const types = [
  { id: "all", name: "All Types" },
  { id: "PDF", name: "PDF" },
  { id: "ZIP", name: "ZIP" },
  { id: "URL", name: "URL" },
  { id: "Video", name: "Video" },
];

const resources: Resource[] = [
  {
    id: "1",
    title: "Complete API Documentation",
    description: "Comprehensive documentation for our RESTful API including all endpoints, request/response formats, and authentication examples.",
    category: "Documentation",
    type: "PDF",
    size: "2.5 MB",
    downloads: 1245,
    date: "2026-08-15",
    rating: 5
  },
  {
    id: "2",
    title: "Quick Start Guide",
    description: "Step-by-step guide to get up and running with our platform in under 30 minutes. Perfect for beginners.",
    category: "Guide",
    type: "PDF",
    size: "1.2 MB",
    downloads: 3567,
    date: "2026-08-10",
    rating: 5
  },
  {
    id: "3",
    title: "React Component Library",
    description: "A comprehensive collection of reusable React components built with Tailwind CSS and accessible by default.",
    category: "Template",
    type: "ZIP",
    size: "8.7 MB",
    downloads: 2890,
    date: "2026-08-05",
    rating: 4
  },
  {
    id: "4",
    title: "Next.js Best Practices",
    description: "Learn the best practices for building production-ready applications with Next.js including routing, data fetching, and optimization.",
    category: "Tutorial",
    type: "URL",
    size: "N/A",
    downloads: 4123,
    date: "2026-07-28",
    rating: 5
  },
  {
    id: "5",
    title: "TypeScript Cheat Sheet",
    description: "A comprehensive cheat sheet covering TypeScript fundamentals, types, interfaces, and advanced patterns.",
    category: "Documentation",
    type: "PDF",
    size: "0.8 MB",
    downloads: 5678,
    date: "2026-07-20",
    rating: 5
  },
  {
    id: "6",
    title: "Design System Toolkit",
    description: "Complete design system including Figma files, design tokens, and implementation guidelines.",
    category: "Template",
    type: "ZIP",
    size: "15.3 MB",
    downloads: 1876,
    date: "2026-07-15",
    rating: 4
  },
  {
    id: "7",
    title: "Performance Optimization Guide",
    description: "Advanced techniques for optimizing web application performance including images, code splitting, and caching.",
    category: "Guide",
    type: "PDF",
    size: "3.1 MB",
    downloads: 2345,
    date: "2026-07-10",
    rating: 5
  },
  {
    id: "8",
    title: "Docker Configuration Templates",
    description: "Ready-to-use Docker configurations for various applications including Node.js, Python, and database containers.",
    category: "Template",
    type: "ZIP",
    size: "2.4 MB",
    downloads: 1567,
    date: "2026-06-25",
    rating: 4
  },
  {
    id: "9",
    title: "Database Design Patterns",
    description: "Comprehensive guide to common database design patterns and best practices for scaling applications.",
    category: "Documentation",
    type: "PDF",
    size: "4.2 MB",
    downloads: 1234,
    date: "2026-06-20",
    rating: 5
  },
  {
    id: "10",
    title: "REST API Design Guidelines",
    description: "Industry-standard guidelines for designing clean, maintainable, and scalable REST APIs.",
    category: "Guide",
    type: "PDF",
    size: "1.8 MB",
    downloads: 2789,
    date: "2026-06-15",
    rating: 5
  },
  {
    id: "11",
    title: " Authentication Implementation",
    description: "Complete authentication guide covering JWT, OAuth2, session management, and security best practices.",
    category: "Tutorial",
    type: "URL",
    size: "N/A",
    downloads: 3456,
    date: "2026-06-10",
    rating: 5
  },
  {
    id: "12",
    title: "CLI Tool Starter Kit",
    description: "A starter kit for building command-line tools with Node.js including logging, argument parsing, and file handling.",
    category: "Tool",
    type: "ZIP",
    size: "1.5 MB",
    downloads: 987,
    date: "2026-06-05",
    rating: 4
  }
];

export default function ResourcesFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeType, setActiveType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [minRating, setMinRating] = useState<number>(0);

  const filteredResources = resources.filter((resource) => {
    const categoryMatch = activeCategory === "all" || resource.category.toLowerCase() === activeCategory;
    const typeMatch = activeType === "all" || resource.type === activeType;
    const searchMatch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const ratingMatch = resource.rating >= minRating;
    return categoryMatch && typeMatch && searchMatch && ratingMatch;
  });

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? "text-amber-400" : "text-zinc-300 dark:text-zinc-600"
        }`}
      >
        ★
      </span>
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      documentation: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      guide: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      template: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      tool: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
      tutorial: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    };
    return colors[category as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  const getTypeColor = (type: string) => {
    const colors = {
      PDF: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      ZIP: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      URL: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      Video: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    };
    return colors[type as keyof typeof colors] || "bg-zinc-100 text-zinc-700";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Resources Library
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Access our comprehensive collection of documentation, guides, templates, and tutorials.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{resources.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Resources</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {resources.reduce((acc, r) => acc + r.downloads, 0).toLocaleString()}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Downloads</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {(resources.reduce((acc, r) => acc + r.rating, 0) / resources.length).toFixed(1)}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{categories.length - 1}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Type & Search Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4 flex-wrap">
                <Filter className="h-5 w-5 text-zinc-400" />
                <span className="font-medium text-zinc-900 dark:text-white">Resource Type:</span>
                <select
                  value={activeType}
                  onChange={(e) => setActiveType(e.target.value)}
                  className="bg-zinc-100 dark:bg-zinc-800 border-none rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 text-zinc-900 dark:text-white"
                >
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">Rating:</span>
                  <div className="flex items-center gap-1">
                    {[0, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setMinRating(rating)}
                        className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                          minRating === rating
                            ? "bg-indigo-600 text-white"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        }`}
                      >
                        {rating === 0 ? "All" : `${rating}+`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "All Resources" : `${categories.find(c => c.id === activeCategory)?.name} Resources`}
              {activeType !== "all" && ` - ${types.find(t => t.id === activeType)?.name}`}
              {minRating > 0 && ` (Min ${minRating} stars)`}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredResources.length} dari {resources.length} resource
            </div>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${
                        resource.type === "PDF" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                        resource.type === "ZIP" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                        resource.type === "URL" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
                      }`}>
                        {resource.type === "PDF" && <FileText className="h-6 w-6" />}
                        {resource.type === "ZIP" && <Code className="h-6 w-6" />}
                        {resource.type === "URL" && <Download className="h-6 w-6" />}
                        {resource.type === "Video" && <Image className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-zinc-900 dark:text-white">{resource.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                          <span>{resource.size}</span>
                          <span>•</span>
                          <span>{resource.downloads.toLocaleString()} downloads</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </div>
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                      {resource.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {getRatingStars(resource.rating)}
                      <span className="text-zinc-500 dark:text-zinc-400 ml-1">
                        {resource.rating}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(resource.date).toLocaleDateString("id-ID", { year: "numeric", month: "short", day: "numeric" })}</span>
                    </div>
                    <button className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:gap-2 transition-all">
                      Download <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada resource ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori, tipe, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribute Your Knowledge</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Have valuable resources to share? Help our community grow by contributing your knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors">
              Submit Resource
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors">
              Browse All Categories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
