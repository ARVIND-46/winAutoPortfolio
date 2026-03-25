import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import winLogo from '../assets/winlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ FIX: Scroll effect — was missing, added properly
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ FIX: Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
  ];

  return (
    // ✅ FIX: Scroll effect — added `transition-all duration-300` so py/bg animates smoothly
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-black/40 backdrop-blur-xl py-4 shadow-[0_10px_40px_rgba(30,58,138,0.15)]'
          : 'bg-transparent py-5 md:py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src={winLogo}
              alt="Win Auto Logo"
              className="w-12 h-12 object-contain brightness-110 shadow-lg"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter uppercase leading-none text-white">
                WIN <span className="font-light text-blue-500">AUTO</span>
              </span>
              <span className="text-[7px] font-bold tracking-[0.3em] uppercase text-blue-500/50">
                House of Genuine Parts
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="relative text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-[0.1em] text-[10px] transition-all duration-200 hover:bg-white hover:text-black"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white hover:text-blue-500 transition-colors duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-2xl border-t border-white/5 shadow-2xl px-6 py-10 space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-black text-white hover:text-blue-500 transition-colors duration-200 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center border border-white/20 text-white py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;