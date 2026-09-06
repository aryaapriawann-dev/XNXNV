"use client";

import { useState } from "react";
import {
  User,
  Mail,
  CalendarCheck,
  Phone,
  Ticket,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  CalendarDays,
  MapPin,
  Search,
  Shield,
  Globe,
  Zap,
} from "lucide-react";

interface RegisterForm {
  name: string;
  email: string;
  event: string;
  phone: string;
  tickets: string;
  message: string;
}

const initialFormState: RegisterForm = {
  name: "",
  email: "",
  event: "",
  phone: "",
  tickets: "1",
  message: "",
};

type RegisterFormKey = keyof RegisterForm;

const EVENTS = [
  { value: "", label: "Pilih acara yang diikuti" },
  { value: "tech-summit-2026", label: "Tech Summit 2026: AI & Masa Depan Kerja — 15 Sep 2026, Jakarta" },
  { value: "workshop-react", label: "Workshop React Lanjutan — 18 Sep 2026, Bandung" },
  { value: "webinar-cyber", label: "Webinar Keamanan Siber untuk Bisnis — 20 Sep 2026, Online" },
  { value: "meetup-founder", label: "Meetup Founder Startup — 22 Sep 2026, Surabaya" },
  { value: "arsitektur-cloud", label: "Praktik Terbaik Arsitektur Cloud — 25 Sep 2026, Online" },
  { value: "workshop-design", label: "Workshop Design Thinking Produk — 28 Sep 2026, Yogyakarta" },
  { value: "vpn-privasi", label: "Seminar Privasi Digital & VPN — 02 Okt 2026, Jakarta" },
];

const EVENT_CARDS = [
  { id: "tech-summit-2026", title: "Tech Summit 2026: AI & Masa Depan Kerja", date: "15 Sep 2026", location: "Jakarta Convention Center", online: false, attendees: 450 },
  { id: "workshop-react", title: "Workshop React Lanjutan", date: "18 Sep 2026", location: "Bandung Tech Hub", online: false, attendees: 35 },
  { id: "webinar-cyber", title: "Webinar Keamanan Siber untuk Bisnis", date: "20 Sep 2026", location: "Online (Zoom)", online: true, attendees: 280 },
  { id: "meetup-founder", title: "Meetup Founder Startup", date: "22 Sep 2026", location: "Coffee Hub Surabaya", online: false, attendees: 42 },
  { id: "arsitektur-cloud", title: "Praktik Terbaik Arsitektur Cloud", date: "25 Sep 2026", location: "Online (Google Meet)", online: true, attendees: 120 },
  { id: "workshop-design", title: "Workshop Design Thinking Produk", date: "28 Sep 2026", location: "Yogyakarta Design Studio", online: false, attendees: 28 },
  { id: "vpn-privasi", title: "Seminar Privasi Digital & VPN", date: "02 Okt 2026", location: "Jakarta", online: false, attendees: 150 },
];

const HIGHLIGHTS = [
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "Acara Berkualitas",
    desc: "Kurasi pembicara praktisi industri dengan materi yang bisa langsung dipraktikkan.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Tiket Aman",
    desc: "Pendaftaran tercatat otomatis dan konfirmasi dikirim ke email Anda setelah submit.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Online & Offline",
    desc: "Pilih format acara sesuai kebutuhan — hadir langsung atau ikut daring dari mana saja.",
  },
];

export default function EventsRegisterPage() {
  const [formData, setFormData] = useState<RegisterForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<RegisterForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState<"all" | "online" | "offline">("all");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as RegisterFormKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<RegisterForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email tidak valid";
    }
    if (!formData.event) newErrors.event = "Pilih acara yang diikuti";
    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor HP/WhatsApp wajib diisi";
    } else if (!/^[0-9+()\-.\s]{9,17}$/.test(formData.phone)) {
      newErrors.phone = "Nomor HP tidak valid";
    }
    if (!formData.tickets) newErrors.tickets = "Pilih jumlah tiket";
    if (formData.message.trim() && formData.message.length < 10) {
      newErrors.message = "Catatan minimal 10 karakter";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData(initialFormState);
    setTimeout(() => setSubmitStatus("idle"), 6000);
  };

  const filteredEvents = EVENT_CARDS.filter((ev) => {
    const q = searchQuery.toLowerCase();
    const matchQ =
      ev.title.toLowerCase().includes(q) ||
      ev.location.toLowerCase().includes(q);
    const matchMode =
      filterMode === "all" ||
      (filterMode === "online" ? ev.online : !ev.online);
    return matchQ && matchMode;
  });

  const errorClass = (field: RegisterFormKey) =>
    errors[field]
      ? "border-red-500 focus:ring-red-500"
      : "border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-indigo-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Daftar Acara XVPNX
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Amankan kursi Anda di summit, workshop, dan webinar kami. Isi
            formulir di bawah dan tiket elektronik dikirim ke email Anda.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-5 text-indigo-600">
                  {h.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {h.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Event list: search + filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-indigo-600" /> Pilih Acara
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                  <Search className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari acara atau lokasi..."
                  className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "online", "offline"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setFilterMode(m)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      filterMode === m
                        ? "bg-indigo-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {m === "all" ? "Semua" : m === "online" ? "Online" : "Offline"}
                  </button>
                ))}
              </div>
            </div>
            {filteredEvents.length === 0 ? (
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Tidak ada acara yang cocok dengan pencarian Anda.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredEvents.map((ev) => (
                  <button
                    key={ev.id}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, event: ev.id }));
                      setErrors((prev) => ({ ...prev, event: undefined }));
                    }}
                    className={`text-left p-5 rounded-xl border transition-colors ${
                      formData.event === ev.id
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40"
                        : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-indigo-400"
                    }`}
                  >
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-1">
                      {ev.title}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1 mb-1">
                      <CalendarCheck className="h-3 w-3" /> {ev.date}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {ev.location} • {ev.attendees} peserta
                    </p>
                    <span className="inline-block mt-2 text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
                      {ev.online ? "Online" : "Offline"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Form card */}
          <div className="max-w-3xl mx-auto bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Pendaftaran Berhasil!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Terima kasih telah mendaftar acara XVPNX. Tiket elektronik
                  dan detail acara akan dikirim ke email Anda.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus("idle");
                    setFormData(initialFormState);
                  }}
                  className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Daftar Acara Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <User className="h-5 w-5" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("name")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("email")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Acara */}
                  <div>
                    <label
                      htmlFor="event"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Acara yang Diikuti
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <CalendarCheck className="h-5 w-5" />
                      </div>
                      <select
                        id="event"
                        name="event"
                        value={formData.event}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("event")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white`}
                      >
                        {EVENTS.map((p) => (
                          <option key={p.value} value={p.value}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.event && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.event}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Nomor HP / WhatsApp
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="08xxxxxxxxxx"
                        className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("phone")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Tickets */}
                <div>
                  <label
                    htmlFor="tickets"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Jumlah Tiket
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                      <Ticket className="h-5 w-5" />
                    </div>
                    <select
                      id="tickets"
                      name="tickets"
                      value={formData.tickets}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("tickets")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white`}
                    >
                      {["1", "2", "3", "4", "5"].map((n) => (
                        <option key={n} value={n}>
                          {n} tiket
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.tickets && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.tickets}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Catatan (opsional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Kebutuhan khusus, pertanyaan untuk panitia, atau kode promo..."
                      rows={4}
                      className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-800 border ${errorClass("message")} rounded-lg focus:ring-2 focus:border-transparent transition-colors text-zinc-900 dark:text-white placeholder-zinc-400 resize-none`}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Mendaftar...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" /> Daftar Acara
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
