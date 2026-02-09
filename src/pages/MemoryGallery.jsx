import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';

/**
 * Memory Gallery Page - Grid of photo cards with hover effects
 */
const MemoryGallery = ({ onNext }) => {
  // Using images from public folder
  // In Vite, files in public folder are served from root path
  const memories = [
    {
      id: 1,
      image: '/IMG-20250608-WA0000.jpg',
      caption: 'Our first smile 😊',
    },
    {
      id: 2,
      image: '/IMG-20250608-WA0003.jpg',
      caption: 'Sunset together 🌅',
    },
    {
      id: 3,
      image: '/Snapchat-745478662.jpg',
      caption: 'Coffee date ☕',
    },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-pacifico text-pink-600 mb-3 sm:mb-4 px-2">
            Our Memories 💕
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-rose-600 px-2">
            Every moment with you is a treasure
          </p>
        </motion.div>

        {/* Responsive grid: 1 column mobile, 2 tablet, 3 laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto">
          {memories.map((memory, index) => (
            <Card
              key={memory.id}
              image={memory.image}
              caption={memory.caption}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button onClick={onNext} variant="primary">
            Continue to Special Question 💖
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MemoryGallery;
