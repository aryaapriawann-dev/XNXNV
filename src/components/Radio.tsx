import { InputHTMLAttributes, forwardRef } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            ref={ref}
            type="radio"
            className={`h-4 w-4 border-zinc-300 dark:border-zinc-600 text-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
            {...props}
          />
          {label && (
            <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>
          )}
        </label>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
