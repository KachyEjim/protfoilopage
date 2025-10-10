import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import LoadingState from '@/components/ui/LoadingState';
import { ThemeProvider } from '@/context/ThemeContext';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

console.log('🚀 App.tsx loaded');

// Lazy load components
const Hero = lazy(() => {
  console.log('📦 Loading Hero component');
  return import('@/components/sections/Hero');
});
const Services = lazy(() => {
  console.log('📦 Loading Services component');
  return import('@/components/sections/Services');
});
const Skills = lazy(() => {
  console.log('📦 Loading Skills component');
  return import('@/components/sections/Skills');
});
const Projects = lazy(() => {
  console.log('📦 Loading Projects component');
  return import('@/components/sections/Projects');
});
const Experience = lazy(() => {
  console.log('📦 Loading Experience component');
  return import('@/components/sections/Experience');
});
const Contact = lazy(() => {
  console.log('📦 Loading Contact component');
  return import('@/components/sections/Contact');
});

function App() {
  console.log('✅ App component rendering');
  
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

console.log('✅ App function defined');

export default App;
