"use client";

/**
 * Theme toggle component for switching between light and dark mode.
 * Uses localStorage to persist theme preference.
 */
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.752 16.573a.997.997 0 01-.294-.97 12.923 12.923 0 00-3.763-3.763c-.402-.084-.818.145-.97.294l-.127.127c-.592.592-1.54.592-2.132 0l-.127-.127a.997.997 0 01.294-.97 12.923 12.923 0 003.763-3.763c.084-.402-.145-.818-.294-.97l.127-.127c.592-.592 1.54-.592 2.132 0l.127.127a.997.997 0 01.97.294 12.923 12.923 0 003.763-3.763.997.997 0 01.97-.294l.127.127c.592.592.592 1.54 0 2.132l-.127.127a.997.997 0 01-.97.294 12.923 12.923 0 00-3.763 3.763.997.997 0 00.294.97l.127.127c.592.592.592 1.54 0 2.132l-.127.127a.997.997 0 00-.294.97 12.923 12.923 0 003.763 3.763.997.997 0 00.97.294l.127-.127c.592-.592 1.54-.592 2.132 0l.127.127a.997.997 0 00.97.294z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.94 5.46a.7.7 0 011.04 1.04 3.5 3.5 0 01-4.95 4.95c-.263 0-.526-.01-.787-.029A1 1 0 0112 1.03v.001c-.38.01-.76.028-1.134.046a.7.7 0 00-.083.25.5.5 0 00.136.326 8.48 8.48 0 005.255 5.255.5.5 0 00.326.136 1 1 0 00.25-.083c.018.374.037.755.046 1.134 0 .263-.01.526-.03.788a.7.7 0 01-1.04 1.04 5.485 5.485 0 01-7.072-7.072.7.7 0 011.04-1.04zM12 4.03a9.98 9.98 0 00-6.28 3.28 6.911 6.911 0 019.4-9.4 9.98 9.98 0 013.28 6.28 3.488 3.488 0 014.28-4.28A9 9 0 0012 4.03z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
}
