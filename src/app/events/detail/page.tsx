"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ArrowLeft,
  Ticket,
  Share2,
  Building2,
  ListChecks,
  Mic,
} from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

interface EventItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  dateLabel: string;
  startTime: string;
  endTime: string;
  location: string;
  isOnline: boolean;
  attendees: number;
  capacity: number;
  category: string;
  price: string;
  organizer: string;
  featured?: boolean;
  agenda: string[];
  speakers: string[];
}

const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Tech Summit 2026: AI & Masa Depan Kerja",
    description: "Berkumpul bersama pemimpin industri membahas AI, machine learning, dan otomasi tempat kerja.",
    longDescription:
      "Tech Summit 2026 adalah konferensi satu hari penuh yang mempertemukan praktisi, pemimpin perusahaan, dan pembuat kebijakan. Kita bedah adopsi AI yang realistis: studi kasus otomasi, tata kelola data, hingga dampaknya ke tim dan proses kerja sehari-hari.",
    date: "2026-09-15",
    dateLabel: "15 September 2026",
    startTime: "09:00",
    endTime: "17:00",
    location: "Jakarta Convention Center",
    isOnline: false,
    attendees: 450,
    capacity: 600,
    category: "Konferensi",
    price: "Rp 350.000",
    organizer: "XVPNX Events",
    featured: true,
    agenda: ["09:00 — Registrasi & kopi pagi", "10:00 — Keynote: AI di tempat kerja", "13:00 — Panel industri", "15:30 — Demo & networking"],
    speakers: ["Dr. Rina Wijaya (AI Research)", "Budi Santoso (CTO Kirimaja)", "Sari Dewi (Head of People)"],
  },
  {
    id: "2",
    title: "Workshop React Lanjutan: Membangun Aplikasi Modern",
    description: "Praktik langsung pola React lanjutan, optimasi performa, dan Next.js 16.",
    longDescription:
      "Workshop hands-on seharian untuk developer yang sudah familiar dengan React. Peserta membawa laptop dan pulang membawa studi kasus: Server Components, caching, optimasi bundle, dan pola data-fetching modern di Next.js 16.",
    date: "2026-09-18",
    dateLabel: "18 September 2026",
    startTime: "10:00",
    endTime: "16:00",
    location: "Bandung Tech Hub",
    isOnline: false,
    attendees: 35,
    capacity: 50,
    category: "Workshop",
    price: "Rp 250.000",
    organizer: "Komunitas Frontend Bandung",
    agenda: ["10:00 — Refresher pola modern", "11:30 — Praktik Server Components", "13:30 — Optimasi performa", "15:00 — Review kode peserta"],
    speakers: ["Arya Apriawan (Fullstack Engineer)", "Dimas Prasetyo (Frontend Lead)"],
  },
  {
    id: "3",
    title: "Webinar Keamanan Siber untuk Bisnis",
    description: "Pelajari praktik dan perangkat keamanan esensial untuk melindungi bisnis dari ancaman modern.",
    longDescription:
      "Webinar 2 jam untuk pemilik bisnis dan tim IT: fondasi keamanan (MFA, backup, patching), simulasi serangan phishing, dan checklist audit mandiri yang bisa langsung dipakai setelah sesi.",
    date: "2026-09-20",
    dateLabel: "20 September 2026",
    startTime: "14:00",
    endTime: "16:00",
    location: "Online (Zoom)",
    isOnline: true,
    attendees: 280,
    capacity: 500,
    category: "Webinar",
    price: "Gratis",
    organizer: "XVPNX Security",
    featured: true,
    agenda: ["14:00 — Lanskap ancaman 2026", "14:40 — Demo phishing", "15:20 — Checklist audit mandiri", "15:45 — Tanya jawab"],
    speakers: ["Yusniati (Security Engineer)", "Andi Kurniawan (IT Consultant)"],
  },
  {
    id: "4",
    title: "Meetup Founder Startup",
    description: "Jaringan dengan sesama founder, berbagi pengalaman, dan belajar dari entrepreneur sukses.",
    longDescription:
      "Meetup santai malam hari untuk founder tahap awal: sesi berbagi kegagalan, klinik pitch 5 menit, dan networking tanpa kaku. Cocok untuk yang sedang validasi ide atau cari co-founder.",
    date: "2026-09-22",
    dateLabel: "22 September 2026",
    startTime: "18:00",
    endTime: "21:00",
    location: "Coffee Hub Surabaya",
    isOnline: false,
    attendees: 42,
    capacity: 80,
    category: "Meetup",
    price: "Rp 50.000",
    organizer: "Startup Surabaya",
    agenda: ["18:00 — Kenalan & makan malam", "19:00 — Failure stories", "20:00 — Klinik pitch", "20:30 — Networking"],
    speakers: ["Rizky Pratama (Founder KopiKita)", "Nadia Putri (Founder EduLearn)"],
  },
  {
    id: "5",
    title: "Praktik Terbaik Arsitektur Cloud",
    description: "Kupas tuntas pola arsitektur cloud, microservices, dan strategi scaling aplikasi modern.",
    longDescription:
      "Sesi online setengah hari membahas keputusan arsitektur yang sering salah: kapan monolit cukup, kapan pecah jadi microservices, pola observability, dan strategi biaya cloud agar tidak jebol.",
    date: "2026-09-25",
    dateLabel: "25 September 2026",
    startTime: "15:00",
    endTime: "17:30",
    location: "Online (Google Meet)",
    isOnline: true,
    attendees: 120,
    capacity: 300,
    category: "Webinar",
    price: "Rp 100.000",
    organizer: "XVPNX Cloud",
    agenda: ["15:00 — Monolit vs microservices", "15:50 — Observability praktis", "16:40 — Optimasi biaya cloud"],
    speakers: ["Fajar Nugroho (Cloud Architect)", "Lina Hartono (DevOps Lead)"],
  },
  {
    id: "6",
    title: "Workshop Design Thinking Produk",
    description: "Pelajari metodologi design thinking dan buat desain produk berpusat pada pengguna.",
    longDescription:
      "Workshop sehari untuk PM, desainer, dan engineer: riset pengguna cepat, definisi masalah, ideasi, prototyping kertas, hingga uji pengguna. Setiap tim pulang membawa purwarupa yang sudah diuji.",
    date: "2026-09-28",
    dateLabel: "28 September 2026",
    startTime: "09:00",
    endTime: "15:00",
    location: "Yogyakarta Design Studio",
    isOnline: false,
    attendees: 28,
    capacity: 40,
    category: "Workshop",
    price: "Rp 200.000",
    organizer: "Design Hub Jogja",
    agenda: ["09:00 — Empati & riset cepat", "11:00 — Definisi masalah", "13:00 — Prototyping", "14:00 — Uji pengguna"],
    speakers: ["Maya Kusuma (Product Designer)", "Tono Wijaya (UX Researcher)"],
  },
  {
    id: "7",
    title: "Hackathon Merdeka Belajar 2026",
    description: "Kompetisi 24 jam membangun solusi edtech untuk pendidikan Indonesia.",
    longDescription:
      "Hackathon 24 jam terbuka untuk pelajar dan profesional. Tema: pemerataan akses belajar. Tim 3-5 orang, mentoring dari praktisi, dan hadiah pembinaan untuk 3 tim terbaik.",
    date: "2026-10-04",
    dateLabel: "4 Oktober 2026",
    startTime: "08:00",
    endTime: "08:00",
    location: "Online + Hub Jakarta",
    isOnline: true,
    attendees: 190,
    capacity: 250,
    category: "Kompetisi",
    price: "Gratis",
    organizer: "XVPNX Academy",
    agenda: ["08:00 — Kickoff & pembagian tema", "12:00 — Sesi mentoring", "H+1 06:00 — Pengumpulan", "H+1 08:00 — Demo & penjurian"],
    speakers: ["Tim Mentor XVPNX", "Juri Industri Edtech"],
  },
  {
    id: "8",
    title: "Konferensi Data & Analitik Indonesia",
    description: "Tren data engineering, analitik produk, dan dashboard yang benar-benar dipakai.",
    longDescription:
      "Konferensi setengah hari untuk data analyst, analytics engineer, dan PM: dari pipeline sederhana yang awet, definisi metrik yang tidak menipu, sampai cara menyajikan insight agar ditindaklanjuti.",
    date: "2026-10-11",
    dateLabel: "11 Oktober 2026",
    startTime: "09:30",
    endTime: "16:30",
    location: "ICE BSD, Tangerang",
    isOnline: false,
    attendees: 320,
    capacity: 400,
    category: "Konferensi",
    price: "Rp 300.000",
    organizer: "DataID Community",
    agenda: ["09:30 — Keynote tren data", "11:00 — Lokakarya metrik", "13:30 — Studi kasus dashboard", "15:30 — Panel karier data"],
    speakers: ["Hendra Gunawan (Data Lead)", "Putri Ayu (Analytics Engineer)"],
  },
];

const CATEGORIES = ["Semua", "Konferensi", "Workshop", "Webinar", "Meetup", "Kompetisi"];
const MODES = ["Semua", "Online", "Offline"] as const;

export default function EventDetailPage() {
  const [selectedId, setSelectedId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [activeMode, setActiveMode] = useState<(typeof MODES)[number]>("Semua");
  const [registered, setRegistered] = useState(false);

  const selected = EVENTS.find((e) => e.id === selectedId) ?? EVENTS[0];

  const filtered = useMemo(
    () =>
      EVENTS.filter((e) => {
        const q = searchQuery.toLowerCase();
        const matchQuery =
          q === "" ||
          e.title.toLowerCase().includes(q) ||
          e.location.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q);
        const matchCategory = activeCategory === "Semua" || e.category === activeCategory;
        const matchMode =
          activeMode === "Semua" ||
          (activeMode === "Online" ? e.isOnline : !e.isOnline);
        return matchQuery && matchCategory && matchMode;
      }),
    [searchQuery, activeCategory, activeMode]
  );

  const remaining = Math.max(selected.capacity - selected.attendees, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero detail ala news/detail */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke daftar event
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="bg-violet-600 px-4 py-1.5 rounded-full text-sm font-medium">
              {selected.category}
            </span>
            {selected.featured && (
              <span className="text-xs font-semibold text-amber-300 border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 rounded-full">
                ★ Unggulan
              </span>
            )}
            <span className="text-xs font-medium text-slate-300 border border-slate-600 px-3 py-1.5 rounded-full">
              {selected.isOnline ? "Online" : "Tatap muka"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{selected.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> {selected.dateLabel} • {selected.startTime}–{selected.endTime} WIB
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> {selected.location}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" /> {selected.attendees}/{selected.capacity} peserta
            </span>
          </div>
        </div>
      </section>

      {/* Isi detail */}
      <section className="py-14 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
              <Clock className="w-5 h-5 text-violet-500" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Waktu</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {selected.startTime}–{selected.endTime} WIB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
              <Ticket className="w-5 h-5 text-violet-500" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Tiket</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{selected.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
              <Building2 className="w-5 h-5 text-violet-500" />
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Penyelenggara</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{selected.organizer}</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            {selected.longDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-slate-900 dark:text-white">
                <ListChecks className="w-5 h-5 text-violet-500" /> Rundown Acara
              </h2>
              <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                {selected.agenda.map((item) => (
                  <li key={item} className="text-sm leading-relaxed border-l-2 border-violet-500/50 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-slate-900 dark:text-white">
                <Mic className="w-5 h-5 text-violet-500" /> Pembicara
              </h2>
              <ul className="space-y-2.5 text-slate-700 dark:text-slate-300">
                {selected.speakers.map((s) => (
                  <li key={s} className="text-sm leading-relaxed border-l-2 border-fuchsia-500/50 pl-3">
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Sisa kuota: {remaining} kursi • {selected.isOnline ? "Tautan dikirim setelah daftar." : selected.location}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            {registered ? (
              <p className="px-5 py-3 rounded-lg bg-emerald-600/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                Pendaftaran tercatat. Cek email untuk detail dan tautan acara.
              </p>
            ) : (
              <button
                onClick={() => setRegistered(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                <Ticket className="w-4 h-4" /> Daftar Event Ini
              </button>
            )}
            <Link
              href="/events/calendar"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-semibold hover:border-violet-500 hover:text-violet-500 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Lihat Kalender
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-slate-900 dark:text-white">
              <Share2 className="w-5 h-5" /> Bagikan event ini
            </h3>
            <ShareButtons url={`https://xnxv.com/events/${selected.id}`} title={selected.title} />
          </div>
        </div>
      </section>

      {/* Daftar event lain + search/filter */}
      <section className="py-14 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Event Lainnya</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Cari dan saring {EVENTS.length} event, klik untuk melihat detailnya di atas.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari event berdasarkan judul atau lokasi..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-800 dark:text-slate-200"
              />
            </div>
            <div className="flex gap-2">
              {MODES.map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMode(m)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                    activeMode === m
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-violet-500"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === c
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent"
                    : "text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-violet-500"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">Tidak ada event yang cocok</p>
              <p className="text-sm text-slate-500 mt-1">Coba kata kunci atau filter lain</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((event) => (
                <button
                  key={event.id}
                  onClick={() => {
                    setSelectedId(event.id);
                    setRegistered(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left bg-white dark:bg-slate-950 rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all ${
                    event.id === selectedId
                      ? "border-violet-500 ring-2 ring-violet-500/30"
                      : "border-slate-200 dark:border-slate-800 hover:border-violet-400"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                        {event.category} • {event.dateLabel}
                      </span>
                      {event.featured && <span className="text-xs font-semibold text-amber-500">★</span>}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{event.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {event.attendees} peserta
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-violet-600 dark:text-violet-400 font-medium">
                      Lihat Detail <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
