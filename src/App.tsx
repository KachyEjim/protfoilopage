import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import LoadingState from '@/components/ui/LoadingState';

// Lazy load components
const Hero = lazy(() => import('@/components/sections/Hero'));
const Services = lazy(() => import('@/components/sections/Services'));
const Process = lazy(() => import('@/components/sections/Process'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const CaseStudies = lazy(() => import('@/components/sections/CaseStudies'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const TrustIndicators = lazy(
  () => import('@/components/sections/TrustIndicators'),
);
const Packages = lazy(() => import('@/components/sections/Packages'));
const ClientDashboard = lazy(
  () => import('@/components/sections/ClientDashboard'),
);
const FAQ = lazy(() => import('@/components/sections/FAQ'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const NotFound = lazy(() => import('@/components/sections/NotFound'));

// Main home page content
function HomePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Hero />
      <Services />
      <Process />
      <Skills />
      <CaseStudies />
      <Projects />
      <TrustIndicators />
      <Packages />
      <ClientDashboard />
      <FAQ />
      <Testimonials />
      <Experience />
      <Contact />
    </Suspense>
  );
}

function App() {
  // Get the base URL from environment
  const baseUrl = import.meta.env.DEV ? '/' : '/protfoilopage';

  return (
    <Suspense fallback={<LoadingState />}>
      <HelmetProvider>
        <ThemeProvider>
          <SEO />
          <BrowserRouter basename={baseUrl}>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
