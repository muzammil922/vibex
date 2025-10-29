import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Microsoft', logo: 'V ' },
  { name: 'Google', logo: 'I' },
  { name: 'Amazon', logo: 'B' },
  { name: 'IBM', logo: 'E' },
  { name: 'Oracle', logo: 'X' }
];

export const TrustedBrands: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xl text-white mb-8 font-medium">
           <span className="text-white text-x">Powered by</span>
           <span className="text-orange-400 ml-1 font-bold">VibeX Solutions</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-all duration-300 border border-orange-700/50 group-hover:border-orange-500/30">
                <span className="text-2xl font-bold text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                  {brand.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
