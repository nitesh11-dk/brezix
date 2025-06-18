import React, { useState } from 'react';
import { PricingPlan } from '@/types/services';
import PricingContactForm from './PricingContactForm';

interface ServicePricingProps {
  pricingPlans: PricingPlan[];
  domainNote?: string;
  serviceTitle: string;
}

const ServicePricing = ({ pricingPlans, domainNote, serviceTitle }: ServicePricingProps) => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
  };

  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Choose your perfect plan</p>
      </div>

      <div className={`mx-auto mt-16 grid max-w-lg gap-y-6 sm:mt-20 sm:gap-y-4 gap-4 lg:max-w-4xl ${
        pricingPlans.length === 1 
          ? 'grid-cols-1 max-w-md' 
          : pricingPlans.length === 2 
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl' 
            : 'grid-cols-1 lg:grid-cols-3'
      }`}>
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl ${
              plan.isPopular ? 'bg-gray-900 shadow-2xl' : 'bg-white/60'
            } p-8 ring-1 ring-gray-900/10 sm:p-10 flex flex-col justify-between`}
          >
            <div>
              <h3 className={`text-base font-semibold leading-7 ${
                plan.isPopular ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-4xl font-bold tracking-tight ${
                  plan.isPopular ? 'text-white' : 'text-gray-900'
                }`}>
                  {typeof plan.price === 'number' 
                    ? `₹${plan.price.toLocaleString('en-IN')}`
                    : plan.price.includes('-')
                      ? `₹${plan.price.split('-').map(p => p.trim()).join(' - ₹')}`
                      : plan.price
                  }
                </span>
                {typeof plan.price === 'number' && (
                  <span className={`text-sm font-medium ${
                    plan.isPopular ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    /project
                  </span>
                )}
              </p>
              <p className={`mt-6 text-base leading-7 ${
                plan.isPopular ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {plan.description}
              </p>
              <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${
                plan.isPopular ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <svg className={`h-6 w-5 flex-none ${
                      plan.isPopular ? 'text-indigo-400' : 'text-indigo-600'
                    }`} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handlePlanSelect(plan)}
              className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                plan.isPopular
                  ? 'bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'
              }`}
            >
              Build With Us
            </button>
          </div>
        ))}
      </div>

      {/* Domain Note */}
      {domainNote && (
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
            {domainNote}
          </p>
        </div>
      )}

      {/* Contact Form */}
      {selectedPlan && (
        <PricingContactForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          serviceTitle={serviceTitle}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  );
};

export default ServicePricing; 