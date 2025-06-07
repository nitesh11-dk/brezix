'use client';

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from "@/components/Navbar";
import HeroSection from "@/pages/HeroSection";
import Navigation from "@/pages/Navigation";
import Menubar from "@/components/Menubar";
import Projects from "@/pages/Projects";
import Testomonial from "@/pages/Testomonial";
import Fotter from "@/pages/Fotter";

const Main = () => {
    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        // Cleanup function
        return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen overflow-hidden relative">
            <Menubar />
            <Navbar />
            <Navigation />
            <HeroSection />
            <Projects />
            <Testomonial />
            <Fotter />
        </div>
    );
};

export default Main; 