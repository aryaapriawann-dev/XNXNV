"use client";

import { Download, FileText, FileCode, FileImage, FileVideo, FileAudio, Folder, Clock, Calendar } from "lucide-react";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  size: string;
  date: string;
  downloads: number;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    id: "1",
    title: "Brand Guidelines 2024",
    description: "Panduan lengkap penggunaan branding XNXV termasuk logo, color palette, typography, dan layout.",
    type: "PDF",
    size: "2.4 MB",
    date: "2024-09-01",
    downloads: 1234,
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
  {
    id: "2",
    title: "Mobile App API Documentation",
    description: "Dokumentasi lengkap API untuk pengembang mobile app yang ingin mengintegrasikan dengan platform XNXV.",
    type: "PDF",
    size: "5.8 MB",
    date: "2024-09-02",
    downloads: 856,
    icon: <FileCode className="h-6 w-6 text-blue-500" />,
  },
  {
    id: "3",
    title: "Product Catalog 2024",
    description: "Katalog lengkap produk dan layanan XNXV untuk keperluan marketing dan presentasi ke client.",
    type: "PDF",
    size: "8.2 MB",
    date: "2024-09-03",
    downloads: 2341,
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
  {
    id: "4",
    title: "Demo Assets Pack",
    description: "Collection of assets untuk demo presentation termasuk vector graphics, icons, dan mockups.",
    type: "ZIP",
    size: "45.6 MB",
    date: "2024-09-04",
    downloads: 567,
    icon: <FileImage className="h-6 w-6 text-purple-500" />,
  },
  {
    id: "5",
    title: "White Paper AI Integration",
    description: "Studi komprehensif tentang integrasi AI dalam bisnis modern dan implementasi praktisnya.",
    type: "PDF",
    size: "3.1 MB",
    date: "2024-09-05",
    downloads: 1890,
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
  {
    id: "6",
    title: "Tutorial Video Series",
    description: "Series video tutorial lengkap untuk memulai menggunakan platform XNXV dari dasar.",
    type: "MP4",
    size: "125.3 MB",
    date: "2024-09-06",
    downloads: 3456,
    icon: <FileVideo className="h-6 w-6 text-pink-500" />,
  },
  {
    id: "7",
    title: "Audio Podcast Episodes",
    description: "Collection podcast episode dengan insights dari tech experts dan industry leaders.",
    type: "MP3",
    size: "89.7 MB",
    date: "2024-09-07",
    downloads: 2123,
    icon: <FileAudio className="h-6 w-6 text-orange-500" />,
  },
  {
    id: "8",
    title: "Source Code Examples",
    description: "Contoh-contoh kode lengkap untuk berbagai use case penggunaan platform XNXV.",
    type: "ZIP",
    size: "12.4 MB",
    date: "2024-09-08",
    downloads: 4567,
    icon: <FileCode className="h-6 w-6 text-blue-500" />,
  },
  {
    id: "9",
    title: "Mobile App APK",
    description: "File APK untuk install langsung aplikasi mobile XNXV di perangkat Android.",
    type: "APK",
    size: "24.5 MB",
    date: "2024-09-09",
    downloads: 5678,
    icon: <FileCode className="h-6 w-6 text-green-500" />,
  },
  {
    id: "10",
    title: "Web Dashboard Demo",
    description: "Demo lengkap web dashboard dengan semua fitur dan fungsi yang tersedia.",
    type: "ZIP",
    size: "67.8 MB",
    date: "2024-09-10",
    downloads: 1234,
    icon: <FileImage className="h-6 w-6 text-indigo-500" />,
  },
  {
    id: "11",
    title: "Team Organization Chart",
    description: "Struktur organisasi XNXV untuk referensi kolaborasi dan kontak internal.",
    type: "PDF",
    size: "1.2 MB",
    date: "2024-09-11",
    downloads: 789,
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
  {
    id: "12",
    title: "Case Study E-Commerce",
    description: " Studi kasus lengkap implementasi solusi e-commerce untuk klien kami.",
    type: "PDF",
    size: "4.5 MB",
    date: "2024-09-12",
    downloads: 2678,
    icon: <FileText className="h-6 w-6 text-red-500" />,
  },
];

const types = ["Semua", "PDF", "ZIP", "MP4", "MP3", "APK"];

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((item) => {
    const matchesType = selectedType === "Semua" || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Resources & Downloads</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Akses berbagai resource dan dokumentasi untuk membantu Anda memaksimalkan penggunaan solusi XNXV.
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
                placeholder="Cari resource..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? "bg-indigo-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{resources.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Total Resources</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">15K+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Total Downloads</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">12</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Categories</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                        {item.type}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.size}</span>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      {item.downloads.toLocaleString()}
                    </span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1">
                    Download
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">Tidak ada resource yang ditemukan.</p>
            </div>
          )}
        </div>
      </section>

      {/* Request Resource */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resource Tidak Ditemukan?</h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Jika Anda membutuhkan resource tertentu yang tidak ada di sini, kirimkan permintaan Anda kepada kami.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Kirim Permintaan Resource
          </Link>
        </div>
      </section>
    </div>
  );
}
