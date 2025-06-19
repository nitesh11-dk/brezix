"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Service } from "./data";
import { useRouter } from 'next/navigation';
import { ArrowRight } from "lucide-react";

interface Props {
  service: Service;
  index: number;
  forwardedLogoRef?: (el: HTMLImageElement | null) => void;
}

const baseBoxStyle =
  "rounded-3xl p-6 sm:py-10 md:py-14 lg:py-6 flex flex-col items-start gap-4 h-[42vh] transition-all duration-500 ease-in-out overflow-hidden";

const ServiceCard = ({ service, index, forwardedLogoRef }: Props) => {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const router = useRouter();

  // Handles responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024;
      setIsSmallScreen(isSmall);

      // Logo animation for small screens
      if (logoRef.current) {
        gsap.killTweensOf(logoRef.current); // stop any existing animation

        if (isSmall) {
          gsap.to(logoRef.current, {
            rotation: 360,
            repeat: -1,
            ease: "linear",
            duration: 4,
          });
        } else {
          gsap.set(logoRef.current, { rotation: 0 });
        }
      }
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);

    if (logoRef.current && forwardedLogoRef) {
      forwardedLogoRef(logoRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      onClick={() => router.push(`/services/${index +1}`)}
      className={`service-card cursor-pointer hover:opacity-80 ${baseBoxStyle} ${service.bgColor} ${service.textColor} ${service.colSpan ?? ""} relative`}
      data-index={index}
      style={{ flex: "1 1 0%" }}
    >
      <div className="min-w-28 pointer-events-none flex items-center justify-center bg-white/15 backdrop-blur-lg rounded-full py-0.5">
        <img
          ref={logoRef}
          src={service.image}
          alt={service.title}
          className="w-16 h-16 scale-110"
        />
      </div>
      <div className="text-left text-3xl my-1 font-normal">{service.title}</div>
      <p
        ref={descRef}
        className="leading-tight font-normal text-md md:text-xl text-justify md:mb-2 lg:block"
        style={{
          opacity: isSmallScreen ? 1 : 0,
          transform: isSmallScreen ? "translateY(0)" : "translateY(20px)",
          pointerEvents: isSmallScreen ? "auto" : "none",
          transition: "none",
        }}
      >
        {service.description}
        <br />
        <span className="block mt-6 text-sm italic text-right text-opacity-80">{service.tagLine}</span>
        <button
          className="mt-3 block ml-auto text-sm px-4 py-3 rounded-lg 
                   bg-white/10 backdrop-blur-md border border-white/20 
                   shadow-md hover:bg-white/20 transition-all flex items-center gap-2 group md:mt-8 lg:mt-2"
        >
          View More
          <ArrowRight 
            className="w-6 h-5 transition-transform duration-300 ease-in group-hover:-rotate-45" 
          />
        </button>
      </p>
    </div>
  );
};

export default ServiceCard;
