"use client";

import { useState } from "react";
import { ChevronLeft, Share2, Mail, MessageCircle, ThumbsUp, Calendar, User, Clock, Tag, Bookmark } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

const mockBlogPost: BlogPost = {
  id: "1",
  title: "Strategi Digital Transformation yang Efektif untuk UMKM",
  excerpt: "Panduan lengkap mengadopsi teknologi digital untuk pertumbuhan bisnis yang berkelanjutan di era modern.",
  content: `Digital transformation bukan lagi pilihan — itu keharusan. Terutama bagi UMKM yang ingin bertahan dan berkembang di era digital saat ini.

Namun, banyak yang bingung: di mana memulai? apa teknologi yang tepat? bagaimana mengubah budaya organisasi?

Dalam artikel ini, kita akan bahas strategi digital transformation yang efektif — langkah demi langkah, realistis, dan bisa diaplikasikan segera.

## 1. Assess & Plan

Langkah pertama yang sering diabaikan: evaluasi kondisi saat ini.

Tanpa assessment yang matang, implementasi teknologi bisa jadi buang-buang sumber daya. Perlu ditanyakan:

- Proses apa yang paling boros waktu dan biaya?
- Data apa yang belum dimanfaatkan dengan baik?
- Pengalaman pelanggan di mana yang perlu diperbaiki?

Buat roadmap jelas dengan prioritas berdasarkan impact vs effort.

## 2. Start Small, Scale Fast

Jangan sekaligus merombak semuanya. Mulai dari pilot project kecil:

- Digitalisasi invoice dan pembayaran
- Manajemen stok sederhana
- Social media selling

Buktikan value, lalu scale ke area lain.

## 3. Technology Stack

Pilih teknologi yang:

- Scalable: Bisa tumbuh bersama bisnis
- Integratable: Bisa terhubung dengan sistem lain
- User-friendly: Mudah dipakai tim

Rekomendasi untuk UMKM:

- CRM: HubSpot (free tier) atau Zoho CRM
- Accounting: Accurate atau Jurnal
- Project Management: Trello atau Asana
- Communication: Slack atau WhatsApp Business API

## 4. Data-Driven Decision

Biar nggak tebak-tebakan, gunakan data:

- Google Analytics untuk traffic dan perilaku pengguna
- Social media insights untuk engagement
- Sales data untuk konversi

Buat dashboard sederhana — satu screen yang menunjukkan KPI utama.

## 5. Culture Change

Teknologi bukan satu-satunya tantangan. Budaya internal lebih sulit diubah:

- Dorong mind set belajar
- Berikan training rutin
- Celebrate small wins

Kalau tim nggak nyaman pakai teknologi baru, digital transformation pasti gagal.

## 6. Continuous Improvement

Digital transformation bukan project with end date. Ini mindset:

- Test, learn, improve
- Collect feedback dari pelanggan dan tim
- Adaptasi cepat terhadap perubahan pasar

## Kesimpulan

Digital transformation untuk UMKM harus:

1. Realistis — sesuai kemampuan sumber daya
2. Customer-centric — fokus pada nilai bagi pelanggan
3. Agile — bisa beradaptasi cepat
4. Sustainable — model bisnis yang berkelanjutan

Mulai dari yang kecil, buktikan value, lalu scale. Yang penting: mulai sekarang, bukan nanti.`,

  author: {
    name: "Budi Santoso",
    role: "Digital Strategy Consultant",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=6366f1&color=fff"
  },
  category: "Digital Strategy",
  tags: ["UMKM", "Digital Transformation", "Technology", "Business Growth"],
  date: "4 September 2026",
  readTime: "8 min read",
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
  likes: 128,
  comments: 24
};

const BlogDetail = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(mockBlogPost.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link blog berhasil disalin!");
  };

  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return <h2 key={index} className="text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
      }
      return <p key={index} className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/blog" className="flex items-center gap-2 text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold">Kembali ke Blog</span>
            </a>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                title="Bagikan"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <img
          src={mockBlogPost.imageUrl}
          alt={mockBlogPost.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-4">
            {mockBlogPost.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {mockBlogPost.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-zinc-300">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{mockBlogPost.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{mockBlogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{mockBlogPost.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          {formatContent(mockBlogPost.content)}
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {mockBlogPost.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-start gap-4">
            <img
              src={mockBlogPost.author.avatar}
              alt={mockBlogPost.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                Ditulis oleh {mockBlogPost.author.name}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3">
                {mockBlogPost.author.role}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Consultant dengan pengalaman lebih dari 10 tahun di bidang digital strategy dan transformation untuk UMKM Indonesia.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
              liked
                ? "bg-amber-500 text-white"
                : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700"
            }`}
          >
            <ThumbsUp className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
            <span className="font-medium">{likesCount} Like</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">{mockBlogPost.comments} Komentar</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            <Mail className="h-5 w-5" />
            <span className="font-medium">Bagikan via Email</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
            <Bookmark className="h-5 w-5" />
            <span className="font-medium">Simpan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
