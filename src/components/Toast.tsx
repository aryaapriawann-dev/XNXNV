"use client";

import { useState, useEffect, useCallback } from "react";
import { X, CheckCircle2, AlertCircle, Info, Bell } from "lucide-react";

type ToastType = "success" | "error" | "info" | "default";

interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

const ToastContainer = ({ 
  toasts, 
  removeToast 
}: { 
  toasts: ToastMessage[]; 
  removeToast: (id: string) => void; 
}) => {
  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success": return <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />;
      case "error": return <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />;
      case "info": return <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />;
      default: return <Bell className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />;
    }
  };

  const getBgColor = (type: ToastType) => {
    switch (type) {
      case "success": return "bg-white dark:bg-zinc-800 border-l-4 border-green-500";
      case "error": return "bg-white dark:bg-zinc-800 border-l-4 border-red-500";
      case "info": return "bg-white dark:bg-zinc-800 border-l-4 border-blue-500";
      default: return "bg-white dark:bg-zinc-800 border-l-4 border-zinc-500";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start gap-4 p-4 rounded-lg shadow-lg ${getBgColor(toast.type)} transition-all duration-500 animate-slide-in`}
          role="alert"
        >
          <div className="flex-shrink-0 mt-0.5">
            {getIcon(toast.type)}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 text-sm">
              {toast.title}
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback(({ 
    type, 
    title, 
    message 
  }: { 
    type: ToastType; 
    title: string; 
    message: string; 
  }) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    setToasts((prev) => [
      ...prev,
      { id, type, title, message }
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
}
