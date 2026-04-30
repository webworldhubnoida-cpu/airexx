import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ShieldCheck, Award, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://wallpapers.com/images/hd/elevator-pictures-1920-x-1080-jbr53jqa0c9vsgny.jpg",
  "https://wallpapers.com/images/hd/elevator-pictures-1500-x-1000-r0khrfr05yhdo2uu.jpg",
  "https://images.pexels.com/photos/31168892/pexels-photo-31168892.jpeg",
  "https://images.pexels.com/photos/16383996/pexels-photo-16383996.jpeg"
];

export const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Fixed Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${BACKGROUND_IMAGES[currentImageIndex]}")` }}
          ></motion.div>
        </AnimatePresence>
      </div>
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-brand-navy-dark/90 z-[1]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            title="Pioneering the Future of Vertical Transportation"
            subtitle="At AIRREXX ELEVATORS PRIVATE LIMITED, we don't just build elevators; we engineer trust. Our commitment to innovation and safety has made us a leader in the industry."
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-red/20 flex items-center justify-center rounded-2xl text-brand-red mb-6 border border-brand-red/20">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Quality Assurance</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Every component is tested under extreme conditions to ensure lifetime reliability.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-red/20 flex items-center justify-center rounded-2xl text-brand-red mb-6 border border-brand-red/20">
                <Award size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Certified Services</h4>
              <p className="text-slate-400 text-sm leading-relaxed">We comply with all international safety standards and local building codes.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-red/20 flex items-center justify-center rounded-2xl text-brand-red mb-6 border border-brand-red/20">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Advanced Systems</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Integrating IoT and AI for predictive maintenance and smoother rides.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 bg-brand-red/10 rounded-3xl flex flex-col md:flex-row items-center justify-center gap-8 border border-brand-red/20 backdrop-blur-md max-w-2xl mx-auto"
          >
            <p className="text-lg italic text-white/90 leading-relaxed max-w-md">
              "Our mission is to redefine urban mobility through safety-first engineering and design-led innovation."
            </p>
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            <div className="text-center md:text-left">
              <p className="font-bold text-xl text-white">Jagmohan Singh</p>
              <p className="text-xs uppercase font-black text-brand-red tracking-[0.3em]">Director</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
