"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

/**
 * Drawer component that slides in from left or right
 * Supports escape key to close
 */
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  children: ReactNode;
  title?: string;
}

export default function Drawer({
  isOpen,
  onClose,
  position = "right",
  children,
  title,
}: DrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses = {
    left: "inset-y-0 left-0 pl-0 translate-x-0",
    right: "inset-y-0 right-0 pr-0 translate-x-0",
  };

  const overlayPosition = position === "left" ? "right-0" : "left-0";

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div
        className={`absolute top-0 h-full w-80 bg-white dark:bg-zinc-900 shadow-2xl transition-transform duration-300 ${positionClasses[position]} ${
          isOpen ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"
        }`}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
