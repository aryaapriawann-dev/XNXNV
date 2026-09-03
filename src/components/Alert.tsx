import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";

interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert({
  type = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className = "",
}: AlertProps) {
  const styles = {
    info: {
      container: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
      icon: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      title: "text-blue-900 dark:text-blue-300",
      text: "text-blue-700 dark:text-blue-400",
    },
    success: {
      container: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
      icon: <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />,
      title: "text-green-900 dark:text-green-300",
      text: "text-green-700 dark:text-green-400",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
      icon: <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
      title: "text-yellow-900 dark:text-yellow-300",
      text: "text-yellow-700 dark:text-yellow-400",
    },
    error: {
      container: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
      icon: <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />,
      title: "text-red-900 dark:text-red-300",
      text: "text-red-700 dark:text-red-400",
    },
  };

  const style = styles[type];

  return (
    <div className={`border rounded-lg p-4 ${style.container} ${className}`} role="alert">
      <div className="flex gap-3">
        <div className="flex-shrink-0">{style.icon}</div>
        <div className="flex-1">
          {title && <h3 className={`font-semibold mb-1 ${style.title}`}>{title}</h3>}
          <div className={`text-sm ${style.text}`}>{children}</div>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            aria-label="Dismiss"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
