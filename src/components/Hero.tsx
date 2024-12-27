import { GetStartedForm } from "./GetStartedForm";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-[0.15]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Transforming Business with Technology Excellence <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide">
            <span className="text-gray-700">Transforming Business with Technology Excellence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Partner with us to unlock your digital potential. We deliver innovative solutions that drive growth and efficiency in the modern business landscape.
          </p>
          
          <div className="pt-4">
            <GetStartedForm />
          </div>
        </div>
      </div>
    </div>
  );
};