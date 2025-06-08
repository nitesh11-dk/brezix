"use client";
import React, { useRef, useEffect } from "react";
import { useMenu } from "@/context/MenuContext";
import { menuItems, contactInfo } from "@/constants";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoCall } from "react-icons/io5";
import gsap from "gsap";

const Navigation = () => {
  const { isOpen, toggleMenu } = useMenu();
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const content1Ref = useRef<HTMLDivElement>(null);
  const content2Ref = useRef<HTMLDivElement>(null);

  // Lock/unlock scroll when menu is toggled
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = parseInt(document.body.style.top || '0') * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  }, [isOpen]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 0.6 } });

    if (isOpen) {
      tl.to([container1Ref.current, container2Ref.current], {
        height: "100%",
        duration: 0.8,
        ease: "expo.inOut"
      }).to([content1Ref.current, content2Ref.current], {
        opacity: 1,
        stagger: 0.1,
        duration: 0.4
      });
    } else {
      tl.to([content1Ref.current, content2Ref.current], {
        opacity: 0,
        duration: 0.3
      }).to([container1Ref.current, container2Ref.current], {
        height: "0%",
        duration: 0.6,
        ease: "expo.inOut"
      });
    }
  }, [isOpen]);

  return (
    <div className={`fixed selection:bg-black top-0 left-0 w-screen h-full flex text-white overflow-hidden z-[500] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Left panel */}
      <div
        ref={container1Ref}
        className={`bg-[#2722df] h-0 overflow-hidden lg:flex lg:w-[25%] flex-col justify-between pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
      >
        <div ref={content1Ref} className={`opacity-0 flex flex-col justify-between h-full  ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <img className="w-36 p-8" src="/logo.png" alt="Logo" />
          <div className="p-8">
            <div className="mt-4">
              <h3 className="font-semibold text-base mb-1">Contact</h3>
              <a href={`mailto:${contactInfo.email}`} className="block hover:text-blue-300 transition-colors">
                Email: {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phones.primary.replace(/\s/g, '')}`} className="block hover:text-blue-300 transition-colors">
                Phone: {contactInfo.phones.primary}
              </a>
              <a href={`tel:${contactInfo.phones.secondary.replace(/\s/g, '')}`} className="block hover:text-blue-300 transition-colors">
                Phone: {contactInfo.phones.secondary}
              </a>
            </div>

            <div className="mt-4 flex items-center justify-start gap-4">
              <div className="flex gap-2">
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm hover:bg-[#8482e6] transition-colors">
                  <FaWhatsapp />
                </a>
                <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm hover:bg-[#8482e6] transition-colors">
                  <FaTelegram />
                </a>
                <a href={contactInfo.discord} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm hover:bg-[#8482e6] transition-colors">
                  <FaDiscord />
                </a>
              </div>

              <a href={`tel:${contactInfo.phones.primary.replace(/\s/g, '')}`}>
                <Button className="group bg-white text-black text-sm rounded-full py-2 px-4 font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <IoCall className="text-lg" />
                  <span>Call</span>
                </Button>
              </a>
            </div>

            <div className="mt-4 border-t border-white/30 pt-2 text-xs opacity-70 leading-relaxed">
              <p>&copy; {new Date().getFullYear()} Brezix — Designed & developed for ambitious businesses.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div
        ref={container2Ref}
        className={`bg-[#4541f1] h-0 w-full lg:w-[75%] absolute right-0 bottom-0 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
      >
        <div ref={content2Ref} className={`opacity-0 p-8 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className="mb-10 md:mb-16 lg:mb-0">
            <span className="lg:hidden">
              <img className="w-16 md:w-20" src="/logo.png" alt="" />
            </span>
            <span className="hidden lg:flex opacity-70">Brezix</span>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:py-32 lg:justify-between lg:items-end">
            <div>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  onClick={toggleMenu}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center gap-2 mb-4"
                >
                  <span className="inline-block w-0 group-hover:w-14 h-1 bg-white transition-all duration-700 sm:group-hover:w-24 sm:h-2"></span>
                  <h2 className="relative flex-nowrap">
                    <span className="text-5xl sm:text-7xl">{item}</span>
                    <span className="text-xs absolute -right-4 top-0 opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </h2>
                </a>
              ))}
            </div>

            <div className="flex justify-between items-center gap-1 lg:hidden">
              <div className="flex flex-col gap-1">
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-blue-300 transition-colors">WhatsApp</a>
                <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-blue-300 transition-colors">Telegram</a>
                <a href={contactInfo.discord} target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-blue-300 transition-colors">Discord</a>
                <a href={`mailto:${contactInfo.email}`} className="text-xs sm:text-xl opacity-80 underline hover:opacity-100 transition-opacity">{contactInfo.email}</a>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-2 sm:mr-8">
                  <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4 hover:bg-[#8482e6] transition-colors">
                    <FaWhatsapp />
                  </a>
                  <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4 hover:bg-[#8482e6] transition-colors">
                    <FaTelegram />
                  </a>
                  <a href={contactInfo.discord} target="_blank" rel="noopener noreferrer" className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4 hover:bg-[#8482e6] transition-colors">
                    <FaDiscord />
                  </a>
                </div>
                <a href={`tel:${contactInfo.phones.primary.replace(/\s/g, '')}`}>
                  <Button className="group bg-white text-black text-md rounded-full p-2 px-4 font-medium sm:scale-110 hover:scale-100 transition-all duration-500">
                    <span className="z-10 mr-1 text-xl"><IoCall /></span>
                    <span className="z-10">Call</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
