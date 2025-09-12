import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TrashItem {
  id: string;
  image: string;
  name: string;
  left: number;
  top: number;
  rotation: number;
  scale: number;
}

interface TrashCleanupEntryProps {
  onComplete: () => void;
}

const TrashCleanupEntry = ({ onComplete }: TrashCleanupEntryProps) => {
  

  const [trashItems, setTrashItems] = useState<TrashItem[]>([
    { 
      id: "1", 
      image: '/images/trash/trash-bag.png', // Trash bag
      name: "Trash Bag", 
      left: 20, 
      top: 30, 
      rotation: -5, 
      scale: 1.2 
    },
    { 
      id: "2", 
      image: '/images/trash/soda-cup.png', // Soda cup
      name: "Soda Cup", 
      left: 60, 
      top: 20, 
      rotation: 8, 
      scale: 1.0
    },
    { 
      id: "3", 
      image: '/images/trash/pizza-box.png', // Pizza box
      name: "Pizza Box", 
      left: 80, 
      top: 40, 
      rotation: 3, 
      scale: 1.3
    },
    { 
      id: "4", 
      image: '/images/trash/cigarette.png', // Cigarette
      name: "Cigarette", 
      left: 30, 
      top: 60, 
      rotation: -8, 
      scale: 0.8
    },
    { 
      id: "5", 
      image: 'https://images.pexels.com/photos/1587442/pexels-photo-1587442.jpeg?cs=srgb&dl=pexels-colys-hat-740764-1587442.jpg&fm=jpg', // Crumbled paper
      name: "Paper", 
      left: 70, 
      top: 70, 
      rotation: 5, 
      scale: 1.0
    },
    { 
      id: "6", 
      image: '/images/trash/can.png', // Soda can
      name: "Can", 
      left: 15, 
      top: 50, 
      rotation: -3, 
      scale: 0.9
    },
  ]);

  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [isDropZoneActive, setIsDropZoneActive] = useState(false);

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", itemId);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDropZoneActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDropZoneActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain");
    
    setTrashItems(prev => {
      const newItems = prev.filter(item => item.id !== itemId);
      
      // Check if all items are cleared
      if (newItems.length === 0) {
        setTimeout(() => {
          onComplete();
        }, 1000); // Small delay to show completion animation
      }
      
      return newItems;
    });
    
    setDraggedItem(null);
    setIsDropZoneActive(false);
  }, [onComplete]);

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
    setIsDropZoneActive(false);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-light to-secondary-light flex items-center justify-center z-50">
      <div className="relative w-full h-full max-w-4xl mx-auto">
        {/* Skip Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-8 right-8 z-10"
        >
          <Button
            variant="outline"
            onClick={onComplete}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            Skip Intro
          </Button>
        </motion.div>

        {/* Header */}
        <div className="text-center pt-12 pb-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            🌱 Clean Up Your Community!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary-dark"
          >
            Drag all trash items into the bin to start your civic journey
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg font-semibold text-accent"
          >
            {trashItems.length} items remaining
          </motion.div>
        </div>

        {/* Trash Items */}
        <div className="relative h-96">
          <AnimatePresence>
            {trashItems.map((item) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 0,
                  rotate: 360,
                  y: -100,
                  transition: { duration: 0.5 }
                }}
                style={{
                  position: "absolute",
                  left: `${item.left}%`,
                  top: `${item.top}%`,
                  width: '160px',
                  height: '160px',
                  transform: "translate(-50%, -50%)",
                  zIndex: 10
                }}
                whileHover={{ zIndex: 50 }}
              >
                <div
                  className={`cursor-grab active:cursor-grabbing select-none transition-all hover:scale-110 ${
                    draggedItem === item.id ? "scale-110 z-50" : ""
                  }`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onDragEnd={handleDragEnd}
                >
                  <div 
                    className="relative" 
                    style={{
                      transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                      transformStyle: 'preserve-3d',
                      transition: 'all 0.3s ease-out',
                      width: '120px',
                      height: '120px',
                      perspective: '1000px'
                    }}>
                      {/* Sticker Container */}
                      <div 
                        className="relative w-full h-full"
                        style={{
                          transformStyle: 'preserve-3d',
                          transition: 'transform 0.3s ease-out',
                        }}
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;
                          const rotateY = (x - centerX) / 20;
                          const rotateX = (centerY - y) / 20;
                          
                          e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'rotateX(0) rotateY(0)';
                        }}
                      >
                        {/* Peel Corner */}
                        <div className="absolute top-0 right-0 w-12 h-12 z-20 cursor-pointer"
                          onMouseEnter={(e) => {
                            const corner = e.currentTarget;
                            corner.style.transition = 'transform 0.2s ease-out';
                            corner.style.transform = 'translate(10px, -10px) rotate(15deg)';
                            
                            // Show peel shadow
                            const shadow = corner.previousElementSibling as HTMLElement;
                            if (shadow) {
                              shadow.style.opacity = '1';
                              shadow.style.transform = 'translate(5px, -5px) rotate(5deg)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            const corner = e.currentTarget;
                            corner.style.transform = 'translate(0, 0) rotate(0)';
                            
                            // Hide peel shadow
                            const shadow = corner.previousElementSibling as HTMLElement;
                            if (shadow) {
                              shadow.style.opacity = '0';
                              shadow.style.transform = 'translate(0, 0) rotate(0)';
                            }
                          }}
                        >
                          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-transparent border-l-2 border-t-2 border-white/50 rounded-tl-lg" 
                               style={{
                                 transform: 'rotate(45deg) translate(0, -50%)',
                                 transformOrigin: 'bottom right',
                                 clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                                 background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                                 transition: 'all 0.3s ease-out'
                               }}
                          ></div>
                        </div>
                        
                        {/* Peel Shadow */}
                        <div className="absolute top-0 right-0 w-12 h-12 z-10 pointer-events-none"
                             style={{
                               opacity: 0,
                               transition: 'all 0.3s ease-out',
                               filter: 'blur(2px)',
                               background: 'rgba(0,0,0,0.2)',
                               clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                               transformOrigin: 'bottom right',
                             }}
                        ></div>
                        
                        {/* Sticker Content */}
                        <div 
                          className="relative w-full h-full bg-transparent rounded-lg overflow-visible"
                          style={{
                            transform: 'translateZ(10px)',
                            transition: 'all 0.3s ease-out',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                          }}
                        >
                          <div className="relative w-full h-full flex items-center justify-center p-2">
                            <div style={{
                              width: '100px',
                              height: '100px',
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <img 
                                src={item.image} 
                                alt={item.name}
                                style={{
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                  WebkitFilter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                                  imageRendering: 'crisp-edges',
                                  pointerEvents: 'none'
                                }}
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs font-medium text-center py-1 px-2 truncate">
                            {item.name}
                          </div>
                        </div>
                    </div>
                    
                    {/* Sticker Shadow */}
                    <div 
                      className="absolute -bottom-2 left-2 right-2 h-4 bg-black/10 rounded-full"
                      style={{
                        filter: 'blur(5px)',
                        transform: 'scale(0.9)',
                        transition: 'all 0.3s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Trash Bin (Drop Zone) */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`relative transition-all duration-300 ${
              isDropZoneActive 
                ? "scale-110 shadow-2xl" 
                : "hover:scale-105"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className={`w-32 h-32 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isDropZoneActive 
                ? "bg-success/30 border-4 border-success border-dashed" 
                : "bg-primary/20 border-4 border-primary/50 border-dashed"
            }`}>
              <div className="text-6xl">🗑️</div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-sm font-semibold text-primary">Drop Here!</div>
            </div>
            
            {/* Pulsing effect when drop zone is active */}
            {isDropZoneActive && (
              <motion.div
                className="absolute inset-0 rounded-2xl border-4 border-success"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index < (6 - trashItems.length) 
                    ? "bg-success" 
                    : "bg-white/50"
                }`}
                animate={{
                  scale: index < (6 - trashItems.length) ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Completion celebration */}
        {trashItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-success/20 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="text-8xl mb-4"
              >
                ✨
              </motion.div>
              <h2 className="text-4xl font-bold text-success mb-2">Amazing!</h2>
              <p className="text-xl text-success-dark">Your community is cleaner!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrashCleanupEntry;