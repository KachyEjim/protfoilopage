import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import SectionLayout from '@/components/layout/SectionLayout'

const packages = [
  {
    name: "Technical Consultation",
    description: "Expert advice on system architecture and technical solutions",
    price: "Project Based",
    duration: "Flexible",
    features: [
      { included: true, text: "System architecture review" },
      { included: true, text: "Technical stack recommendations" },
      { included: true, text: "Performance optimization advice" },
      { included: true, text: "Best practices guidance" },
      { included: true, text: "Documentation review" },
      { included: false, text: "Implementation" },
      { included: false, text: "Ongoing support" }
    ],
    popular: false,
    note: "Perfect for technical guidance and expert advice"
  },
  {
    name: "Backend Development",
    description: "Custom backend solutions and API development",
    price: "Value Based",
    duration: "2-8 weeks",
    features: [
      { included: true, text: "API development" },
      { included: true, text: "Database design" },
      { included: true, text: "Authentication system" },
      { included: true, text: "Performance optimization" },
      { included: true, text: "Documentation" },
      { included: true, text: "3 months support" },
      { included: true, text: "Code review sessions" }
    ],
    popular: true,
    note: "Ideal for businesses needing robust backend systems"
  }
]

export default function Packages() {
  return (
    <SectionLayout
      id="packages"
      title="Investment Options"
      description="Flexible engagement models tailored to your project needs"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

              <div className="p-6 space-y-6">
                {/* Package Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {pkg.price}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Typical duration: {pkg.duration}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-3 text-sm"
                    >
                      {feature.included ? (
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XMarkIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={feature.included 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400'}>
                        {feature.text}
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
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            All packages include project management, regular updates, and code documentation.
            Custom packages available for specific requirements.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            * Prices may vary based on project complexity and requirements.
            Contact for a detailed quote.
          </p>
        </div>
      </motion.div>
    </SectionLayout>
  )
} 