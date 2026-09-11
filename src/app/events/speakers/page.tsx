"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Users, Calendar, MapPin, Mail, ChevronRight, Star } from "lucide-react";

interface Speaker { id: string; name: string; title: string; company: string; bio: string; photo: string; topics: string[]; rating: number; }

const SPEAKERS: Speaker[] = [
  { id: "1", name: "Ahmad Rizky", title: "Chief Technology Officer", company: "TechVision Indonesia", bio: "Mereka telah memimpin pengembangan infrastruktur cloud untuk lebih dari 200 klien dan sering berbicara di forum teknis nasional.", photo: "https://ui-avatars.com/api/?name=Ahmad+Rizky&background=6366f1&color=fff", topics: ["Cloud Architecture", "DevOps", "Security"], rating: 4.8 },
  { id: "2", name: "Sari Dewi", title: "Head of Product", company: "Nusantara Digital", bio: "Berpengalaman 10 tahun membangun produk digital yang digunakan oleh jutaan pengguna di Asia Tenggara.", photo: "https://ui-avatars.com/api/?name=Sari+Dewi&background=f59e0b&color=fff", topics: ["Product Strategy", "User Research", "Growth"], rating: 4.7 },
  { id: "3", name: "Budi Santoso", title: "Senior Security Researcher", company: "CyberShield Labs", bio: "Ahli keamanan siber yang telah membantu banyak organisasi pemerintah dan swasta meningkatkan pertahanan siber mereka.", photo: "https://ui-avatars.com/api/?name=Budi+Santoso&background=10b981&color=fff", topics: ["Penetration Testing", "Threat Intelligence", "Zero Trust"], rating: 4.9 },
  { id: "4", name: "Maya Putri", title: "Data Science Lead", company: "DataPragmatika", bio: "Spesialis dalam analitik prediktif dan machine learning untuk bisnis ritel dan keuangan.", photo: "https://ui-avatars.com/api/?name=Maya+Putri&background=ec4899&color=fff", topics: ["Machine Learning", "Data Strategy", "AI Ethics"], rating: 4.6 },
  { id: "5", name: "Hendri Wijaya", title: "CEO", company: " startupX", bio: "Founder startup yang telah mendapatkan pendanaan seri A dan dikenal karena pendekatan inovatif dalam solusi enterprise.", photo: "https://ui-avatars.com/api/?name=Hendri+Wijaya&background=8b5cf6&color=fff", topics: ["Startup Journey", "Fundraising", "Leadership"], rating: 4.8 },
];

const TAGS = Array.from(new Set(SPEAKERS.flatMap((s) => s.topics)));

export default function SpeakersPage() {
  const [q, setQ] = useState("");
  const [tagFilter, setTagFilter] = useState("semua");
  const filtered = useMemo(() => SPEAKERS.filter((s) => {
    const matchesQ = s.name.toLowerCase().includes(q.toLowerCase()) || s.company.toLowerCase().includes(q.toLowerCase()) || s.bio.toLowerCase().includes(q.toLowerCase());
    const matchesTag = tagFilter === "semua" || s.topics.some((t) => t.toLowerCase().includes(tagFilter.toLowerCase()));
    return matchesQ && matchesTag;
  }), [q, tagFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Acara</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nara Sumber</h1>
          <p className="text-lg text-zinc-300">Para ahli yang akan berbagi wawasan di acara kami.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari pembicara..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setTagFilter("semua")} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tagFilter === "semua" ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}>Semua</button>
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setTagFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tagFilter === tag ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((speaker) => (
              <div key={speaker.id} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm">
                <div className="flex justify-center mb-4">
                  <img src={speaker.photo} alt={speaker.name} className="w-24 h-24 rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-700" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white text-center">{speaker.name}</h3>
                <p className="text-sm text-zinc-500 text-center">{speaker.title}</p>
                <p className="text-sm text-indigo-600 text-center mt-1">{speaker.company}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-3">{speaker.bio}</p>
                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {speaker.topics.map((topic) => (
                    <span key={topic} className="px-2 py-0.5 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">{topic}</span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500 text-xs">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{speaker.rating}</span>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada pembicara yang ditemukan.</p>
          )}
          <div className="flex justify-center mt-10">
            <Link href="/events/calendar" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Lihat Jadwal <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
