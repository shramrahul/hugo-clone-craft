import { useEffect, useState } from "react";
import { GetStartedForm } from "./GetStartedForm";
import { motion } from "framer-motion";

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
    <div className="relative py-8 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-4"
            >
              Leading IT Consulting Solutions
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-4"
            >
              Transforming Businesses Through Technology Excellence
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 leading-relaxed mb-6"
            >
              Partner with us to unlock your digital potential. We deliver innovative solutions that drive growth and efficiency.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <GetStartedForm />
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl filter blur-2xl" />
              <div className="relative grid grid-cols-2 gap-3 p-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`aspect-square rounded-xl ${
                      i % 2 === 0 ? 'bg-blue-500/10' : 'bg-purple-500/10'
                    } p-4 flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${1580000000000 + i}`} 
                      alt={`Technology ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};