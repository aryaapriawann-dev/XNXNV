"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

/**
 * Cookie consent banner component
 * Shows on first visit, stores consent in localStorage
 */
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
    setConsent(true);
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const rejectAll = () => {
    setConsent(false);
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-900 text-zinc-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Cookie className="w-5 h-5 text-indigo-400" />
          <p className="text-sm">
            Kami menggunakan cookie untuk meningkatkan pengalaman Anda.
            Dengan menggunakan situs ini, Anda menyetujui penggunaan cookie.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm text-zinc-300 hover:text-white border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            Tolak
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Terima Semua
          </button>
        </div>
      </div>
    </div>
  );
}
