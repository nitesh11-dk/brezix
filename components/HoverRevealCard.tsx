"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface HoverRevealCardProps {
  text: string;
  imageSrc: string;
  imageAlt: string;
  position?: 'left' | 'right';
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  text,
  imageSrc,
  imageAlt,
  position = 'left',
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
      className='relative hover:scale-[0.95] duration-300 ease-in-out h-full'
    >
      <div data-scroll
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className='w-full h-full overflow-hidden rounded-3xl'
      >
        <img data-scroll data-scroll-speed={0.05} className='h-full w-full rounded-3xl object-cover' src={imageSrc} alt={imageAlt} />
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
    </div>
  );
};

export default HoverRevealCard;
