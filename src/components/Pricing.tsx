"use client";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  className?: string;
}

export default function Pricing({ plans, className = "" }: PricingProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`relative flex flex-col p-8 rounded-2xl transition-all hover:shadow-lg ${
            plan.recommended
              ? "bg-indigo-600 text-white shadow-lg scale-105 z-10"
              : "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-700"
          }`}
        >
          {plan.recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold uppercase rounded-full">
              Terpopuler
            </div>
          )}
          
          <div className="mb-6">
            <h3 className={`text-xl font-bold mb-2 ${plan.recommended ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
              {plan.name}
            </h3>
            <p className={`${plan.recommended ? "text-indigo-100" : "text-zinc-500 dark:text-zinc-400"}`}>
              {plan.description}
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className={`text-4xl font-bold ${plan.recommended ? "text-white" : "text-zinc-900 dark:text-zinc-50"}`}>
                {plan.price}
              </span>
              <span className={`${plan.recommended ? "text-indigo-200" : "text-zinc-500 dark:text-zinc-400"}`}>
                /{plan.period}
              </span>
            </div>
          </div>
          
          <ul className="flex-1 space-y-3 mb-8">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`mt-1 flex-shrink-0 ${plan.recommended ? "text-indigo-200" : "text-indigo-600 dark:text-indigo-400"}`}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className={plan.recommended ? "text-indigo-50" : "text-zinc-600 dark:text-zinc-400"}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
          <button
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${
              plan.recommended
                ? "bg-white text-indigo-600 hover:bg-indigo-50"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Pilih {plan.name}
          </button>
        </div>
      ))}
    </div>
  );
}
