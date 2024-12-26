export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-up">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white">Our Approach</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We believe in creating meaningful digital experiences that connect brands 
                  with their audiences. Our process is collaborative, iterative, and focused 
                  on delivering exceptional results that exceed expectations.
                </p>
              </div>
            </div>

            <div className="space-y-8 animate-fade-up delay-100">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-white">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-lg">Innovation in every detail</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className="text-lg">Commitment to excellence</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="text-lg">User-centered design</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    <span className="text-lg">Sustainable solutions</span>
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