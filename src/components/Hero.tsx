import { useEffect, useState } from "react";
import { GetStartedForm } from "./GetStartedForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              Transforming Business with Technology Excellence <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold leading-tight tracking-wide"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-blue-600 font-black mr-2 hover:scale-110 transition-transform duration-300"
            >
              A
            </motion.span>
            <span className="inline-block text-gray-700 mr-2">dvancing</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block text-blue-600 font-black mr-2 hover:scale-110 transition-transform duration-300"
            >
              V
            </motion.span>
            <span className="inline-block text-gray-700 mr-2">aluable</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-block text-blue-600 font-black mr-2 hover:scale-110 transition-transform duration-300"
            >
              E
            </motion.span>
            <span className="inline-block text-gray-700 mr-2">xpertise in</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-block text-blue-600 font-black mr-2 hover:scale-110 transition-transform duration-300"
            >
              G
            </motion.span>
            <span className="inline-block text-gray-700 mr-2">lobal</span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="inline-block text-blue-600 font-black mr-2 hover:scale-110 transition-transform duration-300"
            >
              A
            </motion.span>
            <span className="inline-block text-gray-700">pplications</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Partner with us to unlock your digital potential. We deliver innovative solutions that drive growth and efficiency in the modern business landscape.
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4">
            <GetStartedForm />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};