"use client";

import { useState } from "react";
import { ArrowLeft, Calendar, User, Clock, Share2, MessageCircle, ThumbsUp } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  client: string;
  date: string;
  duration: string;
  tags: string[];
  images: string[];
  features: string[];
  result: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform XNXV",
    description: "Full-stack e-commerce solution with marketplace features",
    fullDescription: "A comprehensive e-commerce platform designed for medium to large businesses. The system includes product management, order processing, inventory tracking, and analytics dashboard. Built with Next.js and Supabase for backend services.",
    category: "E-Commerce",
    client: "Retail First Indonesia",
    date: "2024-08-15",
    duration: "12 weeks",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Product catalog with category filtering",
      "Shopping cart and checkout flow",
      "Payment integration with Stripe",
      "Inventory management system",
      "Order tracking and history",
      "Customer reviews and ratings",
      "Admin dashboard with analytics"
    ],
    result: "Increased online sales by 150% in the first quarter after launch"
  }
];

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const [project] = useState<Project | undefined>(projects.find(p => p.id === params.slug));

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center p-8">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link href="/portfolio" className="text-indigo-600 hover:text-indigo-700">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb & Back */}
      <section className="py-8 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            <Link href="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-white">{project.title}</span>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-zinc-900 dark:text-white hover:text-indigo-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-indigo-600 rounded-full text-sm font-medium mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-zinc-300 mb-8">{project.description}</p>
            <div className="flex flex-wrap gap-6 text-zinc-400">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {project.client}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {new Date(project.date).toLocaleDateString("id-ID", { year: "numeric", month: "long" })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {project.duration}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Project Overview</h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-8">{project.fullDescription}</p>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-6 w-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">Results</h4>
                <p className="text-zinc-600 dark:text-zinc-400 italic">"{project.result}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Like What You See?</h2>
          <p className="text-indigo-100 mb-10 text-lg">
            Let's discuss your next project. We're ready to help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
