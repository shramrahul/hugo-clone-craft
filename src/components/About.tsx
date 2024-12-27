import { Heart, Shield, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are passionate about delivering innovative solutions that transform businesses. 
              Our commitment to excellence and customer satisfaction drives everything we do, 
              making us a trusted partner in digital transformation.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Customer First",
                description: "Dedicated to exceeding client expectations with exceptional service"
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Trust & Quality",
                description: "Delivering reliable solutions with unwavering commitment to excellence"
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Innovation",
                description: "Pioneering cutting-edge solutions for tomorrow's challenges"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-4 mx-auto flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Projects" },
              { number: "50+", label: "Global Clients" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};