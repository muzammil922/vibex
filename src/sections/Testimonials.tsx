"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LuxuryTestimonial } from "../components/ui/luxury-testimonial"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Sarah Mitchell",
    profession: "CEO, Fortune 500 Tech Corp",
    rating: 5,
    description:
      "Their enterprise dashboard solution transformed our data analytics capabilities. We've seen a 40% increase in operational efficiency and $2M+ in cost savings within the first year. Exceptional technical expertise and delivery.",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    id: "testimonial-2",
    name: "Dr. Michael Chen",
    profession: "CTO, Global Innovation Labs",
    rating: 5,
    description:
      "The AI-powered automation platform they built reduced our processing time by 75% and eliminated manual errors. Their strategic approach to technology implementation is unmatched in the industry.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    id: "testimonial-3",
    name: "Ahmad Hassan",
    profession: "Founder & CEO, TechPak Solutions",
    rating: 5,
    description:
      "From concept to deployment, they delivered our SaaS platform 30% ahead of schedule. The scalable architecture they designed supports our rapid growth and handles 10x our projected user load.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    id: "testimonial-4",
    name: "Fatima Ali",
    profession: "CTO, Karachi Digital Hub",
    rating: 5,
    description:
      "The integrated CRM/ERP system they developed increased our revenue by 60% through better customer insights and streamlined operations. Their long-term partnership approach has been invaluable.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    id: "testimonial-5",
    name: "Muhammad Usman",
    profession: "Director of Technology, Lahore FinTech",
    rating: 5,
    description:
      "VibeX delivered our blockchain-based payment platform with zero downtime during launch. Their expertise in cutting-edge technologies and attention to security compliance exceeded all expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&q=80",
  },
  {
    id: "testimonial-6",
    name: "Ayesha Khan",
    profession: "VP of Engineering, Islamabad CloudTech",
    rating: 5,
    description:
      "The microservices architecture they implemented reduced our deployment time by 85% and improved system reliability to 99.9%. Their DevOps expertise and cloud optimization strategies are world-class.",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&q=80",
  },
]

export const Testimonials: React.FC = () => {
  return (
    <section className="px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our AI-powered development solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <LuxuryTestimonial
              key={testimonial.id}
              name={testimonial.name}
              profession={testimonial.profession}
              description={testimonial.description}
              avatarUrl={testimonial.avatarUrl}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
