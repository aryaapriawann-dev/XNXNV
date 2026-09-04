"use client";

import { useState } from "react";
import { Play, Pause, Maximize2, Volume2, Share2, ThumbsUp, MessageCircle, Download, Calendar, User, Clock, Filter, Search, ChevronLeft, ChevronRight, ArrowRight, Heart, Zap } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  likes: number;
  comments: number;
  category: string;
  date: string;
  author: string;
  description: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Strategi Digital Transformation untuk UMKM",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    duration: "12:34",
    views: 15420,
    likes: 892,
    comments: 124,
    category: "Digital Strategy",
    date: "4 September 2026",
    author: "Budi Santoso",
    description: "Panduan lengkap mengadopsi teknologi digital untuk pertumbuhan bisnis yang berkelanjutan."
  },
  {
    id: "2",
    title: "10 Tools Gratis untuk Manajemen Project",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d38731ea4242?w=800&h=450&fit=crop",
    duration: "08:15",
    views: 12340,
    likes: 678,
    comments: 89,
    category: "Productivity",
    date: "2 September 2026",
    author: "Siti Aminah",
    description: "Rekomendasi tools manajemen project yang bisa digunakan tanpa biaya."
  },
  {
    id: "3",
    title: "Teknik Copywriting yang Membujuk",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    duration: "10:22",
    views: 18760,
    likes: 1245,
    comments: 156,
    category: "Content Marketing",
    date: "30 Agustus 2026",
    author: "Andi Wijaya",
    description: "Teknik copywriting untuk konten digital yang efektif dan menghasilkan konversi."
  },
  {
    id: "4",
    title: "Social Media Strategy untuk Bisnis",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    duration: "15:48",
    views: 22100,
    likes: 1567,
    comments: 234,
    category: "Social Media",
    date: "25 Agustus 2026",
    author: "Rina Wulandari",
    description: "Panduan menyusun strategi social media yang efektif untuk bisnis lokal."
  },
  {
    id: "5",
    title: "Digital Marketing Funnel Explained",
    thumbnail: "https://images.unsplash.com/photo-1553487159-063f1e61ca27?w=800&h=450&fit=crop",
    duration: "18:30",
    views: 19800,
    likes: 1345,
    comments: 189,
    category: "Digital Marketing",
    date: "20 Agustus 2026",
    author: "Budi Santoso",
    description: "Membangun funnel pemasaran digital dari awareness hingga conversion."
  },
  {
    id: "6",
    title: "Podcast Digital untuk Branding",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&h=450&fit=crop",
    duration: "06:45",
    views: 8900,
    likes: 567,
    comments: 78,
    category: "Media Strategy",
    date: "15 Agustus 2026",
    author: "Dewi Lestari",
    description: "Mengapa podcast menjadi media yang efektif untuk branding bisnis."
  },
  {
    id: "7",
    title: "Website Marketing Landing Page",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    duration: "09:12",
    views: 14200,
    likes: 923,
    comments: 112,
    category: "Web Design",
    date: "10 Agustus 2026",
    author: "Eko Pratama",
    description: "Template landing page yang terbukti meningkatkan konversi untuk UMKM."
  }
];

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videos[0]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const categories = ["All", "Digital Strategy", "Productivity", "Content Marketing", "Social Media", "Digital Marketing", "Media Strategy", "Web Design"];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = activeCategory === "All" || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => setVolume(Number(e.target.value));
  const handleTimeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTime(Number(e.target.value));
  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => setDuration(Number(e.target.value));

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}jt`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}rb}`;
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl">Video Showcase</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {selectedVideo && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-8">
            <div className="relative aspect-video">
              <img
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-indigo-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-all transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 ml-1" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                {selectedVideo.duration}
              </div>
              <div className="absolute top-4 left-4">
                <button className="px-4 py-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors">
                  {selectedVideo.category}
                </button>
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                {selectedVideo.title}
              </h1>
              <div className="flex flex-wrap items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <User className="h-4 w-4" />
                    <span>{selectedVideo.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedVideo.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <Play className="h-4 w-4" />
                    <span>{formatViews(selectedVideo.views)} views</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{selectedVideo.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{selectedVideo.comments}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari video..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none transition-all w-64"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {video.duration}
                </div>
                <button
                  onClick={() => setSelectedVideo(video)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-indigo-600">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded">
                        {video.category}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{video.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white line-clamp-2 mb-2 hover:text-indigo-600 cursor-pointer">
                      {video.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{video.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Play className="h-3 w-3" />
                    <span>{formatViews(video.views)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" />
                    <span>{video.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    <span>{video.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">2</button>
          <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">3</button>
          <button className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;
