import { motion } from 'framer-motion';

/**
 * Reusable Button component with romantic styling
 * @param {string} children - Button text
 * @param {function} onClick - Click handler
 * @param {string} variant - Button style variant (primary, secondary, danger)
 * @param {string} className - Additional CSS classes
 */
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600',
    secondary: 'bg-white text-pink-600 border-2 border-pink-500 hover:bg-pink-50',
    danger: 'bg-gradient-to-r from-red-400 to-red-600 text-white hover:from-red-500 hover:to-red-700',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
