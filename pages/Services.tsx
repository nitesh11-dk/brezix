"use client";
import { servicesData } from "@/constants";
import Image from "next/image";


export default function ServicesGrid() {
  return (
      <div className="px-4 py-12 md:px-8 md:py-16">

         <p className="text-sm text-gray-500 font-semibold mb-2 flex items-center gap-2 md:mb-3">
                02 <span className="border w-6 h-[3px] inline-block bg-gray-500"></span>Our Services
            </p>


<div className='flex items-center justify-between w-full   h-fit'>
  <h2 className='  lg:flex text-gray-500 text-xl md:text-2xl lg:text-5xl tracking-wide lg:w-[90%]  py-2 md:mb-6'>As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</h2>
</div>

 {/* <div className="heading flex items-center gap-4 border-b pb-2">
          </div> */}

 <section className=" text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-md overflow-hidden relative flex flex-col justify-end p-6 h-[350px] bg-cover bg-center transition transform hover:scale-[1.01] ${service.colSpan}`}
            style={{
  backgroundColor: '#2C3E50', // A nice professional dark blue-gray color
}}
          >
            <h3 className={`text-2xl font-semibold mb-2 text-white `}>
              {service.title}
            </h3>
            <p className={`text-sm text-white `}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
   

    </div>
  );
}
