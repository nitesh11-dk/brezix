import Navbar from "@/components/Navbar"
import HeroSection from "@/pages/HeroSection"
import Navigation from "@/pages/Navigation"
import Menubar from "@/components/Menubar"
import ProjectPreview from "@/pages/ProjectPreview"
export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">

      <Menubar />
      <Navigation />
      <Navbar />
      <HeroSection />
      <ProjectPreview />



      <div className="h-screen w-full  bg-blue-400"></div>
      <div className="h-screen w-full  bg-red-400"></div>
    </div>
  )
}
