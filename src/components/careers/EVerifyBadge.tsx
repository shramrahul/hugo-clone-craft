import React from "react";

export const EVerifyBadge = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <img 
          src="/lovable-uploads/everify-logo.png" 
          alt="E-Verify Logo" 
          className="h-12 sm:h-16 w-auto"
        />
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base text-gray-700">
            Avega Solutions is proud to be an E-Verify® employer. We are committed to maintaining a legal workforce 
            and supporting a culture of compliance and integrity.
          </p>
        </div>
      </div>
    </div>
  );
};