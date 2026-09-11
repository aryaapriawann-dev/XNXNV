'use client';

import { forwardRef, useState, useCallback } from 'react';

interface StepperProps {
  initialStep?: number;
  totalSteps: number;
  showLabels?: boolean;
  variant?: 'default' | 'progress';
  className?: string;
  onStepChange?: (currentStep: number, totalSteps: number) => void;
  children?: (step: number, totalSteps: number, canGoNext: boolean, canGoPrev: boolean) => React.ReactNode;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      initialStep = 0,
      totalSteps,
      showLabels = true,
      variant = 'default',
      className = '',
      onStepChange,
      children,
    },
    ref
  ) => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const canGoNext = currentStep < totalSteps - 1;
    const canGoPrev = currentStep > 0;

    const goToStep = useCallback(
      (newStep: number) => {
        if (newStep < 0 || newStep >= totalSteps) {
          return;
        }
        setCurrentStep(newStep);
        onStepChange?.(newStep, totalSteps);
      },
      [totalSteps, onStepChange]
    );

    const goNext = useCallback(() => {
      if (canGoNext) {
        goToStep(currentStep + 1);
      }
    }, [canGoNext, currentStep, goToStep]);

    const goPrev = useCallback(() => {
      if (canGoPrev) {
        goToStep(currentStep - 1);
      }
    }, [canGoPrev, currentStep, goToStep]);

    const progressPercent = ((currentStep + 1) / totalSteps) * 100;

    const renderSteps = () => {
      const stepElements = [];
      for (let i = 0; i < totalSteps; i++) {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep;

        const stepClass = [
          'flex flex-col items-center',
          isCurrent ? 'relative z-10' : '',
          isCompleted ? 'opacity-75' : '',
        ]
          .filter(Boolean)
          .join(' ');

        const circleClass = [
          'flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all',
          isCompleted
            ? 'border-green-500 bg-green-500 text-white'
            : isCurrent
              ? 'border-indigo-600 bg-indigo-600 text-white'
              : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400',
        ]
          .filter(Boolean)
          .join(' ');

        const labelClass = [
          'text-xs mt-2 font-medium transition-colors',
          isCurrent
            ? 'text-indigo-600 dark:text-indigo-400'
            : isCompleted
              ? 'text-green-600 dark:text-green-400'
              : 'text-gray-500 dark:text-gray-400',
        ]
          .filter(Boolean)
          .join(' ');

        stepElements.push(
          <div key={i} className={stepClass}>
            <div className={circleClass}>
              {isCompleted ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              ) : (
                <span className="text-sm font-bold">{i + 1}</span>
              )}
            </div>
            {showLabels && <span className={labelClass}>Step {i + 1}</span>}
          </div>
        );

        if (i < totalSteps - 1) {
          const connectorClass = [
            'flex-1 h-px mx-2',
            isCompleted ? 'bg-green-400' : 'bg-gray-200 dark:bg-gray-700',
          ]
            .filter(Boolean)
            .join(' ');
          stepElements.push(<div key={`connector-${i}`} className={connectorClass} />);
        }
      }
      return stepElements;
    };

    const content = (
      <div ref={ref} className={`w-full ${className}`}>
        <div className="mb-6">
          <div className="flex items-center justify-center">{renderSteps()}</div>

          {variant === 'progress' && (
            <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          )}
        </div>

        {children ? (
          children(currentStep, totalSteps, canGoNext, canGoPrev)
        ) : (
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              disabled={!canGoPrev}
              onClick={goPrev}
              className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {currentStep + 1} of {totalSteps}
            </span>

            <button
              type="button"
              disabled={!canGoNext}
              onClick={goNext}
              className="px-4 py-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {variant === 'progress' && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {Math.round(progressPercent)}% complete
          </p>
        )}
      </div>
    );

    return content;
  }
);

Stepper.displayName = 'Stepper';
