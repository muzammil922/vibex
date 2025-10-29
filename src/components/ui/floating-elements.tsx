import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, Code, Database, Cloud } from 'lucide-react';

const FloatingIcon = ({ Icon, delay, duration, className }: { 
  Icon: React.ComponentType<any>, 
  delay: number, 
  duration: number,
  className?: string 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: 0 }}
    animate={{ 
      opacity: [0, 1, 0.8, 1],
      scale: [0, 1, 1.1, 1],
      rotate: [0, 180, 360],
      y: [0, -20, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }}
    className={`absolute ${className}`}
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
      <Icon className="w-6 h-6 text-orange-400" />
    </div>
  </motion.div>
);

export const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <FloatingIcon 
        Icon={Sparkles} 
        delay={0} 
        duration={4} 
        className="top-1/4 left-1/4" 
      />
      <FloatingIcon 
        Icon={Zap} 
        delay={1} 
        duration={5} 
        className="top-1/3 right-1/4" 
      />
      <FloatingIcon 
        Icon={Star} 
        delay={2} 
        duration={6} 
        className="bottom-1/3 left-1/3" 
      />
      <FloatingIcon 
        Icon={Code} 
        delay={0.5} 
        duration={4.5} 
        className="top-1/2 right-1/3" 
      />
      <FloatingIcon 
        Icon={Database} 
        delay={1.5} 
        duration={5.5} 
        className="bottom-1/4 right-1/5" 
      />
      <FloatingIcon 
        Icon={Cloud} 
        delay={2.5} 
        duration={6.5} 
        className="top-1/6 left-1/6" 
      />
    </div>
  );
};
