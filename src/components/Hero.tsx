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
    <div className="relative py-12 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:w-1/2 relative z-10"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-6"
          >
            Leading IT Consulting Solutions
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6"
          >
            Transforming Businesses Through Technology Excellence
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mb-8"
          >
            Partner with us to unlock your digital potential. We deliver innovative solutions that drive growth, efficiency, and competitive advantage in the modern business landscape.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <GetStartedForm />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                  alt="Success story" 
                  className="w-20 h-20 rounded-lg object-cover shadow-md" 
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation Success Story
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  See how we helped a global enterprise achieve 200% ROI through strategic IT consulting and implementation of cutting-edge solutions.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="h-1 flex-grow bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-gray-500">75% Success Rate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-3xl" />
            <div className="relative grid grid-cols-3 gap-4">
              {Array(9).fill(null).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`aspect-square rounded-2xl ${
                    i % 3 === 0 ? 'bg-blue-500/10 border-2 border-blue-500/30' :
                    i % 2 === 0 ? 'bg-purple-500/10 border-2 border-purple-500/30' :
                    'bg-gray-500/10 border-2 border-gray-500/30'
                  } transform transition-transform hover:scale-105 duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>

            <motion.div 
              className="absolute top-1/4 right-1/4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                alt="Team member" 
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover" 
              />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/3 left-1/3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1501286353178-1ec881214838" 
                alt="Team member" 
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover" 
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

<lov-add-dependency>framer-motion@latest</lov-add-dependency>