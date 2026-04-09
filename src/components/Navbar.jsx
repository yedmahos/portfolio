import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, bio } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const onResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 right-0 z-[60] bg-background/30 backdrop-blur-xl border-b border-border/40"
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-full border border-[#3b1c32] overflow-hidden flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-bold text-primary tracking-tight whitespace-nowrap truncate">{bio.name}</span>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onResumeClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 border"
            >
              <Download className="h-4 w-4 mr-1" />
              Resume
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-background/40 backdrop-blur-2xl z-[50] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-colors text-left"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="text-xl font-medium">{link.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
