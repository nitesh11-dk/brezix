import { Inter } from 'next/font/google'
import SlideUpText from "@/helpers/SlideUpText";
import { navLinks } from "@/constants";
import { useForm } from "@/context/FormContext";

const inter = Inter({
  subsets: ['latin'],
})

const Header = () => {
  const { openForm } = useForm();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#contact') {
      e.preventDefault();
      openForm();
    }
  };

  return (
    <div>
      <header className={`absolute md:top-2 left-0 z-20 w-2/3 flex items-center justify-between px-8 py-6 ${inter.className}`}>
        <div className="flex items-center space-x-2">
          <div className="rounded-lg flex items-center justify-center">
            <img className="w-12" src="/logo.png" alt="logo" />
          </div>
          <span className="text-white font-semibold text-lg">Brezix</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 bg-white/90 backdrop-blur-sm rounded-full px-10 py-3">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`font-medium group ${link.animated ? 'text-black' : 'text-gray-700 hover:text-purple-600'}`}
            >
              {link.animated ? <SlideUpText content={link.label} /> : link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}

export default Header;
