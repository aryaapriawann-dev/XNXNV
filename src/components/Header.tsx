"use client";

import Link from "next/link";

/**
 * Header navigation component
 * Responsive header with logo, nav links, and CTA button
 */
export default function Header() {
  const navLinks = [
    { href: "/about", label: "Tentang" },
    { href: "/services", label: "Layanan" },
    { href: "/pricing", label: "Harga" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            XNXNV
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/pricing"
              className="inline-flex px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
