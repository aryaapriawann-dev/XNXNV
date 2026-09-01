import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-zinc-50 px-4 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-md flex-col items-center justify-center text-center">
        <div className="mb-8 rounded-full bg-zinc-100 p-6 dark:bg-zinc-900">
          <span className="text-8xl font-bold text-zinc-300 dark:text-zinc-700">404</span>
        </div>
        
        <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
        </p>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Link>
      </main>
    </div>
  );
}
