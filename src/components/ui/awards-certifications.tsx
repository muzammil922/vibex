import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Star, CheckCircle } from 'lucide-react';

const awards = [
  { name: 'ISO 27001', description: 'Information Security', icon: Shield },
  { name: 'SOC 2 Type II', description: 'Security Compliance', icon: CheckCircle },
  { name: 'Clutch Top 100', description: 'Development Services', icon: Award },
  { name: 'G2 Leader', description: 'Enterprise Software', icon: Star }
];

export const AwardsCertifications: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Removed Industry Recognition heading and subtitle as requested */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <award.icon size={24} style={{color: 'rgb(249, 115, 22)'}} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {award.name}
              </h4>
              <p className="text-sm text-gray-400">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
