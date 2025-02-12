import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface ProjectModalProps {
  project: {
    title: string
    description: string
    image: string
    stack: string
    highlights: string[]
    technicalDetails?: string[]
    learnings?: string[]
    challenges?: string[]
    githubUrl: string
  }
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          
          {/* Project Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Overview</h3>
              <div className="space-y-4">
                <p>{project.description}</p>
                <div>
                  <h4 className="font-medium mb-2">Tech Stack:</h4>
                  <p className="text-primary-600 dark:text-primary-400">{project.stack}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Sections */}
          {project.technicalDetails && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Details</h3>
              <ul className="space-y-2">
                {project.technicalDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.learnings && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
              <ul className="space-y-2">
                {project.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
} 