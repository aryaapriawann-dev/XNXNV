"use client";

import { useState } from "react";
import { Mail, CheckCircle2, X } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Format email tidak valid. Contoh: nama@example.com");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Berhasil berlangganan! Subscribe kita sudah diaktifkan.");
      setEmail("");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 lg:py-24 bg-zinc-900 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-10 -translate-y-10 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-12 translate-y-12 blur-2xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Subscribe ke Newsletter Kami
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Dapatkan update terbaru tentang teknologi, development, dan tren terkini langsung di inbox Anda. Gratis tanpa spam!
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Email Anda"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:bg-white/20 focus:border-white transition-colors"
                  disabled={status === "loading" || status === "success"}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-8 py-3 rounded-lg bg-white text-zinc-900 font-bold hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                ) : status === "success" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            
            {message && (
              <div className={`mt-4 flex items-center justify-center gap-2 ${status === "error" ? "text-red-200" : "text-green-200"}`}>
                {status === "error" ? <X className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
                {message}
              </div>
            )}
            
            <p className="mt-6 text-sm text-indigo-200">
              Kami hargai privasi Anda. Bisa unsubsub anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
