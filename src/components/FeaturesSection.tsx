"use client";

import { Zap, Shield, TrendingUp, Users, Mail, Phone, Clock, Globe, Cpu, Layout } from "lucide-react";

/**
 * Features section component
 * Displays a grid of feature cards with icons, titles, and descriptions
 */
export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with zero latency for seamless user experience",
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure by Default",
      description: "Enterprise-grade security built in from the ground up",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Scalable Growth",
      description: "Built to scale from startup to enterprise without rewrites",
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for distributed teams",
    },
    {
      id: 5,
      icon: <Mail className="w-8 h-8 text-red-500" />,
      title: "Email Integration",
      description: "Seamless email workflows with templates and automation",
    },
    {
      id: 6,
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling to optimize your time",
    },
    {
      id: 7,
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: "Global Reach",
      description: "Deploy worldwide with edge caching and CDN",
    },
    {
      id: 8,
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: "AI Powered",
      description: "Machine learning models integrated into your workflow",
    },
    {
      id: 9,
      icon: <Layout className="w-8 h-8 text-teal-500" />,
      title: "Customizable UI",
      description: "Flexible design system that adapts to your brand",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
            Everything you need
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive set of features to help you build, deploy, and grow your application faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
            >
              <div className="mb-4 text-indigo-600 dark:text-indigo-400">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
