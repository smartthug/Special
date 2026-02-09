import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

/**
 * Proposal Page - Interactive Yes/No buttons with fun logic
 */
const ProposalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonSize, setNoButtonSize] = useState(1);

  const handleYesClick = () => {
    setShowModal(true);
  };

  const handleNoHover = () => {
    // Move button away randomly (responsive calculation)
    const buttonWidth = 200;
    const buttonHeight = 80;
    const maxX = Math.max(window.innerWidth - buttonWidth, 300);
    const maxY = Math.max(window.innerHeight - buttonHeight, 200);
    setNoButtonPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
    // Also shrink it a bit
    setNoButtonSize(0.8);
  };

  const handleNoLeave = () => {
    setNoButtonSize(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Background decorative hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl w-full">
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-pacifico text-pink-600 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          Will you be my Valentine? 💖
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[200px]">
          {/* Yes Button */}
          <motion.button
            className="px-8 md:px-12 py-5 md:py-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold text-xl md:text-2xl lg:text-3xl shadow-2xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 z-20"
            onClick={handleYesClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Yes 😍
          </motion.button>

          {/* No Button - moves away on hover */}
          <motion.button
            className="px-8 md:px-12 py-5 md:py-6 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full font-bold text-xl md:text-2xl lg:text-3xl shadow-2xl hover:from-red-500 hover:to-red-700 transition-all duration-300 z-10 relative"
            onMouseEnter={handleNoHover}
            onMouseLeave={handleNoLeave}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: noButtonPosition.y,
              x: noButtonPosition.x,
              scale: noButtonSize,
            }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.85 }}
          >
            No 🙈
          </motion.button>
        </div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-rose-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Choose wisely... 😉
        </motion.p>
      </div>

      {/* Celebration Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message="Yay! I’m really glad it’s you 🌸"
      />
    </div>
  );
};

export default ProposalPage;
