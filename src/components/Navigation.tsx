import { useState } from "react";
import { Menu, X, ChevronDown, User, Server, BarChart } from "lucide-react";
import { GetStartedForm } from "./GetStartedForm";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      console.warn(`Section with id "${sectionId}" not found`);
    }
  };

  return (
    <>
      <div className="bg-[#FEF7CD] text-xs sm:text-sm py-2 text-center px-4">
        Avega Solutions is hiring! Explore our positions and <a href="/careers" className="underline">apply today</a>.
      </div>
      <nav className="bg-white border-b relative">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <a href="/" className="flex items-center bg-transparent">
            <img src="/lovable-uploads/ed543da6-8cf5-475b-813e-b5e0f6060af5.png" alt="Avega Solutions" className="h-8 sm:h-12" />
          </a>
          
          <button
            className="lg:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-8 ${
            isMenuOpen 
              ? "absolute top-full left-0 right-0 bg-white p-4 shadow-lg flex flex-col z-40" 
              : "hidden"
          }`}>
            <a 
              href="/careers" 
              className="flex items-center hover:opacity-70 transition-opacity px-4 py-2 lg:p-0"
              onClick={(e) => {
                e.preventDefault();
                navigate('/careers');
                setIsMenuOpen(false);
              }}
            >
              <User className="w-4 h-4 mr-1" /> Careers
            </a>
            <button 
              onClick={() => scrollToSection('expertise')} 
              className="flex items-center hover:opacity-70 transition-opacity px-4 py-2 lg:p-0 w-full lg:w-auto text-left"
            >
              <Server className="w-4 h-4 mr-1" /> Services
            </button>
            <button 
              onClick={() => scrollToSection('insights')} 
              className="flex items-center hover:opacity-70 transition-opacity px-4 py-2 lg:p-0 w-full lg:w-auto text-left"
            >
              <BarChart className="w-4 h-4 mr-1" /> Insights
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center hover:opacity-70 transition-opacity px-4 py-2 lg:p-0 w-full lg:w-auto text-left"
            >
              About Us
            </button>
            <button 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-full lg:w-auto"
              onClick={() => {
                document.querySelector<HTMLButtonElement>('[data-trigger="contact"]')?.click();
                setIsMenuOpen(false);
              }}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};