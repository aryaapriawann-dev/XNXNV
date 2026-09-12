import Link from "next/link";

/**
 * Awards sub-page under about
 * Displays company awards and achievements
 */
export default function AwardsPage() {
  const awards = [
    {
      year: "2024",
      title: "Best Digital Agency",
      issuer: "Tim Award Indonesia",
      description: "Penghargaan untuk agency digital terbaik di Indonesia",
      icon: "🏆",
    },
    {
      year: "2023",
      title: "Web Development Excellence",
      issuer: "WebAward",
      description: "Penghargaan untuk excellence in web development",
      icon: "💻",
    },
    {
      year: "2023",
      title: "Klien Terpercaya",
      issuer: "KlienAward",
      description: "Penghargaan dari klien untuk layanan terbaik",
      icon: "🤝",
    },
    {
      year: "2022",
      title: "Inovasi Digital",
      issuer: "Innovation Awards",
      description: "Penghargaan untuk inovasi dalam digital solutions",
      icon: "💡",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Penghargaan</h1>
          <p className="text-lg text-indigo-100">
            Beberapa penghargaan yang kami peroleh atas dedikasi dan kualitas kerja
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-5xl mb-4">{award.icon}</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-zinc-500">{award.year}</span>
                <span className="text-zinc-300 dark:text-zinc-600">|</span>
                <span className="text-sm text-zinc-500">{award.issuer}</span>
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                {award.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
