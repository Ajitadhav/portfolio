import React from 'react';
import { motion } from 'framer-motion';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Nebula clouds */}
      <div className="nebula w-96 h-96 bg-cyan-500/20 top-10 left-10" />
      <div className="nebula w-80 h-80 bg-purple-500/20 top-1/3 right-20" />
      <div className="nebula w-64 h-64 bg-blue-500/20 bottom-20 left-1/3" />
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Slow-moving rockets/satellites */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`satellite-${i}`}
            className="absolute"
            initial={{ 
              x: -100 - (i * 200), 
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360
            }}
            animate={{
              x: window.innerWidth + 200,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360 + 360
            }}
            transition={{
              duration: 30 + (i * 10),
              repeat: Infinity,
              delay: i * 5,
              ease: "linear"
            }}
          >
            <div className="relative opacity-20">
              {/* Satellite body */}
              <div className="w-4 h-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded" />
              {/* Solar panels */}
              <div className="absolute top-1 -left-2 w-2 h-4 bg-blue-600/60" />
              <div className="absolute top-1 -right-2 w-2 h-4 bg-blue-600/60" />
              {/* Antenna */}
              <div className="absolute -top-1 left-2 w-0.5 h-2 bg-gray-400" />
              {/* Signal */}
              <div className="absolute -top-2 left-2 w-1 h-1 bg-red-400 rounded-full animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground;
