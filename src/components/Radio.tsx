import { InputHTMLAttributes, forwardRef } from "react";

/**
 * Radio component with optional label and error message
 */
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
            className="w-4 h-4 border-zinc-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            {...props}
          />
          {label && <span className="text-sm text-zinc-700 dark:text-zinc-300">{label}</span>}
        </label>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
