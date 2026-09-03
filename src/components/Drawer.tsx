"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 ${
          position === "left" ? "left-0" : "right-0"
        } h-full w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl z-50 transform transition-transform ${
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        )}
        <div className="p-6 h-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
