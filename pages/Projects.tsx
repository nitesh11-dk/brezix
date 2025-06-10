// components/Features.tsx
"use client";

import React from 'react';
import HoverRevealCard from '@/components/HoverRevealCard';
import Link from 'next/link';
import { projects } from '@/constants';
import { openContactForm } from "@/components/ContactForm";

const Features = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openContactForm();
  };

  const mobileProjects = projects.slice(0, 4);

  return (
    <div id='projects' className=' px-4 py-12 md:px-8 md:py-16 '>
      <p className="text-sm text-gray-500 font-semibold mb-2 flex items-center gap-2 md:mb-3">
        03 <span className="border w-6 h-[3px] inline-block bg-gray-500"></span>Our Portfolio
      </p>


      <div className='flex items-center justify-between w-full   h-fit'>
        <h2 className=' hidden lg:flex text-gray-500 text-3xl w-1/3'>Our user-centered design encourages productivity and boosts revenue.</h2>
        <div className='flex flex-col gap-10  items-end  '><h3 className='text-3xl md:text-4xl lg:text-6xl lg:w-2/3 opacity-80'>We don't do cookie-cutter solutions
        </h3>
          <button onClick={handleClick} className=' hidden lg:flex text-gray-500 self-center'>schedule metting</button></div>
      </div>

      <div className='w-full border-t-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5   py-5  bg-white mt-5 '>

        <div className='hidden sm:contents'>
          {projects.map((project) => (
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
        <div className='contents sm:hidden'>
          {mobileProjects.map((project) => (
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



      <div className="flex  hover:scale-90 transition-all duration-300 ease-out justify-center mt-8 mb-4">
        <Link
          href="/projects"
          className="group relative overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 text-black text-md rounded-full px-6 lg:px-8 py-2 lg:py-4 font-medium"
        >
          <div className="absolute inset-0 w-0 h-full bg-blue-600 transition-all duration-200 ease-linear group-hover:w-full"></div>
          <div className="z-10 relative flex items-center">
            <span className="mr-2 text-xl transition-colors duration-300 group-hover:text-white">+</span>
            <div className="h-6 overflow-hidden">
              <div className="relative flex flex-col top-0 transition-all duration-300 group-hover:-top-6 group-hover:text-white">
                View All Projects
                <span>View All Projects</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Features;