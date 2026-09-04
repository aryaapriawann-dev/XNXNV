import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Kontak", href: "/contact" },
  ];

  const services = [
    { name: "Pengembangan Web", href: "/services#web" },
    { name: "Mobile App", href: "/services#mobile" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Cloud Solutions", href: "/services#cloud" },
    { name: "UI/UX Design", href: "/services#design" },
  ];

  const company = [
    { name: "Karir", href: "/careers" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Berita", href: "/blog" },
    { name: "Partner", href: "/partners" },
    { name: "Privasi", href: "/privacy" },
  ];

  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              XNXNV
            </Link>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              Menyediakan solusi digital berkualitas tinggi untuk bisnis Anda. Kami membantu transformasi digital dari startup hingga enterprise.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/aryaapriawann-dev"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Layanan
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:bg-white transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Perusahaan
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 group-hover:bg-white transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-500 mt-0.5" />
                <div>
                  <span className="block text-sm text-zinc-400">Email</span>
                  <a
                    href="mailto:info@xvnpnx.id"
                    className="text-sm text-white hover:text-indigo-400 transition-colors"
                  >
                    info@xvnpnx.id
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <span className="block text-sm text-zinc-400">Telepon</span>
                  <a
                    href="tel:+6281234567890"
                    className="text-sm text-white hover:text-green-400 transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <span className="block text-sm text-zinc-400">Alamat</span>
                  <p className="text-sm text-white">
                    Jl. Tech Park No. 123<br />
                    Jakarta Selatan<br />
                    Jakarta 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-400">
              &copy; {currentYear} XNXNV. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/sitemap"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
