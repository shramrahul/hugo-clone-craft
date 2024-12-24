import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`space-y-6 max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Create Digital Experiences That Matter
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            A creative agency focused on brand strategy, design, and development
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
};