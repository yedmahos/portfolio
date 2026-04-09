import React from 'react';
import { motion } from 'framer-motion';

/**
 * Achievement Component
 * 
 * This component was extracted and de-minified from the portfolio bundle.
 * It renders the "Certificates" section with hover animations and responsive grid.
 */
const Achievement = ({ fromProject = false }) => {
    // Animation variants extracted from the original bundle
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                duration: fromProject ? 0 : 0.6, 
                staggerChildren: fromProject ? 0 : 0.3 
            } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: fromProject ? 0 : 0.6 } 
        }
    };

    return (
        <section id="certificates" className="py-6 sm:py-10 lg:py-20 bg-[#3b1c32] bg-[url('/upsell-bg.svg')] bg-no-repeat bg-center bg-cover relative overflow-hidden">
            {/* Header Section */}
            <div className="w-full relative pt-2 md:pt-8 pb-8 flex flex-col justify-center">
                <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 pointer-events-none z-0">
                    <h1 className="text-[13vw] font-black leading-none text-white/15 select-none overflow-hidden uppercase">
                        ACHIEVEMENTS
                    </h1>
                </div>
                
                <div className="w-full max-w-7xl mx-auto px-6 md:pl-20 relative z-10 text-left">
                    <motion.div 
                        variants={containerVariants}
                        initial={fromProject ? "visible" : "hidden"}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.h2 
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground"
                        >
                            <span>Achievements</span>
                        </motion.h2>
                    </motion.div>
                </div>
            </div>
                    
            <div className="max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial={fromProject ? "visible" : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* AWS Solutions Architect - Associate */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                                    alt="AWS" 
                                    className="w-16 h-16 object-contain" 
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground/90 mb-2">
                                    AWS Certified
                                </h3>
                                <p className="text-sm text-primary-foreground/70 mt-1">
                                    Solutions Architect - Associate
                                </p>
                            </div>
                        </motion.div>

                        {/* AWS Machine Learning Engineer - Associate */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                                    alt="AWS" 
                                    className="w-16 h-16 object-contain" 
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground/90 mb-2">
                                    AWS Certified
                                </h3>
                                <p className="text-sm text-primary-foreground/70 mt-1">
                                    Machine Learning Engineer - Associate
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievement;
