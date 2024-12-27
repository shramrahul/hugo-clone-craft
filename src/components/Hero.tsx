import { useEffect, useState } from "react";
import { GetStartedForm } from "./GetStartedForm";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-4 gap-4">
            {Array(16).fill(null).map((_, i) => (
              <div 
                key={i} 
                className={`w-20 h-20 rounded-full ${
                  i % 3 === 0 ? 'border-4 border-[#FFB800]' : 'border-2 border-gray-100'
                }`}
              />
            ))}
          </div>
          {/* Add profile images */}
          <div className="absolute top-1/4 right-1/4">
            <img src="/placeholder.svg" alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>
          <div className="absolute bottom-1/3 left-1/3">
            <img src="/placeholder.svg" alt="Team member" className="w-12 h-12 rounded-full border-2 border-white" />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6 mt-12 lg:mt-0">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-base">
            Transform Your Business
          </div>
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Innovation Through Expert Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Partner with us to unlock your business potential. We combine industry expertise with cutting-edge technology to deliver transformative solutions that drive real results.
          </p>
          <GetStartedForm />
          
          <div className="mt-12 bg-[#E5F9FB] p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <img src="/placeholder.svg" alt="Case study" className="w-16 h-16 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold mb-2">How Hugo Helped A Leading Innovator Confront Inclusion Gaps</h3>
                <p className="text-base text-gray-600">
                  Learn how Hugo, by collecting 600,000 tailored photo IDs in just three months, significantly enhanced AI inclusivity through a collaboration with a leading tech innovator, improving visual recognition technology.
                </p>
                <div className="mt-4 h-1 bg-gray-200 rounded">
                  <div className="w-3/4 h-full bg-black rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};