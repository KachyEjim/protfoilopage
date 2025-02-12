// Types for gtag and dataLayer
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined') {
    // Create dataLayer array if it doesn't exist
    window.dataLayer = window.dataLayer || []
    
    // Create gtag function
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    
    // Assign gtag function to window
    window.gtag = gtag
    
    // Initialize GA
    gtag('js', new Date().toISOString())
    gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID)
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
} 