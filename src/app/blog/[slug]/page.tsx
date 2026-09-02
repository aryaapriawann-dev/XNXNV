import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import SocialSharing from "@/components/SocialSharing";

interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

const blogData: BlogItem[] = [
  {
    id: "1",
    title: "Mengapa Next.js Adalah Pilihan Terbaik untuk Development Modern",
    slug: "mengapa-next-js-adalah-pilihan-terbaik",
    excerpt: "Pelajari keunggulan Next.js dalam pengembangan web modern dan mengapa banyak developer memilih framework ini.",
    content: "Next.js telah menjadi salah satu framework paling populer untuk development web modern. Dengan fitur-fitur seperti Server-Side Rendering (SSR), Static Site Generation (SSG), dan API Routes dalam satu framework, Next.js menawarkan fleksibilitas yang luar biasa. Dalam artikel ini, kita akan mengeksplorasi mengapa Next.js menjadi pilihan utama developer.",
    author: "Arya Apriawann",
    date: "2 September 2026",
    readTime: "5 menit",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"],
    featured: true
  },
  {
    id: "2",
    title: "Best Practices untuk TypeScript di Project Besar",
    slug: "best-practices-typescript-project-besar",
    excerpt: "Tips dan trik menggunakan TypeScript secara efektif pada project skala besar dengan maintainability yang tinggi.",
    content: "TypeScript telah menjadi standar industri untuk pengembangan aplikasi JavaScript skala besar. Dengan type safety yang ketat, kode menjadi lebih mudah dipelihara dan bug dapat terdeteksi sejak dini. Artikel ini membahas best practices yang perlu diterapkan dalam project besar.",
    author: "Budi Santoso",
    date: "1 September 2026",
    readTime: "7 menit",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    featured: true
  },
  {
    id: "3",
    title: "Tips Memilih Technology Stack yang Tepat",
    slug: "tips-memilih-technology-stack",
    excerpt: "Panduan komprehensif dalam memilih teknologi yang sesuai dengan kebutuhan bisnis dan tim development Anda.",
    content: "Memilih technology stack yang tepat adalah keputusan kritis yang mempengaruhi kesuksesan project jangka panjang. Tidak hanya mempertimbangkan teknologi terkini, tetapi juga skill tim, skala project, dan maintenance jangka panjang. Artikel ini memberikan panduan komprehensif untuk pengambilan keputusan ini.",
    author: "Citra Dewi",
    date: "31 Agustus 2026",
    readTime: "6 menit",
    category: "Technology",
    tags: ["Technology Stack", "Planning", "Architecture"],
    featured: false
  }
];

export async function generateStaticParams() {
  return blogData.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} - Blog | XNXNV`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article"
    }
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);
  
  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Beranda", href: "/", isActive: false },
              { label: "Blog", href: "/blog", isActive: false },
              { label: post.title, href: `/blog/${post.slug}`, isActive: true }
            ]}
            className="mb-6"
          />
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span>{post.readTime} baca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="text-xl md:text-2xl font-medium text-zinc-900 dark:text-zinc-50 mb-8">
              {post.excerpt}
            </p>
            
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Bagian {i + 1}: Penjelasan Konsep
                </h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            ))}
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-8 mt-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                Kesimpulan
              </h3>
              <p className="text-indigo-700 dark:text-indigo-300">
                Dalam artikel ini, kita telah membahas berbagai aspek penting dari {post.category}. Dengan memahami konsep-konsep ini, Anda akan lebih siap untuk menghadapi tantangan development modern.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-2"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Bagikan artikel ini
                </h3>
              </div>
              <SocialSharing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
