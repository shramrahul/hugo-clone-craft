import { GetStartedForm } from "./GetStartedForm";
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12">
            We're always looking for new opportunities and collaborations
          </p>
          <GetStartedForm />
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-base text-gray-600">© 2024 Avega Solutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Linkedin size={20} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Twitter size={20} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Facebook size={20} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Youtube size={20} className="text-gray-600" />
                </a>
                <a href="#" className="p-2 rounded-full bg-white hover:bg-gray-50 transition-colors">
                  <Instagram size={20} className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};