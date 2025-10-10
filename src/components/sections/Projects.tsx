type Project = {
  title: string;
  description: string;
  category: string;
  stack?: string;
  image: string;
  tags: string[];
  status: string;
  highlights: string[];
  githubUrl: string;
};
import { Button } from '@/components/ui/Button';
import { SECTION_SPACING } from '@/lib/constants';
import { CommandLineIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects: Project[] = [
  {
    title: 'Senda',
    description:
      'Enterprise-level automated email sending system for employers. Features include analytics, scheduling, tracking, and a rich UI for campaign management.',
    category: 'SaaS',
    stack: 'Python, Zepto',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    tags: [
      'Python',
      'Zepto',
      'Email Automation',
      'Analytics',
      'Scheduling',
      'Tracking',
      'UI',
    ],
    status: 'Production',
    highlights: [
      'Automated email campaigns for employers',
      'Advanced analytics and reporting',
      'Scheduling and delivery tracking',
      'Rich user interface for campaign management',
      'Built with Python and Zepto',
    ],
    githubUrl: '#',
  },
  {
    title: 'Crypto Trading Bot',
    description:
      'Automated trading bot for cryptocurrency markets. Integrates with major exchanges, supports multiple trading strategies, and provides real-time analytics.',
    category: 'Backend',
    stack: 'Node.js, Python',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tags: ['Python', 'Django', 'REST API', 'WebSocket', 'Trading Algorithms'],
    status: 'Beta',
    highlights: [
      'Exchange API integration (Binance, Coinbase, etc.)',
      'Supports multiple trading strategies',
      'Real-time analytics dashboard',
      'Automated order execution and risk management',
    ],
    githubUrl: 'https://github.com/kachyejim/crypto-bot',
  },
  {
    title: 'Social Media Poster',
    description:
      'A platform that allows users to create one post and automatically publish it across multiple social media platforms (Twitter, Facebook, LinkedIn, Instagram, etc.) with scheduling and analytics.',
    category: 'Full Stack',
    stack: 'MERN',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    tags: [
      'Node.js',
      'TypeScript',
      'OAuth',
      'Scheduler',
      'Postgres',
      'NestJS',
      'Flutter',
    ],
    status: 'Beta',
    highlights: [
      'Multi-platform posting (Twitter, Facebook, LinkedIn, Instagram)',
      'Scheduling and analytics dashboard',
      'OAuth integration for secure authentication',
      'Rich text and media support',
    ],
    githubUrl: 'https://github.com/kachyejim/social-poster',
  },
  {
    title: 'VouchPay',
    description:
      'Credit platform for merchants to request loans on behalf of verified salaried earners. Led the team, architected backend (NestJS) and frontend (React Native), and deployed the application. Includes wallet system for transfer, deposit, and more.',
    category: 'Fintech',
    stack: 'NestJS, React Native, DevOps',
    image: 'https://www.usevouchpay.com/assets/img/vouchpay-landing.png',
    tags: [
      'NestJS',
      'React Native',
      'Team Lead',
      'DevOps',
      'Wallet',
      'Credit',
      'Fintech',
    ],
    status: 'Live',
    highlights: [
      'Team lead and full project delivery',
      'Backend with NestJS, frontend with React Native',
      'Merchant loan requests for verified salaried earners',
      'Wallet system: transfer, deposit, withdrawal',
      'Production deployment and CI/CD',
      '<a href="https://www.usevouchpay.com" target="_blank" rel="noopener noreferrer" class="text-primary-600 underline">Landing page: www.usevouchpay.com</a>',
    ],
    githubUrl: 'https://www.usevouchpay.com',
  },
  {
    title: 'Health Vault',
    description:
      'Health management system for hospitals to manage patient and doctor records, schedule and manage appointments, handle patient medication, and facilitate communication between patients and doctors. Contributed to backend development with Python and Flask.',
    category: 'Healthcare',
    stack: 'Python, Flask',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80',
    tags: [
      'Python',
      'Flask',
      'Healthcare',
      'Appointments',
      'Medication',
      'Backend',
    ],
    status: 'Production',
    highlights: [
      'Manage patient and doctor records',
      'Appointment scheduling and management',
      'Patient medication tracking',
      'Doctor-patient communication',
      'Backend development with Python and Flask',
    ],
    githubUrl: '#',
  },
  {
    title: 'Wancemo',
    description:
      'Waste management system designed for easier waste collection, tracking, and delivering insights to companies on product usage. Contributed to backend development as part of a team.',
    category: 'Environmental',
    stack: 'NestJS, TypeScript',
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    tags: [
      'NestJS',
      'TypeScript',
      'Waste Management',
      'Tracking',
      'Team Project',
      'Backend',
    ],
    status: 'Beta',
    highlights: [
      'Efficient waste collection and tracking',
      'Backend development with NestJS and TypeScript',
      'Team collaboration',
      'Product usage insights for companies',
    ],
    githubUrl: '#',
  },
  {
    title: 'IoT Home Dashboard',
    description:
      'A dashboard for monitoring and controlling smart home devices. Real-time sensor data, device control, and automation rules.',
    category: 'IoT',
    stack: 'React, Node.js, MQTT',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tags: [
      'C/C++',
      'Arduino',
      'MQTT',
      'IoT',
      'Automation',
      'React Native',
      'NestJS',
      'TypeScript',
    ],
    status: 'Active',
    highlights: [
      'Real-time sensor data visualization',
      'Device control and automation',
      'Custom automation rule builder',
      'Secure remote access',
    ],
    githubUrl: 'https://github.com/kachyejim/iot-dashboard',
  },
  {
    title: 'Distributed File System',
    description:
      'A distributed file system for scalable storage and retrieval. Fault-tolerant, high-availability, and optimized for large datasets.',
    category: 'System',
    stack: 'Go, Docker, Kubernetes',
    image: '/projects/distributed-fs.png',
    tags: ['Go', 'Docker', 'Kubernetes', 'Distributed Systems'],
    status: 'Completed',
    highlights: [
      'Fault-tolerant architecture',
      'High-availability cluster',
      'Optimized for large datasets',
      'Easy deployment with Docker/Kubernetes',
    ],
    githubUrl: 'https://github.com/kachyejim/distributed-fs',
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number>(4);
  // Modal pop up disabled, code retained for future use
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = projects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projects.length;

  // Modal pop up disabled
  const handleProjectClick = (_project: Project) => {
    // Modal pop-up disabled; handler does nothing
  };

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4);
  };

  return (
    <section
      id="projects"
      className={SECTION_SPACING.padding
        .replace('py-20', 'py-10')
        .replace('py-1', 'py-8')}
    >
      <div className={SECTION_SPACING.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
              A showcase of my technical expertise across different domains.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" layout>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                onClick={() => handleProjectClick(project)}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="p-6 space-y-6">
                  {/* Project Title as Header with Icon and Status in a single row */}
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      {index === 0 && (
                        <svg
                          className="w-4 h-4 text-primary-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9V7a5 5 0 0110 0v2M12 14v2m-4-2v2m8-2v2" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          className="w-4 h-4 text-primary-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                          <rect width="8" height="6" x="8" y="2" rx="1" />
                          <path d="M12 12v.01" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg
                          className="w-4 h-4 text-primary-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 20h9" />
                          <path d="M3 20h9" />
                          <path d="M12 4v16" />
                          <circle cx="12" cy="8" r="4" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg
                          className="w-4 h-4 text-primary-600 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <rect width="18" height="14" x="3" y="5" rx="2" />
                          <path d="M3 7h18" />
                          <path d="M7 3v2" />
                          <path d="M17 3v2" />
                        </svg>
                      )}
                      <h3 className="truncate text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300">
                        {project.title}
                      </h3>
                    </div>
                    <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 whitespace-nowrap">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-[15px] sm:text-base text-gray-900 dark:text-white flex items-center gap-2">
                      <DocumentTextIcon className="w-4 h-4 text-primary-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[13px] sm:text-sm text-gray-600 dark:text-gray-300"
                        >
                          <span className="text-primary-600 mt-1">•</span>
                          {/* Render HTML for landing page link, else plain text */}
                          {highlight.startsWith('<a') ? (
                            <span
                              dangerouslySetInnerHTML={{ __html: highlight }}
                            />
                          ) : (
                            highlight
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Technologies (Tech Stack at the bottom) */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-[12px] sm:text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {/* Show stack only at the bottom for the first project */}
                    {index === 0 && project.stack && (
                      <span className="px-2.5 py-1 text-[12px] sm:text-sm rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                        {project.stack}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Modal pop-up is currently disabled. Code retained for future use. */}
          {/*
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>
          */}

          {/* Load More Button */}
          {hasMoreProjects && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8"
            >
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="group"
              >
                Load More Projects
                <span className="ml-2 text-sm">
                  ({projects.length - visibleProjects} remaining)
                </span>
              </Button>
            </motion.div>
          )}

          {/* GitHub Link */}
          <div className="text-center">
            <a
              href="https://github.com/kachyejim/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <span>View More Projects on GitHub</span>
              <CommandLineIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
