import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, Phone } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.445 4.436-9.87 9.888-9.87 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.445-4.437 9.87-9.885 9.87m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export const StickyContact: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <div className="flex flex-col gap-3">
        {/* Expandable Contact Options */}
        <AnimatePresence>
          {isExpanded && (
            <>
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/923113840943?text=Hi%2C%20I%20want%20to%20work%20with%20you.%20Can%20you%20please%20call%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <WhatsAppIcon className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.a>

              {/* Email Button */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vibexsolution@gmail.com&su=Work%20Inquiry&body=Hi%2C%20I%20want%20to%20work%20with%20you.%20Can%20you%20please%20call%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <Mail className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main Contact Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl ${
            isExpanded 
              ? 'bg-gray-800/80 border border-gray-600/50 group-hover:bg-gray-700/80' 
              : 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 group-hover:shadow-orange-500/25'
          }`}>
            {isExpanded ? (
              <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            ) : (
              <Phone className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};
