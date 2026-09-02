import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SocialSharing from "@/components/SocialSharing";
import Testimonials from "@/components/Testimonials";

interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  client: string;
  date: string;
  duration: string;
  tags: string[];
  result: string;
  services: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: "Kami mengembangkan platform e-commerce lengkap yang mencakup sistem manajemen produk, keranjang belanja, integrasi pembayaran, dan dashboard admin yang intuitif. Platform ini dirancang untuk mendukung pertumbuhan bisnis client secara skalabel.",
    images: ["/placeholder.svg?text=Project+Image+1", "/placeholder.svg?text=Project+Image+2"],
    client: "PT. Retail Maju Bersama",
    date: "Januari 2025",
    duration: "3 bulan",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    result: "Penjualan online meningkat 250% dalam 6 bulan pertama peluncuran",
    services: ["Frontend Development", "Backend Development", "Payment Integration", "UI/UX Design"]
  },
  {
    id: "2",
    title: "Mobile Banking App",
    slug: "mobile-banking-app",
    category: "Mobile Development",
    description: "Secure mobile banking application for financial services",
    longDescription: "Aplikasi mobile banking yang aman dan user-friendly dengan fitur transfer dana, pembayaran tagihan, manajemen kartu, dan layanan cs. Aplikasi ini menggunakan biometric authentication dan enkripsi end-to-end untuk menjaga keamanan data pengguna.",
    images: ["/placeholder.svg?text=Project+Image+3", "/placeholder.svg?text=Project+Image+4"],
    client: "Bank Sejahtera Indonesia",
    date: "Maret 2025",
    duration: "4 bulan",
    tags: ["React Native", "Firebase", "Node.js", "Redis"],
    result: "Aktivitas pengguna meningkat 180% setelah migrasi dari app lama",
    services: ["Mobile App Development", "Security Implementation", "Payment Gateway", "DevOps"]
  },
  {
    id: "3",
    title: "Digital Marketing Dashboard",
    slug: "digital-marketing-dashboard",
    category: "Web Development",
    description: "Analytics dashboard for tracking marketing campaigns",
    longDescription: "Dashboard analitik komprehensif yang memungkinkan tim marketing untuk melacak performa kampanye secara real-time. Fitur utama mencakup multi-channel tracking, ROI analysis, dan laporan otomatis.",
    images: ["/placeholder.svg?text=Project+Image+5", "/placeholder.svg?text=Project+Image+6"],
    client: "Agensi Kreatif Indonesia",
    date: "Mei 2025",
    duration: "2 bulan",
    tags: ["Next.js", "Recharts", "PostgreSQL", "AWS"],
    result: "Time-to-insight berkurang dari 3 hari menjadi real-time",
    services: ["Dashboard Development", "Data Visualization", "API Integration", "Performance Optimization"]
  }
];

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = portfolioData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} - Portfolio | XNXNV`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website"
    }
  };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.find((p) => p.slug === params.slug);
  
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Beranda", href: "/", isActive: false },
              { label: "Portfolio", href: "/portfolio", isActive: false },
              { label: project.title, href: `/portfolio/${project.slug}`, isActive: true }
            ]}
            className="mb-6"
          />
          
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
                  {project.category}
                </span>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                  {project.title}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  <span>{project.duration}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <SectionTitle title="Tentang Proyek" subtitle="Detil lengkap mengenai solusi yang kami delivers" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Deskripsi Proyek
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.longDescription}
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mt-8">
              Layanan yang Diberikan
            </h3>
            <ul className="space-y-3">
              {project.services.map((service, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <div className="mt-1 flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                Hasil yang Dicapai
              </h3>
              <p className="text-indigo-700 dark:text-indigo-300 italic">
                "{project.result}"
              </p>
            </div>
            
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
                Bagikan Proyek Ini
              </h3>
              <SocialSharing />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-100 dark:bg-zinc-950 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Klien Kami" subtitle="Apa yang mereka katakan tentang pekerjaan kami" />
          
          <div className="mt-12">
            <Testimonials 
              testimonials={[
                {
                  id: "1",
                  name: "Budi Santoso",
                  role: "CEO",
                  company: "PT. Retail Maju Bersama",
                  content: "Kerja sama dengan tim XNXNV sangat luar biasa. Mereka memahami kebutuhan bisnis kami dengan baik dan menyelesaikan proyek tepat waktu.",
                  avatar: "/placeholder.svg?text=BS",
                  rating: 5
                },
                {
                  id: "2",
                  name: "Siti Rahayu",
                  role: "CIO",
                  company: "Bank Sejahtera Indonesia",
                  content: "Aplikasi mobile banking yang dikembangkan sangat aman dan user-friendly. Dukungan technical support juga responsif.",
                  avatar: "/placeholder.svg?text=SR",
                  rating: 5
                },
                {
                  id: "3",
                  name: "Agus Wijaya",
                  role: "Direktur",
                  company: "Agensi Kreatif Indonesia",
                  content: "Dashboard analytics yang dikembangkan memberikan insight yang sangat berharga untuk pengambilan keputusan bisnis.",
                  avatar: "/placeholder.svg?text=AW",
                  rating: 5
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
