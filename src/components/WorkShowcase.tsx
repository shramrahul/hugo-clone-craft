import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Software Development",
    description: "Custom software solutions and enterprise applications",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
  },
  {
    title: "Cloud Solutions",
    description: "Cloud migration and infrastructure optimization",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  },
  {
    title: "Digital Transformation",
    description: "Business process automation and modernization",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions and compliance",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
  },
];

export const WorkShowcase = () => {
  return (
    <section id="expertise" className="py-12 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 bg-clip-text text-transparent">Our Expertise</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          We deliver cutting-edge IT consulting services across various sectors, helping businesses transform and thrive in the digital age.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                  <p className="text-gray-200">{sector.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};