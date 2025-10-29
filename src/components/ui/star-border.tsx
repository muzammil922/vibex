import { cn } from "../../lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component 
      className={cn(
        "relative inline-block cursor-pointer",
        className
      )} 
      {...props}
    >
      {/* Animated border container */}
      <div className="relative p-[2px] rounded-[20px] overflow-hidden">
        {/* Animated border background */}
        <div
          className="absolute inset-0 rounded-[20px] animate-star-movement-bottom"
          style={{
            background: `linear-gradient(90deg, transparent, ${defaultColor}, transparent)`,
            animationDuration: speed,
            opacity: 0.8
          }}
        />
        <div
          className="absolute inset-0 rounded-[20px] animate-star-movement-top"
          style={{
            background: `linear-gradient(270deg, transparent, ${defaultColor}, transparent)`,
            animationDuration: speed,
            opacity: 0.8
          }}
        />
        
        {/* Button content */}
        <div className={cn(
          "relative z-10 text-white text-center text-base py-4 px-6 rounded-[18px]",
          "bg-gradient-to-b from-gray-800/95 to-gray-900/95"
        )}>
          {children}
        </div>
      </div>
    </Component>
  )
}
