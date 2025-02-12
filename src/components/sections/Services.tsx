import { motion } from 'framer-motion';
import {
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';
import SectionLayout from '@/components/layout/SectionLayout';
import { SPACING } from '@/lib/constants';

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
    availability: 'Limited Availability (2 projects/quarter)',
    workStyle: 'Dedicated Collaboration',
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
    availability: 'Weekly Technical Consultations',
    workStyle: 'Strategic Partnership',
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
    availability: 'Ongoing Support Available',
    workStyle: 'Project-based or Retainer',
    expertise: 'Senior Level (6+ years)',
  },
];
export default function Services() {
  return (
    <SectionLayout
      id="services"
      title="Specialized Services"
      description="Focused expertise in backend development and technical solutions"
    >
      {/* Transparency Notice */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 p-6 rounded-xl shadow-sm">
        <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
          Committed to delivering exceptional value through focused expertise
          and dedicated project attention. Operating with a selective engagement
          model to ensure premium quality deliverables and optimal client
          outcomes.
        </p>
      </div>

      {/* Services Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${SPACING.grid.lg}`}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm ${SPACING.padding.card} ${SPACING.component.default}`}
          >
            {/* Service Content */}
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Features and Technologies */}
            <div className={SPACING.component.default}>
              {/* Features */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  What I Offer
                </h4>
                <ul className="grid gap-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-primary-600 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 
                               text-primary-700 dark:text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability & Work Style */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className={SPACING.component.tight}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Availability
                    </span>
                    <span className="text-sm font-medium text-primary-600">
                      {service.availability}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Work Style
                    </span>
                    <span className="text-sm font-medium text-primary-600">
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
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          For enterprise-scale initiatives, leverage my extensive network of
          vetted technology partners. Benefit from comprehensive project
          oversight while accessing specialized expertise as needed.
        </p>
      </div>
    </SectionLayout>
  );
}
