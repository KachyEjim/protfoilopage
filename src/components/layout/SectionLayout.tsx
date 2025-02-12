import { motion } from 'framer-motion'
import { SECTION_SPACING } from '@/lib/constants'

interface SectionLayoutProps {
  id: string
  title: string
  description: string
  children: React.ReactNode
}

export default function SectionLayout({ id, title, description, children }: SectionLayoutProps) {
  return (
    <section id={id} className={SECTION_SPACING.padding}>
      <div className={SECTION_SPACING.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  )
} 