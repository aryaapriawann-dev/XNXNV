"use client"
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Target, TrendingUp, ChevronRight } from "lucide-react";

interface Goal { id: string; title: string; description: string; metric: string; progress: number; category: string; }

const GOALS: Goal[] = [
  { id: "1", title: "Meningkatkan Retensi Pengguna 15%", description: "Meningkatkan tingkat retensi pengguna bulanan dari 78% menjadi 90% melalui perbaikan onboarding dan notifikasi yang lebih relevan.", metric: "78% → 90%", progress: 72, category: "pengalaman pengguna" },
  { id: "2", title: "Ekspansi ke 3 Wilayah Baru", description: "Memasuki pasar di tiga kota baru dengan memperkuat jaringan partner dan penyesuaian layanan lokal.", metric: "3 kota", progress: 45, category: "perluasan pasar" },
  { id: "3", title: "Pengurangan Latensi 40%", description: "Mengoptimalkan infrastruktur server dan caching untuk mempercepat waktu respon aplikasi secara signifikan.", metric: "40% lebih cepat", progress: 60, category: "kinerja" },
  { id: "4", title: "Rilis 5 Fitur Permintaan Tinggi", description: "Memrioritaskan dan menyelesaikan pengembangan fitur yang paling sering diminta oleh komunitas pengguna.", metric: "5 fitur", progress: 30, category: "produk" },
  { id: "5", title: "Sertifikasi Keamanan Level Lanjutan", description: "Mendapatkan sertifikasi keamanan siber tingkat lanjut untuk meningkatkan kepercayaan klien enterprise.", metric: "1 sertifikasi baru", progress: 20, category: "keamanan" },
];

export default function GoalsPage() {
  const [q, setQ] = useState("");
  const [catFilter, setCatFilter] = useState("semua");
  const categories = ["semua", ...Array.from(new Set(GOALS.map((g) => g.category)))];
  const filtered = useMemo(() => GOALS.filter((g) => {
    const matchesQ = g.title.toLowerCase().includes(q.toLowerCase()) || g.description.toLowerCase().includes(q.toLowerCase());
    const matchesCat = catFilter === "semua" || g.category === catFilter;
    return matchesQ && matchesCat;
  }), [q, catFilter]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Analitik</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Tujuan Strategis</h1>
          <p className="text-lg text-zinc-300">Target yang sedang kami kerjakan untuk tahun ini.</p>
        </div>
      </section>
      <section className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari tujuan..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${catFilter === c ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900" : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"}`}
                >
                  {c === "semua" ? "Semua" : c}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {filtered.map((goal) => (
              <div key={goal.id} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <Target className="w-5 h-5 text-indigo-600" />
                      <h3 className="font-semibold text-zinc-900 dark:text-white">{goal.title}</h3>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">{goal.category}</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{goal.description}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-sm font-medium text-zinc-900 dark:text-white">{goal.metric}</span>
                      <div className="flex-1 max-w-xs">
                        <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${goal.progress}%` }} />
                        </div>
                        <p className="text-xs text-zinc-500 mt-1 text-right">{goal.progress}% selesai</p>
                      </div>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-zinc-400 shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada tujuan yang ditemukan.</p>
          )}
          <div className="flex justify-center mt-10">
            <Link href="/analytics/reports" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors">
              Lihat Laporan <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
