import { useTheme } from './theme-provider';
import { useEffect, useRef } from 'react';

export const CSSDotBackground = () => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const isDark = theme === 'dark';

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: isDark ? '#121212' : '#F4F5F5',
        backgroundImage: `
                  radial-gradient(circle at 20% 20%, ${isDark ? 'rgba(255,255,255,0.01)' : 'rgba(0,0,0,0.01)'} 1px, transparent 1px),
                  radial-gradient(circle at 80% 80%, ${isDark ? 'rgba(255,255,255,0.008)' : 'rgba(0,0,0,0.008)'} 1px, transparent 1px),
                  radial-gradient(circle at 40% 40%, ${isDark ? 'rgba(255,255,255,0.005)' : 'rgba(0,0,0,0.005)'} 1px, transparent 1px),
                  radial-gradient(circle at 50% 50%, ${isDark ? 'rgba(255,255,255,0.015)' : 'rgba(0,0,0,0.015)'} 2px, transparent 2px)
                `,
        backgroundSize: '60px 60px, 100px 100px, 40px 40px, 200px 200px',
        backgroundPosition: '0 0, 30px 30px, 15px 15px, 0 0',
        transition: 'background-position 0.1s ease-out'
      } as React.CSSProperties}
    >
      {/* Animated floating dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
                    className={`absolute w-1 h-1 rounded-full ${
                      isDark ? 'bg-white' : 'bg-black'
                    } opacity-5`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};
