"use client";

import ServiceCard, { ServicesSection } from "@/components/ServiceCard";
import Link from "next/link";
import { ChevronRight, Zap, Shield, TrendingUp, Users, Mail, Phone, Clock, Globe, Cpu, Layout } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Web Development",
    description: "Build fast, scalable, and responsive websites with modern technologies including Next.js, React, and TypeScript.",
    href: "/services/web-development"
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "Cyber Security",
    description: "Protect your digital assets with our comprehensive security solutions including penetration testing and encryption.",
    href: "/services/cyber-security"
  },
  {
    id: 3,
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    title: "Digital Marketing",
    description: "Grow your online presence with SEO, content marketing, and social media strategies that drive real results.",
    href: "/services/digital-marketing"
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Mobile Apps",
    description: "Create engaging mobile applications for iOS and Android platforms with native performance and beautiful UI.",
    href: "/services/mobile-apps"
  },
  {
    id: 5,
    icon: <Mail className="w-8 h-8 text-orange-500" />,
    title: "Email Solutions",
    description: "Professional email marketing and automation services to help you connect with your audience effectively.",
    href: "/services/email-solutions"
  },
  {
    id: 6,
    icon: <Clock className="w-8 h-8 text-indigo-500" />,
    title: "IT Consulting",
    description: "Expert IT advice and strategic planning to help your business leverage technology for growth.",
    href: "/services/it-consulting"
  },
  {
    id: 7,
    icon: <Globe className="w-8 h-8 text-teal-500" />,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and migration services to power your business in the cloud.",
    href: "/services/cloud-services"
  },
  {
    id: 8,
    icon: <Cpu className="w-8 h-8 text-pink-500" />,
    title: "AI & Machine Learning",
    description: "Implement AI-powered solutions to automate processes and gain actionable insights from your data.",
    href: "/services/ai-ml"
  },
  {
    id: 9,
    icon: <Layout className="w-8 h-8 text-cyan-500" />,
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user experiences that delight your users and drive engagement.",
    href: "/services/ui-ux-design"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            We provide end-to-end digital services to help your business thrive in the modern world. From web development to AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white rounded-full font-semibold text-lg hover:bg-zinc-700 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-zinc-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">9+</div>
              <div className="text-zinc-600 dark:text-zinc-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">500+</div>
              <div className="text-zinc-600 dark:text-zinc-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">98%</div>
              <div className="text-zinc-600 dark:text-zinc-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-2">24/7</div>
              <div className="text-zinc-600 dark:text-zinc-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Let's discuss your project and how we can help you achieve your goals. Our team of experts is ready to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
