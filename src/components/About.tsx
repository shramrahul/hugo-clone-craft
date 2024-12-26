export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                At Avega Solutions, we're dedicated to empowering businesses through innovative technology solutions. Our mission is to bridge the gap between complex business challenges and cutting-edge technology, delivering transformative results that drive growth and success.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                We envision a future where every organization, regardless of size or industry, can harness the full potential of technology to achieve their goals. Through our expertise and commitment to excellence, we're working to make this vision a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};