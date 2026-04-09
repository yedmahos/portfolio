import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../data/portfolio';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex fixed left-0 top-0 h-full w-16 bg-white/[0.03] backdrop-blur-[20px] border-r border-white/10 flex-col items-center py-6 z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-8"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border border-[#3b1c32]">
          <img src="/logo.png" alt="Logo" />
        </div>
      </motion.div>

      <nav className="flex-1 flex flex-col gap-8 items-center justify-center">
        {navLinks.map((link, i) => {
          const isActive = activeSection === link.id;
          return (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
              className="relative group"
            >
              <button
                onClick={() => scrollToSection(link.id)}
                className={`p-3 rounded-lg transition-all duration-200 hover:bg-primary/10 group ${
                  isActive ? 'bg-gradient' : 'text-muted-foreground hover:text-foreground'
                }`}
                data-state="closed"
              >
                <link.icon className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? 'text-primary-foreground' : ''
                }`} />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border shadow-sm">
                  {link.title}
                </div>
              </button>
            </motion.div>
          );
        })}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
