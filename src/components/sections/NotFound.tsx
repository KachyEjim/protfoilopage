import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  HomeIcon,
  ArrowLeftIcon,
  BugAntIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [bugPosition, setBugPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const bugAnimation = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Interactive elements
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  // Bug game logic
  const moveBug = () => {
    if (!gameStarted) return;
    const newX = Math.random() * 80 + 10; // Keep bug within 10-90% of container
    const newY = Math.random() * 80 + 10;
    setBugPosition({ x: newX, y: newY });
    bugAnimation.start({
      x: `${newX}%`,
      y: `${newY}%`,
      transition: { duration: 0.5 },
    });
  };

  const catchBug = () => {
    setScore((prev) => prev + 1);
    moveBug();
  };

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(moveBug, 2000);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/20"
        />
        {/* Animated shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 0.2,
            }}
            className="absolute w-24 h-24 rounded-full bg-primary-200/20 dark:bg-primary-800/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          {/* Glitch Effect */}
          <motion.div variants={itemVariants} className="relative">
            <h1
              className="text-8xl sm:text-9xl font-bold text-primary-600 dark:text-primary-500 
                         animate-pulse relative z-10"
            >
              404
            </h1>
            <div
              className="absolute inset-0 text-8xl sm:text-9xl font-bold text-red-500 
                          animate-[glitch_1s_ease-in-out_infinite] opacity-30"
            >
              404
            </div>
            <div
              className="absolute inset-0 text-8xl sm:text-9xl font-bold text-blue-500 
                          animate-[glitch_1.5s_ease-in-out_infinite] opacity-30"
            >
              404
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              While you're here, try to catch the bug!{' '}
              {score > 0 && `Score: ${score}`}
            </p>
          </motion.div>

          {/* Bug Game Area */}
          <motion.div
            variants={itemVariants}
            className="relative h-48 bg-white/10 dark:bg-gray-800/10 rounded-xl backdrop-blur-sm
                      border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {!gameStarted ? (
              <button
                onClick={() => setGameStarted(true)}
                className="absolute inset-0 flex items-center justify-center text-primary-600 
                         dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300
                         transition-colors"
              >
                Click to Start Bug Hunt!
              </button>
            ) : (
              <motion.button
                animate={bugAnimation}
                initial={{ x: `${bugPosition.x}%`, y: `${bugPosition.y}%` }}
                className="absolute p-2 transform -translate-x-1/2 -translate-y-1/2
                         text-primary-600 dark:text-primary-400 hover:scale-125
                         transition-transform"
                onClick={catchBug}
              >
                <BugAntIcon className="w-6 h-6 animate-bounce" />
              </motion.button>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button onClick={handleGoBack} variant="outline" className="group">
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
            <Button onClick={handleGoHome} className="group">
              <HomeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer"
            onClick={() =>
              (window.location.href = 'https://github.com/kachyejim')
            }
          >
            <span className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Psst! While you're here, check out my GitHub
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
