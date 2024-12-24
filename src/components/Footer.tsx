export const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            We're always looking for new opportunities and collaborations
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </a>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">© 2024 HUGO. All rights reserved.</p>
              <div className="space-x-6">
                <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-black">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};