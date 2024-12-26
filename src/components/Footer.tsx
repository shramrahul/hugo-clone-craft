export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Avega Solutions delivers innovative technology solutions to help businesses thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Technology Consulting</li>
              <li>Digital Transformation</li>
              <li>Cloud Solutions</li>
              <li>Data Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@avegasolutions.com</li>
              <li>1-800-AVEGA</li>
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-300">
            © 2024 Avega Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};