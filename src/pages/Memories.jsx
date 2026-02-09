import { motion } from 'framer-motion';
import MemoryCard from '../components/MemoryCard';
import Button from '../components/Button';

// Import images from assets folder
// Vite will handle these imports and optimize them
import image1 from '../assets/images/IMG-20250608-WA0000.jpg';
import image2 from '../assets/images/IMG-20250608-WA0003.jpg';
import image3 from '../assets/images/Snapchat-745478662.jpg';

/**
 * Memories Page - Soft, calm, aesthetic page displaying 3 meaningful photos
 * Simple, genuine, and crush-friendly vibe
 */
const Memories = ({ onNext }) => {
  const memories = [
    {
      id: 1,
      image: image1,
      caption: "A smile I'll always remember 😊",
    },
    {
      id: 2,
      image: image2,
      caption: 'One of those calm moments 🌸',
    },
    {
      id: 3,
      image: image3,
      caption: 'Simple, but special 🤍',
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16 px-4 bg-gradient-to-br from-pink-50 via-rose-50/30 to-beige-50 relative overflow-hidden">
      {/* Very subtle floating hearts in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🤍
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pacifico text-pink-400 mb-3 font-normal">
            A Few Moments I Like 🤍
          </h2>
        </motion.div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              image={memory.image}
              caption={memory.caption}
              index={index}
            />
          ))}
        </div>

        {/* Continue Button */}
        {onNext && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button onClick={onNext} variant="primary">
              Continue 💝
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Memories;
