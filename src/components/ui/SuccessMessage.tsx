import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

interface SuccessMessageProps {
  message: string
  subMessage?: string
}

export default function SuccessMessage({ message, subMessage }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      className="flex flex-col items-center justify-center p-6 space-y-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="w-16 h-16 bg-green-100/80 dark:bg-green-900/20 rounded-full flex items-center justify-center"
      >
        <CheckCircleIcon className="w-10 h-10 text-green-500" />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
        {message}
      </h3>
      {subMessage && (
        <p className="text-gray-600 dark:text-gray-300 text-center">
          {subMessage}
        </p>
      )}
    </motion.div>
  )
} 