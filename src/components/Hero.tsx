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
        <div className={`lg:w-1/2 relative transform transition-all duration-700 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="grid grid-cols-3 gap-6 animate-fade-in">
            {Array(9).fill(null).map((_, i) => (
              <div 
                key={i} 
                className={`aspect-square rounded-full ${
                  i % 3 === 0 ? 'bg-[#FFB800]/10 border-2 border-[#FFB800]' : 
                  i % 2 === 0 ? 'bg-blue-50 border border-blue-200' : 
                  'bg-gray-50 border border-gray-200'
                } transform transition-transform hover:scale-105 duration-300`}
                style={{
                  animationDelay: `${i * 100}ms`
                }}
              />
            ))}
          </div>
          
          <div className="absolute top-1/4 right-1/4 transform hover:scale-110 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Team member" 
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover animate-fade-in" 
            />
          </div>
          <div className="absolute bottom-1/3 left-1/3 transform hover:scale-110 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1501286353178-1ec881214838" 
              alt="Team member" 
              className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover animate-fade-in" 
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6 mt-24 lg:mt-0 lg:pl-12">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
            Transform Your Business
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Empowering Innovation Through Expert Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Partner with us to unlock your business potential. We combine industry expertise with cutting-edge technology to deliver transformative solutions that drive real results.
          </p>
          <GetStartedForm />
          
          <div className="mt-8 bg-[#E5F9FB] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                alt="Case study" 
                className="w-16 h-16 rounded-lg object-cover" 
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How Hugo Helped A Leading Innovator Confront Inclusion Gaps</h3>
                <p className="text-base text-gray-600 leading-relaxed">
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