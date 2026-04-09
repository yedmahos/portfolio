import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index, onMouseEnter, onMouseLeave }) => {
  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.3 },
    }),
  };

  const handleCardClick = () => {
    // Prefer demo link. If no demo, fallback to github. If neither, do nothing.
    const url = project.links?.demo !== "#" ? project.links?.demo : project.links?.github;
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`${project.colSpan} group project-card border border-border/30`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
      style={{ cursor: 'none' }}
    >
      <div className="relative h-44 md:h-56 overflow-hidden group-hover:outline outline-2 outline-primary transition-all duration-300">
        {/* Project Background/Image Container */}
        <div 
          className="absolute inset-[-10px] blur-[3px] opacity-70 transition-transform duration-500 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${project.image})`,
            backgroundSize: project.imageFit || 'cover',
            backgroundPosition: project.imagePosition || 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />

        {/* Default: Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-200">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-3">
            {project.subtitle}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h3>
        </div>

        {/* Hover: Tech stack slides up from bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-semibold translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ transitionDelay: `${i * 75}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CustomCursor = ({ mouseX, mouseY, isVisible }) => {
  const springConfig = { damping: 20, stiffness: 250 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  return (
    <motion.div
      id="custom-cursor"
      className="fixed w-16 h-16 border-2 border-primary rounded-full pointer-events-none z-[9999] bg-transparent backdrop-blur-md flex items-center justify-center p-0"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.2 }}
      style={{
        left: sx,
        top: sy,
        x: "-50%",
        y: "-50%",
      }}
    >
      <div className="relative w-full h-full">
        <ArrowRight className="w-8 h-8 -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="projects" 
      className="mt-10 py-6 sm:py-10 lg:py-20 relative overflow-hidden border-b border-border"
    >
      {/* Header Section */}
      <div className="w-full relative pt-2 md:pt-8 pb-8 md:pb-16 flex flex-col justify-center">
        <div className="absolute top-0 md:top-1/2 md:-translate-y-1/2 left-0 opacity-100 pointer-events-none z-0">
          <h1 className="text-[18vw] font-black leading-none text-foreground/5 select-none overflow-hidden uppercase">
            PROJECTS
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text max-w-fit">
            Projects
          </h2>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 max-w-7xl mx-auto px-6 md:pl-20 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

      <CustomCursor mouseX={mouseX} mouseY={mouseY} isVisible={hoveredIndex !== null} />
    </section>
  );
};

export default Projects;
