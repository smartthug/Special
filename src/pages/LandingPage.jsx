import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts';
import Button from '../components/Button';

/**
 * Landing Page - First page users see
 * Features floating hearts animation and call-to-action button
 */
const LandingPage = ({ onNext }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-pacifico text-pink-600 mb-6 text-shadow-soft"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Happy Valentine's Day ❤️
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-rose-600 mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          To the most special person in my life
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button onClick={onNext} variant="primary">
            Open My Heart 💌
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
