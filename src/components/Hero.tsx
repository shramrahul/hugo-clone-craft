import { useEffect, useState } from "react";
import { GetStartedForm } from "./GetStartedForm";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, BarChart, Shield } from "lucide-react";

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

  const features = [
    {
      title: "Software Development",
      icon: <Code className="w-6 h-6" />,
      description: "Custom Solutions",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="w-6 h-6" />,
      description: "Scalable Infrastructure",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Data Analytics",
      icon: <BarChart className="w-6 h-6" />,
      description: "Insights & Intelligence",
      color: "from-pink-500/20 to-orange-500/20"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      description: "Protected Systems",
      color: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-[0.15]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Leading IT Consulting Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 bg-clip-text text-transparent"
            >
              Transforming Businesses Through Technology Excellence
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

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl filter blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4 p-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
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