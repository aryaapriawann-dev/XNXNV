"use client";

import { useState } from "react";
import { Star, Quote, ThumbsUp, Share2, MessageCircle } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO",
    company: "TechStart Indonesia",
    content: "Kerja sama dengan tim XNXV benar-benar luar biasa. Mereka memahami kebutuhan bisnis kami dengan sangat baik dan menghadirkan solusi yang melebihi ekspektasi.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "2",
    name: "Siti Aminah",
    role: "Marketing Director",
    company: "GrowCo Solutions",
    content: "Pengalaman bekerja sama sangat profesional. Timeline dipatuhi, komunikasi lancar, dan hasil akhir sangat memuaskan. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "3",
    name: "Agus Wijaya",
    role: "Product Manager",
    company: "InnovateLab",
    content: "Tim XNXV menunjukkan expertise yang luar biasa dalam teknologi terkini. Proyek kami selesai tepat waktu dengan kualitas premium.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "4",
    name: "Dewi Lestari",
    role: "Founder",
    company: "Creative Hub",
    content: "Desain yang mereka buat sangat kreatif dan modern. User experience sangat mulus dan feedback dari user kami sangat positif.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "5",
    name: "Rizky Pratama",
    role: "CTO",
    company: "Digital Transformation Co",
    content: "Teknologi yang mereka implementasikan sangat robust dan scalable. Support post-launch juga sangat responsif.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "6",
    name: "Maya Sari",
    role: "Business Owner",
    company: "Retail First",
    content: "Transformasi digital untuk bisnis kami berhasil berkat tim XNXV. Penjualan online meningkat 200% dalam 3 bulan pertama.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "7",
    name: "Hendra Kusuma",
    role: "Director",
    company: "Logistics Pro",
    content: "Sistem tracking yang mereka kembangkan sangat akurat dan mudah digunakan. Operasional kami jauh lebih efisien sekarang.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
  {
    id: "8",
    name: "Anisa Putri",
    role: "HR Manager",
    company: "HumanCapital",
    content: "Platform HRD yang dibuat sangat user-friendly dan membantu kami dalam mengelola data karyawan dengan lebih baik.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    verified: true,
  },
];

const categories = ["Semua", "Positif", "Netral", "Negatif"];

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Apa Kata Mereka?</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Dengarkan pengalaman langsung dari klien kami yang telah bekerja sama dengan kami untuk transformasi digital mereka.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">{testimonials.length}</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Testimoni Aktif</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">
                {((testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length) * 100).toFixed(0)}%
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Kepuasan Tinggi</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Klien Puas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-indigo-600 mb-2">4.9</div>
              <div className="text-zinc-600 dark:text-zinc-400 font-medium">Rata-rata Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="flex items-start justify-between mb-6">
                  <Quote className="h-8 w-8 text-indigo-100 dark:text-indigo-900" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-zinc-300 dark:text-zinc-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-500"
                  />
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{testimonial.role} @ {testimonial.company}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Verified
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 transition-colors text-sm">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 transition-colors text-sm">
                    <MessageCircle className="h-4 w-4" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center gap-2 text-zinc-500 hover:text-indigo-600 transition-colors text-sm">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Punya Pengalaman dengan Kami?</h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Kami menghargai setiap feedback dari klien. Ceritakan pengalaman Anda dan bantu kami menjadi lebih baik.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Kirim Testimoni
          </Link>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Rincian Review</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">5 Stars</span>
                    <span className="text-zinc-600 dark:text-zinc-400">87.5%</span>
                  </div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[87.5%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">4 Stars</span>
                    <span className="text-zinc-600 dark:text-zinc-400">12.5%</span>
                  </div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[12.5%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">3 Stars</span>
                    <span className="text-zinc-600 dark:text-zinc-400">0%</span>
                  </div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-0 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">2 Stars</span>
                    <span className="text-zinc-600 dark:text-zinc-400">0%</span>
                  </div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 w-0 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">1 Star</span>
                    <span className="text-zinc-600 dark:text-zinc-400">0%</span>
                  </div>
                  <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-0 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Review Terpopuler</h3>
              <div className="space-y-6">
                {testimonials.slice(0, 3).map((t) => (
                  <div key={t.id} className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-zinc-300 italic mb-2">"{t.content.slice(0, 100)}..."</p>
                    <div className="flex items-center gap-2">
                      <img src={t.image} alt={t.name} className="h-8 w-8 rounded-full" />
                      <span className="font-medium">{t.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
