import Link from "next/link";

/**
 * Leadership sub-page under about
 * Displays team leadership and management
 */
export default function LeadershipPage() {
  const leaders = [
    {
      name: "Budi Santoso",
      role: "CEO & Founder",
      bio: "Budi adalah pendiri XNXNV dengan pengalaman 10+ tahun di industri teknologi. Sebelum XNXNV, ia bekerja sebagai senior developer di perusahaan-perusahaan ternama.",
      avatar: "BS",
    },
    {
      name: "Siti Nurhaliza",
      role: "CTO",
      bio: "Siti memimpin tim teknologi XNXNV dengan fokus pada inovasi dan excellence in engineering. Ia memiliki pengalaman luas di cloud architecture dan cybersecurity.",
      avatar: "SN",
    },
    {
      name: "Agus Wijaya",
      role: "Project Manager",
      bio: "Agus bertanggung jawab atas pengelolaan proyek dan kepuasan klien. Dengan latar belakang di bidang manajemen proyek IT, ia memastikan setiap proyek berjalan tepat waktu.",
      avatar: "AW",
    },
    {
      name: "Dewi Lestari",
      role: "Lead Designer",
      bio: "Dewi memimpin tim desain XNXNV dengan gaya modern dan user-centered. Ia memiliki portfolio yang mengesankan dalam desain UI/UX untuk berbagai industri.",
      avatar: "DL",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Tim Pimpinan</h1>
          <p className="text-lg text-indigo-100">
            Para pemimpin yang mendorong XNXNV maju terus
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                  {leader.avatar}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {leader.name}
                  </h2>
                  <p className="text-sm text-indigo-600">{leader.role}</p>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
