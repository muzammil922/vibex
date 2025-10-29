import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Zap, Star } from "lucide-react";
import { AwardsCertifications } from "../components/ui/awards-certifications";
import { TechStack } from "../components/ui/tech-stack";
import { FAQAccordion } from "../components/ui/faq-accordion";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 mb-8 backdrop-blur-sm"
          >
            <Award className="w-5 h-5" style={{color: 'hsl(14.77 63.11% 59.61%)'}} />
            <span className="text-sm font-semibold text-orange-300 tracking-wide">ENTERPRISE SOLUTIONS</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Scale Your{" "}
            <span style={{color: 'rgb(249, 115, 22)'}}>
              Enterprise?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
            Partner with us to build cutting-edge solutions that drive measurable business growth. 
            Our enterprise-grade development team delivers results that exceed expectations and transform your competitive advantage.
          </p>



          {/* Professional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 pt-12"
          >
            {/* Removed heading and subtitle as requested */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield size={24} className="text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-sm text-gray-400">Bank-level encryption and compliance standards</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={24} className="text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h4>
                <p className="text-sm text-gray-400">Faster time-to-market with agile methodologies</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star size={24} className="text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Proven Track Record</h4>
                <p className="text-sm text-gray-400">50+ successful projects across industries</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Industry Recognition</h4>
                <p className="text-sm text-gray-400">Award-winning solutions and certifications</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Awards & Certifications */}
      <AwardsCertifications />
      
      {/* Tech Stack */}
      <TechStack />
      
      {/* FAQ Accordion */}
      <FAQAccordion />
    </section>
  );
};