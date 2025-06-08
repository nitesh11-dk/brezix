"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface HoverRevealCardProps {
  text: string;
  imageSrc: string;
  imageAlt: string;
  position?: 'left' | 'right';
  projectName: string;
  projectDescription: string;
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  text,
  imageSrc,
  imageAlt,
  position = 'left',
  projectName,
  projectDescription
}) => {
  const textRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const validRefs = textRefs.current.filter(Boolean) as HTMLSpanElement[];
    gsap.set(validRefs, {
      y: '100%',
      opacity: 0
    });
  }, []);

  const handleHoverStart = () => {
    const validElements = textRefs.current.filter(Boolean) as HTMLSpanElement[];
    gsap.to(validElements, {
      y: 0,
      opacity: 1,
      stagger: 0.07,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleHoverEnd = () => {
    const validElements = textRefs.current.filter(Boolean) as HTMLSpanElement[];
    gsap.to(validElements, {
      y: '100%',
      opacity: 0,
      stagger: 0.07,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <div
      ref={containerRef}
      className='relative group lg:hover:scale-[0.95] duration-300 ease-in-out h-fit'
    >
      <div data-scroll
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className='w-full h-full overflow-hidden rounded-3xl'
      >
        {/* <img data-scroll data-scroll-speed={0.05} className='h-full w-full rounded-3xl object-cover' src={imageSrc} alt={imageAlt} /> */}
        <img  className='h-full w-full rounded-3xl object-cover' src={imageSrc} alt={imageAlt} />
      </div>
      <h2
        className={`absolute  flex overflow-hidden pointer-events-none z-50 top-1/2 ${position === 'left'
          ? 'left-2 translate-x-0'
          : 'right-2 translate-x-0'
          } -translate-y-1/2 text-[7vw] font-bold`}
      >
        {text.split('').map((char, index) => (
          <span
            key={index}
            ref={el => {
              if (el) textRefs.current[index] = el;
            }}
            className='inline-block z-50 text-white whitespace-nowrap opacity-0'
          >
            {char}
          </span>
        ))}
      </h2>

  <div className='
  my-2 h-fit rounded-xl p-1
  lg:bg-white/20 lg:backdrop-blur-md 
  lg:w-[90%] lg:left-1/2 lg:absolute lg:bottom-2 lg:-translate-x-1/2 lg:right-0 
  lg:top-auto 
  lg:translate-y-1/2 
  lg:opacity-0 
  lg:group-hover:opacity-100 
  lg:group-hover:translate-y-0 
  transition-all duration-500 ease-in-out
'>
  <h2 className='font-bold text-black lg:text-white text-xl mb-1'>{projectName}</h2>
  <p className='text-gray-400 lg:text-gray-200 leading-[16px] text-md'>
    {projectDescription}
  </p>
</div>

    </div>
  );
};

export default HoverRevealCard;
