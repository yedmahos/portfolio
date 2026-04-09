import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-10 bg-[#3b1c32] bg-[url('/upsell-bg.svg')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
      {/* Header Section */}
      <div className="w-full relative pt-2 md:pt-8 pb-8 flex flex-col justify-center">
        <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 opacity-100 pointer-events-none z-0">
          <h1 className="text-[16vw] font-black leading-none text-white/15 select-none overflow-hidden uppercase">
            EDUCATION
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
              Education
            </motion.h2>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/e/ef/KIIT_logo.svg"
                  alt="KIIT"
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-foreground/90 mb-2 uppercase">
                  KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY
                </h3>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  Bachelor of Technology in Computer Science
                </p>
                <p className="text-sm text-primary-foreground/70 mt-1">
                  Aug'24 - Jun'28
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
