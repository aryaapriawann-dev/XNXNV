"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Calendar, MapPin, Clock, Users, CalendarDays } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  location: string;
  isOnline: boolean;
  attendees: number;
  featured?: boolean;
}

const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Tech Summit 2026: AI & Masa Depan Kerja",
    description: "Berkumpul bersama pemimpin industri membahas AI, machine learning, dan otomasi tempat kerja.",
    date: "2026-09-15",
    startTime: "09:00",
    location: "Jakarta Convention Center",
    isOnline: false,
    attendees: 450,
    featured: true,
  },
  {
    id: "2",
    title: "Workshop React Lanjutan: Membangun Aplikasi Modern",
    description: "Praktik langsung pola React lanjutan, optimasi performa, dan Next.js 16.",
    date: "2026-09-18",
    startTime: "10:00",
    location: "Bandung Tech Hub",
    isOnline: false,
    attendees: 35,
  },
  {
    id: "3",
    title: "Webinar Keamanan Siber untuk Bisnis",
    description: "Pelajari praktik dan perangkat keamanan esensial untuk melindungi bisnis dari ancaman modern.",
    date: "2026-09-20",
    startTime: "14:00",
    location: "Online (Zoom)",
    isOnline: true,
    attendees: 280,
    featured: true,
  },
  {
    id: "4",
    title: "Meetup Founder Startup",
    description: "Jaringan dengan sesama founder, berbagi pengalaman, dan belajar dari entrepreneur sukses.",
    date: "2026-09-22",
    startTime: "18:00",
    location: "Coffee Hub Surabaya",
    isOnline: false,
    attendees: 42,
  },
  {
    id: "5",
    title: "Praktik Terbaik Arsitektur Cloud",
    description: "Kupas tuntas pola arsitektur cloud, microservices, dan strategi scaling aplikasi modern.",
    date: "2026-09-25",
    startTime: "15:00",
    location: "Online (Google Meet)",
    isOnline: true,
    attendees: 120,
  },
  {
    id: "6",
    title: "Workshop Design Thinking Produk",
    description: "Pelajari metodologi design thinking dan buat desain produk berpusat pada pengguna.",
    date: "2026-09-28",
    startTime: "09:00",
    location: "Yogyakarta Design Studio",
    isOnline: false,
    attendees: 28,
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = EVENTS.filter(
    (e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-sm mb-4 border border-violet-500/20">
            <Calendar className="w-4 h-4" />
            <span>Event</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Event Mendatang
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mb-8">
            Ikuti konferensi, workshop, webinar, dan meetup komunitas teknologi di seluruh Indonesia.
          </p>
          <Link
            href="/events/calendar"
            className="inline-flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            <CalendarDays className="w-4 h-4" />
            Lihat Kalender Event
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative max-w-2xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Cari event berdasarkan judul atau lokasi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-slate-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((event) => (
            <div
              key={event.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-6 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                  {event.date} • {event.startTime}
                </span>
                {event.featured && (
                  <span className="text-xs font-semibold text-amber-400">★ Unggulan</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location}
                  {event.isOnline && " (Online)"}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> {event.attendees} peserta
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {event.startTime} WIB
                </span>
              </div>
              <Link
                href="/events/calendar"
                className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300 font-medium"
              >
                Lihat di Kalender <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800 mt-6">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada event yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">Coba kata kunci lain</p>
          </div>
        )}
      </div>
    </div>
  );
}
