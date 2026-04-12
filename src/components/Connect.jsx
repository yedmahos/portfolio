import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { socialLinks, bio, WhatsAppIcon } from '../data/portfolio';

const Connect = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-background">
      {/* Header Section with Watermark */}
      <div className="w-full relative pt-2 md:pt-8 pb-8 flex flex-col justify-center mb-12">
        <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 opacity-100 pointer-events-none z-0">
          <h1 className="text-[16vw] font-black leading-none text-white/10 select-none overflow-hidden uppercase">
            CONNECT
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:pl-20 relative z-10 text-left">
          {/* Main section heading removed as requested, keeping only the watermark */}
        </div>
      </div>
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none z-0">
        <div className="w-full h-full bg-primary blur-[120px] rounded-full translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Heading & Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-none">
                <span className="gradient-text">LET'S BUILD</span>
                <br />
                <span className="text-foreground">SOMETHING.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md mt-6">
                Have an idea? Let's turn it into reality. I'm always open to new projects and architectural insights.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex flex-col gap-4">
                <a 
                  href={`mailto:${bio.email}`}
                  className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-[#EA4335] transition-colors group w-fit"
                >
                  <Mail className="w-6 h-6 text-[#EA4335]" />
                  <span>{bio.email}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>

                <a 
                  href="https://wa.me/919475565982"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg md:text-xl font-medium hover:text-[#25D366] transition-colors group w-fit"
                >
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </div>

              <div className="mt-8 pt-6 lg:pt-8 border-t border-border">
                <div className="flex items-center gap-3 text-lg md:text-xl font-medium text-foreground mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>{bio.location}</span>
                </div>
                <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border border-white/10 relative shadow-lg group">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(bio.location)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      title="Location Map"
                    ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-lg"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-lg"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-lg bg-gradient text-white font-bold flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-[0.98] ${
                  submitted ? 'bg-green-600' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Connect;
