"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Globe } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Chief Executive Officer",
    department: "Executive",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
    bio: "Visionary leader with over 20 years of experience in technology and business strategy. John founded XNXNV with a mission to transform how businesses leverage digital technology.",
    email: "john.smith@xnxnv.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    linkedin: "https://linkedin.com/in/johnsmith",
    skills: ["Strategic Planning", "Business Development", "Leadership"]
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=687&auto=format&fit=crop",
    bio: "Tech innovator driving our engineering excellence and technological advancements. Sarah leads our tech stack evolution and ensures we deliver cutting-edge solutions.",
    email: "sarah.johnson@xnxnv.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, USA",
    twitter: "https://twitter.com/sarahj",
    skills: ["System Architecture", "Cloud Computing", "Security"]
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Head of Design",
    department: "Design",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop",
    bio: "Creative mind behind our award-winning user experiences and interface designs. Michael believes design is about solving problems, not just making things look pretty.",
    email: "michael.chen@xnxnv.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, USA",
    website: "https://michaelchen.design",
    skills: ["UI/UX Design", "Product Design", "Design Systems"]
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Director of Operations",
    department: "Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=687&auto=format&fit=crop",
    bio: "Ensures our operations run smoothly, delivering excellence in every project. Emily's operational expertise keeps us focused on what matters most—our clients.",
    email: "emily.davis@xnxnv.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, USA",
    linkedin: "https://linkedin.com/in/emilydavis",
    skills: ["Project Management", "Process Optimization", "Team Leadership"]
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Senior Developer",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=687&auto=format&fit=crop",
    bio: "Technical expert bringing innovative solutions to complex challenges. David's code powers the most demanding applications for our enterprise clients.",
    email: "david.wilson@xnxnv.com",
    phone: "+1 (555) 567-8901",
    location: "Seattle, USA",
    linkedin: "https://linkedin.com/in/davidwilson",
    skills: ["Full Stack Development", "React", "Node.js"]
  },
  {
    id: 6,
    name: "Jessica Brown",
    role: "Client Success Manager",
    department: "Customer Success",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=687&auto=format&fit=crop",
    bio: "Dedicated to ensuring every client achieves their goals with our solutions. Jessica is the bridge between our team and our clients, ensuring smooth collaboration.",
    email: "jessica.brown@xnxnv.com",
    phone: "+1 (555) 678-9012",
    location: "Miami, USA",
    linkedin: "https://linkedin.com/in/jessicabrown",
    skills: ["Client Relations", "Project Management", "Communication"]
  },
  {
    id: 7,
    name: "Robert Martinez",
    role: "Marketing Director",
    department: "Marketing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    bio: "Strategic marketer who transforms brands through innovative campaigns. Robert's approach combines data-driven insights with creative storytelling.",
    email: "robert.martinez@xnxnv.com",
    phone: "+1 (555) 789-0123",
    location: "Los Angeles, USA",
    twitter: "https://twitter.com/robertm",
    skills: ["Digital Marketing", "Brand Strategy", "Content Marketing"]
  },
  {
    id: 8,
    name: "Amanda Lee",
    role: "Product Manager",
    department: "Product",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=687&auto=format&fit=crop",
    bio: "Product expert who bridges the gap between technology and business. Amanda ensures our products deliver real value to our users and clients.",
    email: "amanda.lee@xnxnv.com",
    phone: "+1 (555) 890-1234",
    location: "Denver, USA",
    linkedin: "https://linkedin.com/in/amandalee",
    skills: ["Product Strategy", "Agile Methodology", "User Research"]
  },
  {
    id: 9,
    name: "Christopher Taylor",
    role: "Sales Lead",
    department: "Sales",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=687&auto=format&fit=crop",
    bio: "Relationship builder who helps clients find the right solutions. Christopher's consultative approach ensures we deliver exactly what our clients need.",
    email: "christopher.taylor@xnxnv.com",
    phone: "+1 (555) 901-2345",
    location: "Boston, USA",
    linkedin: "https://linkedin.com/in/christophertaylor",
    skills: ["B2B Sales", "Consultative Selling", "Negotiation"]
  },
  {
    id: 10,
    name: "Michelle Garcia",
    role: "HR Manager",
    department: "Human Resources",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=687&auto=format&fit=crop",
    bio: "People enthusiast who creates a thriving workplace culture. Michelle ensures our team has what they need to do their best work.",
    email: "michelle.garcia@xnxnv.com",
    phone: "+1 (555) 012-3456",
    location: "Atlanta, USA",
    linkedin: "https://linkedin.com/in/michellegarcia",
    skills: ["Talent Acquisition", "HR Strategy", "Employee Relations"]
  },
  {
    id: 11,
    name: "James Anderson",
    role: "Support Lead",
    department: "Customer Support",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
    bio: "Customer advocate who ensures exceptional support experiences. James leads our support team in delivering timely, helpful assistance to all clients.",
    email: "james.anderson@xnxnv.com",
    phone: "+1 (555) 123-0987",
    location: "Phoenix, USA",
    linkedin: "https://linkedin.com/in/jamesanderson",
    skills: ["Customer Success", "Troubleshooting", "Support Management"]
  },
  {
    id: 12,
    name: "Lisa Thompson",
    role: "Content Strategist",
    department: "Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=687&auto=format&fit=crop",
    bio: "Storyteller who crafts compelling narratives that resonate. Lisa's content strategy helps our clients connect with their audiences.",
    email: "lisa.thompson@xnxnv.com",
    phone: "+1 (555) 234-1098",
    location: "Portland, USA",
    twitter: "https://twitter.com/lisathompson",
    skills: ["Content Strategy", "Copywriting", "SEO"]
  }
];

const departments = ["All", "Executive", "Engineering", "Design", "Operations", "Marketing", "Product", "Sales", "Human Resources", "Customer Support"];

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMembers = selectedDepartment === "All"
    ? teamMembers
    : teamMembers.filter(m => m.department === selectedDepartment);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            The talented professionals behind our success. Meet the people who make it all happen.
          </p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-zinc-100 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-slate-700"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-zinc-500 dark:text-zinc-400">
            Showing {filteredMembers.length} of {teamMembers.length} team members
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-zinc-50 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => openModal(member)}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <span className="bg-blue-600 px-2 py-1 rounded text-xs">{member.department}</span>
                      <span>{member.role}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-zinc-100 dark:bg-slate-700 text-zinc-600 dark:text-zinc-300 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-zinc-100 dark:bg-slate-700 text-zinc-600 dark:text-zinc-300 text-xs rounded">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                No team members found
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Try selecting a different department filter.
              </p>
              <button
                onClick={() => setSelectedDepartment("All")}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Our team is ready to help you achieve your goals. Get in touch today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            >
              ✕
            </button>

            <div className="relative h-48 md:h-64">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                <p className="text-xl text-blue-400">{selectedMember.role}</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">About</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-zinc-500" />
                    <a href={`mailto:${selectedMember.email}`} className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600">
                      {selectedMember.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-zinc-500" />
                    <span className="text-zinc-600 dark:text-zinc-400">{selectedMember.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-zinc-500" />
                    <span className="text-zinc-600 dark:text-zinc-400">{selectedMember.location}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">Connect</h3>
                <div className="flex gap-4">
                  {selectedMember.linkedin && (
                    <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.twitter && (
                    <a href={selectedMember.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </a>
                  )}
                  {selectedMember.website && (
                    <a href={selectedMember.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
