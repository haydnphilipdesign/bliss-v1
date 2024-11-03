import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Create smooth transitions for both transform and opacity
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '-100%']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        scale,
        opacity,
      }}
      className="relative w-full min-h-screen will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;