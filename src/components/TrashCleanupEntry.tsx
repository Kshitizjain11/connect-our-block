import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const TrashSticker = ({ type, name }: { type: string; name: string }) => {
  const getStickerContent = () => {
    switch (type) {
      case "bag":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg border-2 border-gray-600 flex items-center justify-center">
            <div className="w-10 h-12 bg-gray-700 rounded-lg relative">
              <div className="absolute top-1 left-1 right-1 h-2 bg-gray-600 rounded-t-lg"></div>
              <div className="absolute top-3 left-2 right-2 h-1 bg-gray-500 rounded"></div>
            </div>
          </div>
        );
      case "cup":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-lg border-2 border-red-400 flex items-center justify-center">
            <div className="w-8 h-12 bg-gradient-to-b from-red-400 to-red-600 rounded-lg relative">
              <div className="absolute top-0 left-1 right-1 h-2 bg-red-300 rounded-t-lg"></div>
              <div className="absolute top-2 left-0 w-2 h-3 bg-red-500 rounded-r-lg -ml-1"></div>
            </div>
          </div>
        );
      case "pizza":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg border-2 border-orange-300 flex items-center justify-center">
            <div className="w-12 h-8 bg-gradient-to-b from-orange-300 to-orange-500 rounded-lg relative">
              <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
        );
      case "cigarette":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl shadow-lg border-2 border-orange-200 flex items-center justify-center">
            <div className="w-8 h-2 bg-gradient-to-r from-white to-orange-100 rounded-full relative">
              <div className="absolute right-0 w-2 h-2 bg-orange-400 rounded-full"></div>
            </div>
          </div>
        );
      case "paper":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center">
            <div className="w-10 h-12 bg-white rounded-lg relative shadow-sm">
              <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-400 rounded"></div>
              <div className="absolute top-4 left-2 right-2 h-0.5 bg-gray-400 rounded"></div>
              <div className="absolute top-6 left-2 w-6 h-0.5 bg-gray-400 rounded"></div>
            </div>
          </div>
        );
      case "can":
        return (
          <div className="relative w-16 h-16 bg-gradient-to-br from-silver to-gray-400 rounded-xl shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="w-6 h-12 bg-gradient-to-b from-silver to-gray-300 rounded-lg relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-silver rounded-t-lg"></div>
              <div className="absolute top-2 left-1 right-1 h-6 bg-gradient-to-b from-blue-200 to-blue-400 rounded"></div>
            </div>
          </div>
        );
      default:
        return <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>;
    }
  };

  return (
    <div className="relative group">
      <div className="transform transition-all duration-200 group-hover:scale-105">
        {getStickerContent()}
        <div className="absolute -inset-1 bg-white/20 rounded-xl blur-sm -z-10"></div>
      </div>
    </div>
  );
};

const TrashCleanupEntry = ({ onComplete }: TrashCleanupEntryProps) => {
  const [trashItems, setTrashItems] = useState<TrashItem[]>([
    { id: "1", emoji: "bag", name: "Trash Bag", left: 20, top: 30 },
    { id: "2", emoji: "cup", name: "Soda Cup", left: 60, top: 20 },
    { id: "3", emoji: "pizza", name: "Pizza Box", left: 80, top: 40 },
    { id: "4", emoji: "cigarette", name: "Cigarette", left: 30, top: 60 },
    { id: "5", emoji: "paper", name: "Paper", left: 70, top: 70 },
    { id: "6", emoji: "can", name: "Can", left: 15, top: 50 },
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
                  <div className="bg-white/90 rounded-2xl p-3 shadow-lg border-2 border-white/50 backdrop-blur-sm flex flex-col items-center">
                    <TrashSticker type={item.emoji} name={item.name} />
                    <div className="text-xs font-medium text-gray-700 mt-2">{item.name}</div>
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