import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <div className="text-center max-w-md">
        <div className="text-9xl font-bold text-zinc-200 dark:text-zinc-800 mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Search className="h-5 w-5" />
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
