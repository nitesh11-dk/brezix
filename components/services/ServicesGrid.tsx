"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./data";

const ServicesGrid = () => {
  const logosRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = document.querySelectorAll(".service-card");

      cards.forEach((card, index) => {
        const desc = card.querySelector("p");
        const logo = logosRef.current[index];

        if (desc) {
          gsap.set(desc, { opacity: 0, y: 20, visibility: "hidden" });

          const handleEnter = () => {
            cards.forEach((el) => {
              gsap.to(el, {
                flex: el === card ? 2 : 0.66,
                duration: 0.4,
                ease: "power2.inOut",
              });
            });

            gsap.set(desc, { visibility: "visible" });
            gsap.to(desc, {
              delay: 1,
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            if (logo) {
              gsap.to(logo, {
                rotate: 360,
                duration: 1,
                ease: "power2.out",
              });
            }
          };

          const handleLeave = () => {
            cards.forEach((el) => {
              gsap.to(el, {
                flex: 1,
                duration: 0.4,
                ease: "power2.inOut",
              });
            });

            gsap.to(desc, {
              opacity: 0,
              y: 20,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                gsap.set(desc, { visibility: "hidden" });
              },
            });

            if (logo) {
              gsap.to(logo, {
                rotate: 0,
                duration: 1,
                ease: "power2.inOut",
              });
            }
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);
          card._gsapHandlers = { handleEnter, handleLeave };
        }
      });

      return () => {
        cards.forEach((card) => {
          const { handleEnter, handleLeave } = card._gsapHandlers || {};
          if (handleEnter) card.removeEventListener("mouseenter", handleEnter);
          if (handleLeave) card.removeEventListener("mouseleave", handleLeave);
        });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* <div className="section_top w-full mb-6">
        <div className="heading flex items-center gap-4 border-b pb-2">
          <img
            src="https://cdn.prod.website-files.com/620fd9a3a41c4eda8151cee6/6569bfbae912016a6736473e_Icon.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h2 className="text-2xl font-semibold">Services</h2>
        </div>
      </div> */}

      <div className="flex flex-col lg:flex lg:flex-row gap-4 mb-4 w-full" id="first-row">
        {servicesData.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} service={service} index={index} forwardedLogoRef={(el) => (logosRef.current[index] = el)} />
        ))}
      </div>

      <div className="flex flex-col lg:flex lg:flex-row gap-4 mb-4 w-full" id="second-row">
        {servicesData.slice(4).map((service, index) => (
          <ServiceCard key={index + 4} service={service} index={index + 4} forwardedLogoRef={(el) => (logosRef.current[index + 4] = el)} />
        ))}
      </div>
    </>
  );
};

export default ServicesGrid;
