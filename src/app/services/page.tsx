"use client";

import { Service, Shield, Clock, Zap, Globe, Cpu, TrendingUp, UserCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Pengembangan Web",
      description: "Website modern, responsif, dan performa tinggi untuk bisnis Anda. Menggunakan teknologi terkini seperti Next.js dan React.",
      icon: Globe,
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "CMS Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "mobile",
      title: "Mobile Application",
      description: "Aplikasi mobile native dan cross-platform yang user-friendly. iOS, Android, dan Flutter development.",
      icon: Cpu,
      features: ["Native Development", "Cross-platform", "Offline Support", "Push Notifications"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital terintegrasi untuk meningkatkan visibilitas dan konversi bisnis Anda.",
      icon: TrendingUp,
      features: ["SEO & Content", "Social Media", "PPC Campaign", "Analytics"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Infrastruktur cloud yang scalable dan aman untuk kebutuhan bisnis Anda. AWS, Azure, dan GCP.",
      icon: Zap,
      features: ["Cloud Architecture", "DevOps", "CI/CD Pipeline", "Monitoring"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "design",
      title: "UI/UX Design",
      description: "Desain antarmuka yang intuitif dan menarik untuk pengalaman pengguna yang luar biasa.",
      icon: Service,
      features: ["User Research", "Wireframing", "Prototyping", "Design System"],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "security",
      title: "Cyber Security",
      description: "Perlindungan komprehensif untuk sistem IT dan data bisnis Anda dari ancaman digital.",
      icon: Shield,
      features: ["Security Audit", "Penetration Testing", "Incident Response", "Security Training"],
      color: "from-red-600 to-orange-600",
    },
    {
      id: "support",
      title: "Technical Support",
      description: "Dukungan teknis 24/7 untuk memastikan sistem Anda selalu berjalan dengan optimal.",
      icon: Clock,
      features: ["24/7 Support", "SLA Guarantee", "Remote Support", "On-site Service"],
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "training",
      title: "Training & Consultancy",
      description: "Pelatihan dan konsultasi teknologi untuk meningkatkan kapabilitas tim Anda.",
      icon: UserCheck,
      features: ["Technical Training", "Workshops", "Consultancy", "Mentoring"],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const benefits = [
    {
      title: "Tim Ahli",
      description: "Tim developer dan engineer bersertifikat dengan pengalaman bertahun-tahun di bidangnya.",
      icon: UserCheck,
    },
    {
      title: "Tech Support 24/7",
      description: "Dukungan teknis tersedia kapan saja untuk memastikan sistem Anda selalu berjalan.",
      icon: Clock,
    },
    {
      title: "Garansi Kualitas",
      description: "Garansi 12 bulan untuk semua proyek pengembangan dengan support penuh.",
      icon: Shield,
    },
    {
      title: "On Time Delivery",
      description: "Komitmen untuk menyelesaikan proyek sesuai timeline yang disepakati.",
      icon: Zap,
    },
  ];

  const industries = ["FinTech", "E-Commerce", "Healthcare", "Education", "Manufacturing", "Logistics"];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-492607396535?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Solusi digital lengkap untuk transformasi bisnis Anda. Dari pengembangan web hingga cloud infrastructure.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-zinc-100 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Proyek Selesai", value: "500+" },
              { label: "Klien Puas", value: "200+" },
              { label: "Team Ahli", value: "50+" },
              { label: "Tahun Pengalaman", value: "10+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Solusi Digital Lengkap
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan digital untuk kebutuhan bisnis Anda, dari pengembangan web hingga cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Pelajari lebih lanjut
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg">
                Kami berkomitmen untuk memberikan kualitas terbaik dan layanan yang memuaskan bagi setiap klien.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{benefit.title}</h4>
                      <p className="text-zinc-600 dark:text-zinc-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white dark:bg-zinc-800 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Testimoni Klien</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Budi Santoso",
                      role: "CEO, TechStart",
                      content: "Pelayanan yang luar biasa! Tim XNXNV sangat profesional dan hasil kerjanya melebihi ekspektasi.",
                    },
                    {
                      name: "Siti Rahayu",
                      role: "CTO, E-Commerce Pro",
                      content: "Kerja sama yang baik dan komunikasi yang terbuka. Proyek selesai tepat waktu.",
                    },
                    {
                      name: "Andi Wijaya",
                      role: "Director, Digital Media",
                      content: "Layanan yang sangat memuaskan. Saya sangat merekomendasikan XNXNV untuk kebutuhan digital Anda.",
                    },
                  ].map((testimonial, idx) => (
                    <div key={idx} className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl">
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-zinc-500">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industri yang Kami Layani</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Kami memiliki pengalaman luas dalam berbagai sektor industri dan memahami tantangan unik setiap industri.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Mentransformasi Bisnis Anda?
          </h2>
          <p className="text-indigo-100 text-xl mb-10">
            Hubungi kami hari ini untuk konsultasi gratis dan diskusikan kebutuhan proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
            >
              Hubungi Kami Sekarang
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Pelajari Layanan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
