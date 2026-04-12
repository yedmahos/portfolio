import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.2,
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section id="experience" className="py-10 bg-[#3b1c32] bg-[url('/upsell-bg.svg')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
      {/* Header Section */}
      <div className="w-full relative pt-2 md:pt-8 pb-8 flex flex-col justify-center">
        <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 opacity-100 pointer-events-none z-0">
          <h1 className="text-[16vw] font-black leading-none text-white/15 select-none overflow-hidden uppercase">
            EXPERIENCE
          </h1>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-6 md:pl-20 relative z-10 text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
            >
              Experience
            </motion.h2>
          </motion.div>
        </div>
      </div>
              
      <div className="max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative border-l-[3px] border-transparent pl-6 md:pl-10 ml-2 md:ml-4 space-y-12"
          >
            {/* Animated Connector Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-[-1.5px] top-0 w-[3px] bg-gradient-to-b from-primary/80 via-white/20 to-transparent rounded-full"
            />
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative group cursor-default"
                style={{ "--hover-color": exp.color || "#EA4335" }}
              >
                <div 
                  className="absolute -left-[36.5px] md:-left-[52.5px] top-1 w-5 h-5 rounded-full border-4 border-[#3b1c32] bg-[var(--hover-color)] shadow-[0_0_10px_var(--hover-color)] group-hover:scale-[1.3] group-hover:shadow-[0_0_20px_var(--hover-color)] transition-all duration-300 z-10" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                  {/* Left side: Duration */}
                  <div className="md:col-span-3 text-white/60 font-medium pt-1 text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                    {exp.duration}
                  </div>
                  
                  {/* Right side: Content Card */}
                  <div className="md:col-span-9 bg-[#3b1c32]/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl group-hover:bg-[#3b1c32]/95 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/10 group-hover:border-white/20 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-white/40 font-bold text-xl group-hover:text-white/70 transition-colors duration-300">{exp.company.charAt(0)}</div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--hover-color)] transition-colors duration-300">{exp.title}</h3>
                        <h4 className="text-base md:text-lg text-white/80 group-hover:text-white transition-colors duration-300">{exp.company}</h4>
                      </div>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base group-hover:text-white/90 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
