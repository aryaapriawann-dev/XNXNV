"use client";

/**
 * Newsletter subscription component.
 * Allows users to subscribe to a newsletter with email input.
 */
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Email wajib diisi");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Format email tidak valid");
      return;
    }
    setStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setMessage("Terima kasih telah berlangganan!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-100 dark:border-indigo-800/50">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
        Berlangganan Newsletter
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
        Dapatkan update terbaru langsung di inbox Anda.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@contoh.com"
          className="flex-1 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-600 text-sm"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium disabled:opacity-50"
          disabled={status === "loading"}
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-green-600 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {message}
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {message}
        </p>
      )}
    </div>
  );
}
