import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FormFields } from "./form/FormFields";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-[0.15]" />
      
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2 space-y-8 z-10"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Leading IT Consulting Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-7xl font-bold leading-tight tracking-wide flex items-center justify-start space-x-4"
            >
              <span className="text-blue-600 font-black hover:scale-110 transition-transform duration-300 mr-4">A</span>
              <span className="text-blue-600 font-black hover:scale-110 transition-transform duration-300 mr-4">V</span>
              <span className="text-blue-600 font-black hover:scale-110 transition-transform duration-300 mr-4">E</span>
              <span className="text-blue-600 font-black hover:scale-110 transition-transform duration-300 mr-4">G</span>
              <span className="text-blue-600 font-black hover:scale-110 transition-transform duration-300">A</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Partner with us to unlock your digital potential. We deliver innovative solutions that drive growth and efficiency in the modern business landscape.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2 z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl filter blur-3xl" />
              <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
                  <FormFields />
                  <Button 
                    type="submit" 
                    className="bg-[#2563EB] text-white hover:bg-[#1E40AF] rounded-full px-12 py-6 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Let's Connect
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};