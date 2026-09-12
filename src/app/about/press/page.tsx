import Link from "next/link";

/**
 * Press sub-page under about
 * Displays company press releases and media coverage
 */
export default function PressPage() {
  const pressItems = [
    {
      date: "15 Okt 2024",
      title: "XNXNV Raih Penghargaan Best Digital Agency 2024",
      summary: "XNXNV berhasil meraih penghargaan Best Digital Agency dari Tim Award Indonesia untuk kontribusi signifikan dalam melihat bisnis digital di Sulawesi Tenggara.",
    },
    {
      date: "10 Agu 2024",
      title: "XNXNV Ekspansi ke Jakarta",
      summary: "XNXNV resmi membuka kantor kedua di Jakarta, memperluas jangkauan layanan ke seluruh Indonesia.",
    },
    {
      date: "5 Jul 2024",
      title: "Kolaborasi dengan Universitas Terbuka",
      summary: "XNXNV bermitra dengan Universitas Terbuka untuk program magang dan pelatihan digital marketing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Berita & Media</h1>
          <p className="text-lg text-indigo-100">
            Liputan media dan pengumuman terbaru dari XNXNV
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {pressItems.map((item, index) => (
            <article key={index} className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-zinc-500">{item.date}</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {item.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">{item.summary}</p>
              <div className="mt-4 flex items-center gap-4">
                <Link
                  href="#" // TODO: add actual link
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  onClick={(e) => e.preventDefault()}
                >
                  Baca Selengkapnya →
                </Link>
                <span className="text-zinc-400 text-sm">Press Release</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-950 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Hubungi Tim Media
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Untuk permintaan wawancara, foto, atau informasi lebih lanjut, hubungi kami.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:press@xvnpnx.id" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              press@xvnpnx.id
            </a>
            <a href="tel:+6281234567890" className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              +62 812-3456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
