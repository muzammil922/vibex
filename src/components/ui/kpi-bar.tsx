import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Award, TrendingUp } from 'lucide-react';

const kpis = [
  { value: '50+', label: 'Projects', icon: Star },
  { value: '24/7', label: 'Support', icon: Clock },
  { value: '99.8%', label: 'Satisfaction', icon: Award },
  { value: '4.9★', label: 'Rating', icon: TrendingUp }
];

export const KPIBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="py-8 bg-gradient-to-r from-orange-500/5 to-orange-600/5 border-y border-orange-500/10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <kpi.icon className="w-4 h-4" style={{color: 'rgb(249, 115, 22)'}} />
                <span className="text-2xl md:text-3xl font-bold" style={{color: 'rgb(249, 115, 22)'}}>
                  {kpi.value}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-medium">{kpi.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
