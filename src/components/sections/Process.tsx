import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

const workProcess = [
  {
    step: 1,
    title: 'Discovery & Analysis',
    description:
      'Comprehensive assessment of technical requirements and business objectives',
    icon: MagnifyingGlassIcon,
    details: [
      'Technical requirements analysis',
      'Architecture assessment',
      'Risk evaluation',
      'Technology stack evaluation',
      'Cost-benefit analysis',
    ],
    deliverables: 'Technical Specification Document',
    timeline: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Strategic Planning',
    description: 'Developing architectural blueprints and execution roadmap',
    icon: ClipboardDocumentListIcon,
    details: [
      'System architecture design',
      'Sprint planning',
      'Resource allocation',
      'Performance metrics definition',
      'Risk mitigation strategy',
    ],
    deliverables: 'Project Roadmap & Architecture Document',
    timeline: '1-2 weeks',
  },
  {
    step: 3,
    title: 'Agile Development',
    description:
      'Iterative development with continuous integration and deployment',
    icon: CodeBracketIcon,
    details: [
      'Test-driven development',
      'CI/CD implementation',
      'Code quality monitoring',
      'Performance optimization',
      'Security implementation',
    ],
    deliverables: 'Production-Ready Code & Testing Reports',
    timeline: 'Varies by project scope',
  },
  {
    step: 4,
    title: 'Deployment & Integration',
    description: 'Production deployment with comprehensive monitoring setup',
    icon: RocketLaunchIcon,
    details: [
      'Production deployment',
      'Performance monitoring',
      'System integration',
      'Security auditing',
      'Knowledge transfer sessions',
    ],
    deliverables: 'Deployed System & Documentation',
    timeline: '1-2 weeks',
  },
  {
    step: 5,
    title: 'Maintenance & Optimization',
    description: 'Ongoing support and performance optimization',
    icon: WrenchScrewdriverIcon,
    details: [
      'Performance monitoring',
      'System optimization',
      'Security updates',
      'Scalability management',
      'Technical support',
    ],
    deliverables: 'Monthly Performance Reports',
    timeline: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 dark:text-white">
              Development Process
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Systematic approach to delivering enterprise-grade solutions
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 transform -translate-y-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                )}

                <div
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6 relative z-10 h-full
                             border border-gray-100 dark:border-gray-700 
                             shadow-sm hover:shadow-xl
                             transform hover:-translate-y-1
                             transition-all duration-300"
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-600 to-primary-500 
                                text-white w-12 h-12 rounded-xl 
                                flex items-center justify-center text-lg font-bold
                                shadow-lg transform -rotate-3"
                  >
                    {process.step}
                  </div>

                  {/* Icon */}
                  <div
                    className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 
                                dark:from-primary-900/40 dark:to-primary-800/20 
                                rounded-xl w-fit"
                  >
                    <process.icon className="w-8 h-8 text-primary-600" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {process.description}
                    </p>
                  </div>

                  {/* Details */}
                  <ul className="space-y-3">
                    {process.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <CheckIcon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Timeline */}
                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Timeline:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {process.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Summary */}
          <div
            className="text-center max-w-3xl mx-auto bg-gradient-to-r from-gray-50 to-primary-50 
                         dark:from-gray-800/50 dark:to-primary-900/30 
                         p-8 rounded-2xl"
          >
            <p className="text-lg text-gray-700 dark:text-gray-200">
              This agile process framework is customized for each project while
              maintaining our commitment to quality, efficiency, and continuous
              delivery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
