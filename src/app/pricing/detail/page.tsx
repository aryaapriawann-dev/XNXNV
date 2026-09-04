export default function PricingDetailPage() {
  const [annual, setAnnual] = React.useState(true);

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: annual ? 299 : 349,
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 projects",
        "5GB storage",
        "Basic analytics",
        "24/7 support",
        "1 team member",
        "Custom domain"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: annual ? 599 : 699,
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "20GB storage",
        "Advanced analytics",
        "Priority support",
        "5 team members",
        "Custom domain",
        "API access",
        "Custom branding"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: annual ? 1299 : 1499,
      description: "For large organizations",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Real-time analytics",
        "Dedicated support",
        "Unlimited team members",
        "Custom domain",
        "API access",
        "Custom branding",
        "SSO integration",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${!annual ? "text-white font-bold" : "text-slate-400"}`}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative w-16 h-8 bg-blue-600 rounded-full transition-colors"
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    annual ? "translate-x-8" : ""
                  }`}
                ></div>
              </button>
              <span className={`text-lg ${annual ? "text-white font-bold" : "text-slate-400"}`}>
                Yearly <span className="text-green-400 ml-1">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 shadow-2xl"
                    : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-6 ${plan.popular ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-lg ${plan.popular ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 ${plan.popular ? "text-green-400" : "text-blue-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className={plan.popular ? "text-blue-100" : "text-slate-600 dark:text-slate-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-slate-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Prorated charges will apply for upgrades, and downgrades will take effect at the next billing cycle."
              },
              {
                question: "Do you offer a free trial?",
                answer: "Yes, we offer a 14-day free trial on all plans so you can experience our services risk-free before making a commitment."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use industry-standard encryption and follow best security practices to ensure your data is always protected."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
              >
                <button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none">
                  <span className="font-bold text-lg text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <svg
                    className="w-6 h-6 text-slate-500 transform transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="px-8 pb-6 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700 pt-4">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their business needs.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  );
}
