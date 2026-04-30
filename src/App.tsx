/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhoWeAre } from './components/WhoWeAre';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { IndustriesWeServe } from './components/IndustriesWeServe';
import { Support247 } from './components/Support247';
import { WorkProcess } from './components/WorkProcess';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CallButton } from './components/CallButton';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { QuoteProvider } from './context/QuoteContext';
import { QuoteModal } from './components/QuoteModal';
import { Loader2 } from 'lucide-react';

// Lazy load pages for better performance
const Certificates = lazy(() => import('./pages/Certificates').then(m => ({ default: m.Certificates })));
const SafetyCompliance = lazy(() => import('./pages/SafetyCompliance').then(m => ({ default: m.SafetyCompliance })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[100]">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-4"
    >
      <Loader2 className="w-12 h-12 text-brand-red animate-spin" />
      <span className="text-brand-navy font-bold uppercase tracking-widest text-xs">Loading...</span>
    </motion.div>
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-x-hidden w-full max-w-full"
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="overflow-x-hidden w-full relative">
        <Hero />
        <About />
        <WhoWeAre />
        <Stats />
        <Services />
        <IndustriesWeServe />
        <WhyChooseUs />
        <Support247 />
        <WorkProcess />
        <Projects />
        <Team />
        <Partners />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <CallButton />
    </motion.div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          } 
        />
        <Route 
          path="/services" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ProjectsPage />
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          } 
        />
        <Route 
          path="/certificates" 
          element={
            <Suspense fallback={<PageLoader />}>
              <Certificates />
            </Suspense>
          } 
        />
        <Route 
          path="/safety" 
          element={
            <Suspense fallback={<PageLoader />}>
              <SafetyCompliance />
            </Suspense>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <QuoteProvider>
      <Router>
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
      <QuoteModal />
    </QuoteProvider>
  );
}
