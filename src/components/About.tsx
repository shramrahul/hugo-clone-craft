export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-gray-900 text-center">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-up">
              <div className="bg-white/80 p-8 rounded-2xl shadow-sm backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Welcome to Avega</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  At Avega, we are dedicated to transforming businesses through innovative IT solutions and cutting-edge technologies. 
                  With a focus on excellence, we provide services that optimize operations, enhance efficiency, and drive digital transformation. 
                  Our team of experts works closely with clients to ensure they stay ahead of the technological curve, enabling growth and success 
                  in an ever-evolving digital world.
                </p>
              </div>
            </div>

            <div className="space-y-8 animate-fade-up delay-100">
              <div className="bg-white/80 p-8 rounded-2xl shadow-sm backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Values</h3>
                <p className="text-base text-gray-600 mb-6">
                  Advanced Visionary Engineering & Growth Associates
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-base">Advanced: At the forefront of technology, providing progressive solutions</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    <span className="text-base">Visionary: Anticipating the future of business and technology with foresight</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-base">Engineering: Leveraging technical expertise to design robust, scalable systems</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    <span className="text-base">Growth: Driving sustainable growth through innovative IT strategies</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-base">Associates: A collaborative network of professionals working together</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};