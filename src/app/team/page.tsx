"use client";

import { Mail, Users, Award, TrendingUp, Target } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Budi Santoso",
    position: "Founder & CEO",
    image: "https://placehold.co/400x400/18181b/ffffff?text=Budi",
    bio: "Serial entrepreneur dengan pengalaman lebih dari 15 tahun di industri teknologi.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Siti Rahayu",
    position: "CTO",
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=Siti",
    bio: "Tech lead dengan keahlian di cloud architecture dan AI/ML development.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Andi Wijaya",
    position: "Lead Developer",
    image: "https://placehold.co/400x400/10b981/ffffff?text=Andi",
    bio: "Full-stack developer dengan passion untuk clean code dan UX excellence.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Dewi Lestari",
    position: "UX/UI Designer",
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Dewi",
    bio: "Designer kreatif dengan pengalaman membuat interface yang user-friendly.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Eko Pratama",
    position: "Project Manager",
    image: "https://placehold.co/400x400/ef4444/ffffff?text=Eko",
    bio: "PM dengan sertifikasi PMP dan pengalaman mengelola proyek digital.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Fajar Nugroho",
    position: "DevOps Engineer",
    image: "https://placehold.co/400x400/f59e0b/ffffff?text=Fajar",
    bio: "Expert di cloud infrastructure dan CI/CD pipeline automation.",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tim Kami
          </h1>
          <p className="text-lg text-zinc-300">
            Ahli di bidangnya masing-masing, bersatu untuk menghadirkan solusi terbaik.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                12+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Tim Profesional
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                50+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Proyek Selesai
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                200%
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Kepuasan Klien
              </div>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                5+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Tahun Pengalaman
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-zinc-900/40 group-hover:bg-zinc-900/20 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {member.position}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-zinc-900 dark:text-zinc-50 font-semibold hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    Hubungi {member.name.split(" ")[0]}
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 dark:bg-zinc-950 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Tertarik Bergabung dengan Tim Kami?
          </h2>
          <p className="text-lg text-zinc-300 mb-8">
            Kami selalu terbuka untuk talenta-talent baru yang bersemangat untuk berkembang.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
          >
            Kirim Lamaran
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
