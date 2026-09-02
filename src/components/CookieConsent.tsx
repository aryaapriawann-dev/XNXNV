"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (hasConsent === null) {
      setIsVisible(true);
      setConsent(null);
    } else {
      setConsent(hasConsent === "true");
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "false");
    setConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-2xl animate-in slide-in-from-bottom-10 duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400 mt-1">
              <Cookie className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Kami menggunakan cookie
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Cookie membantu kami meningkatkan pengalaman browsing Anda. Dengan menggunakan situs ini, Anda menyetujui penggunaan cookie sesuai kebijakan kami.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Hanya yang penting
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors"
            >
              Terima semua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
