"use client";

import { useEffect } from "react";

/**
 * Back to top button that appears on scroll
 * Click to smoothly scroll to top
 */
export default function BackToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("back-to-top");
      if (btn) {
        btn.classList.toggle("opacity-0", window.scrollY < 300);
        btn.classList.toggle("pointer-events-none", window.scrollY < 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:bg-indigo-700 hover:scale-110"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
