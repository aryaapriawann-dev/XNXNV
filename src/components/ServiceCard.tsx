"use client";

import { ChevronRight, Zap, Shield, TrendingUp, Users, Mail, Phone, Clock, Globe, Cpu, Layout, Service } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  href 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  href: string; 
}) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 h-full">
        <div className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
          Learn More
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business thrive in the modern world
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

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            We offer tailored solutions to meet your specific business needs. Let's discuss your project today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
