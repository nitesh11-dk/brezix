import { Button } from "@/components/ui/button"
import { RiMenu4Line } from "react-icons/ri";
import { Inter } from 'next/font/google'
import { IoIosArrowDown } from "react-icons/io";
import SlideUpText from "@/helpers/SlideUpText";
import { navLinks } from "@/constants";
const inter = Inter({
  subsets: ['latin'],
})

const header = () => {
  return (
    <div>
      <header className={`absolute md:top-2 left-0 z-20 w-2/3 flex items-center justify-between px-8 py-6 ${inter.className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
          </div>
          <span className="text-white font-semibold text-lg">Brezix</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-full px-10 py-3">
         {navLinks.map((link, index) => (
    <a
      key={index}
      href={link.href}
      className={`font-medium group ${
        link.animated ? 'text-black' : 'text-gray-700 hover:text-purple-600'
      }`}
    >
      {link.animated ? <SlideUpText content={link.label} /> : link.label}
    </a>
  ))}
        </nav>

        <div className="   fixed top-4 md:top-8 right-6 flex items-center space-x-6 z-100">
 <Button className=" hidden md:flex  group border-none relative overflow-hidden bg-white text-black text-md  rounded-full px-4 py-3 font-medium">

  <div className="absolute inset-0 rounded-3xl w-0 h-full bg-blue-600 transition-all duration-200 ease-linear group-hover:w-full z-0"></div>

  <span className="z-10 mr-1 text-xl transition-colors duration-300 group-hover:text-white">+</span>

  <div className="z-10 h-6 overflow-hidden">
    <div className="relative flex flex-col top-0 transition-all duration-300 group-hover:-top-6 group-hover:text-white">
      Become a Client
      <span>Become a Client</span>
    </div>
  </div>
</Button>
          <span className="text-white font-medium  border border-white flex items-center p-2  px-4 rounded-2xl gap-3">EN <IoIosArrowDown /></span>
          <span className="text-white p-3  bg-slate-200 rounded-full "><RiMenu4Line size={24} />
</span>
        </div>

        
      </header>

    </div>
  )
}

export default header ;
