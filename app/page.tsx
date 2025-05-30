import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Star } from "lucide-react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/pages/HeroSection"
export default function LandingPage() {
  return (
    <div className="min-h-screen  relative overflow-hidden">

<Navbar/>
<HeroSection/>
    

      
      <div className="h-screen w-full  bg-red-400"></div>
    </div>
  )
}
