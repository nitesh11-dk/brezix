import { Inter } from 'next/font/google'
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

      
        
      </header>

    </div>
  )
}

export default header ;
