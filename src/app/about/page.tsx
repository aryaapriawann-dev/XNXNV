import Link from "next/link";

/**
 * About page - Informasi perusahaan dan tim
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tentang Kami</h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Tim yang berdedikasi tinggi dalam membantu bisnis Anda berkembang di era digital
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Siapa Kami
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                XNXNV adalah tim developer dan desainer yang berdedikasi untuk membantu bisnis
                Anda berkembang di era digital. Kami menyediakan solusi website, mobile app,
                desain UI/UX, dan strategi digital marketing.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                Dengan pengalaman lebih dari 5 tahun di industri teknologi, kami telah membantu
                ratusan bisnis dari berbagai ukuran untuk mewujudkan visi digital mereka.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square w-full max-w-lg mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-600 rounded-full opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-12">
            Nilai Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Kualitas",
                description: "Kami tidak kompromi dengan kualitas kerja. Setiap proyek kami kerjakan dengan standar tertinggi.",
              },
              {
                icon: "🤝",
                title: "Integritas",
                description: "Kita melakukan apa yang kita janjikan. Transparansi dan kejujuran adalah inti dari semua hubungan kerja kita.",
              },
              {
                icon: "💡",
                title: "Inovasi",
                description: "Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terbaik bagi klien kami.",
              },
              {
                icon: "🚀",
                title: "Pertumbuhan",
                description: "Kami tidak hanya membantu bisnis Anda tumbuh, tapi juga membantu tim Anda berkembang.",
              },
              {
                icon: "⭐",
                title: "Pengalaman",
                description: "Dengan pengalaman lebih dari 5 tahun, kami telah membantu ratusan bisnis mencapai tujuan digital mereka.",
              },
              {
                icon: "💙",
                title: "Kepuasan",
                description: "Kepuasan klien adalah prioritas utama kami. Kami akan selalu meluangkan waktu untuk mendengarkan kebutuhan Anda.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Siap Bekerja Sama?</h2>
          <p className="text-indigo-100 mb-8">
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
