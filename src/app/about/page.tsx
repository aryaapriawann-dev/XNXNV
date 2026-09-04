"use client";

import Link from "next/link";
import { TeamSection, ValuesSection, StatsSection } from "@/components/AboutSections";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About XNXNV
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            We are a premier company dedicated to delivering excellence in every aspect of our work. Our journey began with a vision and has grown into a trusted name in our industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-800 text-white rounded-full font-semibold text-lg hover:bg-zinc-700 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                To empower businesses through innovative digital solutions that drive growth, efficiency, and long-term success. We believe in the transformative power of technology to level the playing field for businesses of all sizes.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Every project we undertake is an opportunity to make a meaningful impact. We approach each challenge with creativity, integrity, and an unwavering commitment to excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What Sets Us Apart</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span>Industry-leading expertise</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span>Client-first approach</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span>Innovation at our core</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                  <span>Results-driven mindset</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                To be the most trusted partner for digital transformation, helping businesses thrive in an increasingly digital world. We envision a future where technology serves as a catalyst for positive change.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Through continuous innovation, deep industry knowledge, and an obsessive focus on customer success, we aim to set new benchmarks for excellence in everything we do.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-zinc-100 dark:bg-slate-800 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-sm">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-zinc-600 dark:text-zinc-400 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Team */}
      <TeamSection />

      {/* Stats */}
      <StatsSection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Let's discuss how we can help you achieve your goals. Our team of experts is ready to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
