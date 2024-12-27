import React from "react";

export const CareersHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/photo-1519389950473-47ba0277781c')",
          opacity: 0.4
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            Join Our Team of Innovators
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Be part of a team that's transforming businesses through technology excellence. 
            We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">50+</span>
              </div>
              <span>Open Positions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">15+</span>
              </div>
              <span>Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">4.8</span>
              </div>
              <span>Employee Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};