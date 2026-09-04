"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight, Calendar, Clock as ClockIcon, MessageCircle, ThumbsUp, ChevronLeft, Share2, UserCheck, Shield } from "lucide-react";

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  followers: number;
  following: number;
  totalPosts: number;
  totalLikes: number;
  social: {
    linkedin?: string;
    website?: string;
  };
}

interface AuthorPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  imageUrl: string;
}

const author: Author = {
  name: "Budi Santoso",
  role: "Digital Strategy Consultant",
  bio: "Saya membantu UMKM di Indonesia mengadopsi teknologi digital untuk pertumbuhan bisnis yang berkelanjutan. Dengan pengalaman lebih dari 10 tahun di bidang digital transformation, saya berkomitmen untuk memberikan wawasan praktis dan terukur.",
  avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=6366f1&color=fff",
  location: "Jakarta, Indonesia",
  followers: 2450,
  following: 128,
  totalPosts: 89,
  totalLikes: 12500,
  social: {
    linkedin: "https://linkedin.com/in/budisantoso",
    website: "https://budisantoso.com"
  }
};

const authorPosts: AuthorPost[] = [
  {
    id: "1",
    title: "Strategi Digital Transformation yang Efektif untuk UMKM",
    excerpt: "Panduan lengkap mengadopsi teknologi digital untuk pertumbuhan bisnis yang berkelanjutan di era modern.",
    date: "4 September 2026",
    readTime: "8 min read",
    likes: 128,
    comments: 24,
    category: "Digital Strategy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop"
  },
  {
    id: "2",
    title: "10 Tools Gratis untuk Manajemen Project UMKM",
    excerpt: "Rekomendasi tools manajemen project yang bisa digunakan tanpa biaya untuk meningkatkan produktivitas tim.",
    date: "2 September 2026",
    readTime: "6 min read",
    likes: 89,
    comments: 12,
    category: "Productivity",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d38731ea4242?w=600&h=350&fit=crop"
  },
  {
    id: "3",
    title: "Cara Menulis Konten Digital yang Membujuk",
    excerpt: "Teknik copywriting untuk konten digital yang efektif dan menghasilkan konversi tinggi.",
    date: "30 Agustus 2026",
    readTime: "5 min read",
    likes: 156,
    comments: 31,
    category: "Content Marketing",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=350&fit=crop"
  },
  {
    id: "4",
    title: "Social Media Strategy untuk Bisnis Lokal",
    excerpt: "Panduan menyusun strategi social media yang efektif untuk bisnis lokal dengan anggaran terbatas.",
    date: "25 Agustus 2026",
    readTime: "7 min read",
    likes: 203,
    comments: 45,
    category: "Social Media",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=350&fit=crop"
  },
  {
    id: "5",
    title: "Digital Marketing Funnel untuk UMKM",
    excerpt: "Membangun funnel pemasaran digital dari awareness hingga conversion dengan biaya efektif.",
    date: "20 Agustus 2026",
    readTime: "9 min read",
    likes: 178,
    comments: 29,
    category: "Digital Marketing",
    imageUrl: "https://images.unsplash.com/photo-1553487159-063f1e61ca27?w=600&h=350&fit=crop"
  },
  {
    id: "6",
    title: "Podcast Digital: Media Baru untuk Branding",
    excerpt: "Mengapa podcast menjadi media yang efektif untuk branding bisnis di tahun 2026.",
    date: "15 Agustus 2026",
    readTime: "4 min read",
    likes: 95,
    comments: 18,
    category: "Media Strategy",
    imageUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&h=350&fit=crop"
  },
  {
    id: "7",
    title: "Website Marketing Landing Page Template",
    excerpt: "Template landing page yang terbukti meningkatkan konversi untuk UMKM Indonesia.",
    date: "10 Agustus 2026",
    readTime: "6 min read",
    likes: 112,
    comments: 22,
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop"
  }
];

const BlogAuthor = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Navbar */}
      <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/blog" className="flex items-center gap-2 text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              <span className="font-semibold">Kembali ke Blog</span>
            </a>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Mail className="h-4 w-4" />
                <span>Hubungi</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Author Header */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-xl"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">{author.name}</h1>
                <div className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                  <UserCheck className="h-4 w-4" />
                  <span>Verified</span>
                </div>
              </div>
              <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {author.role}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
                {author.bio}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{author.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>Active since 2018</span>
                </div>
                {author.social.website && (
                  <a
                    href={author.social.website}
                    className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Website</span>
                  </a>
                )}
                {author.social.linkedin && (
                  <a
                    href={author.social.linkedin}
                    className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{author.totalPosts}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Artikel</p>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{author.followers.toLocaleString()}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Pengikut</p>
              </div>
              <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">{author.totalLikes.toLocaleString()}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Total Likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-indigo-600 dark:bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold">{author.totalPosts}</p>
              <p className="text-indigo-200 text-sm">Artikel Ditulis</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{author.totalLikes.toLocaleString()}</p>
              <p className="text-indigo-200 text-sm">Likes Total</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{author.followers.toLocaleString()}</p>
              <p className="text-indigo-200 text-sm">Pengikut</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-indigo-200 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          {["posts", "about", "contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {tab === "posts" && "Artikel"}
              {tab === "about" && "Tentang"}
              {tab === "contact" && "Kontak"}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
              )}
            </button>
          ))}
        </div>

        {activeTab === "posts" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Tentang Penulis</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Profil Singkat</h3>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {author.bio}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Pengalaman</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h4 className="font-semibold text-zinc-900 dark:text-white">Digital Strategy Consultant</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">2018 - Sekarang</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Membantu UMKM mengadopsi teknologi digital</p>
                  </div>
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h4 className="font-semibold text-zinc-900 dark:text-white">Digital Marketing Specialist</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">2015 - 2018</p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">Agency X, Jakarta</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Keterampilan</h3>
                <div className="flex flex-wrap gap-2">
                  {["Digital Strategy", "Content Marketing", "Social Media", "Analytics", "UX Research", "Project Management"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Education</h3>
                <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl">
                  <h4 className="font-semibold text-zinc-900 dark:text-white">S1 Manajemen</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">Universitas Indonesia, 2014</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Hubungi Penulis</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Nama</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subjek</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="Apa yang ingin kamu tanyakan?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="Tulis pesan kamu..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 dark:text-white">Email</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                        budi.santoso@example.com
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Respon dalam 24 jam
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 dark:text-white">WhatsApp</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                        +62 812 3456 7890
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Online selama jam kerja
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 dark:text-white">LinkedIn</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                        linkedin.com/in/budisantoso
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Update profesional
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                      <Globe className="h-6 w-6 text-zinc-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900 dark:text-white">Website</h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
                        budisantoso.com
                      </p>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1">
                        Portfolio & blog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-zinc-700 dark:text-zinc-300">Senin - Jumat</span>
                    <span className="text-zinc-500 dark:text-zinc-400 ml-auto">09:00 - 18:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-zinc-700 dark:text-zinc-300">Sabtu</span>
                    <span className="text-zinc-500 dark:text-zinc-400 ml-auto">10:00 - 14:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-zinc-700 dark:text-zinc-300">Minggu & Libur</span>
                    <span className="text-zinc-500 dark:text-zinc-400 ml-auto">Offline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAuthor;
