import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.8 
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0 
          }}
          transition={{
            duration,
            delay: delay + index * 0.1,
            ease: 'easeOut'
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
