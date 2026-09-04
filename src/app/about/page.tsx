"use client";

import { Award, Users, Target, Heart, Search } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";

const stats = [
  { icon: Award, label: "Tahun Pengalaman", value: "5+" },
  { icon: Users, label: "Tim Ahli", value: "10+" },
  { icon: Target, label: "Project Selesai", value: "100+" },
  { icon: Heart, label: "Klien Puas", value: "80+" },
];

const team = [
  { id: "1", name: "arya apriawann", role: "Founder & Lead Developer", image: "https://ui-avatars.com/api/?name=arya+apriawann&background=6366f1&color=fff" },
  { id: "2", name: "budi santoso", role: "Senior Designer", image: "https://ui-avatars.com/api/?name=budi+santoso&background=ec4899&color=fff" },
  { id: "3", name: "citra dewi", role: "Project Manager", image: "https://ui-avatars.com/api/?name=citra+dewi&background=8b5cf6&color=fff" },
  { id: "4", name: "david kurniawan", role: "QA Engineer", image: "https://ui-avatars.com/api/?name=david+kurniawan&background=10b981&color=fff" },
  { id: "5", name: "eka putri", role: "Frontend Developer", image: "https://ui-avatars.com/api/?name=eka+putri&background=f59e0b&color=fff" },
  { id: "6", name: "fajar mustofa", role: "Backend Developer", image: "https://ui-avatars.com/api/?name=fajar+mustofa&background=0ea5e9&color=fff" },
  { id: "7", name: "gisella.putra", role: "UI/UX Designer", image: "https://ui-avatars.com/api/?name=gisella+putra&background=84cc16&color=fff" },
];

const roles = ["Semua", "Founder", "Developer", "Designer", "Manager", "Engineer"];

export default function About() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRole, setActiveRole] = useState("Semua");

  const filteredTeam = useMemo(() => {
    return team.filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = activeRole === "Semua" ||
                         (activeRole === "Founder" && member.role.includes("Founder")) ||
                         (activeRole === "Developer" && member.role.toLowerCase().includes("developer")) ||
                         (activeRole === "Designer" && member.role.toLowerCase().includes("designer")) ||
                         (activeRole === "Manager" && member.role.toLowerCase().includes("manager")) ||
                         (activeRole === "Engineer" && member.role.toLowerCase().includes("engineer"));
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, activeRole]);

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-20 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tentang XNXNV</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Kami adalah tim digital creative yang berdedikasi memberikan solusi
            teknologi terbaik untuk bisnis Anda.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Misi Kami: Membantu Bisnis Tumbuh
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                XNXNV didirikan dengan visi memberikan solusi digital berkualitas
                tinggi yang dapat diakses oleh semua kalangan bisnis. Kami percaya
                bahwa teknologi harus menjadi pendorong pertumbuhan, bukan hambatan.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                Dengan tim yang berpengalaman dan pendekatan yang berorientasi hasil,
                kami membantu perusahaan dari startup hingga enterprise mencapai
                potensi maksimal mereka di dunia digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="inline-flex justify-center items-center px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  Layanan Kami
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center items-center px-8 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600" />
              <div className="relative inset-0 flex items-center justify-center">
                <div className="text-white/20 text-6xl font-bold">XNXNV</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Prinsip-prinsip yang kami pegang teguh dalam setiap proyek
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kualitas", desc: "Kami menjamin kualitas tinggi dalam setiap deliverable" },
              { title: "Inovasi", desc: "Selalu menggunakan teknologi terkini dan pendekatan modern" },
              { title: "Kolaborasi", desc: "Bekerja sama erat dengan klien untuk hasil terbaik" },
            ].map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  {val.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Search & Filter */}
      <section className="py-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Cari anggota tim..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>

          {/* Roles */}
          <div className="flex flex-wrap justify-center gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeRole === role
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Tim Ahli Kami
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Profesional berbakat yang siap membantu bisnis Anda
            </p>
          </div>

          {filteredTeam.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">Tidak ada anggota tim yang ditemukan.</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveRole("Semua"); }}
                className="mt-4 text-indigo-600 hover:underline"
              >
                Reset filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredTeam.map((member) => (
                <div
                  key={member.id}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {member.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
