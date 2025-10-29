import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface LuxuryTestimonialProps {
  name: string;
  profession: string;
  description: string;
  avatarUrl: string;
  rating: number;
  index: number;
}

export const LuxuryTestimonial: React.FC<LuxuryTestimonialProps> = ({
  name,
  profession,
  description,
  avatarUrl,
  rating,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group relative"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/20 via-orange-600/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        initial={false}
      />

      {/* Main Card */}
      <div className="relative bg-black/90 border border-gray-800 rounded-3xl p-8 shadow-2xl shadow-black/50 group-hover:border-orange-500/50 group-hover:shadow-orange-500/20 group-hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
        
        {/* Quote Icon */}
        <motion.div
          className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <Quote className="w-6 h-6 text-white" />
        </motion.div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-6 justify-end">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Star 
                className={`w-6 h-6 ${
                  i < rating 
                    ? 'drop-shadow-lg' 
                    : 'text-gray-500 fill-gray-500/30'
                }`} 
                style={i < rating ? {color: 'rgb(249 115 22)', fill: 'rgb(249 115 22)'} : {}}
              />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Text */}
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          "{description}"
        </motion.p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
          >
            <img
              src={avatarUrl}
              alt={name}
              className="w-16 h-16 rounded-full object-cover border-2 transition-colors duration-300"
              style={{borderColor: 'hsl(14.77 63.11% 59.61%)'}}
            />
            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black"></div>
          </motion.div>
          
          <div>
            <motion.h4 
              className="text-white font-semibold text-lg group-hover:text-orange-100 transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {name}
            </motion.h4>
            <motion.p 
              className="text-sm group-hover:transition-colors duration-300"
              style={{color: 'hsl(14.77 63.11% 59.61%)'}}
              whileHover={{ x: 5 }}
            >
              {profession}
            </motion.p>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};
