import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowLeft,
  Building2,
  Globe,
  Navigation,
} from "lucide-react";
import Link from "next/link";

interface Cabang {
  nama: string;
  alamat: string;
  kota: string;
  telepon: string;
  email: string;
  jamBuka: string;
  koordinat: { lat: number; lng: number };
}

const cabangList: Cabang[] = [
  {
    nama: "Kantor Pusat Jakarta",
    alamat: "Jl. Teknologi No. 123, Kebayoran Baru",
    kota: "Jakarta Selatan, 12345",
    telepon: "+62 812 3456 7890",
    email: "jakarta@xvpnx.com",
    jamBuka: "Senin–Jumat, 09:00–18:00 WIB",
    koordinat: { lat: -6.2441, lng: 106.7994 },
  },
  {
    nama: "Cabang Bandung",
    alamat: "Jl. Asia Afrika No. 56, Sumur Bandung",
    kota: "Bandung, 40111",
    telepon: "+62 811 2233 4455",
    email: "bandung@xvpnx.com",
    jamBuka: "Senin–Jumat, 09:00–17:00 WIB",
    koordinat: { lat: -6.9147, lng: 107.6098 },
  },
  {
    nama: "Cabang Surabaya",
    alamat: "Jl. Pemuda No. 78, Genteng",
    kota: "Surabaya, 60271",
    telepon: "+62 813 5566 7788",
    email: "surabaya@xvpnx.com",
    jamBuka: "Senin–Jumat, 09:00–17:00 WIB",
    koordinat: { lat: -7.2575, lng: 112.7521 },
  },
  {
    nama: "Cabang Medan",
    alamat: "Jl. Diponegoro No. 12, Medan Baru",
    kota: "Medan, 20152",
    telepon: "+62 816 9900 1122",
    email: "medan@xvpnx.com",
    jamBuka: "Senin–Jumat, 08:30–17:00 WIB",
    koordinat: { lat: 3.5952, lng: 98.6722 },
  },
];

const jadwalOperasional = [
  { hari: "Senin – Jumat", jam: "09:00 – 18:00 WIB", status: "buka" },
  { hari: "Sabtu", jam: "09:00 – 13:00 WIB", status: "buka" },
  { hari: "Minggu", jam: "Tutup", status: "tutup" },
  { hari: "Hari Libur Nasional", jam: "Tutup", status: "tutup" },
];

const infoKontak = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telepon Pusat",
    nilai: "+62 812 3456 7890",
    link: "tel:+628123456789",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    nilai: "info@xvpnx.com",
    link: "mailto:info@xvpnx.com",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Website",
    nilai: "www.xvpnx.com",
    link: "https://www.xvpnx.com",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Pusat",
    nilai: "Jl. Teknologi No. 123, Jakarta Selatan",
    link: "https://maps.google.com/?q=-6.2441,106.7994",
  },
];

export default function ContactMapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Kontak
          </Link>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Lokasi Kami
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Temukan kantor dan cabang XVPNX terdekat di kota Anda. Kami hadir
              di berbagai kota besar Indonesia untuk melayani kebutuhan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Peta Statis */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Peta Kantor Pusat
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Jl. Teknologi No. 123, Kebayoran Baru, Jakarta Selatan
            </p>
          </div>

          {/* Embed OpenStreetMap (tanpa API key) */}
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <iframe
              title="Lokasi Kantor Pusat XVPNX"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.7894%2C-6.2541%2C106.8094%2C-6.2341&layer=mapnik&marker=-6.2441%2C106.7994"
              width="100%"
              height="450"
              className="block w-full"
              loading="lazy"
            />
          </div>

          <div className="mt-4 text-center">
            <a
              href="https://www.openstreetmap.org/?mlat=-6.2441&mlon=106.7994#map=15/-6.2441/106.7994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium text-sm transition-colors"
            >
              <Navigation className="h-4 w-4" />
              Buka di OpenStreetMap
            </a>
          </div>
        </div>
      </section>

      {/* Info Kontak + Jam Operasional */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Kontak */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
                Informasi Kontak
              </h2>
              <div className="space-y-4">
                {infoKontak.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-600 hover:shadow-md transition-all group"
                  >
                    <div className="w-11 h-11 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="font-semibold text-zinc-900 dark:text-white">
                        {item.nilai}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Jam Operasional */}
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">
                Jam Operasional
              </h2>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      Jadwal Layanan
                    </p>
                    <p className="text-xs text-zinc-400">
                      Semua waktu dalam zona WIB
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {jadwalOperasional.map((jadwal, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                        {jadwal.hari}
                      </span>
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          jadwal.status === "buka"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
                        }`}
                      >
                        {jadwal.jam}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 border-t border-indigo-100 dark:border-indigo-900/20">
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    Untuk kebutuhan mendesak di luar jam operasional, silakan
                    kirim email ke{" "}
                    <a
                      href="mailto:support@xvpnx.com"
                      className="font-medium underline"
                    >
                      support@xvpnx.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daftar Cabang */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Jaringan Cabang
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              XVPNX hadir di {cabangList.length} kota besar di Indonesia untuk
              memastikan dukungan terbaik bagi setiap klien kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabangList.map((cabang, idx) => (
              <div
                key={idx}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-xl hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-300 group"
              >
                {/* Header cabang */}
                <div className="bg-zinc-900 dark:bg-zinc-800 p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">
                      {cabang.nama}
                    </h3>
                    <p className="text-zinc-400 text-sm">{cabang.kota}</p>
                  </div>
                </div>

                {/* Detail cabang */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                      {cabang.alamat}, {cabang.kota}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <a
                      href={`tel:${cabang.telepon.replace(/\s/g, "")}`}
                      className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {cabang.telepon}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <a
                      href={`mailto:${cabang.email}`}
                      className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {cabang.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                      {cabang.jamBuka}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href={`https://www.openstreetmap.org/?mlat=${cabang.koordinat.lat}&mlon=${cabang.koordinat.lng}#map=15/${cabang.koordinat.lat}/${cabang.koordinat.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Lihat di Peta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA balik ke kontak */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Bantuan Lebih Lanjut?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami langsung melalui formulir kontak atau pilih saluran
            komunikasi yang paling nyaman untuk Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            Kembali ke Halaman Kontak
          </Link>
        </div>
      </section>
    </div>
  );
}
