import { motion } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import SectionLayout from '@/components/layout/SectionLayout'
import { SPACING } from '@/lib/constants'

interface FAQItem {
  question: string
  answer: string
  category: 'Process' | 'Technical' | 'Payment' | 'Support'
}

const faqs: FAQItem[] = [
  // Process FAQs
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical full-stack project takes 2-3 months, while smaller projects might take 3-4 weeks. I provide detailed timelines during the initial consultation.",
    category: "Process"
  },
  {
    question: "How do you handle project communication?",
    answer: "I maintain regular communication through weekly progress updates, scheduled video calls, and a project management system. You'll have direct access to me throughout the project.",
    category: "Process"
  },
  // Payment FAQs
  {
    question: "What is your payment structure?",
    answer: "I typically work with a 40% upfront deposit, followed by milestone-based payments. For longer projects, we can arrange monthly billing. All payment terms are clearly outlined in the project contract.",
    category: "Payment"
  },
  // Support FAQs
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, all projects include 3 months of post-launch support. After that, I offer flexible maintenance packages or can work on an hourly basis for updates and improvements.",
    category: "Support"
  },
  // Technical FAQs
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in full-stack JavaScript/TypeScript development (React, Node.js), Python, and cloud technologies (AWS). I choose technologies based on project requirements and long-term maintainability.",
    category: "Technical"
  }
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<FAQItem['category'] | 'All'>('All')
  const [visibleItems, setVisibleItems] = useState(3)

  const categories: (FAQItem['category'] | 'All')[] = ['All', 'Process', 'Technical', 'Payment', 'Support']
  
  const filteredFaqs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const displayedFaqs = filteredFaqs.slice(0, visibleItems)
  const hasMore = visibleItems < filteredFaqs.length

  const loadMore = () => setVisibleItems(prev => prev + 3)
  const showLess = () => setVisibleItems(3)

  return (
    <SectionLayout
      id="faq"
      title="Frequently Asked Questions"
      description="Common questions about working together"
    >
      {/* Category Filter */}
      <div className={`flex flex-wrap justify-center ${SPACING.grid.sm}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setVisibleItems(3)
              setOpenItem(null)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {displayedFaqs.map((faq) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenItem(openItem === faq.question ? null : faq.question)}
              className="w-full flex items-center justify-between p-4 text-left bg-white dark:bg-gray-800 
                       hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {faq.question}
              </span>
              {openItem === faq.question ? (
                <MinusIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <PlusIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openItem === faq.question && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-4 pb-4 text-gray-600 dark:text-gray-300"
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      {filteredFaqs.length > 3 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={hasMore ? loadMore : showLess}
          >
            {hasMore ? 'Load More' : 'Show Less'}
          </Button>
        </div>
      )}

      {/* Contact CTA */}
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300">
          Still have questions? {' '}
          <a 
            href="#contact" 
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </SectionLayout>
  )
} 