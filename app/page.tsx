import Navbar from "@/components/Navbar"
import HeroSection from "@/pages/HeroSection"
import Navigation from "@/pages/Navigation"
import Menubar from "@/components/Menubar"
import ProjectPreview from "@/pages/ProjectPreview"
import AboutSection from "@/pages/AboutSection"
import Services from "@/pages/Services"
import Projects from "@/pages/Projects"
import Testomonial from "@/pages/Testomonial"
import Fotter from "@/pages/Fotter"
export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">

      <Menubar />
      <Navbar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Services />
      <ProjectPreview />
      <Projects />
      <Testomonial />
      <Fotter />


    </div>
  )
}
