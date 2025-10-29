import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Most enterprise projects range from 3-6 months, depending on complexity. We follow agile methodologies with 2-week sprints and regular client check-ins.'
  },
  {
    question: 'How do you handle intellectual property?',
    answer: 'All code and solutions we develop for you remain your exclusive property. We sign comprehensive IP transfer agreements and maintain strict confidentiality.'
  },
  {
    question: 'What are your pricing models?',
    answer: 'We offer flexible pricing: fixed-price for defined projects, time & materials for ongoing work, and dedicated team models for long-term partnerships.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer 24/7 support with guaranteed response times. Our support includes bug fixes, updates, monitoring, and technical assistance.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely. We specialize in integrating with existing enterprise systems, APIs, and databases. We conduct thorough assessments before starting any project.'
  },
  {
    question: 'What security measures do you follow?',
    answer: 'We maintain ISO 27001 and SOC 2 Type II certifications, implement end-to-end encryption, conduct regular security audits, and follow OWASP guidelines.'
  }
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with VibeX
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800/50 rounded-xl overflow-hidden bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-orange-600/10 transition-all duration-300 group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-orange-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
