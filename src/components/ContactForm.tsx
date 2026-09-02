"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
        Kirim Lamaran
      </h3>
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300">
            Terima kasih! Lamaran Anda telah dikirim.
          </p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Masukkan nama lengkap"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="email@contoh.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Posisi yang Dicari
            </label>
            <select
              id="position"
              required
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="">Pilih posisi</option>
              <option value="developer">Software Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="pm">Project Manager</option>
              <option value="devops">DevOps Engineer</option>
              <option value="qa">Quality Assurance</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Pesan
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              placeholder="Tulis pesan singkat..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg transform hover:-translate-y-1"
          >
            Kirim Lamaran
          </button>
        </form>
      )}
    </div>
  );
}
