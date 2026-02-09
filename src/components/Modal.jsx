import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Celebration Modal component with confetti animation
 * @param {boolean} isOpen - Whether modal is open
 * @param {function} onClose - Close handler
 * @param {string} message - Celebration message
 */
const Modal = ({ isOpen, onClose, message }) => {
  // Generate confetti hearts
  const hearts = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    emoji: ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'][Math.floor(Math.random() * 7)],
    x: Math.random() * 100,
    y: -10,
    rotation: Math.random() * 360,
    delay: Math.random() * 0.5,
  }));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full pointer-events-auto relative overflow-hidden"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              {/* Confetti hearts */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {hearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    className="absolute text-2xl"
                    initial={{
                      x: `${heart.x}%`,
                      y: `${heart.y}%`,
                      rotate: heart.rotation,
                      opacity: 0,
                    }}
                    animate={{
                      y: '110%',
                      rotate: heart.rotation + 360,
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: heart.delay,
                      ease: 'easeOut',
                    }}
                  >
                    {heart.emoji}
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  🎉
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4 font-pacifico">
                  {message}
                </h2>
                <motion.button
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                  onClick={onClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
