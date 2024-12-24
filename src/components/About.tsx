export const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in creating meaningful digital experiences that connect brands with their audiences. Our process is collaborative, iterative, and focused on delivering exceptional results.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="space-y-4 text-gray-300">
                <li>• Innovation in every detail</li>
                <li>• Commitment to excellence</li>
                <li>• User-centered design</li>
                <li>• Sustainable solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};