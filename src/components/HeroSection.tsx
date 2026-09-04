"use client";

import { ChevronRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-blue-300">Premium Digital Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Digital Future</span> Today
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We create innovative web solutions that help businesses grow, scale, and succeed in the digital age. From startups to enterprises, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
              >
                Get Started Now
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                View Our Work
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-slate-400">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Floating Cards */}
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-500/20 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Growth Strategy</h3>
                    <p className="text-sm text-slate-300">Maximize your potential</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Our data-driven approach ensures sustainable growth for your business with proven strategies and measurable results.
                </p>
              </div>

              <div className="absolute top-1/2 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl transform -translate-y-1/2 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Secure Solutions</h3>
                    <p className="text-sm text-slate-300">Enterprise-grade security</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Your data is protected with industry-leading security measures and compliance standards.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Team Support</h3>
                    <p className="text-sm text-slate-300">24/7 Dedicated support</p>
                  </div>
                </div>
                <p className="text-slate-300">
                  Our team is always here to support you with quick responses and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
