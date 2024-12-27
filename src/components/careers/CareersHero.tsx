import React from "react";

export const CareersHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#F1F0FB] to-[#D3E4FD] text-gray-800 py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/lovable-uploads/photo-1519389950473-47ba0277781c')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up font-sans tracking-wide leading-tight">
            Join Our Team of Innovators
          </h1>
          <p className="text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Be part of a team that's transforming businesses through technology excellence. 
            We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">50+</span>
              </div>
              <span>Open Positions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">15+</span>
              </div>
              <span>Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4.8</span>
              </div>
              <span>Employee Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};