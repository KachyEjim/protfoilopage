import { motion } from 'framer-motion'
import { 
  ClockIcon, 
  CheckBadgeIcon,
  StarIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'
import SectionLayout from '@/components/layout/SectionLayout'

const metrics = [
  {
    title: "Project Success Rate",
    value: "98%",
    description: "Projects delivered on time and within scope",
    icon: CheckBadgeIcon
  },
  {
    title: "Response Time",
    value: "< 24hrs",
    description: "Average response time for inquiries",
    icon: ClockIcon
  },
  {
    title: "Client Satisfaction",
    value: "4.9/5",
    description: "Average client satisfaction rating",
    icon: StarIcon
  },
  {
    title: "Code Quality",
    value: "A+",
    description: "SonarQube maintainability rating",
    icon: ShieldCheckIcon
  }
]

export default function TrustIndicators() {
  return (
    <SectionLayout
      id="trust-indicators"
      title="Investment & Value"
      description="Committed to delivering high-quality solutions with transparency and reliability"
    >
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center
                     border border-gray-200 dark:border-gray-700
                     hover:border-primary-500 transition-colors duration-300"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-full">
                <metric.icon className="w-6 h-6 text-primary-600" />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {metric.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Trust Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Code Quality Assurance
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Automated testing and continuous integration for reliable code
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Clear Communication
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Regular updates and transparent project tracking
          </p>
        </div>
        <div className="text-center space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white">
            Support Guarantee
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            3 months post-launch support included
          </p>
        </div>
      </div>
    </SectionLayout>
  )
} 