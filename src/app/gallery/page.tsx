"use client";

import { useState } from "react";
import { Image as ImageIcon, Download, Share2, MessageCircle, ThumbsUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  likes: number;
  views: number;
  description: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Corporate Event 2024",
    category: "Event",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop",
    likes: 156,
    views: 1245,
    description: "Momen bersejarah perayaan ulang tahun perusahaan ke-10 dengan karyawan terbaik.",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Product Launch",
    category: "Product",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    likes: 234,
    views: 1890,
    description: "Peluncuran produk baru kami dengan demo interaktif dan presentasi klien.",
    date: "2024-02-20",
  },
  {
    id: "3",
    title: "Team Building Activity",
    category: "Event",
    image: "https://images.unsplash.com/photo-1529056290674-442463505f1f?q=80&w=2070&auto=format&fit=crop",
    likes: 189,
    views: 1567,
    description: "Kegiatan team building untuk mempererat hubungan dan meningkatkan kerja sama.",
    date: "2024-03-10",
  },
  {
    id: "4",
    title: "Office Renovation",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-13e1c5599b25?q=80&w=2070&auto=format&fit=crop",
    likes: 178,
    views: 1432,
    description: "Renovasi office kami dengan desain modern dan suasana kerja yang lebih nyaman.",
    date: "2024-03-25",
  },
  {
    id: "5",
    title: "Client Meeting",
    category: "Meeting",
    image: "https://images.unsplash.com/photo-1552664620-935f470b9776?q=80&w=2070&auto=format&fit=crop",
    likes: 145,
    views: 1123,
    description: "Rapat strategis dengan klien penting untuk membahas proyek baru.",
    date: "2024-04-05",
  },
  {
    id: "6",
    title: "Training Session",
    category: "Training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b755?q=80&w=2070&auto=format&fit=crop",
    likes: 167,
    views: 1345,
    description: "Sesi pelatihan untuk pengembangan skill dan peningkatan kompetensi tim.",
    date: "2024-04-15",
  },
  {
    id: "7",
    title: "Company picnic",
    category: "Event",
    image: "https://images.unsplash.com/photo-1567306301846-254d25206876?q=80&w=2070&auto=format&fit=crop",
    likes: 201,
    views: 1678,
    description: "Liburan bersama keluarga karyawan di alam terbuka untuk melepas penat.",
    date: "2024-05-01",
  },
  {
    id: "8",
    title: "Award Ceremony",
    category: "Event",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    likes: 198,
    views: 1567,
    description: "Penyerahan penghargaan kepada karyawan berprestasi dan tim terbaik.",
    date: "2024-05-20",
  },
  {
    id: "9",
    title: "Product Demo",
    category: "Product",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    likes: 212,
    views: 1789,
    description: "Demonstrasi langsung fitur baru produk kami kepada stakeholder.",
    date: "2024-06-05",
  },
  {
    id: "10",
    title: "Workspace Design",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    likes: 187,
    views: 1456,
    description: "Perancangan workspace baru dengan konsep open space dan ergonomic.",
    date: "2024-06-15",
  },
  {
    id: "11",
    title: "Tech Conference",
    category: "Event",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e50473?q=80&w=2070&auto=format&fit=crop",
    likes: 234,
    views: 1987,
    description: "Konferensi teknologi tahunan dengan pembicara nasional dan internasional.",
    date: "2024-07-01",
  },
  {
    id: "12",
    title: "Workshop Development",
    category: "Training",
    image: "https://images.unsplash.com/photo-1516373607239-273f9732c114?q=80&w=2070&auto=format&fit=crop",
    likes: 176,
    views: 1345,
    description: "Workshop pengembangan soft skills dan technical expertise untuk tim.",
    date: "2024-07-15",
  },
];

const categories = ["Semua", "Event", "Product", "Office", "Meeting", "Training"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems = selectedCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Galeri Kami</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            koleksi foto momen-momen bersejarah, kegiatan, dan prestasi tim XNXV.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 text-zinc-500 dark:text-zinc-400 text-sm">
            Menampilkan {filteredItems.length} foto dari kategori "{selectedCategory}"
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {item.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1">
                        <ImageIcon className="h-3 w-3" />
                        {new Date(item.date).toLocaleDateString("id-ID", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-zinc-200 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4 text-pink-500" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <ImageIcon className="h-4 w-4 text-indigo-500" />
                        {item.views}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{galleryItems.length}</div>
              <div className="text-indigo-200 font-medium">Total Foto</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{galleryItems.reduce((sum, i) => sum + i.likes, 0)}</div>
              <div className="text-indigo-200 font-medium">Total Likes</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{galleryItems.reduce((sum, i) => sum + i.views, 0)}</div>
              <div className="text-indigo-200 font-medium">Total Views</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{galleryItems.length / 3}</div>
              <div className="text-indigo-200 font-medium">Album</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Ingin Menambahkan Foto?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg">
            Kami terbuka untuk kontribusi foto dari klien dan masyarakat umum. Kirimkan foto Anda untuk ditampilkan di galeri kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Upload Foto
            </button>
            <button className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              Lihat Album Lain
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
