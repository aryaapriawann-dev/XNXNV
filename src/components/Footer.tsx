"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Footer component
 * Displays navigation links, contact info, social links, and copyright
 */
export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App", href: "/services#mobile" },
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Cloud Solutions", href: "/services#cloud" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold text-white">
              XVPXN
            </Link>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              A modern Next.js starter built for production.
              Clean code, dark mode support, and optimized for performance.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Main St, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            {currentYear} XVPXN. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              Privacy
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
