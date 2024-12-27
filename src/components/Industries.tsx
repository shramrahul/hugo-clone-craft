import { RadioTower, ShoppingCart, DollarSign, Heart, Factory, Video, Monitor } from "lucide-react";

const industries = [
  {
    icon: RadioTower,
    name: "Communications",
    color: "text-purple-500",
  },
  {
    icon: ShoppingCart,
    name: "Consumer & Retail",
    color: "text-blue-500",
  },
  {
    icon: DollarSign,
    name: "Finance",
    color: "text-violet-500",
  },
  {
    icon: Heart,
    name: "Healthcare",
    color: "text-indigo-500",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    color: "text-purple-500",
  },
  {
    icon: Video,
    name: "Media",
    color: "text-blue-500",
  },
  {
    icon: Monitor,
    name: "Technology",
    color: "text-violet-500",
  },
];

export const Industries = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 bg-clip-text text-transparent">Industries</h2>
          <p className="text-lg text-gray-600">We Specialize In</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl border border-purple-100">
                  <industry.icon className={`w-10 h-10 ${industry.color}`} />
                </div>
                <p className="text-gray-800 font-medium text-center text-base">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};