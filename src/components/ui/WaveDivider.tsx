import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ flip = false, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewBox="0 0 1440 120"
        className={`w-full h-auto ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          fill="currentColor"
          className="text-primary-50"
        />
      </motion.svg>
    </div>
  );
};

export default WaveDivider;