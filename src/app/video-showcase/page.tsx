"use client";

import { useState } from "react";
import { Play, Pause, Maximize2, Volume2, Share2, ThumbsUp, MessageCircle } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: "Showcase" | "Tutorial" | "Testimonial" | "Event";
  youtubeId: string;
  tags: string[];
}

const categories = ["Semua", "Showcase", "Tutorial", "Testimonial", "Event"];

const videos: Video[] = [
  {
    id: "1",
    title: "Company Overview 2024",
    description: "Pengenalan perusahaan, visi misi, dan pencapaian tahun 2024.",
    thumbnail: "https://images.unsplash.com/photo-1536244071176-366085397887?q=80&w=2070&auto=format&fit=crop",
    duration: "3:45",
    views: "1.2K",
    category: "Showcase",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Company", "Overview", "2024"],
  },
  {
    id: "2",
    title: "Web Development Tutorial",
    description: "Belajar dasar-dasar pengembangan web dengan Next.js dan React.",
    thumbnail: "https://images.unsplash.com/photo-1579313401485-712215955e0f?q=80&w=2070&auto=format&fit=crop",
    duration: "15:30",
    views: "856",
    category: "Tutorial",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Next.js", "React", "Tutorial"],
  },
  {
    id: "3",
    title: "Client Testimonial",
    description: "Ulasan dari klien kami tentang kerjasama proyek yang berhasil.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
    duration: "2:15",
    views: "2.4K",
    category: "Testimonial",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Client", "Testimonial", "Success"],
  },
  {
    id: "4",
    title: "Project Launch Event",
    description: "Rekaman acara peluncuran proyek besar tahun ini.",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    duration: "8:20",
    views: "1.8K",
    category: "Event",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Event", "Launch", "Conference"],
  },
  {
    id: "5",
    title: "Mobile App Demo",
    description: "Demonstrasi fitur-fitur utama aplikasi mobile kami.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    duration: "4:50",
    views: "950",
    category: "Showcase",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["Mobile", "App", "Demo"],
  },
  {
    id: "6",
    title: "UI/UX Design Process",
    description: "Proses desain dari konsep hingga final product.",
    thumbnail: "https://images.unsplash.com/photo-1555421689-49084642ca33?q=80&w=2070&auto=format&fit=crop",
    duration: "12:00",
    views: "1.1K",
    category: "Tutorial",
    youtubeId: "dQw4w9WgXcQ",
    tags: ["UI/UX", "Design", "Process"],
  },
];

export default function VideoShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredVideos = selectedCategory === "Semua"
    ? videos
    : videos.filter(v => v.category === selectedCategory);

  const handlePlay = (video: Video) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
    setTimeout(() => setActiveVideo(null), 300);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536244071176-366085397887?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Video Showcase
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Tonton proyek, tutorial, dan cerita di balik layar pekerjaan kami.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{videos.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Video</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">15K+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Total Views</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kategori</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">4.9</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredVideos.length} video dari kategori "{selectedCategory}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => handlePlay(video)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-black/80 text-zinc-900 dark:text-white backdrop-blur-sm">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                      {video.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{video.views} views</span>
                    <div className="flex gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <Share2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <div className="relative h-6 w-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45" />
            </div>
          </button>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ingin Melihat Lebih Banyak?</h2>
          <p className="text-indigo-100 text-xl mb-10">
            Kunjungi channel YouTube kami untuk tutorial, tips, dan updates terbaru.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Subscribe Channel Kami
          </a>
        </div>
      </section>
    </div>
  );
}
