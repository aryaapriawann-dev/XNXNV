"use client";

import { useState } from "react";

interface SocialSharingProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SocialSharing({ 
  url = typeof window !== "undefined" ? window.location.href : "", 
  title = "", 
  description = "",
  className = ""
}: SocialSharingProps) {
  const [copied, setCopied] = useState(false);

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || description)}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleLinkedinShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(title || "Saya ingin berbagi artikel ini");
    const body = encodeURIComponent(`${description}\n\nBaca di: ${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hidden sm:block">
        Bagikan:
      </span>
      
      <button
        onClick={handleTwitterShare}
        title="Bagikan di X"
        className="w-10 h-10 rounded-full bg-black hover:bg-zinc-800 text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>
      
      <button
        onClick={handleLinkedinShare}
        title="Bagikan di Linkedin"
        className="w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#006399] text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>
      
      <button
        onClick={handleEmailShare}
        title="Kirim lewat Email"
        className="w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-900 dark:hover:bg-zinc-600 text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </button>
      
      <button
        onClick={handleCopyLink}
        title="Salin tautan"
        className={`w-10 h-10 rounded-full ${
          copied 
            ? "bg-green-600 hover:bg-green-700" 
            : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        } text-zinc-900 dark:text-white flex items-center justify-center transition-all hover:scale-110`}
      >
        {copied ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
      
      <button
        onClick={handleTwitterShare}
        className="sm:hidden w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12h6" />
          <path d="M12 9v6" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </button>
    </div>
  );
}
