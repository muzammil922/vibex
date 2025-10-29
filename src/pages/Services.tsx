import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  Star,
  Clock,
  Award,
  Mail,
  BarChart3
} from 'lucide-react';
import { CSSDotBackground } from '../components/ui/css-dot-background';
import { useSEO } from '../hooks/useSEO';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

const ServicesPage: React.FC = () => {
  // SEO optimization
  useSEO({
    title: 'VibeX Services - AI-Powered Development Solutions | Custom Software Development',
    description: 'Discover VibeX comprehensive AI-powered development services including custom software development, enterprise dashboards, SaaS platforms, and mobile applications. Trusted by 50+ companies.',
    keywords: 'AI development services, custom software development, enterprise software solutions, SaaS platform development, mobile app development, web development services, AI-powered applications',
    url: 'https://vibex.pro/services',
    image: 'https://vibex.pro/VibeX%20dashbord%20image.jpeg'
  });
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['React & Next.js', 'Node.js Backend', 'Responsive Design', 'SEO Optimized'],
      popular: false,
      whatsappMessage: 'Hi! I\'m interested in your Web Development services. Can you help me build a custom web application?'
    },
    {
      icon: BarChart3,
      title: 'SaaS Dashboard',
      description: 'Custom software-as-a-service dashboards with analytics and user management.',
      features: ['Real-time Analytics', 'User Management', 'Data Visualization', 'API Integration'],
      popular: true,
      whatsappMessage: 'Hi! I\'m interested in your SaaS Dashboard services. Can you help me create a custom dashboard with analytics?'
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration and inventory management.',
      features: ['Shopify & WooCommerce', 'Custom E-commerce', 'Payment Gateway', 'Inventory Management'],
      popular: false,
      whatsappMessage: 'Hi! I\'m interested in your E-commerce Solutions. Can you help me build an online store?'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Database Design'],
      popular: false,
      whatsappMessage: 'Hi! I\'m interested in your Backend Development services. Can you help me build APIs and server solutions?'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup and migration services.',
      features: ['AWS & Azure', 'DevOps', 'CI/CD Pipeline', 'Monitoring'],
      popular: false,
      whatsappMessage: 'Hi! I\'m interested in your Cloud Solutions. Can you help me with cloud infrastructure setup?'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security audits and compliance solutions.',
      features: ['Security Audit', 'Penetration Testing', 'GDPR Compliance', 'SSL Certificates'],
      popular: false,
      whatsappMessage: 'Hi! I\'m interested in your Security & Compliance services. Can you help me with security audits?'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for your approval.',
      icon: Code
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution with rigorous testing at every stage.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Deploy your project and provide ongoing support and maintenance.',
      icon: Globe
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Team',
      description: 'Recognized experts with industry certifications and awards.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Enterprise-grade security with regular audits and updates.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring timely project completion.'
    }
  ];

  // const handleWhatsAppClick = () => {
  //   const message = encodeURIComponent("Hi! I'm interested in your services. Can you help me with a project?");
  //   window.open(`https://wa.me/923113840943?text=${message}`, '_blank');
  // };

  // const handleEmailClick = () => {
  //   const subject = encodeURIComponent("Service Inquiry - VibeX Solutions");
  //   const body = encodeURIComponent("Hello VibeX Team,\n\nI'm interested in your services and would like to discuss a potential project.\n\nPlease contact me at your earliest convenience.\n\nBest regards,");
  //   window.open(`mailto:vibexsolution@gmail.com?subject=${subject}&body=${body}`, '_blank');
  // };

  return (
    <div className="min-h-screen pt-20 relative">
      {/* CSS Dot Background */}
      <CSSDotBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to your business needs. From web development to cloud solutions, we deliver excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 px-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>25+ Countries Served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>99.8% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4">
              What We <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Professional services designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 ${
                  service.popular ? 'ring-2 ring-orange-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <service.icon className="w-8 h-8 text-orange-400" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-center">
                  <motion.a
                    href={`https://wa.me/923113840943?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-orange-600/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                    <step.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">VibeX</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-orange-600/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. Get a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/923113840943?text=Hi, I'm interested in your services. Can you help me with a project?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm text-white font-semibold hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Start a Project
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vibexsolution@gmail.com&su=Service%20Inquiry&body=Hi%2C%20I'm%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20a%20potential%20project.%20Please%20contact%20me%20at%20your%20earliest%20convenience."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-orange-500/30 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-400" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
