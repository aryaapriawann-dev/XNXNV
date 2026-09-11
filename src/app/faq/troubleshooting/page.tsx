"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronRight, Clock, AlertTriangle } from "lucide-react";

const PROBLEM = [
  { id: "1", judul: "Website Tidak Bisa Diakses", kategori: "akses", tingkat: "Pemula", solusi: "Cek koneksi internet, clear cache browser, pastikan URL benar, dan coba buka di incognito mode.", langkah: ["Cek koneksi internet", "Clear cache dan cookies", "Buka di incognito mode", "Cek status server"] },
  { id: "2", judul: "Login Gagal Berulang", kategori: "akun", tingkat: "Menengah", solusi: "Pastikan email benar, reset password jika perlu, dan nonaktifkan ekstensi browser yang mungkin mengganggu.", langkah: ["Verifikasi email", "Reset password", "Cek ekstensi browser", "Hubungi support"] },
  { id: "3", judul: "Data Tidak Tersimpan", kategori: "data", tingkat: "Lanjutan", solusi: "Periksa koneksi, pastikan tidak ada error di console, dan cek apakah session masih aktif.", langkah: ["Cek koneksi", "Periksa console browser", "Cek session", "Backup data lokal"] },
  { id: "4", judul: "Performa Lambat", kategori: "kinerja", tingkat: "Pemula", solusi: "Kurangi jumlah tab terbuka, nonaktifkan ekstensi yang tidak perlu, dan periksa penggunaan CPU/RAM.", langkah: ["Tutup tab tidak perlu", "Nonaktifkan ekstensi", "Cek resource sistem", "Restart browser"] },
  { id: "5", judul: "Notifikasi Tidak Muncul", kategori: "notifikasi", tingkat: "Menengah", solusi: "Pastikan notifikasi diizinkan di browser, cek pengaturan sistem, dan verifikasi preferences di aplikasi.", langkah: ["Izinkan notifikasi", "Cek pengaturan sistem", "Verifikasi preferences"] },
  { id: "6", judul: "API Error 500", kategori: "teknis", tingkat: "Lanjutan", solusi: "Error ini biasanya sementara. Coba kembali dalam beberapa menit, cek status halaman, dan laporkan jika berlanjut.", langkah: ["Tunggu beberapa menit", "Cek status server", "Coba lagi", "Hubungi support jika berlanjut"] },
];

const CATS = [
  { id: "all", label: "Semua" },
  { id: "akses", label: "Akses" },
  { id: "akun", label: "Akun" },
  { id: "data", label: "Data" },
  { id: "kinerja", label: "Kinerja" },
  { id: "notifikasi", label: "Notifikasi" },
  { id: "teknis", label: "Teknis" },
];

const TINGKAT = ["Pemula", "Menengah", "Lanjutan"];

export default function TroubleshootingPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [tingkat, setTingkat] = useState("all");

  const filtered = useMemo(() => {
    return PROBLEM.filter((item) => {
      const matchCat = cat === "all" || item.kategori === cat;
      const matchTingkat = tingkat === "all" || item.tingkat === tingkat;
      const matchSearch = item.judul.toLowerCase().includes(q.toLowerCase()) || item.solusi.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchTingkat && matchSearch;
    });
  }, [q, cat, tingkat]);

  const stats = useMemo(() => ({
    total: PROBLEM.length,
    pemula: PROBLEM.filter((p) => p.tingkat === "Pemula").length,
    menengah: PROBLEM.filter((p) => p.tingkat === "Menengah").length,
    lanjutan: PROBLEM.filter((p) => p.tingkat === "Lanjutan").length,
  }), []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">FAQ</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Troubleshooting</h1>
          <p className="text-lg text-zinc-300">Solusi langkah demi langkah untuk masalah umum.</p>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <HelpCircle className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.total}</p>
              <p className="text-sm text-zinc-500">Masalah</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <Clock className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.pemula}</p>
              <p className="text-sm text-zinc-500">Pemula</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-100 dark:bg-slate-800 text-center">
              <AlertTriangle className="w-5 h-5 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.menengah + stats.lanjutan}</p>
              <p className="text-sm text-zinc-500">Lanjutan</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari masalah..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
              />
            </div>
            <select
              value={tingkat}
              onChange={(e) => setTingkat(e.target.value)}
              className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
            >
              <option value="all">Semua Tingkat</option>
              {TINGKAT.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === c.id
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-700 dark:bg-slate-800 dark:text-zinc-300"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-lg font-bold text-zinc-900 dark:text-white">{item.judul}</h2>
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 capitalize">
                        {item.tingkat}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{item.solusi}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-zinc-100 dark:bg-slate-800 text-zinc-600 dark:text-zinc-300 capitalize">
                        {item.kategori}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-slate-700">
                  <p className="text-sm font-medium text-zinc-900 dark:text-white mb-2">Langkah penyelesaian:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.langkah.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Tidak ada masalah yang cocok.</p>
          )}

          <div className="flex justify-center mt-12">
            <Link
              href="/faq/tips"
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors"
            >
              Tips Cepat <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
