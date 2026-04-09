import React from 'react';
import { motion } from 'framer-motion';
import { bio, socialLinks } from '../data/portfolio';
import { Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const onResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Hero Image with Drop Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-40 md:opacity-50"
          style={{ 
            filter: 'blur(4px)',
            transform: 'scale(1.1)' 
          }}
        />
        {/* Gradient Mask for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Background Effect Placeholder (Legacy) */}
      <div data-us-project="koe7cAx55AYEtdiS4kiP" className="w-full h-full absolute top-0 left-0 hidden" />

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="hidden md:block p-[2px] absolute top-6 right-6 z-20 rounded-lg bg-gradient-to-tr from-violet-500 to-pink-500"
      >
        <button
          onClick={onResumeClick}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-white hover:bg-primary/10 text-primary hover:text-white border-none"
        >
          <Download className="h-4 w-4 mr-2" />
          Resume
        </button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 md:pl-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start z-10 lg:col-span-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          >
            <motion.div variants={itemVariants} className="mb-2 md:mb-4">
              <h1 className="text-[2.5rem] md:text-6xl lg:text-8xl font-bold tracking-tight whitespace-nowrap leading-none">
                <span className="gradient-text">{bio.name}</span>
              </h1>
            </motion.div>
 
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                {bio.role}
              </h2>
            </motion.div>
 
            <motion.div variants={itemVariants} className="mb-8 md:mb-12">
              <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-lg">
                {bio.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.filter(s => s.platform !== "Email" && s.platform !== "WhatsApp").map((social) => (
                  <motion.div
                    key={social.platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    tabIndex={0}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-11 transition-colors p-4 rounded-full"
                      style={{
                        color: social.color,
                        borderColor: social.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = social.color;
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = social.color;
                      }}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block z-0"
          >
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden flex items-center justify-center shadow-sm border-2 backdrop-blur-sm border-[#3b1c32]">
              <img
                src="/face.png"
                alt="Profile Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
