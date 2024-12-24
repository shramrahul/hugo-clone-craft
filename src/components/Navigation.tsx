import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { GetStartedForm } from "./GetStartedForm";

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
    <>
      <div className="bg-[#FEF7CD] text-sm py-2 text-center">
        Hugo is hiring! Explore our positions and <a href="#" className="underline">apply today</a>.
      </div>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-3xl font-bold text-[#FFB800]">
            hugo
          </a>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? "absolute top-full left-0 right-0 bg-white p-4 shadow-lg" : "hidden"}`}>
            <div className="relative group">
              <a href="#" className="flex items-center hover:opacity-70 transition-opacity">
                Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Our Agents
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Pricing
            </a>
            <div className="relative group">
              <a href="#" className="flex items-center hover:opacity-70 transition-opacity">
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="flex items-center hover:opacity-70 transition-opacity">
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </a>
            </div>
            <GetStartedForm />
          </div>
        </div>
      </nav>
    </>
  );
};