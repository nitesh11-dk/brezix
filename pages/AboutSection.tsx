import { Button } from "@/components/ui/button";
import React from "react";

const AgencySection = () => {
    return (
        <div className="h-fit  bg-white px-6 py-24">
            <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">01 <span className="border w-6 h-[3px]  inline-block bg-gray-500"></span>About Us </p>
            <h1 className=" my-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-snug mb-10 md:text-center lg:text-left lg:ml-44">
                {'{ '}We build innovative <br />
                design<span className="inline-block mx-1">✹</span>for modern <br />
                environment <span className="inline-block mx-1 bg-black text-white rounded-3xl px-4">∞</span>{' }'}
            </h1>

            <div className=" md:flex md:items-center md:justify-between w-full lg:justify-center lg:gap-60  ">


                <div className="relative w-48  h-56  lg:ml-24 lg:w-64 lg:h-64 ">

                    <img
                        src="https://images.unsplash.com/photo-1580894908361-967195033215?fit=crop&w=500&q=80"
                        alt="Laptop writing"
                        className="w-full h-full rounded-xl shadow-xl "
                    />


                    <img
                        src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Meeting" G
                        className="w-40  object-cover rounded-lg left-2/3 bottom-2   absolute lg:bottom-4   lg:w-48"
                    />

                    <img
                        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?fit=crop&w=400&q=80"
                        alt="Office"
                        className="w-28  object-cover absolute top-0 -right-36 rounded-lg shadow-md lg:-right-44"
                    />
                </div>




                <div className="flex flex-col justify-center py-10 md:w-1/2 lg:w-1/4">
                    <p className="text-gray-800 text-base sm:text-lg mb-2">
                        We are a successful design agency with a team of over 4 professionals.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Brezix helps clients to create strong and memorable brands that reflect their individuality and help achieve business goals.
                    </p>
                    <Button
                        className="group w-fit relative overflow-hidden border border-black text-black px-6 py-2 rounded-full">
                        <div className="absolute inset-0 w-0 h-full bg-black transition-all duration-200 ease-linear group-hover:w-full"></div>
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">More about agency</span>
                    </Button>
                </div>


            </div>
        </div>
    );
};

export default AgencySection;