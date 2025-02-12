import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export default function SEO({
  title = "Benjamin Joshua (Chymezy) - Full Stack Software Engineer",
  description = "Full Stack Software Engineer specializing in backend development, with expertise in Electrical and Systems Engineering. Building scalable web applications and robust backend systems.",
  keywords = [
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "System Architecture",
    "Nigeria",
  ],
  image = "/og-image.png",
  url = "https://yourwebsite.com",
}: SEOProps) {
  // Structured data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Benjamin Joshua",
    alternateName: "Chymezy",
    description: description,
    image: image,
    url: url,
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    jobTitle: "Full Stack Software Engineer",
    knowsAbout: [
      "Full Stack Development",
      "Backend Development",
      "System Architecture",
      "Web Development",
      "Python",
      "Node.js",
      "React",
      "TypeScript"
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        "name": "African Leadership Program (ALX)",
      },
      {
        "@type": "EducationalOrganization",
        "name": "University of Lagos",
      }
    ],
    // Add work examples
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Software Engineer",
      skills: [
        "Web Development",
        "Backend Development",
        "System Architecture",
        "Database Design"
      ]
    },
    // Add portfolio projects
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Development",
          description: "End-to-end web application development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend Development",
          description: "Robust backend systems and APIs"
        }
      }
    ]
  }

  // Structured data for WebSite with more details
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: url,
    author: {
      "@type": "Person",
      name: "Benjamin Joshua",
      alternateName: "Chymezy"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Benjamin Joshua" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Chymezy Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourtwitterhandle" />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Chymezy Portfolio" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#0ea5e9" />

      {/* Links */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/logo192.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
} 