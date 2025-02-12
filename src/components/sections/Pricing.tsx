import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import SectionLayout from '@/components/layout/SectionLayout'
import { SPACING } from '@/lib/constants'

const packages = [
  {
    name: "Technical Consultation",
    description: "Strategic technical guidance and architecture planning",
    price: "Project-Based",
    duration: "Flexible Engagement",
    features: [
      "Architecture review & planning",
      "Technology stack consultation",
      "Performance optimization strategy",
      "Best practices guidance",
      "Security assessment",
      "Documentation review"
    ],
    popular: false,
    note: "Perfect for planning and technical decision making"
  },
  {
    name: "Development Solutions",
    description: "Custom development and implementation",
    price: "Value-Based Pricing",
    duration: "Timeline Based on Scope",
    features: [
      "Custom development",
      "Database design & optimization",
      "API development & integration",
      "Performance optimization",
      "Comprehensive documentation",
      "3 months support included",
      "Code quality assurance"
    ],
    popular: true,
    note: "Ideal for implementing robust technical solutions"
  }
]

export default function Pricing() {
  return (
    <SectionLayout
      id="pricing"
      title="Investment Options"
      description="Flexible engagement models tailored to your project needs"
    >
      {/* Value Proposition */}
      <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Each project is unique, and pricing is structured based on value delivered, project complexity, 
          and timeline requirements. I believe in transparent pricing discussions after understanding your 
          specific needs.
        </p>
      </div>

      {/* Packages Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${SPACING.grid.lg} max-w-5xl mx-auto`}>
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden
                      border-2 ${pkg.popular 
                        ? 'border-primary-500' 
                        : 'border-gray-200 dark:border-gray-700'}`}
          >
            {pkg.popular && (
              <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-sm">
                Most Popular
              </div>
            )}

            <div className={`${SPACING.padding.card} ${SPACING.component.default}`}>
              {/* Package Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {pkg.description}
                </p>
              </div>

              {/* Engagement Model */}
              <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-lg font-semibold text-gray-900 dark:text-white">
                  {pkg.price}
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {pkg.duration}
                </div>
              </div>

              {/* Features */}
              <ul className={SPACING.component.default}>
                {pkg.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-sm"
                  >
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-900 dark:text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {pkg.note}
              </div>

              {/* CTA Button */}
              <Button
                variant={pkg.popular ? 'default' : 'outline'}
                className="w-full"
                onClick={() => window.location.href = '#contact'}
              >
                Discuss Your Project
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          All engagements include project management, regular updates, and comprehensive documentation.
          Custom solutions available for specific requirements.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Let's discuss your project requirements to provide a tailored solution that fits your budget and timeline.
        </p>
      </div>
    </SectionLayout>
  )
} 