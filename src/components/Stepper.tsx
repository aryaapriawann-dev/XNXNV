"use client";

import { forwardRef, useState, useCallback } from "react";

/**
 * Stepper component for multi-step workflows
 * Supports default and progress variants, with optional step change callback
 */
interface StepperProps {
  initialStep?: number;
  totalSteps: number;
  showLabels?: boolean;
  variant?: "default" | "progress";
  className?: string;
  onStepChange?: (currentStep: number, totalSteps: number) => void;
  children?: (step: number, totalSteps: number, canGoNext: boolean, canGoPrev: boolean) => React.ReactNode;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({
    initialStep = 0,
    totalSteps,
    showLabels = true,
    variant = "default",
    className = "",
    onStepChange,
    children,
  }, ref) => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const canGoNext = currentStep < totalSteps - 1;
    const canGoPrev = currentStep > 0;

    const goNext = useCallback(() => {
      if (canGoNext) {
        setCurrentStep((s) => s + 1);
      }
    }, [canGoNext]);

    const goPrev = useCallback(() => {
      if (canGoPrev) {
        setCurrentStep((s) => s - 1);
      }
    }, [canGoPrev]);

    const goToStep = useCallback((step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
      }
    }, [totalSteps]);

    useEffect(() => {
      onStepChange?.(currentStep, totalSteps);
    }, [currentStep, totalSteps, onStepChange]);

    if (variant === "progress") {
      const progress = ((currentStep + 1) / totalSteps) * 100;
      return (
        <div className={`w-full ${className}`}>
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className="px-4 py-2 text-sm rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              Step {currentStep + 1} of {totalSteps}
            </span>
            <button
              onClick={goNext}
              disabled={!canGoNext}
              className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {canGoNext ? "Next" : "Finish"}
            </button>
          </div>
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={`flex items-center justify-between ${className}`}>
        <div className="flex items-center">
          <button
            onClick={goPrev}
            disabled={!canGoPrev}
            className="px-4 py-2 text-sm rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="mx-4 text-sm text-zinc-700 dark:text-zinc-300">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <button
            onClick={goNext}
            disabled={!canGoNext}
            className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {canGoNext ? "Next" : "Finish"}
          </button>
        </div>
        {children && (
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i <= currentStep
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400"
                }`}
                onClick={() => goToStep(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";

export default Stepper;
