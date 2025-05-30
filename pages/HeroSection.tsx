"use client";

import { HiOutlineArrowLongDown } from "react-icons/hi2";
import CircleButton from "@/helpers/CircleButton";

const HeroSection = () => {
  return (
    <div>
      <main className="h-screen flex items-center justify-between p-2">
        <div className="relative overflow-hidden h-full w-full rounded-2xl sm:rounded-[40px] items-center">
          
          {/* Background Video */}
          <video
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
          />

          {/* Text + Icon Section */}
          <div className="font-freigeist relative text-[3.50rem] leading-[3.4rem] top-32 z-10 flex-1 text-white px-2 uppercase md:top-96 md:text-9xl md:pl-10 md:w-fit md:leading-[7rem]">
            <p className="font-normal">We Create</p>

            <div className="text-right md:flex md:items-center md:ml-8 md:gap-10 font-bold tracking-tighter">
              {/* CircleButton for md+ */}
              <div className="hidden md:flex">
                <CircleButton size="w-20 h-20" scale={1.5} icon={HiOutlineArrowLongDown} />
              </div>
              <p>Awesome</p>
            </div>

            <div className="font-bold  text-[3.30rem] md:text-9xl md:tracking-tighter" >
              Design
              <div className="animate-pulse inline-block bg-white md:w-7 ml-2 h-30  ">.</div>
            </div>

            {/* CircleButton for small screens */}
            <div className="py-8 md:hidden relative text-black flex items-center justify-between">
              <CircleButton size="w-16 h-16" icon={HiOutlineArrowLongDown} />
              <div className="w-[80%] ml-2 border border-white"></div>
              <div className="absolute right-0 text-white gap-1 flex flex-col text-sm">
                <span>Scroll</span>
                <span>Down</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
