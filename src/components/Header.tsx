"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

/**
 * Header component
 * Responsive navigation with mobile menu, theme toggle, and scroll-aware styling
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            XVPXN
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              About
            </a>
            <a href="#blog" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              Blog
            </a>
            <a
              href="#get-started"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#get-started"
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
