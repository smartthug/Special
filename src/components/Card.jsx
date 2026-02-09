import { motion } from 'framer-motion';

/**
 * Reusable Card component for memory gallery
 * @param {string} image - Image URL
 * @param {string} caption - Caption text
 * @param {number} index - Card index for staggered animation
 */
const Card = ({ image, caption, index = 0 }) => {
  return (
    <motion.div
      className="relative group cursor-pointer w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg bg-white p-1.5 sm:p-2 md:p-2.5 transform transition-all duration-300 group-hover:scale-[1.02] sm:group-hover:scale-105 group-hover:shadow-xl sm:group-hover:shadow-2xl active:scale-100">
        <div className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={image}
            alt={caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Heart overlay on hover - hidden on mobile, shown on larger screens */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-pink-500 bg-opacity-0 sm:group-hover:bg-opacity-20 transition-all duration-300"
            initial={false}
          >
            <motion.span
              className="text-4xl sm:text-5xl md:text-6xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </div>
        {/* Soft glow effect */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-pink-200 via-transparent to-transparent opacity-0 sm:group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
      </div>
      <p className="mt-2 sm:mt-3 md:mt-4 text-center text-pink-700 font-medium text-xs sm:text-sm md:text-base lg:text-lg px-1">
        {caption}
      </p>
    </motion.div>
  );
};

export default Card;
