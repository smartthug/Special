import { motion } from 'framer-motion';

/**
 * Floating hearts background animation component
 */
const FloatingHearts = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ['❤️', '💕', '💖', '💗', '💓', '💝', '💘', '💞'][Math.floor(Math.random() * 8)],
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 30,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{
            y: '100vh',
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: '-10vh',
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
