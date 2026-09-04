"use client";

import { useState } from "react";
import { Download, FileText, Image, Video as VideoIcon, Code, File, Search, Filter } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "Image" | "Video" | "Code" | "Document";
  size: string;
  downloads: number;
  date: string;
  tags: string[];
}

const categories = ["Semua", "PDF", "Image", "Video", "Code", "Document"];

const resources: Resource[] = [
  {
    id: "1",
    title: "Company Profile 2024",
    description: "Profil lengkap perusahaan untuk keperluan presentasi dan kolaborasi.",
    type: "PDF",
    size: "2.4 MB",
    downloads: 1245,
    date: "2024-01-15",
    tags: ["Company", "Profile", "PDF"],
  },
  {
    id: "2",
    title: "Brand Guidelines",
    description: "Panduan penggunaan brand identity, color palette, dan typography.",
    type: "PDF",
    size: "8.7 MB",
    downloads: 892,
    date: "2024-02-20",
    tags: ["Brand", "Guidelines", "Design"],
  },
  {
    id: "3",
    title: "Product Mockups Pack",
    description: "Collection of high-quality product mockups untuk presentasi design.",
    type: "Image",
    size: "45 MB",
    downloads: 2341,
    date: "2024-03-10",
    tags: ["Mockups", "Design", "Photoshop"],
  },
  {
    id: "4",
    title: "Tutorial Next.js",
    description: "Video series lengkap belajar Next.js dari dasar hingga mahir.",
    type: "Video",
    size: "1.2 GB",
    downloads: 567,
    date: "2024-04-05",
    tags: ["Tutorial", "Next.js", "Video"],
  },
  {
    id: "5",
    title: "React Components Library",
    description: "Reusable React components dengan TypeScript dan Tailwind CSS.",
    type: "Code",
    size: "156 KB",
    downloads: 3421,
    date: "2024-05-12",
    tags: ["React", "Components", "TypeScript"],
  },
  {
    id: "6",
    title: "Project Documentation",
    description: "Dokumentasi lengkap proyek untuk developer dan stakeholder.",
    type: "PDF",
    size: "5.3 MB",
    downloads: 789,
    date: "2024-06-18",
    tags: ["Documentation", "Project", "PDF"],
  },
  {
    id: "7",
    title: "UI Kit Free",
    description: "Free UI kit untuk Figma dengan komponen modern dan responsif.",
    type: "Image",
    size: "28 MB",
    downloads: 1890,
    date: "2024-07-22",
    tags: ["UI Kit", "Figma", "Free"],
  },
  {
    id: "8",
    title: "API Documentation",
    description: "Dokumentasi lengkap API endpoints dan contoh penggunaan.",
    type: "Code",
    size: "89 KB",
    downloads: 2156,
    date: "2024-08-05",
    tags: ["API", "Documentation", "Developer"],
  },
  {
    id: "9",
    title: "Case Study Portfolio",
    description: "Collection of case studies proyek-proyek yang sudah berhasil.",
    type: "PDF",
    size: "12.5 MB",
    downloads: 678,
    date: "2024-08-28",
    tags: ["Case Study", "Portfolio", "PDF"],
  },
  {
    id: "10",
    title: "Quick Start Guide",
    description: "Panduan cepat untuk memulai menggunakan platform kami.",
    type: "PDF",
    size: "1.8 MB",
    downloads: 4521,
    date: "2024-09-01",
    tags: ["Quick Start", "Guide", "PDF"],
  },
];

export default function DownloadResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "Semua" || resource.type === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (id: string) => {
    setDownloadedIds([...downloadedIds, id]);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "PDF": return <FileText className="h-6 w-6 text-red-500" />;
      case "Image": return <Image className="h-6 w-6 text-blue-500" />;
      case "Video": return <VideoIcon className="h-6 w-6 text-purple-500" />;
      case "Code": return <Code className="h-6 w-6 text-green-500" />;
      default: return <File className="h-6 w-6 text-zinc-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "PDF": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Image": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Video": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Code": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default: return "bg-zinc-100 text-zinc-700 dark:bg-zinc-900/30 dark:text-zinc-400";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Resources & Downloads
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Akses berbagai resource, dokumentasi, dan aset untuk membantu proyek Anda.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{resources.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Resources</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">
                {resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Downloads</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">5</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kategori</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Gratis</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari resource..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredResources.length} resource dari kategori "{selectedCategory}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="flex flex-col p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm">
                      {getTypeIcon(resource.type)}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {resource.size}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">
                  {resource.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                  <span>📅 {resource.date}</span>
                  <span>⬇️ {resource.downloads.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => handleDownload(resource.id)}
                  disabled={downloadedIds.includes(resource.id)}
                  className={`mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    downloadedIds.includes(resource.id)
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 cursor-default"
                      : "bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
                  }`}
                >
                  <Download className="h-4 w-4" />
                  {downloadedIds.includes(resource.id) ? "Downloaded" : "Download"}
                </button>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <Filter className="h-16 w-16 text-zinc-300 dark:text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 dark:text-zinc-400 text-lg">Tidak ada resource yang ditemukan</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Butuh Resource Khusus?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami untuk request resource atau dokumentasi kustom sesuai kebutuhan Anda.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Hubungi Tim Kami
          </a>
        </div>
      </section>
    </div>
  );
}
