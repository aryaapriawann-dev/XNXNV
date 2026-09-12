import Link from "next/link";

/**
 * Mission sub-page under about
 * Displays company mission and vision
 */
export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Misi & Visi</h1>
          <p className="text-lg text-indigo-100">
            Arah yang kami tuju dan alasan kami ada
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            Misi Kami
          </h2>
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-xl p-8 border border-zinc-200 dark:border-zinc-800">
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed;text-center">
              Memberikan solusi digital terbaik yang membantu bisnis kami
              untuk tumbuh, berinovasi, dan bersaing di era digital yang cepat berkembang.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {[
                "Menyediakan layanan digital yang berkualitas tinggi dan berstandar internasional",
                "Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan dan hasil yang terukur",
                "Memberikan pengalaman pengguna yang luar biasa melalui desain dan teknologi yang inovatif",
                "Mendukung pertumbuhan ekonomi digital Indonesia dengan tenaga kerja lokal yang berkualitas",
              ].map((misi, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700 dark:text-zinc-300">{misi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 text-center">
            Visi Kami
          </h2>
          <div className="bg-indigo-600 rounded-xl p-8 text-center">
            <p className="text-xl text-white leading-relaxed">
              Menjadi agency digital terdepan di Indonesia yang dipercaya oleh bisnis
              untuk mewujudkan transformasi digital mereka.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2 text-indigo-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.555-9.555a1 1 0 00-1-1h-1a1 1 0 00-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1-1v2a1 1 0 001 1h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v-1a1 1 0 00-1-1h-1v-2z" clipRule="evenodd" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.555-9.555a1 1 0 00-1-1h-1a1 1 0 00-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1-1v2a1 1 0 001 1h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v-1a1 1 0 00-1-1h-1v-2z" clipRule="evenodd" />
                </svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.555-9.555a1 1 0 00-1-1h-1a1 1 0 00-1-1v-1a1 1 0 00-1-1h-1a1 1 0 00-1-1v2a1 1 0 001 1h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v2a1 1 0 001 1h1a1 1 0 001-1v-2h1v-1a1 1 0 00-1-1h-1v-2z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-sm">Kualitas • Integritas • Inovasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
