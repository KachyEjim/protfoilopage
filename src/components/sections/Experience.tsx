import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  DocumentArrowDownIcon,
  ChartBarIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const highlights = [
  {
    title: 'Software Engineering',
    company: 'African Leadership X (ALX)',
    period: '2022 - 2024',
    description: 'Advanced Software Engineering Program',
    type: 'education',
    achievements: [
      'Architected distributed systems using microservices architecture',
      'Developed high-performance backend systems with Node.js and Python',
      'Implemented secure authentication and authorization systems',
      'Built scalable APIs and real-time applications',
    ],
    skills: [
      'System Design',
      'Node.js',
      'Python',
      'Cloud Architecture',
      'API Development',
    ],
  },
  {
    title: 'Bachelor of Computer Science',
    company: 'University of The People, California USA',
    period: '2022 - Present',
    description: 'Computer Science and Software Architecture',
    type: 'education',
    achievements: [
      'Specialized in distributed systems architecture',
      'Advanced algorithms and data structures',
      'Cloud computing and system design',
      'Software engineering principles and patterns',
    ],
    skills: [
      'Distributed Systems',
      'Cloud Computing',
      'Software Architecture',
      'System Design',
    ],
  },
  {
    title: 'Solutions Architect',
    company: 'Vouch Africa',
    period: '2023 - Present',
    description: 'Technical Lead and System Architect',
    type: 'work',
    achievements: [
      'Led architecture design for credit management platform',
      'Implemented microservices-based payment processing system',
      'Designed scalable data pipeline architecture',
      'Optimized system performance and reliability',
    ],
    skills: [
      'System Architecture',
      'Technical Leadership',
      'Cloud Infrastructure',
      'Performance Optimization',
    ],
  },
];

export default function Experience() {
  const handleDownloadCV = () => {
    const cvPath = '/documents/Onyedikachi_Ejim_CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Onyedikachi_Ejim_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gray-50/50 dark:bg-gray-900/50"
    >
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
              Professional Journey
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Architecting innovative solutions through engineering excellence
              and technical leadership
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 p-8 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                    {item.type === 'education' ? (
                      <AcademicCapIcon className="w-6 h-6 text-primary-600" />
                    ) : (
                      <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {item.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {item.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <ChartBarIcon className="w-5 h-5 text-primary-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {item.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-primary-600 mt-1.5">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-sm font-medium rounded-full 
                               bg-primary-50 dark:bg-primary-900/20 
                               text-primary-700 dark:text-primary-300
                               border border-primary-100 dark:border-primary-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <Button size="lg" onClick={handleDownloadCV} className="group">
              <DocumentArrowDownIcon className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Detailed CV
            </Button>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Access my comprehensive professional portfolio and qualifications
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
