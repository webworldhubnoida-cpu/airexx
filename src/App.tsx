/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhoWeAre } from './components/WhoWeAre';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
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
import { motion, useScroll, useSpring } from 'motion/react';
import { Certificates } from './pages/Certificates';

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
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhoWeAre />
        <Stats />
        <Services />
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
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}
