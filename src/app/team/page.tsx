import { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  linkedin?: string;
  twitter?: string;
}

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Arya Apriawann",
    position: "CEO & Founder",
    image: "/images/team/arya.jpg",
    bio: "Membawa visi inovatif dan pengalaman 10+ tahun di industri teknologi untuk membimbing tim menuju kesuksesan.",
    email: "arya@xnxnv.com",
    phone: "+62 812 3456 7890",
    linkedin: "https://linkedin.com/in/aryaapriawann",
    twitter: "https://twitter.com/aryaapriawann"
  },
  {
    id: "2",
    name: "Budi Santoso",
    position: "CTO",
    image: "/images/team/budi.jpg",
    bio: "Teknologi jantung perusahaan. Ahli dalam arsitektur cloud, AI, dan pengembangan software berperforma tinggi.",
    email: "budi@xnxnv.com",
    phone: "+62 812 3456 7891",
    linkedin: "https://linkedin.com/in/budisantoso"
  },
  {
    id: "3",
    name: "Citra Dewi",
    position: "Head of Design",
    image: "/images/team/citra.jpg",
    bio: "Menghadirkan pengalaman pengguna yang luar biasa melalui desain yang elegan, intuitif, dan berfokus pada manusia.",
    email: "citra@xnxnv.com",
    phone: "+62 812 3456 7892",
    linkedin: "https://linkedin.com/in/citradewi"
  },
  {
    id: "4",
    name: "Dimas Pratama",
    position: "Lead Developer",
    image: "/images/team/dimas.jpg",
    bio: "Mengubah ide desain menjadi kenyataan dengan kode yang bersih, terstruktur, dan efisien.",
    email: "dimas@xnxnv.com",
    phone: "+62 812 3456 7893",
    linkedin: "https://linkedin.com/in/dimaspratama"
  },
  {
    id: "5",
    name: "Eka Putri",
    position: "Project Manager",
    image: "/images/team/eka.jpg",
    bio: "Memastikan setiap proyek berjalan lancar dengan timeline yang ketat dan komunikasi yang transparan.",
    email: "eka@xnxnv.com",
    phone: "+62 812 3456 7894",
    linkedin: "https://linkedin.com/in/ekaputri"
  },
  {
    id: "6",
    name: "Fajar Nugroho",
    position: "UX/UI Designer",
    image: "/images/team/fajar.jpg",
    bio: "Menciptakan antarmuka yang tidak hanya cantik tetapi juga fungsional dan ramah pengguna.",
    email: "fajar@xnxnv.com",
    phone: "+62 812 3456 7895",
    linkedin: "https://linkedin.com/in/fajarnugroho"
  }
];

export const metadata: Metadata = {
  title: "Tim Kami - XNXNV",
  description: "Kenali tim ahli kami yang berdedikasi memberikan solusi teknologi terbaik untuk bisnis Anda.",
  openGraph: {
    title: "Tim Kami - XNXNV",
    description: "Kenali tim ahli kami yang berdedikasi memberikan solusi teknologi terbaik untuk bisnis Anda.",
    type: "website"
  }
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <div className="bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumbs 
            items={[
              { label: "Beranda", href: "/", isActive: false },
              { label: "Tentang Kami", href: "/about", isActive: false },
              { label: "Tim Kami", href: "/team", isActive: true }
            ]}
            className="mb-6"
          />
          
          <SectionTitle 
            title="Tim Ahli Kami" 
            subtitle="Kelompok profesional berbakat yang berdedikasi untuk memberikan solusi teknologi terbaik."
            className="mb-8"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div 
              key={member.id}
              className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-indigo-400">{member.position}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-900/50 backdrop-blur-sm hover:bg-indigo-600 text-white flex items-center justify-center transition-colors"
                      title="LinkedIn"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-900/50 backdrop-blur-sm hover:bg-black text-white flex items-center justify-center transition-colors"
                      title="Twitter"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700">
                  <span className="absolute inset-0 flex items-center justify-center text-zinc-400">
                    <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-700">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    {member.email}
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-zinc-100 dark:bg-zinc-950 py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bergabunglah dengan Tim Kami" 
            subtitle="Kami selalu mencari talenta baru yang bersemangat untuk berkontribusi pada inovasi teknologi."
            className="text-center mb-12"
          />
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
