import { motion } from 'framer-motion'
import { XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import SuccessMessage from '@/components/ui/SuccessMessage'

interface RecommendationFormProps {
  onClose: () => void
}

type FormData = {
  name: string
  role: string
  company: string
  email: string
  content: string
  rating: number
}

export default function RecommendationForm({ onClose }: RecommendationFormProps) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Here you would typically send this to your backend
    console.log({ ...data, rating })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    setIsSuccess(true)
    
    // Close form after showing success message for 3 seconds (increased from 2 seconds)
    setTimeout(() => {
      // Optional: Add fade-out animation before closing
      const fadeOut = async () => {
        setIsSuccess(false) // This will trigger fade-out animation
        await new Promise(resolve => setTimeout(resolve, 500)) // Wait for fade-out
        onClose() // Then close the modal
      }
      fadeOut()
    }, 3000) // Increased to 3 seconds
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl max-h-[90vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {isSuccess ? (
            <SuccessMessage 
              message="Thank you for your recommendation!"
              subMessage="Your feedback means a lot to me."
            />
          ) : (
            <>
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Modal content with scrollable area */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="text-center mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-full w-fit mx-auto">
                    <StarIcon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    Write a Recommendation
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Share your experience working with me
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Rating */}
                  <div className="flex flex-col items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Rating
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="p-1 transition-colors"
                        >
                          {star <= (hoveredRating || rating) ? (
                            <StarIconSolid className="w-6 h-6 text-yellow-400" />
                          ) : (
                            <StarIcon className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Role
                      </label>
                      <input
                        {...register('role', { required: 'Role is required' })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        placeholder="e.g., Project Manager"
                      />
                      {errors.role && (
                        <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Company
                      </label>
                      <input
                        {...register('company', { required: 'Company is required' })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                        Your Recommendation
                      </label>
                      <textarea
                        {...register('content', {
                          required: 'Recommendation is required',
                          minLength: {
                            value: 50,
                            message: 'Recommendation must be at least 50 characters'
                          }
                        })}
                        rows={3}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-sm"
                        placeholder="Share your experience working with me..."
                      />
                      {errors.content && (
                        <p className="mt-1 text-xs text-red-500">{errors.content.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button - Fixed at bottom */}
                  <div className="sticky bottom-0 pt-4 bg-white dark:bg-gray-800">
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting || !rating}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Recommendation'}
                    </Button>
                  </div>
                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
} 