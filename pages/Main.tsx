'use client';

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/HeroSection";
import Navigation from "@/pages/Navigation";
import Menubar from "@/components/Menubar";
import AboutSection from "@/pages/AboutSection";
// import Services from "@/pages/Services";
import ProjectPreview from "@/pages/ProjectPreview";
import Projects from "@/pages/Projects";
import Testomonial from "@/pages/Testomonial";
import Footer from "@/pages/Footer";
import { Leva } from 'leva'
import ContactForm from "@/components/ContactForm";
import Services from './Services';

const Main = () => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen overflow-hidden relative">
            <Leva collapsed={false} hidden={true} theme={{ sizes: { rootWidth: '320px' } }} />
            <Menubar />
            <Navbar />
            <Navigation />
            <HeroSection />
            <AboutSection />
            <Services />
            <ProjectPreview />
            <Projects />
            <Testomonial />
            <Footer />
            <ContactForm />
        </div>
    );
};

export default Main; 

//   <div className="px-4 py-12 md:px-8 md:py-16">

//          <p className="text-sm text-gray-500 font-semibold mb-2 flex items-center gap-2 md:mb-3">
//                 02 <span className="border w-6 h-[3px] inline-block bg-gray-500"></span>Our Services
//             </p>


// <div className='flex items-center justify-between w-full   h-fit'>
//   <h2 className='  lg:flex text-gray-500 text-xl md:text-2xl lg:text-5xl tracking-wide lg:w-[90%]  py-2 md:mb-6'>As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</h2>
// </div>
//  <div className="heading flex items-center gap-4 border-b pb-2">
//           </div>

   

//     </div>