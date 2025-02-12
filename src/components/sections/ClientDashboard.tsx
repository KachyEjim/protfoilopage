import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

// Sample project data
const sampleProject = {
  name: "E-commerce Platform",
  progress: 65,
  status: "In Progress",
  nextMilestone: "Payment Integration",
  dueDate: "2024-03-30",
  recentUpdates: [
    {
      type: "milestone",
      message: "User Authentication completed",
      date: "2024-03-15"
    },
    {
      type: "file",
      message: "Updated UI mockups uploaded",
      date: "2024-03-14"
    },
    {
      type: "message",
      message: "Weekly progress meeting scheduled",
      date: "2024-03-13"
    }
  ],
  milestones: [
    { name: "Project Setup", status: "completed", date: "2024-03-01" },
    { name: "User Authentication", status: "completed", date: "2024-03-15" },
    { name: "Payment Integration", status: "in-progress", date: "2024-03-30" },
    { name: "Order Management", status: "pending", date: "2024-04-15" }
  ],
  files: [
    { name: "UI Mockups", type: "design", date: "2024-03-14" },
    { name: "API Documentation", type: "doc", date: "2024-03-10" },
    { name: "Database Schema", type: "doc", date: "2024-03-05" }
  ]
}

export default function ClientDashboard() {
  return (
    <section id="client-dashboard" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-white">
              Client Dashboard Preview
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Stay updated with your project's progress through our intuitive dashboard
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Dashboard Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {sampleProject.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Next Milestone: {sampleProject.nextMilestone}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Due Date: {sampleProject.dueDate}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {sampleProject.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-700">
              {/* Progress & Milestones */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <ChartBarIcon className="w-4 h-4" />
                    Project Progress
                  </h4>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200 dark:bg-primary-900/20">
                          {sampleProject.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex h-2 mb-4 overflow-hidden bg-primary-200 dark:bg-primary-900/20 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${sampleProject.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-primary-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    Milestones
                  </h4>
                  <div className="space-y-4">
                    {sampleProject.milestones.map((milestone) => (
                      <div 
                        key={milestone.name}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          milestone.status === 'completed' 
                            ? 'bg-green-500' 
                            : milestone.status === 'in-progress'
                            ? 'bg-yellow-500'
                            : 'bg-gray-300'
                        }`} />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {milestone.name}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {milestone.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Communication & Updates */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    Recent Updates
                  </h4>
                  <div className="space-y-4">
                    {sampleProject.recentUpdates.map((update, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1">
                          {update.type === 'milestone' && <CheckCircleIcon className="w-4 h-4 text-green-500" />}
                          {update.type === 'file' && <DocumentIcon className="w-4 h-4 text-blue-500" />}
                          {update.type === 'message' && <ChatBubbleLeftRightIcon className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <div>
                          <p className="text-sm text-gray-900 dark:text-white">
                            {update.message}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {update.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Files & Resources */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <DocumentIcon className="w-4 h-4" />
                    Project Files
                  </h4>
                  <div className="space-y-3">
                    {sampleProject.files.map((file) => (
                      <div 
                        key={file.name}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <DocumentIcon className="w-5 h-5 text-primary-600" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {file.name}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {file.date}
                            </div>
                          </div>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 dark:hover:text-primary-400">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real-time Updates",
                description: "Stay informed with instant project updates and progress tracking",
                icon: ArrowPathIcon
              },
              {
                title: "File Management",
                description: "Secure file sharing and document management system",
                icon: DocumentIcon
              },
              {
                title: "Communication",
                description: "Integrated messaging and feedback system",
                icon: ChatBubbleLeftRightIcon
              },
              {
                title: "Progress Tracking",
                description: "Visual progress bars and milestone tracking",
                icon: ChartBarIcon
              }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <feature.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 