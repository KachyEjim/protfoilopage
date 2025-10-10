import { Button } from '@/components/ui/Button';
import ScheduleModal from '@/components/ui/ScheduleModal';
import {
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  LightBulbIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Hero() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const highlights = [
    {
      title: 'Backend Development',
      description:
        'Building robust, scalable APIs and server-side logic with Node.js, Python, and cloud platforms.',
      icon: ServerIcon,
    },
    {
      title: 'Full-Stack Solutions',
      description:
        'Delivering seamless user experiences and efficient architectures using React, TypeScript, and modern web technologies.',
      icon: CodeBracketIcon,
    },
    {
      title: 'System Architecture',
      description:
        'Designing and implementing high-performance, maintainable systems for business growth.',
      icon: CommandLineIcon,
    },
    {
      title: 'Systems Engineering',
      description:
        'Extensive background in Electronics, IoT architecture, and Embedded systems development.',
      icon: CpuChipIcon,
    },
    {
      title: 'Solution Architecture',
      description:
        'Designing scalable, high-performance solutions with proven methodologies.',
      icon: LightBulbIcon,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-start py-4 sm:py-6"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-28 h-28 md:w-32 md:h-32 mb-4"
          >
            <div className="group relative w-full h-full">
              <img
                src={import.meta.env.BASE_URL + 'profileP1.png'}
                alt="Onyedikachi Ejim - KACHY"
                className="rounded-full object-contain w-full h-full 
                border-4 border-primary-200 dark:border-primary-800 
                shadow-lg bg-white"
                loading="eager"
                width={192}
                height={192}
              />
              <div
                className="absolute -bottom-2 -right-2 w-8 h-8 
                 bg-green-500 rounded-full 
                 border-4 border-white dark:border-gray-900 
                 animate-pulse"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Name & Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-1 mt-4"
          >
            <h2 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
              <span className="inline-block  bg-gradient-to-r from-primary-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Onyedikachi Ejim
              </span>
            </h2>
            <span
              className="inline-block px-4 py-1 rounded-xl text-xs font-semibold tracking-wide shadow bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800"
              role="text"
              style={{ letterSpacing: '0.02em' }}
            >
              Full Stack Software Engineer & Solution Architect
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1
            className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white"
            aria-label="I build scalable solutions for ambitious teams"
          >
            I build{' '}
            <span className="text-primary-600 dark:text-primary-500">
              scalable solutions
            </span>{' '}
            for ambitious teams
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
            I’m a Full Stack Software Engineer with a passion for robust backend
            systems and scalable architectures. My background in electronics
            engineering brings analytical precision and systematic
            problem-solving to every project, helping businesses grow with
            innovative technology.
          </p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-2"
          >
            <Button
              size="lg"
              onClick={() => (window.location.href = '#projects')}
              className="w-full sm:w-auto"
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsScheduleOpen(true)}
              className="w-full sm:w-auto"
            >
              Schedule a Call
            </Button>
          </motion.div>

          {/* Download CV Button */}
          <div className="flex justify-center mt-4">
            <a
              href={
                import.meta.env.BASE_URL + 'documents/Onyedikachi-Ejim-CV.pdf'
              }
              download
              className="inline-flex items-center px-4 py-2 text-base font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow"
              style={{ textDecoration: 'none' }}
            >
              Download My CV
            </a>
          </div>

          {/* Status and Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mt-2"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 font-semibold">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" />
                </svg>
                Available for Freelance Projects
              </span>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              •
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657A8 8 0 1 1 6.343 5.343a8 8 0 0 1 11.314 11.314z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                />
              </svg>
              Based in Nigeria (UTC+1)
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid - Full Width (removed duplicate status) */}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isScheduleOpen && (
          <ScheduleModal onClose={() => setIsScheduleOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
