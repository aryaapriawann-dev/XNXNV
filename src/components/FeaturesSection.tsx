"use client";

import { Zap, Shield, TrendingUp, Users, Mail, Phone, Clock, Globe, Cpu, Layout } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with zero latency for seamless user experience"
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Scalable Solutions",
      description: "Grow your business with our flexible and scalable architecture"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Team Support",
      description: "24/7 dedicated support from our expert team of professionals"
    },
    {
      id: 5,
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: "Email Integration",
      description: "Seamless email integration for all your communication needs"
    },
    {
      id: 6,
      icon: <Phone className="w-8 h-8 text-red-500" />,
      title: "Voice Solutions",
      description: "Advanced voice recognition and telephony integration"
    },
    {
      id: 7,
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: "Real-time Analytics",
      description: "Live tracking and analytics for instant insights and decisions"
    },
    {
      id: 8,
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      title: "Global Reach",
      description: "Multi-language support and international deployment options"
    },
    {
      id: 9,
      icon: <Cpu className="w-8 h-8 text-pink-500" />,
      title: "AI Powered",
      description: "Advanced AI and machine learning capabilities built-in"
    },
    {
      id: 10,
      icon: <Layout className="w-8 h-8 text-cyan-500" />,
      title: "Modern UI/UX",
      description: "Intuitive and beautiful interfaces designed for engagement"
    },
    {
      id: 11,
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast Integration",
      description: "Quick and easy integration with your existing systems"
    },
    {
      id: 12,
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Compliance Ready",
      description: "Full compliance with industry standards and regulations"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Our Features
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to build and scale your digital presence with ease
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-white dark:bg-slate-700 p-4 rounded-xl inline-block shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their digital transformation
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
