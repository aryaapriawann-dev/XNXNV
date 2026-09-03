"use client";

import Testimonials from "./Testimonials";

const testimonialData = [
  {
    id: "1",
    name: "Budi Santoso",
    role: "CEO",
    company: "PT Maju Jaya",
    content: "Layanan yang sangat profesional dan hasil memuaskan. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=4f46e5&color=fff",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    role: "Marketing Director",
    company: "Toko Online ABC",
    content: "Website yang dibangun sangat modern dan user-friendly. Penjualan kami meningkat signifikan setelah menggunakan platform baru.",
    avatar: "https://ui-avatars.com/api/?name=Siti+Nurhaliza&background=4f46e5&color=fff",
    rating: 5,
  },
  {
    id: "3",
    name: "Ahmad Rizki",
    role: "Founder",
    company: "Startup Tech",
    content: "Solusi teknologi yang tepat untuk kebutuhan startup kami. Proses pengembangan cepat dan hasilnya beyond expectations.",
    avatar: "https://ui-avatars.com/api/?name=Ahmad+Rizki&background=4f46e5&color=fff",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Apa kata mereka yang telah mempercayai kami
          </p>
        </div>
        <Testimonials testimonials={testimonialData} />
      </div>
    </section>
  );
}
