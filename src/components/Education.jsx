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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                institution: "ST. PAUL'S ACADEMY",
                degree: "Class X, ICSE",
                duration: "April'11 - May'22",
                logo: "/stpauls.png",
              },
              {
                institution: "MAGNUS GLOBAL SCHOOL",
                degree: "Class XII, Science, CBSE",
                duration: "June'22 - March'24",
                logo: "/magnus.png",
              },
              {
                institution: "KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY",
                degree: "Bachelor of Technology in Computer Science",
                duration: "Aug'24 - Jun'28",
                logo: "https://upload.wikimedia.org/wikipedia/en/e/ef/KIIT_logo.svg",
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 overflow-hidden p-2">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback for when the user hasn't uploaded the logos yet
                      e.target.onerror = null; 
                      e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100' height='100' fill='%23f1f5f9'/><text x='50' y='55' font-family='sans-serif' font-size='30' text-anchor='middle' fill='%2394a3b8'>UI</text></svg>";
                    }}
                  />
                </div>
                
                <div className="text-center px-4 w-full">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-foreground/90 mb-2 uppercase break-words">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {edu.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
