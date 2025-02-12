import { motion } from 'framer-motion';
import {
  ClockIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  image: string;
  impact: {
    timeToMarket: string;
    performanceImprovement: string;
    costSaving: string;
    userSatisfaction: string;
  };
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

// ...existing code...
const caseStudies: CaseStudy[] = [
  {
    title: 'Vouch Credit Platform',
    client: 'Vouch Africa',
    industry: 'FinTech',
    challenge:
      'Building a secure, scalable credit platform to connect merchants with salary earners while ensuring instant payments and efficient fund transfers.',
    solution:
      'Developed a comprehensive fintech platform with credit scoring system, merchant integration, and digital wallet functionality using microservices architecture.',
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2340&auto=format&fit=crop',
    impact: {
      timeToMarket: '4 months',
      performanceImprovement: '99.9% uptime',
      costSaving: '60% reduction in transaction costs',
      userSatisfaction: '95% merchant satisfaction',
    },
    technologies: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
    ],
    testimonial: {
      quote:
        'The platform has revolutionized how we handle credit-based payments, providing a seamless experience for both merchants and customers.',
      author: 'Valentine',
      role: 'CEO, Vouch Africa',
    },
  },
  {
    title: 'MyHealthVault',
    client: 'Healthcare Technology Solutions',
    industry: 'Healthcare',
    challenge:
      'Creating a secure, HIPAA-compliant platform for health information management and tracking with real-time monitoring capabilities.',
    solution:
      'Built a comprehensive health information system with end-to-end encryption, real-time health metrics tracking, and automated report generation.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2340&auto=format&fit=crop',
    impact: {
      timeToMarket: '6 months',
      performanceImprovement: '75% faster data retrieval',
      costSaving: '50% reduction in administrative costs',
      userSatisfaction: '97% user satisfaction',
    },
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Azure', 'React'],
    testimonial: {
      quote:
        'MyHealthVault has transformed how we manage patient information, providing unprecedented access and security.',
      author: 'Dr. Nnamani Jonh',
      role: 'Medical Director, Niger Foundation Clinic and Maternity',
    },
  },
  {
    title: 'E-commerce API Platform',
    client: 'Online Retail Company',
    industry: 'E-commerce',
    challenge:
      'Client needed a scalable API platform to handle high-volume transactions and real-time inventory management across multiple stores.',
    solution:
      'Developed a microservices-based API architecture using Node.js and MongoDB, with Redis caching for improved performance.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    impact: {
      timeToMarket: '3 months',
      performanceImprovement: '80% faster response time',
      costSaving: '45% reduction in operational costs',
      userSatisfaction: '98% uptime',
    },
    technologies: ['Node.js', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    testimonial: {
      quote:
        'The API platform transformed our business operations. Response times are significantly faster, and we can now handle peak loads effortlessly.',
      author: 'Victory Nwaorie',
      role: 'CTO & Co-founder, Manchi Retails',
    },
  },
  {
    title: 'Real-time Analytics Dashboard',
    client: 'Data Analytics Firm',
    industry: 'Business Intelligence',
    challenge:
      'Client required a real-time dashboard for visualizing complex data streams from multiple sources with low latency.',
    solution:
      'Built a real-time analytics platform using WebSocket for live data streaming, with custom visualization components and data processing pipeline.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    impact: {
      timeToMarket: '2.5 months',
      performanceImprovement: '90% reduction in data latency',
      costSaving: '60% reduction in data processing costs',
      userSatisfaction: '95% client satisfaction',
    },
    technologies: ['React', 'Node.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
    testimonial: {
      quote:
        "The dashboard provides instant insights that were previously impossible to obtain. It's become an essential tool for our decision-making.",
      author: 'Michael Rodriguez',
      role: 'Head of Analytics, Data Analytics Firm',
    },
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20">
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
              Case Studies
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Real projects, real results. See how I've helped businesses solve
              complex challenges.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-full">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">{study.industry}</p>
                      <h3 className="text-xl font-bold">{study.title}</h3>
                      <p className="text-sm opacity-90">{study.client}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-6">
                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Challenge
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Solution
                        </h4>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <ClockIcon className="w-4 h-4 text-primary-600" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Time to Market
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.impact.timeToMarket}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <ChartBarIcon className="w-4 h-4 text-primary-600" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Performance
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.impact.performanceImprovement}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CurrencyDollarIcon className="w-4 h-4 text-primary-600" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Cost Saving
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.impact.costSaving}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <RocketLaunchIcon className="w-4 h-4 text-primary-600" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Satisfaction
                          </span>
                        </div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {study.impact.userSatisfaction}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 
                                     text-primary-700 dark:text-primary-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    {study.testimonial && (
                      <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 dark:text-gray-300">
                        "{study.testimonial.quote}"
                        <footer className="mt-2 text-sm">
                          <strong className="text-gray-900 dark:text-white">
                            {study.testimonial.author}
                          </strong>
                          <br />
                          <span className="text-gray-500 dark:text-gray-400">
                            {study.testimonial.role}
                          </span>
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
