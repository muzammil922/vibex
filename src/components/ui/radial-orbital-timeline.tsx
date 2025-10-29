import { useState, useEffect, useRef } from "react";
import { Link, Zap } from "lucide-react";
import { Badge } from "./badge";
import { StarBorder } from "./star-border";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  image: string;
  relatedLinks: Record<number, string>;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  // Local helper component to try multiple extensions when using assets from public/
  const FallbackImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const [currentSrc, setCurrentSrc] = useState<string>(src);

    useEffect(() => {
      setCurrentSrc(src);
    }, [src]);

    const handleError = () => {
      // Try common extensions if a local file without the right extension was passed
      const candidates: string[] = [];
      const hasHttp = currentSrc.startsWith("http");
      if (!hasHttp) {
        const base = currentSrc.replace(/\.(png|jpg|jpeg|webp)$/i, "");
        candidates.push(`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.webp`);
      }

      for (const cand of candidates) {
        if (cand !== currentSrc) {
          setCurrentSrc(cand);
          return;
        }
      }
    };

    return <img src={currentSrc} alt={alt} className={className} onError={handleError} />;
  };
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const viewMode = "orbital";
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const centerOffset = { x: 0, y: 0 };
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the container itself, not on nodes
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
            let rotationTimer: ReturnType<typeof setInterval>;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-[80vh] flex flex-col items-center justify-center bg-transparent overflow-visible"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center overflow-visible">
        <div
          className="absolute w-full h-full flex items-center justify-center overflow-visible"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full animate-pulse flex items-center justify-center z-10 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm">
            <div className="absolute w-20 h-20 rounded-full border border-orange-500/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-orange-500/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                      ref={(el) => {
                        if (el) {
                          nodeRefs.current[item.id] = el;
                        }
                      }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Node clicked:', item.id, item.title);
                        toggleItem(item.id);
                      }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                      <div
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:scale-110
                          bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 backdrop-blur-sm
                          ${
                            isExpanded
                              ? "shadow-lg shadow-orange-500/30"
                              : isRelated
                              ? "animate-pulse"
                              : "hover:border-orange-400/60"
                          }
                          transition-all duration-300 transform
                          ${isExpanded ? "scale-150" : ""}
                        `}
                      >
                        <Icon size={20} />
                      </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 text-center
                  text-xs font-medium leading-tight
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125 max-w-40" : "text-white/90 max-w-32"}
                  px-1
                `}
                  style={{
                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                    lineHeight: '1.1',
                    wordBreak: 'keep-all',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-80 z-50">
                    <Card className="bg-gray-900/95 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-center mb-2">
                          <Badge
                            className={`px-2 py-1 text-xs ${getStatusStyles(
                              item.status
                            )}`}
                          >
                            {item.status === "completed"
                              ? "COMPLETE"
                              : item.status === "in-progress"
                              ? "IN PROGRESS"
                              : "PENDING"}
                          </Badge>
                          <span className="text-xs font-mono text-white/50">
                            {item.date}
                          </span>
                        </div>
                        <CardTitle className="text-base font-semibold text-white">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-white/90 leading-relaxed">
                        <p className="mb-4">{item.content}</p>

                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="text-sm mb-3">
                            <span className="flex items-center text-white/80 mb-2">
                              <Zap size={12} className="mr-1" />
                              Project Preview
                            </span>
                            <div className="w-full h-32 rounded-lg overflow-hidden">
                              {/* Image with local fallback extensions */}
                              <FallbackImage
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        </div>

                        {item.relatedIds.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-white/10">
                            <div className="flex items-center mb-3">
                              <Link size={12} className="text-white/70 mr-2" />
                              <h4 className="text-sm uppercase tracking-wider font-medium text-white/80">
                                Connected Nodes
                              </h4>
                            </div>
                            <div className="flex justify-center">
                              {item.relatedIds.slice(0, 1).map((relatedId) => {
                                // const relatedItem = timelineData.find(
                                //   (i) => i.id === relatedId
                                // );
                                // const linkUrl = item.relatedLinks[relatedId];
                                
                                return (
                                  <StarBorder
                                    key={relatedId}
                                    as="button"
                                    color="hsl(14.77 63.11% 59.61%)"
                                    className="w-full flex items-center justify-center h-6 px-3 py-1 mt-4 mb-4 text-xs text-white/90 hover:text-white transition-all cursor-pointer"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      console.log('Button clicked:', item.title);
                                      
                                      // Check if there's a link for the current item
                                      const currentItemLink = item.relatedLinks[item.id];
                                      if (currentItemLink) {
                                        console.log('Opening link:', currentItemLink);
                                        window.open(currentItemLink,'noopener,noreferrer');
                                      } else {
                                        // Fallback to blank page if no link is found
                                        window.open('about:blank', 'noopener,noreferrer');
                                      }
                                    }}
                                  >
                                    <span className="flex items-center">
                                      {item.title}
                                    </span>
                                  </StarBorder>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
