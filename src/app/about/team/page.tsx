"use client";

import { Mail, Phone, MapPin, Clock, Globe, Zap, Cpu, TrendingUp, UserCheck, Share2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    website?: string;
    phone?: string;
  };
}

const team: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Chief Executive Officer",
    department: "Leadership",
    bio: "Pendiri dan CEO dengan pengalaman lebih dari 15 tahun di industri teknologi dan startup. Fokus pada strategi pertumbuhan dan inovasi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Chief Technology Officer",
    department: "Technology",
    bio: "CTO dengan keahlian mendalam dalam arsitektur sistem, AI, dan cloud computing. Memimpin tim teknis dalam menciptakan solusi inovatif.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "3",
    name: "Budi Santoso",
    role: "Creative Director",
    department: "Design",
    bio: "Creative Director dengan pengalaman 10 tahun di industri kreatif. Spesialis dalam brand identity dan user experience design.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "4",
    name: "Siti Rahayu",
    role: "Head of Project Management",
    department: "Operations",
    bio: "Memimpin tim project management dengan sertifikasi PMP. Fokus pada delivery excellence dan client satisfaction.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "5",
    name: "Agus Wijaya",
    role: "Senior Software Engineer",
    department: "Technology",
    bio: "Full-stack developer dengan spesialisasi di React, Node.js, dan cloud infrastructure. Lebih dari 8 tahun pengalaman.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "6",
    name: "Dewi Lestari",
    role: "UX/UI Designer",
    department: "Design",
    bio: "Desainer dengan pendekatan user-centric. Ahli dalam membuat interface yang intuitif dan estetis.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "7",
    name: "Rizky Pratama",
    role: "Digital Marketing Specialist",
    department: "Marketing",
    bio: "Pakar digital marketing dengan track record meningkatkan ROI kampanye hingga 300% untuk berbagai klien.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
  {
    id: "8",
    name: "Maya Sari",
    role: "Content Strategist",
    department: "Marketing",
    bio: "Content creator dan strategist dengan pengalaman membuat konten yang engagement dan converter.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    social: { email: "#", website: "#" },
  },
];

const departments = ["Semua", ...Array.from(new Set(team.map((member) => member.department)))];

export default function AboutDetail() {
  const [selectedDepartment, setSelectedDepartment] = useState("Semua");

  const filteredTeam = selectedDepartment === "Semua" ? team : team.filter((member) => member.department === selectedDepartment);

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Tim Kami</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Kumpulan profesional berbakat yang berkomitmen untuk menghadirkan solusi digital terbaik.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDepartment === dept
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Menampilkan {filteredTeam.length} anggota tim dari kategori "{selectedDepartment}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-indigo-300">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                      {member.department}
                    </span>
                    <div className="flex gap-2">
                      {member.social.email && (
                        <a
                          href={member.social.email}
                          className="text-zinc-400 hover:text-indigo-600 transition-colors"
                          title="Email"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.website && (
                        <a
                          href={member.social.website}
                          className="text-zinc-400 hover:text-indigo-600 transition-colors"
                          title="Website"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.phone && (
                        <a
                          href={member.social.phone}
                          className="text-zinc-400 hover:text-indigo-600 transition-colors"
                          title="Phone"
                        >
                          <Phone className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ingin bergabung dengan tim kami?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Kami selalu mencari talenta-talenta hebat untuk membangun masa depan teknologi bersama kami.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-600 rounded-full font-medium hover:bg-zinc-100 transition-colors"
          >
            Lihat Lowongan Kerja
          </Link>
        </div>
      </section>
    </div>
  );
}
