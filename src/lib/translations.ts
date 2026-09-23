/**
 * Translation dictionary for WEB PROFIL COMPENI.
 * Keyed by locale: "id" | "en".
 */
export const translations = {
  id: {
    nav: {
      about: "Tentang",
      services: "Layanan",
      pricing: "Harga",
      blog: "Blog",
      contact: "Kontak",
      faq: "FAQ",
    },
    cta: {
      hubungiKami: "Hubungi Kami",
      mulaiSekarang: "Mulai Sekarang",
    },
    hero: {
      badge: "Platform Generasi Berikutnya",
      tagline: "Bangun lebih cepat. ",
      taglineEmphasis: "Kirim lebih cerdas.",
      subtext: "Platform Next.js modern yang lengkap dengan semua komponen yang Anda butuhkan. Kode bersih, mode gelap, dan dibangun untuk skalabilitas.",
      btnGetStarted: "Mulai Sekarang",
      btnViewFeatures: "Lihat Fitur",
      features: {
        developer: { title: "Developer", desc: "Kode bersih, skalabel" },
        designer: { title: "Designer", desc: "UI modern, intuitif" },
        fast: { title: "Cepat", desc: "Performa optimal" },
      },
    },
    about: {
      title: "tentang WEB PROFIL COMPENI",
      intro: "Kami membantu bisnis Anda tumbuh dengan solusi teknologi terbaik.",
      stats: {
        quality: { label: "Kualitas Terbaik" },
        clients: { label: "Klien Puas" },
        growth: { label: "Pertumbuhan" },
        projects: { label: "Proyek Selesai" },
      },
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Solusi lengkap untuk kebutuhan digital bisnis Anda.",
      items: [
        {
          id: 1,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          title: "Pengembangan Web",
          description: "Website modern, responsif, dan SEO-friendly.",
          features: ["Website Profil Perusahaan", "E-commerce", "Aplikasi Web Kustom", "CMS"],
          price: "Mulai 2jt",
        },
        {
          id: 2,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          title: "Aplikasi Mobile",
          description: "Aplikasi mobile native dan cross-platform.",
          features: ["Android (Kotlin)", "iOS (Swift)", "React Native", "Flutter"],
          price: "Mulai 5jt",
        },
        {
          id: 3,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ),
          title: "Desain UI/UX",
          description: "Desain antarmuka modern dan berpusat pada pengguna.",
          features: ["Wireframing", "Prototyping", "Riset Pengguna", "Design System"],
          price: "Mulai 3jt",
        },
        {
          id: 4,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          title: "Pemasaran Digital",
          description: "Strategi pemasaran digital untuk bisnis Anda.",
          features: ["SEO", "Google Ads", "Media Sosial", "Pemasaran Konten"],
          price: "Mulai 2jt",
        },
        {
          id: 5,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "Keamanan Siber",
          description: "Proteksi keamanan siber untuk data Anda.",
          features: ["Audit Keamanan", "Pengujian Peretasan", "Penyiapan Firewall", "Pemantauan"],
          price: "Mulai 4jt",
        },
        {
          id: 6,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          ),
          title: "Solusi Cloud",
          description: "Infrastruktur cloud yang skalabel dan andal.",
          features: ["AWS", "Azure", "Google Cloud", "Deployment CI/CD"],
          price: "Mulai 3jt",
        },
      ],
    },
    counter: {
      title: "Meta & Statistik",
      subtitle: "Visibilitas digital kami.",
    },
    testimonials: {
      title: "Testimoni Klien",
      subtitle: "Apa kata mereka yang telah mempercayai kami.",
    },
    faq: {
      title: "Pertanyaan Umum",
      subtitle: "Jawaban cepat sebelum Anda menghubungi kami.",
      items: [
        { question: "Apa yang Anda tawarkan?", answer: "Kami menawarkan layanan pengembangan website, aplikasi mobile, desain UI/UX, pemasaran digital, keamanan siber, dan solusi cloud." },
        { question: "Berapa biaya layanan Anda?", answer: "Biaya kami bervariasi tergantung kebutuhan proyek Anda. Hubungi kami untuk mendapatkan penawaran yang lebih detail." },
        { question: "Berapa lama waktu pengerjaan?", answer: "Waktu pengerjaan tergantung kompleksitas proyek. Rata-rata 2-8 minggu untuk proyek kecil hingga menengah." },
        { question: "Apakah Anda menyediakan pemeliharaan?", answer: "Ya, kami menyediakan layanan pemeliharaan dan dukungan pasca-pengiriman untuk semua proyek." },
      ],
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Siap membantu mewujudkan visi digital Anda.",
      labels: {
        email: "Email",
        phone: "Telepon",
        location: "Lokasi",
      },
      info: {
        email: "hello@webprofilcompeni.id",
        phone: "+62 812 3456 7890",
        location: "Kendari, Sulawesi Tenggara",
      },
    },
    footer: {
      brandDesc: "Solusi digital untuk bisnis Anda. Kami membantu mewujudkan visi digital Anda.",
      navigation: "Navigasi",
      services: "Layanan",
      contact: "Kontak",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan Layanan",
      servicesList: {
        webDev: "Pengembangan Web",
        mobileApp: "Aplikasi Mobile",
        uiUx: "Desain UI/UX",
        digitalMarketing: "Pemasaran Digital",
        cloud: "Solusi Cloud",
      },
    },
    localeLabel: {
      id: "Bahasa Indonesia",
      en: "English",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      pricing: "Pricing",
      blog: "Blog",
      contact: "Contact",
      faq: "FAQ",
    },
    cta: {
      hubungiKami: "Contact Us",
      mulaiSekarang: "Get Started",
    },
    hero: {
      badge: "Next Generation Platform",
      tagline: "Build faster. ",
      taglineEmphasis: "Ship smarter.",
      subtext: "A modern, full-featured Next.js starter with every component you need. Clean code, dark mode, and built for scale.",
      btnGetStarted: "Get Started",
      btnViewFeatures: "View Features",
      features: {
        developer: { title: "Developer", desc: "Clean, scalable code" },
        designer: { title: "Designer", desc: "Modern, intuitive UI" },
        fast: { title: "Fast", desc: "Optimized performance" },
      },
    },
    about: {
      title: "about WEB PROFIL COMPENI",
      intro: "We help your business grow with the best technology solutions.",
      stats: {
        quality: { label: "Best Quality" },
        clients: { label: "Satisfied Clients" },
        growth: { label: "Growth" },
        projects: { label: "Projects Completed" },
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Complete solutions for your digital business needs.",
      items: [
        {
          id: 1,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          ),
          title: "Web Development",
          description: "Modern, responsive, and SEO-friendly websites.",
          features: ["Company Profile Website", "E-commerce", "Custom Web App", "CMS"],
          price: "From 2M IDR",
        },
        {
          id: 2,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          ),
          title: "Mobile App",
          description: "Native and cross-platform mobile applications.",
          features: ["Android (Kotlin)", "iOS (Swift)", "React Native", "Flutter"],
          price: "From 5M IDR",
        },
        {
          id: 3,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          ),
          title: "UI/UX Design",
          description: "Modern, user-centered interface design.",
          features: ["Wireframing", "Prototyping", "User Research", "Design System"],
          price: "From 3M IDR",
        },
        {
          id: 4,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
          title: "Digital Marketing",
          description: "Digital marketing strategies for your business.",
          features: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
          price: "From 2M IDR",
        },
        {
          id: 5,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          ),
          title: "Cybersecurity",
          description: "Cybersecurity protection for your data.",
          features: ["Security Audit", "Penetration Testing", "Firewall Setup", "Monitoring"],
          price: "From 4M IDR",
        },
        {
          id: 6,
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          ),
          title: "Cloud Solutions",
          description: "Scalable and reliable cloud infrastructure.",
          features: ["AWS", "Azure", "Google Cloud", "Deployment CI/CD"],
          price: "From 3M IDR",
        },
      ],
    },
    counter: {
      title: "Reach & Statistics",
      subtitle: "Our digital footprint.",
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What those who trusted us have to say.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Quick answers before you reach out.",
      items: [
        { question: "What services do you offer?", answer: "We offer website development, mobile apps, UI/UX design, digital marketing, cybersecurity, and cloud solutions." },
        { question: "How much do your services cost?", answer: "Our pricing varies based on your project needs. Contact us for a detailed quote." },
        { question: "How long does a project take?", answer: "Project duration depends on complexity. On average 2-8 weeks for small to medium projects." },
        { question: "Do you offer maintenance?", answer: "Yes, we provide post-delivery maintenance and support services." },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to bring your digital vision to life.",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      info: {
        email: "hello@webprofilcompeni.id",
        phone: "+62 812 3456 7890",
        location: "Kendari, Sulawesi Tenggara",
      },
    },
    footer: {
      brandDesc: "Digital solutions for your business. We help bring your digital vision to life.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      servicesList: {
        webDev: "Web Development",
        mobileApp: "Mobile App",
        uiUx: "UI/UX Design",
        digitalMarketing: "Digital Marketing",
        cloud: "Cloud Solutions",
      },
    },
    localeLabel: {
      id: "Indonesian",
      en: "English",
    },
  },
} as const;

export type Locale = keyof typeof translations;
