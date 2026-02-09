import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

/**
 * Love Letter Page - Animated typing effect with heart beat
 */
const LoveLetterPage = ({ onNext }) => {
  const fullText = `Happy Valentine’s Day, Manaswini 🌸

Unkooda irukkum pothu,
ordinary days kooda romba special-aa feel aaguthu.

Un smile paathale mood change aagidum,
and un laughter… adhu simple-aa heart-ku nalla feel kudukkum.

Unkitta oru calm irukku,
edho safe-aa, peaceful-aa feel panna vaikkum.

Unkooda pesina moments,
silent-aa irundhaalum meaningful-aa irukkum.

Idhu love-nu solla romba periya vaarthai,
friend-nu solla romba simple-aa irukku…

But one thing sure —
I really like you.
Just the way you are 🤍`;

  const [displayedText, setDisplayedText] = useState('');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-3xl w-full">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative corner hearts */}
          <div className="absolute top-4 left-4 text-2xl opacity-20">💕</div>
          <div className="absolute top-4 right-4 text-2xl opacity-20">💖</div>
          <div className="absolute bottom-4 left-4 text-2xl opacity-20">💗</div>
          <div className="absolute bottom-4 right-4 text-2xl opacity-20">💓</div>

          {/* Heart beat animation */}
          <div className="flex items-start gap-4 mb-6">
            <motion.span
              className="text-4xl md:text-5xl heart-beat"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-pacifico text-pink-600 mb-6">
              A Little Note for You 💌
              </h2>
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed font-poppins whitespace-pre-line">
                {displayedText}
                {displayedText.length < fullText.length && (
                  <motion.span
                    className="inline-block w-1 h-6 bg-pink-500 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </div>
            </div>
          </div>

          {showButton && (
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button onClick={onNext} variant="primary">
                Continue 💝
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoveLetterPage;
