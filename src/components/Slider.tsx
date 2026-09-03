"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, showValue = true, formatValue, value, className = "", ...props }, ref) => {
    const [currentValue, setCurrentValue] = useState(Number(value || props.min || 0));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setCurrentValue(newValue);
      props.onChange?.(e);
    };

    const displayValue = formatValue ? formatValue(currentValue) : currentValue;

    return (
      <div className="w-full">
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                {displayValue}
              </span>
            )}
          </div>
        )}
        <input
          ref={ref}
          type="range"
          value={value ?? currentValue}
          onChange={handleChange}
          className={`w-full h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
