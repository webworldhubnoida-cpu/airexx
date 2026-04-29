import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://wallpapers.com/images/hd/elevator-pictures-1920-x-1080-jbr53jqa0c9vsgny.jpg",
  "https://wallpapers.com/images/hd/elevator-pictures-1500-x-1000-r0khrfr05yhdo2uu.jpg",
 "https://images.pexels.com/photos/31168892/pexels-photo-31168892.jpeg",
  "https://images.pexels.com/photos/16383996/pexels-photo-16383996.jpeg"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-0 md:aspect-video w-full flex items-center overflow-hidden bg-slate-50 mt-24 md:mt-28">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={BACKGROUND_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent z-[1]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full relative z-10 flex items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl py-12 md:py-24 flex flex-col justify-center relative z-10"
        >
          <span className="text-brand-red font-bold tracking-[0.2em] text-xs uppercase mb-4">
            Engineering Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy leading-tight mb-6">
            Elevating Safety,<br />
            <span className="text-brand-red">Innovation</span> & Reliability
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Premium elevator solutions for residential, commercial, and industrial spaces across India. 
            Redefining vertical mobility since 2012.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-brand-navy text-white px-10 py-4 rounded shadow-xl font-semibold text-center hover:bg-brand-navy-dark transition-all"
            >
              Our Services
            </a>
            <a
              href="#about"
              className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded font-semibold text-center hover:bg-brand-navy hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
