import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DocumentTextIcon,
  CommandLineIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';
import { useGitHubData } from '@/hooks/useGitHubData';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { SECTION_SPACING } from '@/lib/constants';

// Project categories
type Category = 'All' | 'Full Stack' | 'Backend' | 'System' | 'IoT' | 'Web3';

const categories: Category[] = [
  'All',
  'Full Stack',
  'Backend',
  'System',
  'IoT',
  'Web3',
];

const projects = [
  {
    title: 'Real-time TicTacToe Game',
    description:
      'A multiplayer game with real-time gameplay using WebSocket technology. Features include user authentication, game rooms, and live chat.',
    category: 'Full Stack',
    stack: 'MERN',
    image: '/projects/tictactoe.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Implemented WebSocket for real-time game state synchronization',
      'Built user authentication system with JWT',
      'Designed responsive UI with React and Tailwind CSS',
      'Created RESTful API with Node.js and Express',
    ],
    technicalDetails: [
      'WebSocket implementation for real-time updates',
      'MongoDB for game state persistence',
      'JWT for secure authentication',
      'React Context for state management',
    ],
    learnings: [
      'Real-time data synchronization patterns',
      'WebSocket security best practices',
      'State management in multiplayer games',
    ],
  },
  {
    title: 'Crypto Currency Tracker',
    description:
      'Real-time cryptocurrency tracking platform with Web3 integration for live market data and portfolio management.',
    category: 'Web3',
    stack: 'MERN + Web3',
    image: '/projects/crypto-tracker.png',
    tags: [
      'React',
      'Node.js',
      'Web3.js',
      'MongoDB',
      'CoinGecko API',
      'Ethereum',
    ],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Real-time cryptocurrency price tracking',
      'Web3 wallet integration',
      'Portfolio tracking and analytics',
      'Market trends visualization',
    ],
  },
  {
    title: 'Movie Recommendation Platform',
    description:
      'Platform for movie discovery and personalized recommendations.',
    category: 'Full Stack',
    stack: 'MERN',
    image: '/projects/movie-booking.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'RESTful API'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Recommendation engine',
      'Secure payment integration',
      'Real-time booking system',
    ],
  },
  {
    title: 'Energy Consumption Tracker',
    description: 'IoT-ready application for energy consumption analysis.',
    category: 'IoT',
    stack: 'Python',
    image: '/projects/energy-tracker.png',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Chart.js', 'IoT'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Real-time data processing',
      'Energy usage analytics',
      'IoT device integration',
    ],
  },
  {
    title: 'AirBnB Clone',
    description: 'Full-featured AirBnB clone with property management system.',
    category: 'Backend',
    stack: 'Python',
    image: '/projects/airbnb-clone.png',
    tags: ['Python', 'Flask', 'MySQL', 'RESTful API'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Complex database design',
      'RESTful API architecture',
      'Authentication system',
    ],
  },
  {
    title: 'Relaxation Website',
    description: 'Wellness platform for meditation and relaxation.',
    category: 'Full Stack',
    stack: 'MERN',
    image: '/projects/relaxation.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Personalized recommendations',
      'Progress tracking',
      'Audio integration',
    ],
  },
  {
    title: 'Simple Shell',
    description: 'Custom Unix shell implementation.',
    category: 'System',
    stack: 'C',
    image: '/projects/shell-project.png',
    tags: ['C', 'Unix', 'System Programming'],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Command interpretation',
      'Process management',
      'Memory management',
    ],
  },
  {
    title: 'Custom Printf Implementation',
    description:
      'A custom implementation of the printf function in C, handling various format specifiers and conversion modifiers.',
    category: 'System',
    stack: 'C',
    image: '/projects/printf.png',
    tags: [
      'C',
      'System Programming',
      'String Manipulation',
      'Memory Management',
    ],
    githubUrl: 'https://github.com/kachyejim/',
    highlights: [
      'Custom format specifier handling',
      'Buffer management for optimal performance',
      'Support for various data types and modifiers',
      'Extensive error handling and edge cases',
    ],
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [visibleProjects, setVisibleProjects] = useState(2); // Show only 2 projects initially
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // Filter projects based on category
  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === 'All' || project.category === activeCategory,
  );

  // Get the first 2 projects (or filtered ones)
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 2); // Load 2 more projects at a time
  };

  // Reset to show only 2 projects when category changes
  useEffect(() => {
    setVisibleProjects(2);
  }, [activeCategory]);

  // Add click handler for project cards
  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

  // Update how we extract the repo name
  const getRepoName = (url: string) => {
    try {
      // Extract repository name from GitHub URL
      const parts = url.split('/');
      return parts[parts.length - 1];
    } catch (error) {
      console.error('Error extracting repo name:', error);
      return '';
    }
  };

  return (
    <section id="projects" className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              A showcase of my technical expertise across different domains.
              {activeCategory !== 'All' &&
                ` Showing ${activeCategory} projects.`}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                          ${
                            activeCategory === category
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                          }`}
                aria-pressed={activeCategory === category}
              >
                {category}
                <span className="ml-2 text-xs">
                  (
                  {category === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === category).length}
                  )
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" layout>
            {displayedProjects.map((project, index) => {
              const { stars, forks, languages, loading, error } = useGitHubData(
                getRepoName(project.githubUrl),
              );

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                  onClick={() => handleProjectClick(project)}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer
                           hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6 space-y-6">
                    {/* Project Header */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                            {project.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            • {project.stack}
                          </span>
                        </div>

                        {/* GitHub Stats */}
                        <div className="flex items-center gap-4">
                          {loading ? (
                            <LoadingSpinner size="sm" />
                          ) : error ? (
                            <span className="text-sm text-red-500">
                              Failed to load stats
                            </span>
                          ) : (
                            <>
                              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                                <StarIcon className="w-4 h-4 text-yellow-400" />
                                <span>{stars}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                                <CodeBracketIcon className="w-4 h-4" />
                                <span>{forks}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                        <DocumentTextIcon className="w-4 h-4 text-primary-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-primary-600 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 
                                   text-primary-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Languages Used */}
                    {!loading &&
                      !error &&
                      Object.keys(languages).length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                            Languages Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(languages).map(([lang, bytes]) => {
                              const percentage = (
                                ((bytes as number) /
                                  Object.values(languages).reduce(
                                    (a, b) => a + (b as number),
                                    0,
                                  )) *
                                100
                              ).toFixed(1);
                              return (
                                <span
                                  key={lang}
                                  className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/20 
                                         text-primary-700 dark:text-primary-300"
                                >
                                  {lang} {percentage}%
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>

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
                  ({filteredProjects.length - visibleProjects} remaining)
                </span>
              </Button>
            </motion.div>
          )}

          {/* GitHub Link */}
          <div className="text-center">
            <a
              href="https://github.com/kachyejim/'"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 
                         hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
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
