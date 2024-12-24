import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          HUGO
        </a>
        
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? "absolute top-full left-0 right-0 bg-white p-4 shadow-lg" : "hidden"}`}>
          <a href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </a>
          <a href="#about" className="hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};