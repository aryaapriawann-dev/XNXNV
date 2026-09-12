import { InputHTMLAttributes, forwardRef, useEffect, useRef } from "react";

/**
 * Checkbox component with optional label, indeterminate state, and error message
 */
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
    }, [indeterminate]);

    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <input
          type="checkbox"
          ref={checkboxRef}
          className="w-4 h-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          {...props}
        />
        {label && <label className="text-sm text-zinc-700 dark:text-zinc-300 cursor-pointer">{label}</label>}
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
