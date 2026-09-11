"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Users, ShieldCheck, Magnet } from "lucide-react";

const MEMBERS = [
  { id: "1", name: "Ahmad Hidayat", role: "CEO & Founder", bio: "Membangun tim sejak 2019 dari garasi Jakarta. Dulunya engineer di perusahaan fintech yang kini menjadi mitra strategis.", photo: "/avatars/ahmad.jpg", linkedin: "https://linkedin.com" },
  { id: "2", name: "Sari Dewi", role: "Head of Product", bio: "Mengelola roadmap produk dan pengalaman pengguna. 8 tahun pengalaman membangun produk SaaS skala nasional.", photo: "/avatars/sari.jpg" },
  { id: "3", name: "Rizky Pratama", role: "Head of Engineering", bio: "Memimpin tim engineering yang terdiri dari 20+ developer. Spesialisasi infrastruktur cloud dan keamanan siber.", photo: "/avatars/rizky.jpg" },
  { id: "4", name: "Linda Oktaviani", role: "Head of Marketing", bio: "Bertanggung jawab atas strategi growth dan brand awareness. Pernah memimpin kampanye digital yang menjangkau 500.000 pengguna.", photo: "/avatars/linda.jpg" },
  { id: "5", name: "Bayu Aria", role: "Head of Customer Success", bio: "Memastikan setiap klien puas dan berhasil menggunakan produk kami. Berpengalaman di industri customer support selama 5 tahun.", photo: "/avatars/bayu.jpg" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <section className="py-16 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tim Kami</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">Kelompok orang yang berdedikasi tinggi untuk memberikan layanan terbaik kepada klien kami.</p>
        </div>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERS.map((person) => (
            <div key={person.id} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-zinc-400" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{person.role}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{person.bio}</p>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                  LinkedIn <Magnet className="w-3 h-3 inline ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 bg-zinc-100 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-zinc-500 dark:text-zinc-400"> Kami juga membuka posisi untuk talenta hebat yang ingin bergabung. Lihat lowongan kami di halaman karier.</p>
          <Link href="/careers" className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Lihat Pekerjaan
          </Link>
        </div>
      </section>
    </div>
  );
}
