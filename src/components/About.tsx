import { Heart, Shield, Star } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Avega Solutions, we are committed to{" "}
              <span className="font-semibold animate-pulse hover:text-blue-600 transition-colors cursor-default">A</span>dvancing{" "}
              <span className="font-semibold animate-pulse hover:text-blue-600 transition-colors cursor-default">V</span>aluable{" "}
              <span className="font-semibold animate-pulse hover:text-blue-600 transition-colors cursor-default">E</span>xpertise in{" "}
              <span className="font-semibold animate-pulse hover:text-blue-600 transition-colors cursor-default">G</span>lobal{" "}
              <span className="font-semibold animate-pulse hover:text-blue-600 transition-colors cursor-default">A</span>pplications.
              Our IT consulting services help businesses enhance efficiency, integrate innovative technologies, and drive growth. 
              With a customer-first approach, we provide tailored solutions to meet your unique needs and solve complex challenges.
            </p>
          </div>

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
                <div className="text-2xl font-bold text-gray-900">
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