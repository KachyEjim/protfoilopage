import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import LoadingState from '@/components/ui/LoadingState';
import { ThemeProvider } from '@/context/ThemeContext';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy load components
const Hero = lazy(() => import('@/components/sections/Hero'));
const Services = lazy(() => import('@/components/sections/Services'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Experience = lazy(() => import('@/components/sections/Experience'));
const Contact = lazy(() => import('@/components/sections/Contact'));
const NotFound = lazy(() => import('@/components/sections/NotFound'));

// Main home page content
function HomePage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </Suspense>
  );
}

function App() {
  // Get the base URL from environment - now deployed at root
  const baseUrl = '/';

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
