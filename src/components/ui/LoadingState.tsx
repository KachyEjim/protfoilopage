import LoadingSpinner from './LoadingSpinner'

export default function LoadingState() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <LoadingSpinner size="lg" />
      <p className="text-gray-600 dark:text-gray-400 animate-pulse">
        Loading...
      </p>
    </div>
  )
} 