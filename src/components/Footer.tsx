import { GetStartedForm } from "./GetStartedForm";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900">Let's Work Together</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            We're always looking for new opportunities and collaborations
          </p>
          <GetStartedForm />
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm sm:text-base text-gray-600">© 2024 Avega Solutions. All rights reserved.</p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Linkedin size={18} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Twitter size={18} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Facebook size={18} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Youtube size={18} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Instagram size={18} className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};