"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Check, ArrowLeft } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-zinc-400 mb-3">Newsletter</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Bergabunglah</h1>
          <p className="text-lg text-zinc-300">Dapatkan update terbaru langsung ke inbox Anda.</p>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="max-w-md mx-auto px-4">
          {done ? (
            <div className="p-8 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
              <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Terdaftar!</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">Konfirmasi ada di email Anda.</p>
            </div>
          ) : (
            <form onSubmit={handle} className="p-8 rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">Alamat Email</label>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="ari@contoh.com"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white mb-4"
              />
              <button type="submit" className="w-full py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" /> Langganan
              </button>
            </form>
          )}
          <div className="flex justify-center mt-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Kembali
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}