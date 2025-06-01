"use client";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import CircleButton from "@/helpers/CircleButton";
import CustomerReviews from "@/components/CustomerReviews";
import CircularText from "@/components/CircularTextEffect";
const HeroSection = () => {
  return (
    <div>
      <main className="h-screen  p-2">
        <div className="relative overflow-hidden h-full w-full rounded-2xl sm:rounded-[40px] ">
          {/* Background Video */}
          <video
            muted
            autoPlay
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
          />

          <div className="absolute w-full bottom-16 p-2  flex flex-col sm:bottom-10 sm:gap-8   md:pl-10    ">
            {/* Text + Icon Section */}

            <div className="font-freigeist  text-[3.50rem] leading-[3.4rem]  z-10 flex-1 text-white  uppercase  md:text-9xl  md:w-fit md:leading-[7rem]">
              <p className="font-normal">We Create</p>

              <div className="text-right md:flex md:items-center md:ml-8 md:gap-10 font-bold tracking-tighter">
                {/* CircleButton for md+ */}
                <div className="hidden md:flex">
                  <CircleButton
                    size="w-20 h-20"
                    icon={HiOutlineArrowLongDown}
                  />
                </div>
                <p>Awesome</p>
              </div>

              <div className="font-bold  text-[3.30rem] md:text-9xl md:tracking-tighter">
                Design
                <div className="animate-pulse inline-block bg-white md:w-7 ml-2 h-30  ">
                  .
                </div>
              </div>

              {/* CircleButton for small screens */}
              <div className="py-8 md:hidden relative text-black flex items-center justify-between">
                <CircleButton size="w-16 h-16" icon={HiOutlineArrowLongDown} />
                <div className="w-[80%] ml-2  h-[1px] bg-white"></div>
                <div className="absolute right-0 text-white gap-1 flex flex-col text-sm">
                  <span>Scroll</span>
                  <span>Down</span>
                </div>
              </div>

              <div></div>
            </div>

            <div>
              
              <div className=" hidden  w-1/2 sm:flex  sm:w-5/6 lg:w-1/2 h-[2px] mb-6 bg-white"></div>
              <CustomerReviews />
              <div
                className="lg:absolute bottom-4  right-20 md:ml-10 lg:ml-0 md:scale-110 lg:scale-125
  "
              >
                <div className="relative  bg-red-200  w-72 h-44 mt-4 md:mt-12 md:w-2/3 md:h-64 lg:h-52   lg:w-80  lg:m-0  rounded-xl  ">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-24   md:scale-125 lg:scale-90  lg:top-0 lg:-left-28">
                    <CircularText text="click to play  click to play click " />
                  </div>
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
