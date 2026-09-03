import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharCount?: boolean;
  fullWidth?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, showCharCount = false, maxLength, fullWidth = false, className = "", value, ...props }, ref) => {
    const currentLength = typeof value === "string" ? value.length : 0;

    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          maxLength={maxLength}
          value={value}
          className={`block px-3 py-2 bg-white dark:bg-zinc-900 border rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-y ${
            error
              ? "border-red-300 dark:border-red-700 focus:border-red-500 focus:ring-red-500/20"
              : "border-zinc-300 dark:border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500/20"
          } ${fullWidth ? "w-full" : ""} ${className}`}
          {...props}
        />
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex-1">
            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
            {helperText && !error && <p className="text-sm text-zinc-500 dark:text-zinc-400">{helperText}</p>}
          </div>
          {showCharCount && maxLength && (
            <p className={`text-sm ml-2 ${currentLength > maxLength * 0.9 ? "text-red-600 dark:text-red-400" : "text-zinc-500 dark:text-zinc-400"}`}>
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
