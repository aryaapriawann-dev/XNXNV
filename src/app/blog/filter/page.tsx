"use client";

import { useState } from "react";
import { Calendar, Tag, User, ChevronRight, Filter, Search, BookOpen, Clock, Share2, Heart, MessageCircle } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readTime: number;
  imageUrl: string;
  featured: boolean;
  likes: number;
  comments: number;
}

const categories = [
  { id: "all", name: "All Categories" },
  { id: "technology", name: "Technology" },
  { id: "business", name: "Business" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "development", name: "Development" },
  { id: "tutorials", name: "Tutorials" },
  { id: "news", name: "News" },
];

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2026",
    excerpt: "Explore the latest trends and technologies shaping the future of web development this year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Technology",
    tags: ["Web Development", "Future Trends", "JavaScript", "CSS"],
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-09-01",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    likes: 234,
    comments: 45
  },
  {
    id: "2",
    title: "Building Scalable Applications with Next.js 16",
    excerpt: "Learn how to build scalable and performant applications using the latest Next.js features.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Development",
    tags: ["Next.js", "React", "Scalability", "Performance"],
    author: "Jane Doe",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-28",
    readTime: 12,
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    likes: 189,
    comments: 32
  },
  {
    id: "3",
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt: "Essential design principles that can help developers create better user interfaces.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    category: "Design",
    tags: ["UI/UX", "Design Systems", "Accessibility", "User Experience"],
    author: "Mike Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-25",
    readTime: 6,
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 156,
    comments: 28
  },
  {
    id: "4",
    title: "Digital Marketing Strategies for Startups",
    excerpt: "Effective marketing strategies that every startup should consider in 2026.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Marketing",
    tags: ["Digital Marketing", "Startup", "Social Media", "SEO"],
    author: "Sarah Williams",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-22",
    readTime: 10,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    likes: 312,
    comments: 67
  },
  {
    id: "5",
    title: "Understanding Modern CSS Features",
    excerpt: "Deep dive into modern CSS features that are changing how we build websites.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Development",
    tags: ["CSS", "Web Design", "Responsive", "Modern CSS"],
    author: "David Brown",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-20",
    readTime: 9,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 178,
    comments: 34
  },
  {
    id: "6",
    title: "The Business of Software Development",
    excerpt: "Key business considerations for software development projects and products.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Business",
    tags: ["Business", "Software", "Project Management", "ROI"],
    author: "Emily Davis",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-18",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 245,
    comments: 52
  },
  {
    id: "7",
    title: "Complete Guide to React Patterns",
    excerpt: "Essential React patterns and best practices for building maintainable applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    category: "Development",
    tags: ["React", "Patterns", "Best Practices", "Components"],
    author: "Robert Wilson",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-15",
    readTime: 15,
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    likes: 423,
    comments: 89
  },
  {
    id: "8",
    title: "AI in Modern Web Development",
    excerpt: "How artificial intelligence is transforming web development workflows and tools.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Technology",
    tags: ["AI", "Web Development", "Automation", "Machine Learning"],
    author: "Lisa Anderson",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-12",
    readTime: 11,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 356,
    comments: 78
  },
  {
    id: "9",
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating web applications that everyone can use.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "Development",
    tags: ["Accessibility", "Web Development", "Inclusive Design", "WCAG"],
    author: "Chris Martinez",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-10",
    readTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 289,
    comments: 41
  },
  {
    id: "10",
    title: "The Rise of Headless CMS",
    excerpt: "Why headless CMS is becoming the preferred choice for modern web development.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Technology",
    tags: ["CMS", "Headless", "Content Management", "API"],
    author: "Michelle Lee",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-08",
    readTime: 9,
    imageUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2070&auto=format&fit=crop",
    featured: true,
    likes: 198,
    comments: 36
  },
  {
    id: "11",
    title: "Mastering TypeScript for React",
    excerpt: "Advanced TypeScript techniques for building robust React applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    category: "Development",
    tags: ["TypeScript", "React", "Advanced", "Type Safety"],
    author: "James Taylor",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-05",
    readTime: 13,
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 312,
    comments: 56
  },
  {
    id: "12",
    title: "Sustainable Design Practices",
    excerpt: "How to incorporate sustainability into your design process and workflow.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    category: "Design",
    tags: ["Sustainability", "Design", "Eco-friendly", "Green Design"],
    author: "Anna Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    publishedAt: "2026-08-02",
    readTime: 7,
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
    featured: false,
    likes: 267,
    comments: 48
  }
];

export default function BlogFilterPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyFeatured, setOnlyFeatured] = useState<boolean>(false);

  // Collect all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  const filteredTags = allTags;

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    const tagMatch = activeTag === "all" || post.tags.includes(activeTag);
    const searchMatch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const featuredMatch = !onlyFeatured || post.featured;
    return categoryMatch && tagMatch && searchMatch && featuredMatch;
  });

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310159-5b5f2269596b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Blog Kami
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            eksplorasi insight terbaru tentang teknologi, bisnis, dan pengembangan web dari tim ahli kami.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{blogPosts.length}</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Artikel</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {blogPosts.reduce((acc, p) => acc + p.likes, 0).toLocaleString()}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Total Likes</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {new Set(blogPosts.map(p => p.category)).size}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Kategori</div>
            </div>
            <div className="text-center p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {blogPosts.reduce((acc, p) => acc + p.comments, 0).toLocaleString()}
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">Komentar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Topik:</span>
            <button
              onClick={() => setActiveTag("all")}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTag === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              Semua
            </button>
            {filteredTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeTag === tag
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-900 dark:text-white placeholder-zinc-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-zinc-400" />
                <label htmlFor="featured" className="text-sm text-zinc-700 dark:text-zinc-300">
                  Hanya Artikel Unggulan
                </label>
              </div>
              <input
                type="checkbox"
                id="featured"
                checked={onlyFeatured}
                onChange={(e) => setOnlyFeatured(e.target.checked)}
                className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              {activeCategory === "all" ? "Semua Artikel" : categories.find(c => c.id === activeCategory)?.name}
              {activeTag !== "all" && ` • ${activeTag}`}
              {onlyFeatured && " (Unggulan)"}
            </h2>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm">
              Menampilkan {filteredPosts.length} dari {blogPosts.length} artikel
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`group bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border ${
                    post.featured
                      ? "border-indigo-600 shadow-lg shadow-indigo-600/20"
                      : "border-zinc-100 dark:border-zinc-800"
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      {post.featured && (
                        <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                          UNGGULAN
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-xs">
                        <Clock className="h-3 w-3" />
                        {post.readTime} menit baca
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="h-8 w-8 rounded-full"
                        />
                        <div>
                          <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {post.author}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {getFormattedDate(post.publishedAt)}
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:gap-2 transition-all">
                        Baca Selengkapnya <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <Heart className="h-4 w-4" />
                      {post.likes.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400 text-sm">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-zinc-100 dark:bg-zinc-900 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Coba ubah filter kategori, tag, atau kata kunci pencarian
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Jangan lewatkan artikel baru!
          </h2>
          <p className="text-zinc-300 text-xl mb-10">
            Daftarkan email Anda untuk mendapatkan artikel terbaru langsung ke inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zinc-400 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Langganan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
