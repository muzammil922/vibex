"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
// Define LucideIcon type locally since it's not exported from lucide-react
type LucideIcon = React.ComponentType<{
  size?: string | number;
  className?: string;
  strokeWidth?: number;
  [key: string]: any;
}>;
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[9999]",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-black/20 border border-white/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.url

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors z-10",
                "text-white/80 hover:text-orange-400 pointer-events-auto",
                isActive && "bg-orange-500/20 text-orange-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-orange-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-orange-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-orange-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-orange-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}