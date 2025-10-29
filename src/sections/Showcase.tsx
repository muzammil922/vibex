import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code, FileText, User, Zap } from "lucide-react";
import RadialOrbitalTimeline from "../components/ui/radial-orbital-timeline";
import { CaseStudiesCarousel } from "../components/ui/case-studies-carousel";

const timelineData = [
  {
    id: 1,
    title: "AI Dashboard Platform",
    date: "Jan 2024",
    content: "Real-time analytics dashboard with machine learning insights and predictive analytics.",
    category: "Dashboard",
    icon: Calendar,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
    image: "/AI Dashboard Platform.jpeg",
    relatedLinks: {
      1: "",
      2: "https://mydashy.pro/",
      3: "",
      4: "",
      5: ""
    }
  },
  {
    id: 2,
    title: "SaaS Management System",
    date: "Feb 2024",
    content: "Complete business management platform with automation and AI-powered workflows.",
    category: "SaaS",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
    image: "/SaaS Management System.png",
    relatedLinks: {
      1: "https://dashboard.example.com/",
      2: "https://mydashy.pro/",
      3: "https://ecommerce.example.com/",
      4: "",
      5: ""
    }
  },
  {
    id: 3,
    title: "E-commerce Platform",
    date: "Mar 2024",
    content: "Modern online store with AI-powered recommendations and dynamic pricing.",
    category: "E-commerce",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
    image: "/E-commerce Platform.jpeg",
    relatedLinks: {
      1: "",
      2: "https://mydashy.pro/",
      3: "",
      4: "https://crm.example.com/",
      5: ""
    }
  },
  {
    id: 4,
    title: "CRM Automation Suite",
    date: "Apr 2024",
    content: "Intelligent customer relationship management with automated lead scoring.",
    category: "CRM",
    icon: User,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
    image: "/CRM Automation Suite.jpeg",
    relatedLinks: {
      1: "",
      2: "",
      3: "https://ecommerce.example.com/",
      4: "",
      5: "https://analytics.example.com/"
    }
  },
  {
    id: 5,
    title: "Data Analytics Platform",
    date: "May 2024",
    content: "Advanced data processing and visualization tools with real-time insights.",
    category: "Analytics",
    icon: Zap,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
    image: "/Data Analytics Platform.jpeg",
    relatedLinks: {
      1: "",
      2: "",
      3: "",
      4: "https://crm.example.com/",
      5: ""
    }
  },
];

export const Showcase: React.FC = () => {
  return (
    <section className="py-5 overflow-visible relative z-10 pt-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Enterprise <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our track record of delivering high-impact solutions for Fortune 50 companies and innovative startups across various industries
          </p>
        </motion.div>

        <div className="relative">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <div className="inline-flex items-center space-x-4 text-gray-300">
            <div className="w-8 h-px" style={{background: 'linear-gradient(to right, transparent, hsl(14.77 63.11% 59.61%))'}} />
            <span className="text-sm font-medium">Click on any node to explore our projects</span>
            <div className="w-8 h-px" style={{background: 'linear-gradient(to left, transparent, hsl(14.77 63.11% 59.61%))'}} />
          </div>
        </motion.div>
      </div>
      
      {/* Case Studies Carousel */}
      <CaseStudiesCarousel />
    </section>
  );
};