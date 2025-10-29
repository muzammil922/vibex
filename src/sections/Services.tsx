import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Cloud, Workflow, Globe, Building2, Handshake } from "lucide-react";
import { LuxuryCard } from "../components/ui/luxury-card";
// import { cn } from "../lib/utils";

const services = [
  {
    title: "Enterprise Dashboards",
    description: "Real-time business intelligence dashboards with advanced analytics, custom KPIs, and interactive data visualization for data-driven decision making.",
    icon: BarChart3,
    gradient: "hsl(14.77 63.11% 59.61%)"
  },
  {
    title: "SaaS Platform Development",
    description: "End-to-end SaaS solutions with scalable architecture, multi-tenancy, subscription management, and cloud deployment for rapid market entry.",
    icon: Cloud,
    gradient: "hsl(14.77 63.11% 59.61%)"
  },
  {
    title: "AI-Powered Automation",
    description: "Intelligent workflow automation using machine learning and AI to optimize business processes, reduce costs, and increase operational efficiency.",
    icon: Workflow,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Modern Web Applications",
    description: "High-performance, responsive web applications built with cutting-edge technologies, ensuring exceptional user experience and SEO optimization.",
    icon: Globe,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Enterprise Systems Integration",
    description: "Custom CRM, ERP, and business management systems with seamless integration capabilities and advanced reporting features.",
    icon: Building2,
    gradient: "hsl(14.77 63.11% 59.61%)"
  },
  {
    title: "Strategic Tech Partnership",
    description: "Long-term technical partnership providing ongoing development, maintenance, and strategic guidance for sustained business growth.",
    icon: Handshake,
    gradient: "from-pink-500 to-rose-500"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="pt-5 pb-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Delivering cutting-edge technology solutions that drive business growth, operational efficiency, and competitive advantage in today's digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <LuxuryCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              gradient={service.gradient}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 text-gray-300">
            <div className="w-8 h-px" style={{background: 'linear-gradient(to right, transparent, hsl(14.77 63.11% 59.61%))'}} />
            <span className="text-sm font-medium">Ready to get started?</span>
            <div className="w-8 h-px" style={{background: 'linear-gradient(to left, transparent, hsl(14.77 63.11% 59.61%))'}} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
