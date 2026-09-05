"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  LifeBuoy,
  PhoneCall,
  Siren,
  Send,
  CheckCircle,
  AlertCircle,
  Wifi,
  UserRound,
  CreditCard,
  ShieldCheck,
  Wrench,
  MessageCircle,
} from "lucide-react";

interface HelpItem {
  id: string;
  category: "akun" | "koneksi" | "pembayaran" | "keamanan" | "teknis";
  question: string;
  answer: string;
  steps: string[];
  urgent?: boolean;
}

const CATEGORIES = [
  { id: "semua", label: "Semua Topik" },
  { id: "akun", label: "Akun & Profil" },
  { id: "koneksi", label: "Koneksi VPN" },
  { id: "pembayaran", label: "Pembayaran" },
  { id: "keamanan", label: "Keamanan" },
  { id: "teknis", label: "Teknis & Perangkat" },
] as const;

const HELP_ITEMS: HelpItem[] = [
  {
    id: "1",
    category: "koneksi",
    question: "VPN tidak bisa terhubung, apa yang harus dilakukan?",
    answer:
      "Kegagalan koneksi umumnya disebabkan jaringan lokal, server penuh, atau protokol yang diblokir ISP. Ikuti langkah berikut secara berurutan.",
    steps: [
      "Periksa koneksi internet tanpa VPN terlebih dahulu.",
      "Ganti ke server lain dengan ping terendah di daftar server.",
      "Ubah protokol koneksi (misal dari WireGuard ke OpenVPN) di menu Pengaturan.",
      "Restart aplikasi dan coba lagi.",
    ],
    urgent: true,
  },
  {
    id: "2",
    category: "koneksi",
    question: "Kecepatan internet melambat saat VPN aktif, bagaimana mempercepatnya?",
    answer:
      "Sedikit penurunan kecepatan itu normal karena enkripsi. Jika lambat berlebihan, biasanya karena jarak server atau kepadatan pengguna.",
    steps: [
      "Pilih server terdekat dari lokasi Anda.",
      "Gunakan protokol WireGuard yang lebih ringan.",
      "Tutup aplikasi yang memakai bandwidth besar di latar belakang.",
    ],
  },
  {
    id: "3",
    category: "akun",
    question: "Bagaimana cara mereset kata sandi akun saya?",
    answer:
      "Anda bisa mereset kata sandi sendiri tanpa menghubungi support selama masih punya akses ke email terdaftar.",
    steps: [
      "Buka halaman Masuk lalu klik Lupa Kata Sandi.",
      "Masukkan email yang terdaftar di akun Anda.",
      "Klik tautan reset yang dikirim ke email dalam 15 menit.",
      "Buat kata sandi baru minimal 8 karakter.",
    ],
  },
  {
    id: "4",
    category: "akun",
    question: "Berapa perangkat yang bisa dipakai dalam satu akun?",
    answer:
      "Satu akun mendukung hingga 5 perangkat aktif bersamaan di paket standar dan tanpa batas perangkat di paket keluarga.",
    steps: [
      "Buka menu Perangkat di dashboard akun.",
      "Hapus perangkat lama yang sudah tidak dipakai.",
      "Tambahkan perangkat baru dengan login seperti biasa.",
    ],
  },
  {
    id: "5",
    category: "pembayaran",
    question: "Pembayaran gagal padahal saldo cukup, kenapa?",
    answer:
      "Pembayaran gagal biasanya karena limit transaksi online kartu, OTP kedaluwarsa, atau e-wallet belum diverifikasi.",
    steps: [
      "Pastikan limit transaksi online kartu Anda mencukupi.",
      "Coba metode pembayaran lain (transfer bank atau e-wallet).",
      "Tunggu 10 menit lalu ulangi dari halaman Tagihan.",
    ],
  },
  {
    id: "6",
    category: "pembayaran",
    question: "Bagaimana cara membatalkan langganan dan apakah ada refund?",
    answer:
      "Langganan bisa dibatalkan kapan saja dari dashboard. Refund penuh berlaku 7 hari sejak pembayaran pertama.",
    steps: [
      "Buka dashboard lalu masuk ke Langganan.",
      "Klik Batalkan Langganan dan isi alasan singkat.",
      "Refund diproses ke metode pembayaran asal dalam 5-14 hari kerja.",
    ],
  },
  {
    id: "7",
    category: "keamanan",
    question: "Apakah data browsing saya dicatat atau disimpan?",
    answer:
      "Tidak. Kami menerapkan kebijakan tanpa-log: aktivitas browsing, alamat IP asal, dan riwayat koneksi tidak pernah disimpan di server.",
    steps: [
      "Baca Kebijakan Privasi untuk daftar data minimal yang kami simpan.",
      "Aktifkan Kill Switch agar trafik terputus otomatis jika VPN drop.",
      "Aktifkan proteksi kebocoran DNS di Pengaturan Keamanan.",
    ],
  },
  {
    id: "8",
    category: "teknis",
    question: "Aplikasi error atau crash di perangkat saya, bagaimana solusinya?",
    answer:
      "Crash umumnya karena versi aplikasi usang atau konflik dengan VPN lain yang terpasang di perangkat yang sama.",
    steps: [
      "Update aplikasi ke versi terbaru dari halaman Unduh.",
      "Hapus aplikasi VPN lain yang berpotensi konflik.",
      "Hapus cache aplikasi lalu login ulang.",
    ],
  },
];

const QUICK_ACTIONS = [
  {
    icon: Wifi,
    title: "Cek Status Server",
    desc: "Lihat status real-time semua lokasi server kami.",
  },
  {
    icon: Wrench,
    title: "Panduan Perangkat",
    desc: "Tutorial setup langkah demi langkah per perangkat.",
  },
  {
    icon: ShieldCheck,
    title: "Pusat Keamanan",
    desc: "Tips mengamankan akun dan koneksi Anda.",
  },
];

interface EmergencyForm {
  name: string;
  contact: string;
  urgency: string;
  category: string;
  message: string;
}

const initialForm: EmergencyForm = {
  name: "",
  contact: "",
  urgency: "mendesak",
  category: "koneksi",
  message: "",
};

export default function SupportHelpPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "1": true });
  const [formData, setFormData] = useState<EmergencyForm>(initialForm);
  const [errors, setErrors] = useState<Partial<EmergencyForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = HELP_ITEMS.filter((item) => {
    const matchCat = selectedCategory === "semua" || item.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EmergencyForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<EmergencyForm> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.contact.trim()) newErrors.contact = "Email atau nomor HP wajib diisi";
    if (!formData.message.trim()) {
      newErrors.message = "Jelaskan masalah Anda";
    } else if (formData.message.length < 10) {
      newErrors.message = "Deskripsi minimal 10 karakter";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData(initialForm);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Header */}
      <div className="border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm mb-4 border border-emerald-500/20">
            <LifeBuoy className="w-4 h-4" />
            <span>Pusat Bantuan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Ada Kendala? Kami Siap Membantu
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Cari solusi mandiri dari panduan di bawah, atau hubungi tim darurat kami yang siaga 24/7.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari masalah: misal gagal konek, lupa sandi, refund..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/90 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xl transition-all text-slate-200"
            />
          </div>

          {/* Emergency hotline */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="tel:+62210000000"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-red-600/20"
            >
              <Siren className="w-4 h-4" />
              <span>Kontak Darurat 24/7</span>
            </a>
            <a
              href="tel:+62210000000"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium rounded-xl text-sm transition-all border border-slate-700"
            >
              <PhoneCall className="w-4 h-4" />
              <span>(021) 000-0000</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Quick actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {QUICK_ACTIONS.map((action) => (
            <div
              key={action.title}
              className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl hover:border-emerald-500/40 transition-all cursor-pointer"
            >
              <action.icon className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">{action.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{action.desc}</p>
            </div>
          ))}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const icons: Record<string, React.ReactNode> = {
              akun: <UserRound className="w-3.5 h-3.5" />,
              koneksi: <Wifi className="w-3.5 h-3.5" />,
              pembayaran: <CreditCard className="w-3.5 h-3.5" />,
              keamanan: <ShieldCheck className="w-3.5 h-3.5" />,
              teknis: <Wrench className="w-3.5 h-3.5" />,
            };
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat.id !== "semua" && icons[cat.id]}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion help list */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className={`bg-slate-900/70 border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? "border-emerald-500/50 shadow-lg shadow-emerald-500/5"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {item.urgent && (
                      <span className="px-2 py-0.5 text-xs font-semibold bg-red-500/20 text-red-400 rounded-full shrink-0 border border-red-500/30">
                        Mendesak
                      </span>
                    )}
                    <h3 className="text-base font-semibold text-white">{item.question}</h3>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-800/60 mt-1">
                    <p className="text-slate-300 text-sm leading-relaxed mt-3">{item.answer}</p>
                    <ol className="mt-4 space-y-2">
                      {item.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-slate-300 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-xl border border-slate-800">
            <MessageCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-slate-300">Tidak ada solusi yang cocok</p>
            <p className="text-sm text-slate-500 mt-1">
              Isi form kontak darurat di bawah, tim kami akan segera membantu
            </p>
          </div>
        )}

        {/* Emergency contact form */}
        <div className="mt-14 p-8 bg-gradient-to-br from-red-950/40 via-slate-900 to-slate-900 border border-slate-800 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center">
              <Siren className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Form Kontak Darurat</h4>
              <p className="text-sm text-slate-400">
                Masalah kritis? Isi form ini, respon prioritas di bawah 15 menit.
              </p>
            </div>
          </div>

          {submitStatus === "success" ? (
            <div className="mt-6 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-base font-bold text-white">Laporan darurat terkirim!</p>
              <p className="text-sm text-slate-400 mt-1">
                Tim siaga kami akan menghubungi Anda secepatnya. Simpan nomor (021) 000-0000 untuk
                keadaan sangat mendesak.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-4 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-xl transition-all"
              >
                Kirim Laporan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.name && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email / No. HP Aktif
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="email@contoh.id / 08xx-xxxx-xxxx"
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  {errors.contact && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.contact}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Tingkat Urgensi
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="normal">Normal — respon maks 24 jam</option>
                    <option value="mendesak">Mendesak — respon maks 1 jam</option>
                    <option value="kritis">Kritis — respon maks 15 menit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Kategori Masalah
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="koneksi">Koneksi VPN</option>
                    <option value="akun">Akun & Login</option>
                    <option value="pembayaran">Pembayaran</option>
                    <option value="keamanan">Keamanan / Dugaan Peretasan</option>
                    <option value="teknis">Teknis / Aplikasi Error</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Jelaskan Masalah Anda
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Ceritakan kronologi masalah: kapan terjadi, perangkat apa, pesan error apa yang muncul..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-xs text-red-400 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-medium rounded-xl text-sm transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Mengirim..." : "Kirim Laporan Darurat"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
