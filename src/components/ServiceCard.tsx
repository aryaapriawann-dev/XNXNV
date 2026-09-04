"use client";

import { ChevronRight, Zap, Shield, TrendingUp, Users, Mail, Phone, Clock, Globe, Cpu, Layout } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative p-8 bg-white dark:bg-slate-800 rounded-2xl border border-zinc-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
          <span>Learn more</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
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

  return (
    <section id="services" className="py-20 bg-zinc-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCard;
