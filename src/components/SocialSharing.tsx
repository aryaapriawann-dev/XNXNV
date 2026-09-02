"use client";

import { useState } from "react";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Copy, 
  Check,
  Share2 
} from "lucide-react";

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

  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

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
      {/* Share label */}
      <span className="text-zinc-600 dark:text-zinc-400 text-sm font-medium hidden sm:block">
        Bagikan:
      </span>
      
      {/* Facebook */}
      <button
        onClick={handleFacebookShare}
        title="Bagikan di Facebook"
        className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <Facebook className="h-5 w-5" />
      </button>
      
      {/* Twitter/X */}
      <button
        onClick={handleTwitterShare}
        title="Bagikan di Twitter"
        className="w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <Twitter className="h-5 w-5" />
      </button>
      
      {/* LinkedIn */}
      <button
        onClick={handleLinkedinShare}
        title="Bagikan di LinkedIn"
        className="w-10 h-10 rounded-full bg-[#0077B5] hover:bg-[#006399] text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <Linkedin className="h-5 w-5" />
      </button>
      
      {/* Email */}
      <button
        onClick={handleEmailShare}
        title="Kirim lewat Email"
        className="w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-900 dark:hover:bg-zinc-600 text-white flex items-center justify-center transition-all hover:scale-110"
      >
        <Mail className="h-5 w-5" />
      </button>
      
      {/* Copy Link */}
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
          <Check className="h-5 w-5" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </button>
      
      {/* Main Share Button (Mobile Only) */}
      <button
        onClick={handleFacebookShare}
        className="sm:hidden w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center"
      >
        <Share2 className="h-5 w-5" />
      </button>
    </div>
  );
}
