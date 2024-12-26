import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left side - Navigation Links */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-6">
            <div className="space-y-4">
              <a href="#" className="block text-lg hover:text-gray-300">Services</a>
              <a href="#" className="block text-lg hover:text-gray-300">Work</a>
              <a href="#" className="block text-lg hover:text-gray-300">Insights</a>
              <a href="#" className="block text-lg hover:text-gray-300">Careers</a>
            </div>
            <div className="space-y-4">
              <a href="#" className="block text-lg hover:text-gray-300">About</a>
              <a href="#" className="block text-lg hover:text-gray-300">Privacy</a>
              <a href="#" className="block text-lg hover:text-gray-300">Compliance & Disclosures</a>
              <a href="#" className="block text-lg hover:text-gray-300">Contact</a>
            </div>
          </div>

          {/* Right side - Social Icons and Copyright */}
          <div className="mt-8 lg:mt-0 flex flex-col items-end space-y-6">
            <div className="flex space-x-4">
              <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                <Linkedin className="w-5 h-5 text-[#333333]" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                <Twitter className="w-5 h-5 text-[#333333]" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                <Facebook className="w-5 h-5 text-[#333333]" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                <Youtube className="w-5 h-5 text-[#333333]" />
              </a>
              <a href="#" className="bg-white rounded-full p-2 hover:opacity-80">
                <Instagram className="w-5 h-5 text-[#333333]" />
              </a>
            </div>
            <p className="text-sm">2024 Copyright GlobalLogic Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};