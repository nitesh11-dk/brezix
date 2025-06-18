"use client";

import HoverRevealCard from "@/components/HoverRevealCard";
import ServiceFeatures from "@/components/ServiceFeatures";
import ServicePricing from "@/components/ServicePricing";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { services } from "@/constants/services";

const ServicePage = () => {
  const params = useParams();
  const router = useRouter();
  const serviceId = params?.id ? parseInt(params.id as string) : null;
  const service = serviceId ? services.find(s => s.id === serviceId) : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <button
        onClick={() => router.push('/#services')}
        className="fixed top-6 hidden sm:block left-6 z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        <div className="mx-auto max-w-4xl text-center py-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <ServiceFeatures features={service.features} />

      {/* Projects Showcase */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Work
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {service.projects.map((project) => (
            <HoverRevealCard
              key={project.id}
              text={project.text}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              position={project.id % 2 === 0 ? 'left' : 'right'}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectLink={project.href}
            />
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <ServicePricing 
        pricingPlans={service.pricingPlans} 
        domainNote={service.domainNote} 
        serviceTitle={service.title}
      />
    </div>
  );
};

export default ServicePage;
