import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { socialLinks } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:pl-20 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary">soham dey</h3>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors`}
                  style={{
                    color: social.color,
                    '--hover-bg': `${social.color}1A`, // 10% opacity
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${social.color}1A`}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  aria-label={social.platform}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} soham dey. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
