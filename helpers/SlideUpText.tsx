"use client";

import React, { useRef } from "react";
import gsap from "gsap";

interface SlideUpTextProps {
  content: string;
}

const SlideUpText: React.FC<SlideUpTextProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      y: "-50%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      y: "0%",
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className="h-6 overflow-hidden z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={textRef} className="flex flex-col relative">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default SlideUpText;
