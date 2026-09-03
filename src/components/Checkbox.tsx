import { InputHTMLAttributes, forwardRef, useEffect, useRef } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  indeterminate?: boolean;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, error, className = "", ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const checkboxRef = (ref as any) || internalRef;

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, checkboxRef]);

    return (
      <div>
        <label className="inline-flex items-center gap-2 cursor-pointer">
          <input
            ref={checkboxRef}
            type="checkbox"
            className={`h-4 w-4 rounded border-zinc-300 dark:border-zinc-600 text-indigo-600 focus:ring-2 focus:ring-indigo-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
