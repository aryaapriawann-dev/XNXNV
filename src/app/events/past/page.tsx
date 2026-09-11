"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, MapPin, ChevronRight } from "lucide-react";

const DATA = [
  { id: "1", title: "Rapat Koordinasi Projekt X",
    date: "15 Maret 2025",
    desc: "Meeting rutin bulanan antar stakeholder untuk menyelesaikan kendala teknis dan menyelaraskan timeline.",
    category: "kalender", location: "Ruang Rapat A, Gedung XVPNX", attendees: 8 },
  { id: "2", title: "Penyerahan Dokumentasi Batch 7",
    date: "8 Maret 2025",
    desc: "Tim pengembangan menyerahkan dokumentasi lengkap modul keamanan dan arsitektur sistem ke bagian QA.",
    category: "pengiriman", location: "Lokasi daring (Zoom)", attendees: 4 },
  { id: "3", title: "Evaluasi Kinerja Q1 2025",
    date: "28 Februari 2025",
    desc: "Review performa tim dan evaluasi capaian KPI untuk menentukan target Q2 berikutnya.",
    category: "evaluasi", location: "Ruang Meeting B, Kantor Pusat", attendees: 12 },
  { id: "4", title: "Pelatihan Keamanan Siber Dasar",
    date: "19 Februari 2025",
    desc: "Workshop singkat untuk seluruh staf tentang praktik keamanan dasar seperti manajemen kata sandi dan phishing awareness.",
    category: "pelatihan", location: "Gedung XVPNX", attendees: 24 },
  { id: "5", title: "Riset Pasar untuk Fitur Baru",
    date: "10 Februari 2025",
    desc: "Diskusi awal terkait survei kebutuhan pengguna untuk menentukan fitur prioritas rilis berikutnya.",
    category: "riset", location: "Lokasi daring (Zoom)", attendees: 6 },
  { id: "6", title: "Penandatanganan MoU dengan Partner",
    date: "3 Februari 2025",
    desc: "Memperkuat hubungan strategis dengan partner industri melalui kesepakatan resmi yang ditandatangani.",
    category: "mitra", location: "Gedung XVPNX", attendees: 10 }
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-zinc-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Riwayat Acara</h1>
          <p className="text-zinc-300">Daftar lengkap acara yang telah berlangsung.</p>
        </div>
      </section>
      <section className="py-8 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {DATA.map((item) => (
              <div key={item.id} className="flex gap-4 items-start p-5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                <Calendar className="w-5 h-5 text-zinc-500 shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">{item.category}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.desc}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{item.date}</span>
                    {item.location && <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{item.location}</span>}
                    {item.attendees > 0 && <span>{item.attendees} peserta</span>}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-400 shrink-0 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
