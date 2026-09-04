"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO & Founder",
    company: "TechStart Indonesia",
    content: "Pelayanan yang luar biasa! Tim XNXNV sangat profesional dan hasil kerjanya melebihi ekspektasi. Website yang dibuat sangat responsif dan user-friendly.",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahayu",
    role: "CTO",
    company: "E-Commerce Pro",
    content: "Kerja sama yang baik dan komunikasi yang terbuka. Proyek selesai tepat waktu dan sesuai spesifikasi. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    id: "3",
    name: "Andi Wijaya",
    role: "Director of Operations",
    company: "Digital Media Group",
    content: "Layanan yang sangat memuaskan. Tim XNXNV memahami kebutuhan bisnis kami dengan sangat baik dan memberikan solusi yang inovatif.",
    rating: 5,
  },
  {
    id: "4",
    name: "Dewi Lestari",
    role: "Product Manager",
    company: "FinTech Solutions",
    content: "Profesionalisme dan teknis yang baik dari tim XNXNV. Proyek mobile app selesai sesuai deadline dan performanya sangat stabil.",
    rating: 4,
  },
  {
    id: "5",
    name: "Eko Prasetyo",
    role: "CTO",
    company: "HealthCare Plus",
    content: "Kolaborasi yang sangat baik. Tim XNXNV tidak hanya mengembangkan produk, tetapi juga memberikan masukan strategis untuk pengembangan bisnis.",
    rating: 5,
  },
  {
    id: "6",
    name: "Fajar Nugroho",
    role: "Founder",
    company: "EduTech Horizon",
    content: "Transformasi digital kami berjalan lancar berkat support dari XNXNV. Platform e-learning kami sekarang jauh lebih baik dan scalable.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Dukungan dan kepercayaan dari klien menjadi motivasi kami untuk terus meningkatkan kualitas layanan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <Quote className="h-8 w-8 text-zinc-200 dark:text-zinc-800" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-zinc-300 dark:text-zinc-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                5.0
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Rata-rata Rating
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                100%
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Kepuasan Klien
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                500+
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Proyek Selesai
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
                10+
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
