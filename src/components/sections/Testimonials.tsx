import { motion } from 'framer-motion';
import {
  StarIcon,
  ChatBubbleLeftIcon as QuoteIcon,
} from '@heroicons/react/24/solid';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import RecommendationForm from './RecommendationForm';

const featuredTestimonials = [
  {
    id: 1,
    name: 'ALX Program Lead',
    role: 'Software Engineering Program',
    content:
      'Onyedikachi exhibits exceptional technical prowess and innovative problem-solving abilities. His mastery of complex software architectures and dedication to delivering robust solutions sets him apart as a remarkable engineer.',
    image: '/testimonials/alx.png',
    rating: 5,
    date: '2024-02-15',
    category: 'Technical Leadership',
  },
  {
    id: 2,
    name: 'Senior Project Lead',
    role: 'Technical Architecture',
    content:
      'Working with Onyedikachi was outstanding. His deep understanding of system design and ability to architect scalable solutions proved invaluable. His commitment to code quality and best practices elevated our entire project.',
    image: '/testimonials/mentor.png',
    rating: 5,
    date: '2024-01-20',
    category: 'Project Delivery',
  },
  {
    id: 3,
    name: 'Engineering Manager',
    role: 'Enterprise Solutions',
    content:
      'Onyedikachi demonstrates exceptional expertise in backend development and distributed systems. His analytical approach to problem-solving and ability to deliver complex technical solutions made him an invaluable asset to our team.',
    image: '/testimonials/team.png',
    rating: 5,
    date: '2024-01-10',
    category: 'Technical Excellence',
  },
];

export default function Testimonials() {
  const [showRecommendationForm, setShowRecommendationForm] = useState(false);

  return (
    <section id="testimonials" className="py-24">
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
              Professional Endorsements
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Industry recognition for technical excellence and project delivery
            </p>
            <Button
              variant="outline"
              onClick={() => setShowRecommendationForm(true)}
              className="mt-6"
            >
              Provide Recommendation
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 p-8 space-y-6"
              >
                <QuoteIcon className="w-8 h-8 text-primary-500/20" />

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-100 dark:border-primary-900"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {showRecommendationForm && (
        <RecommendationForm onClose={() => setShowRecommendationForm(false)} />
      )}
    </section>
  );
}
