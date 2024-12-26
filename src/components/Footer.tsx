import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <a href="#" className="block hover:text-gray-300">Digital Strategy</a>
            <a href="#" className="block hover:text-gray-300">Experience Design</a>
            <a href="#" className="block hover:text-gray-300">Technology</a>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Work</h3>
            <a href="#" className="block hover:text-gray-300">Case Studies</a>
            <a href="#" className="block hover:text-gray-300">Industries</a>
            <a href="#" className="block hover:text-gray-300">Clients</a>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <a href="#" className="block hover:text-gray-300">Our Story</a>
            <a href="#" className="block hover:text-gray-300">Team</a>
            <a href="#" className="block hover:text-gray-300">Careers</a>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a href="#" className="block hover:text-gray-300">Get in Touch</a>
            <a href="#" className="block hover:text-gray-300">Support</a>
            <div className="mt-4">
              <a href="#" className="block hover:text-gray-300">Twitter</a>
              <a href="#" className="block hover:text-gray-300">Instagram</a>
              <a href="#" className="block hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 GlobalLogic Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};