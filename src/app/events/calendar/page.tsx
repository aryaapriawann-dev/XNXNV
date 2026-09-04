"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, User, Search, Filter, ChevronLeft, ChevronRight, Globe, Code, TrendingUp, CheckCircle } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  category: "conference" | "workshop" | "webinar" | "meetup" | "networking";
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  isOnline: boolean;
  organizer: string;
  attendees: number;
  maxAttendees: number;
  featured?: boolean;
}

const CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "conference", label: "Conference" },
  { id: "workshop", label: "Workshop" },
  { id: "webinar", label: "Webinar" },
  { id: "meetup", label: "Meetup" },
  { id: "networking", label: "Networking" },
] as const;

const EVENTS: Event[] = [
  {
    id: "1",
    title: "Tech Summit 2026: AI & Future of Work",
    description: "Join industry leaders discussing artificial intelligence, machine learning, and the future of workplace automation.",
    category: "conference",
    date: "2026-09-15",
    startTime: "09:00",
    endTime: "17:00",
    location: "Jakarta Convention Center",
    isOnline: false,
    organizer: "Tech Events Indonesia",
    attendees: 450,
    maxAttendees: 500,
    featured: true,
  },
  {
    id: "2",
    title: "React Advanced Workshop: Building Modern Apps",
    description: "Hands-on workshop covering advanced React patterns, performance optimization, and Next.js 16.",
    category: "workshop",
    date: "2026-09-18",
    startTime: "10:00",
    endTime: "16:00",
    location: "Bandung Tech Hub",
    isOnline: false,
    organizer: "DevHub Bandung",
    attendees: 35,
    maxAttendees: 40,
  },
  {
    id: "3",
    title: "Cybersecurity Webinar: Protecting Your Business",
    description: "Learn essential cybersecurity practices and tools to protect your business from modern threats.",
    category: "webinar",
    date: "2026-09-20",
    startTime: "14:00",
    endTime: "16:00",
    location: "Online (Zoom)",
    isOnline: true,
    organizer: "CyberSafe Academy",
    attendees: 280,
    maxAttendees: 500,
    featured: true,
  },
  {
    id: "4",
    title: "Startup Founders Meetup",
    description: "Network with fellow startup founders, share experiences, and learn from successful entrepreneurs.",
    category: "meetup",
    date: "2026-09-22",
    startTime: "18:00",
    endTime: "21:00",
    location: "Coffee Hub Surabaya",
    isOnline: false,
    organizer: "Startup Community Surabaya",
    attendees: 42,
    maxAttendees: 50,
  },
  {
    id: "5",
    title: "Cloud Architecture Best Practices",
    description: "Deep dive into cloud architecture patterns, microservices, and scaling strategies for modern applications.",
    category: "webinar",
    date: "2026-09-25",
    startTime: "15:00",
    endTime: "17:00",
    location: "Online (Google Meet)",
    isOnline: true,
    organizer: "Cloud Architects ID",
    attendees: 120,
    maxAttendees: 300,
  },
  {
    id: "6",
    title: "Product Design Thinking Workshop",
    description: "Learn design thinking methodology and create user-centered product designs through practical exercises.",
    category: "workshop",
    date: "2026-09-28",
    startTime: "09:00",
    endTime: "15:00",
    location: "Yogyakarta Design Studio",
    isOnline: false,
    organizer: "Design Thinking ID",
    attendees: 28,
    maxAttendees: 30,
  },
  {
    id: "7",
    title: "Tech Networking Night",
    description: "Evening networking event for tech professionals. Connect, collaborate, and explore opportunities.",
    category: "networking",
    date: "2026-10-02",
    startTime: "19:00",
    endTime: "22:00",
    location: "The Hall Jakarta",
    isOnline: false,
    organizer: "Tech Connect Jakarta",
    attendees: 75,
    maxAttendees: 100,
    featured: true,
  },
  {
    id: "8",
    title: "DevOps Conference 2026",
    description: "Learn about CI/CD, infrastructure as code, containerization, and modern DevOps practices.",
    category: "conference",
    date: "2026-10-05",
    startTime: "08:30",
    endTime: "18:00",
    location: "Bali International Convention Center",
    isOnline: false,
    organizer: "DevOps Indonesia",
    attendees: 320,
    maxAttendees: 400,
  },
];

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const formatTime = (time: string): string => {
  return time;
};

const isUpcoming = (dateStr: string): boolean => {
  return new Date(dateStr) >= new Date();
};

export default function EventsCalendarPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const filteredEvents = EVENTS.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesOnline = !showOnlineOnly || event.isOnline;
    return matchesCategory && matchesSearch && matchesOnline;
  });

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const upcomingCount = filteredEvents.filter(e => isUpcoming(e.date)).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Events Calendar
          </h1>
          <p className="text-center text-lg text-slate-400 max-w-2xl mx-auto">
            Temukan dan ikuti event teknologi terbaik - conference, workshop, webinar, dan networking
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari event (e.g. React, AI, networking)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Online Filter Toggle */}
          <div className="flex items-center justify-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-400">Tampilkan Online Event Saja</span>
            </label>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span>Kategori: <strong className="text-slate-200">{selectedCategory === "all" ? "Semua" : CATEGORIES.find(c => c.id === selectedCategory)?.label}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Events: <strong className="text-slate-200">{filteredEvents.length}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Upcoming: <strong className="text-slate-200">{upcomingCount}</strong></span>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => {
            const upcoming = isUpcoming(event.date);
            const availableSeats = event.maxAttendees - event.attendees;
            const seatPercentage = (event.attendees / event.maxAttendees) * 100;

            return (
              <div
                key={event.id}
                className={`bg-slate-900 rounded-xl border overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all ${
                  event.featured
                    ? "border-blue-500 shadow-lg shadow-blue-500/10"
                    : "border-slate-800"
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      event.category === "conference" ? "bg-blue-500/10 text-blue-400" :
                      event.category === "workshop" ? "bg-purple-500/10 text-purple-400" :
                      event.category === "webinar" ? "bg-green-500/10 text-green-400" :
                      event.category === "meetup" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-orange-500/10 text-orange-400"
                    }`}>
                      <span className="capitalize">{event.category}</span>
                    </div>
                    {event.featured && (
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{formatDate(event.date)}</span>
                      {upcoming && (
                        <span className="ml-auto text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span className="flex items-center gap-2">
                        {event.location}
                        {event.isOnline && (
                          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                            Online
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <User className="w-4 h-4 text-blue-400" />
                      <span>{event.organizer}</span>
                    </div>
                  </div>

                  {/* Attendees Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>{event.attendees} / {event.maxAttendees} peserta</span>
                      <span className={availableSeats < 10 ? "text-red-400 font-medium" : ""}>
                        {availableSeats} kursi tersisa
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          seatPercentage >= 90 ? "bg-red-500" :
                          seatPercentage >= 70 ? "bg-yellow-500" :
                          "bg-blue-500"
                        }`}
                        style={{ width: `${seatPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      availableSeats === 0
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                        : event.featured
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200"
                    }`}
                    disabled={availableSeats === 0}
                  >
                    {availableSeats === 0 ? "Sold Out" : "Daftar Sekarang"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {currentEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
              <Search className="w-8 h-8 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak ada event ditemukan</h3>
            <p className="text-slate-400">Coba ubah filter atau kata kunci pencarian Anda</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setShowOnlineOnly(false);
              }}
              className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400 disabled:opacity-50"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
