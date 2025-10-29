import React from "react";
import { motion } from "framer-motion";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { ScrollProgress } from "../components/ui/scroll-progress";
import { TextReveal } from "../components/ui/text-reveal";
import { TrustedBrands } from "../components/ui/trusted-brands";
import { KPIBar } from "../components/ui/kpi-bar";
import { Sparkles, Zap, Shield } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden pb-[100px] pt-20 relative">
      <ScrollProgress />
      <ContainerScroll
        titleComponent={
          <>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300 tracking-wide">TRUSTED BY 50+ COMPANIES</span>
            </motion.div>

            {/* Enhanced Main Headline */}
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center">
              <TextReveal 
                text="Scale Your Business" 
                className="block mb-1 sm:mb-2"
                delay={0.2}
              />
              <TextReveal 
                text="With AI-Powered" 
                className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-1 sm:mb-2"
                delay={0.6}
              />
              <TextReveal 
                text="Development Solutions" 
                className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7rem] font-black leading-none bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
                delay={1.0}
              />
            </div>

            {/* Enhanced Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mt-8 sm:mt-10 md:mt-12 leading-relaxed text-center px-4"
            >
              Transform your business with cutting-edge <span className="text-orange-400 font-semibold">AI-powered applications</span>, <span className="text-orange-400 font-semibold">enterprise dashboards</span>, and <span className="text-orange-400 font-semibold">scalable SaaS platforms</span> that drive growth and efficiency.
            </motion.p>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-14 md:mt-16 px-4"
            >
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" style={{color: 'rgb(249, 115, 22)'}} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Enterprise Security</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" style={{color: 'rgb(249, 115, 22)'}} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Lightning Fast</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm group hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" style={{color: 'rgb(249, 115, 22)'}} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">AI-Powered</span>
              </motion.div>
            </motion.div>

          </>
        }
      >
        <img
          src="/VibeX dashbord image.jpeg"
          alt="AI Development Dashboard"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      
      {/* Trusted Brands */}
      <TrustedBrands />
      
      {/* KPI Bar */}
      <KPIBar />
    </div>
  );
};
