'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CursorContextType = {
  cursorType: string;
  setCursorType: (type: string) => void;
};

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
});

export function useCursor() {
  return useContext(CursorContext);
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<string>('default');
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none"
            style={{
              x: cursorPosition.x - 16,
              y: cursorPosition.y - 16,
              scale: cursorType === 'hover' ? 1.5 : 1,
            }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 400,
              mass: 0.2,
            }}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 border-[hsl(var(--primary))] ${
                cursorType === 'hover' ? 'mix-blend-difference' : ''
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </CursorContext.Provider>
  );
}
