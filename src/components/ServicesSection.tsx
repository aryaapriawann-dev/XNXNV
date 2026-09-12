import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      icon: "🖥️",
      title: "Web Development",
      description: "Website modern, responsif, dan SEO-friendly.",
      features: ["Website Company Profile", "E-commerce", "Custom Web App", "CMS"],
      price: "Mulai 2jt",
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Aplikasi mobile native dan cross-platform.",
      features: ["Android (Kotlin/Java)", "iOS (Swift)", "React Native", "Flutter"],
      price: "Mulai 5jt",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Desain antarmuka современный dan berpengalaman.",
      features: ["Wireframing", "Prototyping", "User Research", "Design System"],
      price: "Mulai 3jt",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital untuk bisnis Anda.",
      features: ["SEO", "Google Ads", "Social Media", "Content Marketing"],
      price: "Mulai 2jt",
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description: "Proteksi keamanan siber untuk data Anda.",
      features: ["Audit Keamanan", "Penetration Testing", "Firewall Setup", "Monitoring"],
      price: "Mulai 4jt",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Infrastruktur cloud yang skalabel dan andal.",
      features: ["AWS", "Azure", "Google Cloud", "Deployment CI/CD"],
      price: "Mulai 3jt",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">{service.title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">{service.description}</p>
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{service.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
