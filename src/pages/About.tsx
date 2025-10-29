import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Zap, Shield, Globe, Code, Lightbulb } from 'lucide-react';
import { CSSDotBackground } from '../components/ui/css-dot-background';

const About: React.FC = () => {
  console.log('About page is rendering');
  
  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Code },
    { number: '25+', label: 'Countries Served', icon: Globe },
    { number: '99.8%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Global Support', icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI-powered solutions that transform businesses and drive sustainable growth.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every project is tailored to meet our clients\' unique needs, ensuring maximum value and impact.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and methodologies to stay ahead of industry trends.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Excellence',
      description: 'We combine technical expertise with creative vision to deliver exceptional user experiences.'
    }
  ];

  const team = [
    {
      name: 'Muzammil',
      role: 'Founder',
      image: 'public/Muzammil Founder.png',
      description: '15+ years in enterprise software development'
    },
    {
      name: 'Kainat',
      role: 'Co-Founder',
      image: 'public/kainat Co-Fonder.png',
      description: 'AI/ML expert with Fortune 500 experience'
    },
    {
      name: 'Muzammil',
      role: 'Lead Developer',
      image: 'public/Muzammil Founder.png',
      description: 'Full-stack specialist and architecture expert'
    },
    {
      name: 'Kainat',
      role: 'Design Director',
      image: 'public/kainat Co-Fonder.png',
      description: 'UX/UI designer with award-winning portfolio'
    }
  ];

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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">VibeX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a global team of AI-powered development experts, dedicated to transforming businesses through innovative technology solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{color: 'rgb(249, 115, 22)'}}>
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-orange-600/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, VibeX emerged from a simple yet powerful vision: to democratize AI technology and make it accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a global force, delivering transformative solutions across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">From Vision to Reality</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our journey began when our founders recognized the gap between cutting-edge AI research and practical business applications. We set out to bridge this gap, creating solutions that are not just technologically advanced, but also practical and scalable.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to have helped over 50 companies worldwide transform their operations, increase efficiency, and unlock new growth opportunities through our AI-powered development solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl p-8 border border-orange-500/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-400 mb-4">2020</div>
                  <div className="text-white text-xl font-semibold mb-2">Founded</div>
                  <div className="text-gray-300">The beginning of our journey</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="group"
              >
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-orange-600/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind VibeX's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-orange-500/30 group-hover:border-orange-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-orange-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how VibeX can help transform your business with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/923113840943?text=Hi, I want to work with you. Can you please call me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm text-white font-semibold hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                Start a Project
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vibexsolution@gmail.com&su=Work%20Inquiry&body=Hi%2C%20I%20want%20to%20work%20with%20you.%20Can%20you%20please%20call%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-orange-500/30 text-orange-400 font-semibold hover:bg-orange-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
