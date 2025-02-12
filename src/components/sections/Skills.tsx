import { motion } from 'framer-motion';
import { useState } from 'react';
interface Skill {
  name: string;
  level: number; // 1-5
  years: number;
  category:
    | 'Backend'
    | 'Frontend'
    | 'DevOps'
    | 'Database'
    | 'Cloud'
    | 'Architecture';
  subcategory?: string;
  projects: number;
  icon?: string;
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
  technologies: string[];
  certifications?: string[];
}

const skills: Skill[] = [
  {
    name: 'System Architecture',
    level: 2,
    years: 1.5,
    category: 'Architecture',
    subcategory: 'Distributed Systems',
    projects: 4,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftazure.svg',
    proficiency: 'Learning',
    technologies: [
      'Microservices',
      'Event-Driven',
      'SOA',
      'Domain-Driven Design',
    ],
    certifications: ['AWS Solutions Architect', 'Azure Architecture'],
  },
  {
    name: 'API Development',
    level: 4,
    years: 2,
    category: 'Backend',
    subcategory: 'Web Services',
    projects: 6,
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
    proficiency: 'Advanced',
    technologies: ['REST', 'GraphQL', 'gRPC', 'WebSocket'],
  },
  {
    name: 'Database Design',
    level: 4,
    years: 2,
    category: 'Database',
    subcategory: 'Data Modeling',
    projects: 5,
    icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
    proficiency: 'Advanced',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'],
  },
  {
    name: 'Cloud Infrastructure',
    level: 3,
    years: 2,
    category: 'Cloud',
    subcategory: 'AWS',
    projects: 1.5,
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/amazonaws.svg',
    proficiency: 'Intermediate',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    certifications: ['AWS Associate'],
  },
  {
    name: 'DevOps & CI/CD',
    level: 3,
    years: 2,
    category: 'DevOps',
    subcategory: 'Automation',
    projects: 3,
    icon: 'https://cdn.simpleicons.org/docker/2496ED',
    proficiency: 'Intermediate',
    technologies: ['GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'],
  },
  {
    name: 'Software Engineering',
    level: 5,
    years: 1.5,
    category: 'Backend',
    subcategory: 'Core Development',
    projects: 3,
    icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
    proficiency: 'Advanced',
    technologies: ['Node.js', 'Python', 'TypeScript', 'Go'],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<
    Skill['category'] | 'All'
  >('All');

  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 dark:text-white">
              Technical Expertise
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Specialized in enterprise solutions and distributed systems
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 
                         hover:shadow-xl transition-all duration-300
                         border border-gray-200 dark:border-gray-700"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  {skill.icon && (
                    <div
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg 
                                  group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 
                                  transition-colors duration-300"
                    >
                      <img
                        src={skill.icon}
                        alt=""
                        className="w-8 h-8"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.subcategory}
                    </p>
                  </div>
                </div>

                {/* Skill Level */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Proficiency
                    </span>
                    <span className="font-medium text-primary-600">
                      {skill.proficiency}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(skill.level / 5) * 100}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 
                                 text-gray-600 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {skill.technologies.length > 3 && (
                      <span
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 
                                     text-gray-600 dark:text-gray-300 rounded-md"
                      >
                        +{skill.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Experience */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{skill.years} years</span>
                    <span>{skill.projects} projects</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
