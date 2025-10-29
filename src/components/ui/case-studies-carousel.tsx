import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Platform',
    metric: '+60% Revenue',
    description: 'AI-powered recommendation engine increased conversion rates',
    company: 'Fortune 500 Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    title: 'Enterprise Dashboard',
    metric: '-75% Processing Time',
    description: 'Real-time analytics platform for data-driven decisions',
    company: 'Global Manufacturing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    title: 'SaaS Platform',
    metric: '10x User Growth',
    description: 'Scalable architecture supporting rapid expansion',
    company: 'Tech Startup',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    title: 'AI Automation',
    metric: '40% Cost Reduction',
    description: 'Intelligent process automation for enterprise workflows',
    company: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
  }
];

export const CaseStudiesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  // Removed prevSlide and buttons per request

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Stories</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results from our enterprise clients across various industries
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm">
                    <span className="text-2xl font-bold" style={{color: 'rgb(249, 115, 22)'}}>
                      {caseStudies[currentIndex].metric}
                    </span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">
                    {caseStudies[currentIndex].title}
                  </h4>
                  <p className="text-gray-300 text-lg">
                    {caseStudies[currentIndex].description}
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 font-medium">
                    <span>{caseStudies[currentIndex].company}</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={caseStudies[currentIndex].image}
                    alt={caseStudies[currentIndex].title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows removed as requested */}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-orange-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
