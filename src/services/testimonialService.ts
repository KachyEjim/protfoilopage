import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export interface Testimonial {
  id?: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt?: string
}

export const testimonialService = {
  // Get approved testimonials
  getTestimonials: async () => {
    try {
      const response = await axios.get(`${API_URL}/testimonials`)
      return response.data
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      throw error
    }
  },

  // Submit new testimonial
  submitTestimonial: async (testimonial: Omit<Testimonial, 'id' | 'status' | 'createdAt'>) => {
    try {
      const response = await axios.post(`${API_URL}/testimonials`, testimonial)
      return response.data
    } catch (error) {
      console.error('Error submitting testimonial:', error)
      throw error
    }
  }
} 