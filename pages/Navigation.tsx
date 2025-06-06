"use client";
import React, { useRef, useEffect } from "react";
import { useMenu } from "@/context/MenuContext";
import { menuItems } from "@/constants";
import { LuInstagram } from "react-icons/lu";
import { TbBrandLinkedin } from "react-icons/tb";
import { RxDiscordLogo } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { IoCall } from "react-icons/io5";
import gsap from "gsap";

const Navigation = () => {
  const { isOpen } = useMenu();
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
    <div className={`fixed top-0 left-0 w-screen h-full flex text-white overflow-hidden z-[500] pointer-events-none ${isOpen && 'pointer-events-auto'}`}>
      {/* Left panel */}
      <div
        ref={container1Ref}
        className={`bg-[#2722df] h-0 overflow-hidden hidden lg:flex lg:w-[25%] flex-col justify-between`}
      >
        <div ref={content1Ref} className="opacity-0 flex flex-col justify-between h-full">
          <img className="w-36 p-8" src="/logo.png" alt="Logo" />
          <div className="p-8">
            <div className="mt-4">
              <h3 className="font-semibold text-base mb-1">Contact</h3>
              <p>Email: info@brezix.com</p>
              <p>Phone: +1 234 567 8901</p>
            </div>

            <div className="mt-4 flex items-center justify-start gap-4">
              <div className="flex gap-2">
                <p className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm"><LuInstagram /></p>
                <p className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm"><TbBrandLinkedin /></p>
                <p className="bg-[#a2a0f8] text-white p-2 rounded-full text-sm"><RxDiscordLogo /></p>
              </div>

              <Button className="group bg-white text-black text-sm rounded-full py-2 px-4 font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <IoCall className="text-lg" />
                <span>Call</span>
              </Button>
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
        className="bg-[#4541f1] h-0 w-full lg:w-[75%] absolute right-0 bottom-0"
      >
        <div ref={content2Ref} className="opacity-0 p-8">
          <div className="mb-10 md:mb-16 lg:mb-0">
            <span className="lg:hidden">
              <img className="w-16 md:w-20" src="/logo.png" alt="" />
            </span>
            <span className="hidden lg:flex opacity-70">Brezix</span>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:py-32 lg:justify-between lg:items-end">
            <div>
              {menuItems.map((item, index) => (
                <div key={index} className="group flex items-center gap-2 mb-4">
                  <span className="inline-block w-0 group-hover:w-14 h-1 bg-white transition-all duration-700 sm:group-hover:w-24 sm:h-2"></span>
                  <h2 className="relative flex-nowrap">
                    <span className="text-5xl sm:text-7xl">{item}</span>
                    <span className="text-xs absolute -right-4 top-0 opacity-60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </h2>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center gap-1 lg:hidden">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl sm:text-3xl">WhatsApp</h2>
                <h2 className="text-2xl sm:text-3xl">Telegram</h2>
                <p className="text-xs sm:text-xl opacity-80 underline">info@brezix.com</p>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-2 sm:mr-8">
                  <p className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4"><LuInstagram /></p>
                  <p className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4"><TbBrandLinkedin /></p>
                  <p className="bg-[#a2a0f8] text-white p-3 rounded-full sm:p-4"><RxDiscordLogo /></p>
                </div>
                <Button className="group bg-white text-black text-md rounded-full p-2 px-4 font-medium sm:scale-110 hover:scale-100 transition-all duration-500">
                  <span className="z-10 mr-1 text-xl"><IoCall /></span>
                  <span className="z-10">Call</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
