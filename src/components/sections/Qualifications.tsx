import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: 'Government Technical College, Enugu',
    period: '2015 - 2018',
    description: 'Learned electronics basics, design, and repair.',
  },
  {
    title: 'Contronika Technologies',
    period: '2018 - 2019',
    description:
      'Learned electronics design, IoT programming, Arduino repair and maintenance.',
  },
  {
    title: 'Harvard University (Online)',
    period: '2021 - 2022',
    description: 'Introduction to Computer Science (CS50).',
  },
  {
    title: 'University of the People, California USA',
    period: '2022 - Present',
    description:
      'BSc in Computer Science, focusing on distributed systems, software architecture, and cloud computing.',
  },
  {
    title: 'ALX Africa',
    period: '2023 - 2024',
    description:
      'Software Engineering Program: Advanced backend development, system design, DevOps, and distributed systems.',
  },
];

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="py-16 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl text-gray-900 dark:text-white">
              Qualifications & Education
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
              My academic and technical training journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualifications.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 space-y-4"
              >
                <div className="flex items-center gap-4 mb-2">
                  <AcademicCapIcon className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
