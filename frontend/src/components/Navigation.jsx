import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", "href": "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Header Row: Logo on left, Toggles on right */}
        <div className="flex items-center justify-between h-16 relative">
          
          {/* Logo (Always Visible) */}
          <div className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
            Badigi Aswartha Reddy
          </div>

          {/* 1. Desktop Menu (Visible MD and up) */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            {/* Desktop Theme Toggle (CORRECTLY inside the hidden md:flex container) */}
            <button 
              className="ml-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle Theme"
            >
              🌙
            </button>
          </div>

          {/* 2. Mobile Toggles Group (Visible only below MD) */}
          {/* ✅ FIX: Grouping the theme icon and hamburger with flex and space-x-4 */}
          <div className="md:hidden flex items-center space-x-3 z-50"> 
            
            {/* Mobile-sized Theme Toggle */}
             <button 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              aria-label="Toggle Theme"
            >
               🌙
            </button> 

            {/* Mobile Hamburger/X Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu Dropdown (Controlled by isOpen) */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          {/* Optional: Add theme toggle here if you prefer it in the vertical list */}
          {/* <button className="w-full text-left px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition duration-300 font-medium">
            🌙 Toggle Theme
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;