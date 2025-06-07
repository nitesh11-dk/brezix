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
import ProjectPreview from './ProjectPreview';
import { Leva } from 'leva'
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
            <Leva collapsed={false} hidden={true} theme={{ sizes: { rootWidth: '320px' } }} />
            <Menubar />
            <Navbar />
            <Navigation />
            <HeroSection />
            <ProjectPreview />
            <Projects />
            <Testomonial />
            <Fotter />
        </div>
    );
};

export default Main; 