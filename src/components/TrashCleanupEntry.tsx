import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TrashItem {
  id: string;
  emoji: string;
  name: string;
  left: number;
  top: number;
}

interface TrashCleanupEntryProps {
  onComplete: () => void;
}

const TrashCleanupEntry = ({ onComplete }: TrashCleanupEntryProps) => {
  const [trashItems, setTrashItems] = useState<TrashItem[]>([
    { id: "1", emoji: "🗑️", name: "Trash Bag", left: 20, top: 30 },
    { id: "2", emoji: "🥤", name: "Soda Cup", left: 60, top: 20 },
    { id: "3", emoji: "🍕", name: "Pizza Box", left: 80, top: 40 },
    { id: "4", emoji: "🚬", name: "Cigarette", left: 30, top: 60 },
    { id: "5", emoji: "🧻", name: "Paper", left: 70, top: 70 },
    { id: "6", emoji: "🥫", name: "Can", left: 15, top: 50 },
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
                  transform: "translate(-50%, -50%)",
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className={`cursor-grab active:cursor-grabbing select-none transition-transform hover:scale-110 ${
                    draggedItem === item.id ? "scale-110 rotate-12" : ""
                  }`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="bg-white/90 rounded-2xl p-4 shadow-lg border-2 border-white/50 backdrop-blur-sm">
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-sm font-medium text-gray-700">{item.name}</div>
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