import { RadioTower, ShoppingCart, DollarSign, Heart, Factory, Video, Monitor } from "lucide-react";

const industries = [
  {
    icon: RadioTower,
    name: "Communications",
    color: "text-orange-500",
  },
  {
    icon: ShoppingCart,
    name: "Consumer & Retail",
    color: "text-orange-500",
  },
  {
    icon: DollarSign,
    name: "Finance",
    color: "text-orange-500",
  },
  {
    icon: Heart,
    name: "Healthcare",
    color: "text-orange-500",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    color: "text-orange-500",
  },
  {
    icon: Video,
    name: "Media",
    color: "text-orange-500",
  },
  {
    icon: Monitor,
    name: "Technology",
    color: "text-orange-500",
  },
];

export const Industries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries</h2>
          <p className="text-2xl md:text-3xl text-gray-600">We Specialize In</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                  <industry.icon className={`w-10 h-10 ${industry.color}`} />
                </div>
                <p className="text-gray-800 font-medium text-center text-sm md:text-base">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};