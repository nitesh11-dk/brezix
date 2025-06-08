// components/Features.tsx
"use client";

import React from 'react';
import HoverRevealCard from '@/components/HoverRevealCard';
import Link from 'next/link';
import { projects } from '@/constants';


const Features = () => {
  const mobileProjects = projects.slice(0, 4);

  return (
    <div id='projects' className='py-6 md:py-8'>
      <h1 className='text-3xl md:text-5xl px-4 md:px-16 font-sm'>Featured projects</h1>
      <div className='w-full border-t-[1px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 px-4 md:px-10 py-5 md:py-10 bg-white mt-5 md:mt-10'>

        <div className='hidden sm:contents'>
          {projects.map((project) => (
            <HoverRevealCard
              key={project.id}
              text={project.text}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              position={project.id % 2 === 0 ? 'left' : 'right'}
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
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 mb-4">
        <Link
          href="/projects"
          className="group relative overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 text-black text-md rounded-full px-8 py-4 font-medium"
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