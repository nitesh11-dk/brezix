'use client';

import ServicesGrid from "@/components/services/ServicesGrid";

const Services = () => {
  return (
    <>
      <div id="services" className="h-fit bg-white  px-4 md:px-8 md:py-24 ">
        <p className="text-sm text-gray-500 mb-2 font-semibold flex items-center gap-2">
          02 <span className="border w-6 h-[3px] inline-block bg-gray-500"></span> Services
        </p>
        <section className="w-full min-h-screen bg-white  py-4 sm:px-8 sm:py-6  lg:py-8">
          <ServicesGrid />
        </section>
      </div>
    </>
  );
};

export default Services;
