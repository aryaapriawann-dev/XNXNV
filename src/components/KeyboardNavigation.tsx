"use client";

import { useEffect, useRef } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

type ScrollDirection = "up" | "down" | "left" | "right";

interface KeyboardNavigationProps {
  onNavigate?: (direction: ScrollDirection) => void;
  className?: string;
}

export default function KeyboardNavigation({ 
  onNavigate,
  className = ""
}: KeyboardNavigationProps) {
  const visible = useRef(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only show navigation when body has focus (not typing in inputs)
      const activeElement = document.activeElement;
      if (
        activeElement && 
        (activeElement.tagName === "INPUT" || 
         activeElement.tagName === "TEXTAREA" || 
         activeElement.tagName === "SELECT")
      ) {
        return;
      }

      let direction: ScrollDirection | null = null;

      switch (e.key) {
        case "ArrowUp":
        case "k":
        case "K":
          direction = "up";
          break;
        case "ArrowDown":
        case "j":
        case "J":
          direction = "down";
          break;
        case "ArrowLeft":
        case "h":
        case "H":
          direction = "left";
          break;
        case "ArrowRight":
        case "l":
        case "L":
          direction = "right";
          break;
        case "Home":
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        case "End":
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          return;
        case " ":
          e.preventDefault();
          window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: "smooth"
          });
          return;
        case "b":
        case "B":
          e.preventDefault();
          window.scrollBy({
            top: -window.innerHeight * 0.8,
            behavior: "smooth"
          });
          return;
      }

      if (direction && onNavigate) {
        onNavigate(direction);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNavigate]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY.current;
      
      if (Math.abs(diff) > 100) {
        visible.current = true;
        setTimeout(() => {
          visible.current = false;
        }, 2000);
      }
      
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (direction: ScrollDirection) => {
    const speed = window.innerHeight * 0.5;
    window.scrollBy({
      [direction === "up" || direction === "down" ? "top" : "left"]:
        direction === "up" || direction === "left" ? -speed : speed,
      behavior: "smooth"
    });
  };

  if (!visible.current) return null;

  return (
    <div className={`fixed bottom-24 right-4 z-50 flex flex-col gap-2 ${className}`}>
      {/* Up */}
      <button
        onClick={() => handleNavClick("up")}
        className="w-10 h-10 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors shadow-lg"
        aria-label="Scroll up"
        title="Scroll up (Arrow Up)"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      
      {/* Down */}
      <button
        onClick={() => handleNavClick("down")}
        className="w-10 h-10 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors shadow-lg"
        aria-label="Scroll down"
        title="Scroll down (Arrow Down)"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
      
      {/* Left */}
      <button
        onClick={() => handleNavClick("left")}
        className="w-10 h-10 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors shadow-lg"
        aria-label="Scroll left"
        title="Scroll left (Arrow Left)"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      
      {/* Right */}
      <button
        onClick={() => handleNavClick("right")}
        className="w-10 h-10 bg-zinc-900 dark:bg-zinc-700 text-white rounded-lg flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors shadow-lg"
        aria-label="Scroll right"
        title="Scroll right (Arrow Right)"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
