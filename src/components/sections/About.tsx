import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CommandLineIcon 
} from '@heroicons/react/24/outline'

const education = [
  {
    degree: "Master's in Systems Engineering",
    school: "African Leadership Program (ALX)",
    year: "2023",
  },
  {
    degree: "B.Eng in Electrical/Electronics Engineering",
    school: "Your University",
    year: "Year",
  },
]

const skills = [
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Frontend",
    techs: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "DevOps & Tools",
    techs: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
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
              About Me
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Combining engineering principles with software development to create efficient, scalable solutions.
            </p>
          </div>

          {/* Background & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <AcademicCapIcon className="w-6 h-6 text-primary-600" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <h4 className="font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.school}</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <BriefcaseIcon className="w-6 h-6 text-primary-600" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                With a strong foundation in both Electrical Engineering and Systems Engineering, 
                I bring a unique perspective to software development. My experience spans from 
                designing robust backend systems to creating intuitive user interfaces.
              </p>
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    Completed ALX Software Engineering Program
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    Developed multiple full-stack applications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    Expertise in system architecture and design
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 justify-center">
              <CommandLineIcon className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    {skill.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/20 
                                 text-primary-700 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 