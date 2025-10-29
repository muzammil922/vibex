import React from 'react';
import { motion } from 'framer-motion';

type LucideIcon = React.ComponentType<{
  size?: string | number;
  className?: string;
  [key: string]: any;
}>;

interface LuxuryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  gradient?: string;
}

export const LuxuryCard: React.FC<LuxuryCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  gradient = "from-orange-500/20 to-orange-600/20"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
      whileHover={{ y: -12, scale: 1.02 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        initial={false}
      />
      
      {/* Main Card */}
      <div className="relative h-full rounded-2xl border border-gray-800 bg-black/90 p-8 shadow-2xl shadow-black/50 group-hover:border-orange-500/50 group-hover:shadow-orange-500/20 group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
        
        {/* Icon Container */}
        <motion.div
          className="relative mb-6"
          whileHover={{ rotate: 5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <motion.h3 
            className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
            whileHover={{ x: 5 }}
          >
            {description}
          </motion.p>
        </div>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 5 }}
        >
          <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      </div>
    </motion.div>
  );
};
