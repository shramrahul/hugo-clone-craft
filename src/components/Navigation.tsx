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
      <div className="bg-[#FEF7CD] text-sm py-2 text-center">
        Avega Solutions is hiring! Explore our positions and <a href="/careers" className="underline">apply today</a>.
      </div>
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          <a href="/" className="flex items-center bg-transparent">
            <img src="/lovable-uploads/ed543da6-8cf5-475b-813e-b5e0f6060af5.png" alt="Avega Solutions" className="h-12" />
          </a>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? "absolute top-full left-0 right-0 bg-white p-4 shadow-lg" : "hidden"}`}>
            <a 
              href="/careers" 
              className="flex items-center hover:opacity-70 transition-opacity"
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
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <Server className="w-4 h-4 mr-1" /> Services
            </button>
            <button 
              onClick={() => scrollToSection('insights')} 
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              <BarChart className="w-4 h-4 mr-1" /> Insights
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              About Us
            </button>
            <button 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              onClick={() => document.querySelector<HTMLButtonElement>('[data-trigger="contact"]')?.click()}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};