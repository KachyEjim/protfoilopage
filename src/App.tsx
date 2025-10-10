import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import LoadingState from '@/components/ui/LoadingState';
import { ThemeProvider } from '@/context/ThemeContext';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components
const Hero = lazy(() => import('@/components/sections/Hero'));
const Services = lazy(() => import('@/components/sections/Services'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));

function App() {
  return (
    <Suspense fallback={<LoadingState />}>
      <HelmetProvider>
        <ThemeProvider>
          <SEO />
          <Layout>
            <Hero />
            <Services />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Layout>
        </ThemeProvider>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
