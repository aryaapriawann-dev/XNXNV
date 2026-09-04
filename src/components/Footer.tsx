import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Menu, X, Share2 } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", href: "/services#web" },
    { name: "Mobile App", href: "/services#mobile" },
    { name: "SEO Optimization", href: "/services#seo" },
    { name: "Cloud Solutions", href: "/services#cloud" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Digital Marketing", href: "/services#marketing" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const resources = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Resources", href: "/resources" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">X</span>
              </div>
              <span className="text-2xl font-bold">XNXV</span>
            </div>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Solusi digital terpercaya untuk bisnis modern. Kami membantu transformasi digital Anda dengan teknologi terkini.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Menu className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-zinc-200">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-zinc-200">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-zinc-200">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-zinc-200">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                <span className="text-zinc-400 text-sm">
                  Jl. Technology Park No. 123<br />
                  Jakarta Selatan, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-500 shrink-0" />
                <span className="text-zinc-400 text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-500 shrink-0" />
                <span className="text-zinc-400 text-sm">info@xnxv.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-indigo-500 shrink-0" />
                <span className="text-zinc-400 text-sm">Mon-Fri: 09:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-900 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © {currentYear} XNXV. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-zinc-500 hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
