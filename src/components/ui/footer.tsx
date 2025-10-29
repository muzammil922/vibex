import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.445 4.436-9.87 9.888-9.87 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.445-4.437 9.87-9.885 9.87m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const services = [
  'AI-Powered Applications',
  'Enterprise Dashboards',
  'SaaS Platform Development',
  'API Integration',
  'Cloud Migration',
  'DevOps & Deployment'
];

const resources = [
  'Case Studies',
  'Technical Blog',
  'Documentation',
  'API Reference',
  'Support Center',
  'Community Forum'
];

const contact = [
  { icon: Mail, text: 'vibexsolution@gmail.com', href: 'mailto:vibexsolution@gmail.com' },
  { icon: Phone, text: '+92 311 3840943', href: 'tel:+923113840943' },
  { icon: MapPin, text: 'Global Remote Team', href: '#' }
];

export const Footer: React.FC = () => {
  console.log('Footer component is rendering');
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black border-t border-orange-500/20 relative z-20 min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img 
                  src="/VibeX Logo.svg" 
                  alt="VibeX Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Transforming businesses with cutting-edge AI-powered development solutions. 
                We build enterprise-grade applications that drive growth and efficiency.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://wa.me/923113840943?text=Hi%2C%20I%20want%20to%20work%20with%20you.%20Can%20you%20please%20call%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 text-orange-400" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vibexsolution@gmail.com&su=Work%20Inquiry&body=Hi%2C%20I%20want%20to%20work%20with%20you.%20Can%20you%20please%20call%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Mail className="w-4 h-4 text-orange-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  {service}
                </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  {resource}
                </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-4">
                {contact.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <item.icon className="w-4 h-4 mr-3 text-orange-400" />
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2025 VibeX. All rights reserved. Built with ❤️ for enterprise excellence.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center md:justify-end">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
