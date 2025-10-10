import SectionLayout from '@/components/layout/SectionLayout';
import { SPACING } from '@/lib/constants';
import {
  CloudIcon,
  CpuChipIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Enterprise Backend Architecture',
    description: 'Design and implementation of scalable distributed systems',
    icon: ServerIcon,
    features: [
      'Microservices architecture design',
      'High-performance API development',
      'Database optimization & scaling',
      'Security implementation & auth systems',
      'Message queue implementation',
      'Cache optimization strategies',
    ],
    technologies: [
      'Node.js',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS/Azure',
      'Kubernetes',
    ],
    availability: 'Available for new projects',
    workStyle: 'Collaborative & User-Centered',
    expertise: 'Senior Level (8+ years)',
  },
  {
    title: 'Systems Architecture & Integration',
    description: 'Enterprise-grade technical solutions and system design',
    icon: CpuChipIcon,
    features: [
      'System architecture design',
      'Performance optimization',
      'Cloud infrastructure setup',
      'Technical debt reduction',
      'Integration architecture',
      'Scalability planning',
    ],
    technologies: [
      'REST/GraphQL APIs',
      'Cloud Services',
      'Message Brokers',
      'CI/CD',
      'Monitoring Tools',
      'Infrastructure as Code',
    ],
    availability: 'Available for new projects',
    workStyle: 'Collaborative & User-Centered',
    expertise: 'Architecture Level',
  },
  {
    title: 'DevOps & Cloud Solutions',
    description: 'Modern cloud infrastructure and deployment automation',
    icon: CloudIcon,
    features: [
      'Cloud architecture design',
      'Infrastructure automation',
      'CI/CD pipeline setup',
      'Container orchestration',
      'Monitoring & logging',
      'Cost optimization',
    ],
    technologies: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Prometheus/Grafana',
    ],
    availability: 'Available for new projects',
    workStyle: 'Collaborative & User-Centered',
    expertise: 'Senior Level (6+ years)',
  },
  {
    title: 'Frontend Engineering & UI/UX',
    description:
      'Modern, accessible, and performant web interfaces for all devices',
    icon: CpuChipIcon, // Reusing icon, can be replaced with a more suitable one
    features: [
      'Design system implementation',
      'Accessibility (WCAG) best practices',
      'Performance optimization',
      'Responsive/mobile-first design',
      'Animation & micro-interactions',
      'Automated testing (unit/e2e)',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
      'Figma',
      'Storybook',
      'Jest',
      'Cypress',
    ],
    availability: 'Available for new projects',
    workStyle: 'Collaborative & User-Centered',
    expertise: 'Senior Level (7+ years)',
  },
];
export default function Services() {
  return (
    <SectionLayout
      id="services"
      title="Specialized Services"
      description="Focused expertise in full-stack development and technical solutions"
    >
      {/* Transparency Notice */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 p-4 rounded-xl shadow-sm mb-8">
        <p className="font-sans text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-normal">
          Committed to delivering exceptional value through focused expertise
          and dedicated project attention. Operating with a selective engagement
          model to ensure premium quality deliverables and optimal client
          outcomes.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8"
          >
            {/* Service Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-1 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <service.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-sans text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Features and Technologies */}
            <div className={SPACING.component.default}>
              {/* Features */}
              <div className="mb-4">
                <h4 className="font-sans font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  What I Offer
                </h4>
                <ul className="grid gap-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="font-sans flex items-start gap-2 text-base sm:text-lg text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-primary-600 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-sans font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-sans px-2 py-1 text-base sm:text-lg rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability & Work Style */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400">
                      Availability
                    </span>
                    <span className="font-sans text-base sm:text-lg font-medium text-primary-600">
                      {service.availability}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400">
                      Work Style
                    </span>
                    <span className="font-sans text-base sm:text-lg font-medium text-primary-600">
                      {service.workStyle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaboration Note */}
      <div className="mb-8 text-center max-w-xl mx-auto">
        <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-normal">
          For enterprise-scale initiatives, leverage my extensive network of
          vetted technology partners. Benefit from comprehensive project
          oversight while accessing specialized expertise as needed.
        </p>
      </div>
    </SectionLayout>
  );
}
