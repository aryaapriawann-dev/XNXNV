"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, ExternalLink } from "lucide-react";
import Link from "next/link";

const FAQS = [
  { q: "Apakah XNXNV gratis?", a: "Ada paket gratis dengan fitur terbatas. Paket premium mulai Rp49rb/bulan." },
  { q: "Server di mana saja?", a: "Tokyo, Singapura, London, Sydney, Jakarta — lebih dari 20 negara." },
  { q: "Bisa untuk bisnis?", a: "Ya. Paket Enterprise untuk tim dan organisasi dengan SLA 99,9%." },
  { q: "Data saya aman?", a: "Enkripsi AES-256, kebijakan no-logs, dan audit independen tahunan." },
  { q: "Support apa saja?", a: "Live chat 24/7 untuk semua pengguna dan dedicated manager untuk Enterprise." },
  { q: "Bisakah pakai di semua device?", a: "Windows, macOS, Linux, Android, iOS, dan router." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
        <input
          placeholder="Cari pertanyaan..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-900 dark:text-white"
          onChange={(e) => setOpen(e.target.value.toLowerCase().includes("aman") ? "3" : null)}
        />
      </div>
      <ul className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === String(i);
          return (
            <li key={i} className="rounded-2xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : String(i))}
                className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium text-zinc-900 dark:text-white pr-4">{f.q}</span>
                {isOpen ? <ChevronUp className="h-5 w-5 shrink-0 text-zinc-400" /> : <ChevronDown className="h-5 w-5 shrink-0 text-zinc-400" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {f.a}
                  <Link href="/contact" className="inline-flex items-center gap-1 ml-2 text-indigo-600 hover:underline text-xs font-medium">
                    Butuh bantuan lebih? <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}