import Navbar from "@/components/Navbar"
import HeroSection from "@/pages/HeroSection"
import Navigation from "@/pages/Navigation"
import Menubar from "@/components/Menubar"

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">

<Menubar/>
<Navigation/>
<Navbar/>
<HeroSection/>
    

      
      <div className="h-screen w-full  bg-red-400"></div>
      
    </div>
  )
}
