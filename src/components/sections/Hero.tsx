import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  CpuChipIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import ScheduleModal from '@/components/ui/ScheduleModal';

export default function Hero() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const highlights = [
    {
      title: 'Full-Stack Development',
      description:
        'Expertise in end-to-end development utilizing MERN stack, Python, and cloud technologies',
      icon: CodeBracketIcon,
    },
    {
      title: 'Systems Engineering',
      description:
        'Extensive background in Electronics, IoT architecture, and Embedded systems development',
      icon: CpuChipIcon,
    },
    {
      title: 'Solution Architecture',
      description:
        'Designing scalable, high-performance solutions with proven methodologies',
      icon: LightBulbIcon,
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 md:space-y-10"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-6"
          >
            <div className="group relative w-full h-full">
              <img
                src={
                  import.meta.env.BASE_URL + 'enhanced_profile_picture_2.jpeg'
                }
                alt="Onyedikachi Ejim - KACHY"
                className="rounded-full object-cover w-full h-full 
                border-4 border-primary-200 dark:border-primary-800 
                shadow-lg filter grayscale hover:grayscale-0 
                transition-all duration-300 ease-in-out 
                group-hover:scale-105 group-hover:grayscale-0"
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

          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <span
              className="inline-block px-4 py-1.5 bg-primary-100/80 dark:bg-primary-900/20 
                         rounded-full text-sm font-medium text-primary-700 dark:text-primary-300"
              role="text"
            >
              Full Stack Software Engineer
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
            aria-label="Transforming Ideas into Scalable Solutions"
          >
            Transforming Ideas into{' '}
            <span className="text-primary-600 dark:text-primary-500">
              Scalable Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hey there! I'm{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {' '}
              <b>Onyedikachi Ejim</b>
            </span>
            , a Full Stack Software Engineer who builds
            <span className="text-primary-600 dark:text-primary-400">
              {' '}
              robust backend systems
            </span>{' '}
            and
            <span className="text-primary-600 dark:text-primary-400">
              {' '}
              scalable architectures
            </span>
            . Leveraging my electronics engineering background, I bring
            analytical precision and systematic problem-solving to deliver
            innovative technological solutions that drive business value
          </p>
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            role="list"
            aria-label="Core competencies"
          >
            {[
              { icon: ServerIcon, text: 'Backend Development' },
              { icon: CodeBracketIcon, text: 'Full Stack Solutions' },
              { icon: CommandLineIcon, text: 'System Architecture' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 justify-center p-3 rounded-xl 
                           bg-secondary-50/50 dark:bg-secondary-900/30 
                           hover:bg-secondary-100 dark:hover:bg-secondary-800/50 
                           transition-colors duration-200"
                role="listitem"
              >
                <Icon
                  className="w-5 h-5 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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

          {/* Status and Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 
                       text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for Freelance Projects</span>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              •
            </div>
            <div>Based in Nigeria (UTC+1)</div>
          </motion.div>
        </motion.div>

        {/* Highlights Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm
                       hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
