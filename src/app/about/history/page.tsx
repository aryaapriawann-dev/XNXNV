import Link from "next/link";

/**
 * History sub-page under about
 * Displays company history and milestones
 */
export default function HistoryPage() {
  const milestones = [
    {
      year: "2020",
      title: "Pendirian XNXNV",
      description: "XNPXN resmi didirikan di Kendari, Sulawesi Tenggara dengan tim 3 founders.",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "6 Bulan Pertama",
      description: "Menyelesaikan 5 proyek pertama: website company profile untuk 3 klien lokal.",
      icon: "💼",
    },
    {
      year: "2022",
      title: "Ekspansi Tim",
      description: "Tim berkembang menjadi 10 members, termasuk developer, designer, dan project manager.",
      icon: "👥",
    },
    {
      year: "2023",
      title: "Ekspansi Nasional",
      description: "Membuka kantor kedua di Jakarta dan mulai menerima proyek dari seluruh Indonesia.",
      icon: "🏢",
    },
    {
      year: "2024",
      title: "100+ Proyek Selesai",
      description: "Melewati milestone 100 proyek selesai dengan tingkat kepuasan klien 98%.",
      icon: "🎯",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sejarah Kami</h1>
          <p className="text-lg text-indigo-100">
            Perjalanan XNXNV dari awal sampai sekarang
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                {milestone.year.charAt(2)}
              </div>
              <div className="flex-1 pb-8 border-b border-dashed border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{milestone.icon}</span>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {milestone.title}
                  </h2>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
