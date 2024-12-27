export const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              About Avega Solutions
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Empowering businesses through innovative technology solutions and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-up">
              <div className="bg-white/70 p-8 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Avega Solutions, we are committed to delivering cutting-edge technology solutions that drive business growth and innovation. Our mission is to empower organizations with transformative digital solutions that optimize operations, enhance efficiency, and create sustainable competitive advantages.
                </p>
              </div>
              
              <div className="bg-white/70 p-8 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                    <span className="text-gray-600">Expert team with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                    <span className="text-gray-600">Innovative solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                    <span className="text-gray-600">Proven track record of successful implementations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></span>
                    <span className="text-gray-600">Commitment to long-term partnerships</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8 animate-fade-up delay-100">
              <div className="bg-white/70 p-8 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Approach</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation First</h4>
                    <p className="text-gray-600">
                      We stay ahead of technological trends to bring you the most advanced solutions that drive real business value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client-Centric</h4>
                    <p className="text-gray-600">
                      Your success is our priority. We work closely with you to understand your unique challenges and deliver tailored solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quality Focused</h4>
                    <p className="text-gray-600">
                      We maintain the highest standards in every aspect of our work, ensuring reliable and scalable solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 p-8 rounded-2xl shadow-sm backdrop-blur-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">500+</div>
                    <p className="text-gray-600 mt-2">Projects Delivered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">50+</div>
                    <p className="text-gray-600 mt-2">Global Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">15+</div>
                    <p className="text-gray-600 mt-2">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">100%</div>
                    <p className="text-gray-600 mt-2">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};