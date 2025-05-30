import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Star } from "lucide-react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/pages/HeroSection"
export default function LandingPage() {
  return (
    <div className="min-h-screen  relative overflow-hidden">

<Navbar/>
<HeroSection/>
    

      {/* Bottom Review Section */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="flex items-center space-x-4 text-white">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9</span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">GOLD VERIFIED</span> - Our Customers love to work with us,{" "}
            <span className="font-semibold">37 Reviews</span>
          </div>
        </div>
      </div>

      <div className="h-screen w-full  bg-red-400"></div>
    </div>
  )
}
