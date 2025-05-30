"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CircleButtonProps {
  size?: string; 
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  className?: string;
  animateRipple?: boolean; 
  scale?:number
}

const CircleButton: React.FC<CircleButtonProps> = ({
  size = "w-16 h-16",
  icon: Icon,
  className = "",
  animateRipple = true,
  scale=1.2
}) => {
  const rippleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (animateRipple && rippleRef.current) {
        gsap.to(rippleRef.current, {
          scale: scale ,
          repeat: -1,
          duration: 2,
          delay: 0.1,
          opacity: 0,
          ease: "expo.out",
        });
      }
    },
    { scope: rippleRef }
  );

  return (
    <div
      className={`relative flex justify-center items-center bg-white rounded-full text-black hover:scale-110 hover:bg-slate-100 hover:border-2 transition-all duration-300 ease-in-out ${size} ${className}`}
    >
      <div
        ref={rippleRef}
        className="absolute top-0 left-0 w-full h-full rounded-full border-2"
      ></div>
      <Icon size={40} strokeWidth={1} />
    </div>
  );
};

export default CircleButton;
