import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react";

/**
 * Alert component for displaying contextual messages
 * Supports info, success, warning, and error variants
 */
interface AlertProps {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const typeStyles = {
  info: { icon: Info, bg: "bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", iconColor: "text-blue-500" },
  success: { icon: CheckCircle, bg: "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300", iconColor: "text-green-500" },
  warning: { icon: AlertCircle, bg: "bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300", iconColor: "text-yellow-500" },
  error: { icon: XCircle, bg: "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300", iconColor: "text-red-500" },
};

export default function Alert({
  type = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className = "",
}: AlertProps) {
  const config = typeStyles[type];

  return (
    <div className={`p-4 rounded-lg border ${config.bg} ${className}`}>
      <div className="flex items-start gap-3">
        <config.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className="flex-1">
          {title && <p className="font-medium mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
