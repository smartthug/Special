import { motion } from 'framer-motion';

/**
 * MemoryCard - Soft, calm card component for the Memories page
 * Subtle hover effects with gentle animations
 * @param {string} image - Image path
 * @param {string} caption - Caption text
 * @param {number} index - Card index for staggered animation
 */
const MemoryCard = ({ image, caption, index = 0 }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-500 transform hover:scale-[1.02]">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-50 to-beige-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image}
              alt={caption}
              className={`transition-transform duration-700 ${index === 2 ? 'w-[133.33%] h-[133.33%] object-cover' : 'w-full h-full object-cover'}`}
              style={index === 2 ? { 
                transform: 'rotate(-90deg) translateY(-7px)',
                transformOrigin: 'center center'
              } : {}}
              onMouseEnter={(e) => {
                if (index === 2) {
                  e.target.style.transform = 'rotate(-90deg) translateY(20px) scale(1.05)';
                } else {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (index === 2) {
                  e.target.style.transform = 'rotate(-90deg) translateY(-7px) scale(1)';
                } else {
                  e.target.style.transform = 'scale(1)';
                }
              }}
            />
          </div>
          
          {/* Subtle heart overlay on hover - very light */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500"
            initial={false}
          >
            <motion.span
              className="text-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              🤍
            </motion.span>
          </motion.div>
          
          {/* Soft glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
        
        {/* Caption */}
        <div className="p-4 md:p-6">
          <p className="text-center text-gray-700 font-light text-sm md:text-base leading-relaxed">
            {caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MemoryCard;
