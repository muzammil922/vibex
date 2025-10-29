import React from "react";

interface RainbowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const RainbowButton: React.FC<RainbowButtonProps> = ({
  children,
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white 
        rounded-full overflow-hidden transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background: `
          linear-gradient(
            90deg,
            hsl(var(--color-1)) 0%,
            hsl(var(--color-2)) 20%,
            hsl(var(--color-3)) 40%,
            hsl(var(--color-4)) 60%,
            hsl(var(--color-5)) 80%,
            hsl(var(--color-1)) 100%
          )
        `,
        backgroundSize: "200% 100%",
        animation: "rainbow var(--speed, 2s) infinite linear",
      }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};
