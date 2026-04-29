import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl relative z-10">
            <img
              src="https://images.pexels.com/photos/8453040/pexels-photo-8453040.jpeg"
              alt="Engineering Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Accent square */}
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-red-light -z-0 rounded-lg"></div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-navy/5 -z-0 rounded-full blur-3xl"></div>
          
          <div className="absolute bottom-10 -right-10 bg-brand-red p-6 text-white rounded-lg shadow-xl hidden md:block">
            <p className="text-4xl font-bold mb-1">15+</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-80">Years of Excellence</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            title="Pioneering the Future of Vertical Transportation"
            subtitle="At AIREXX ELEVATORS PRIVATE LIMITED, we don't just build elevators; we engineer trust. Our commitment to innovation and safety has made us a leader in the industry."
          />
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-lg text-brand-red shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Quality Assurance</h4>
                <p className="text-slate-600">Every component is tested under extreme conditions to ensure lifetime reliability.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-lg text-brand-red shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Certified Services</h4>
                <p className="text-slate-600">We comply with all international safety standards and local building codes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-lg text-brand-red shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Advanced Systems</h4>
                <p className="text-slate-600">Integrating IoT and AI for predictive maintenance and smoother rides.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-slate-50 rounded-xl flex items-center gap-6 border border-slate-200">
            <p className="text-sm italic text-navy-dark leading-relaxed">
              "Our mission is to redefine urban mobility through safety-first engineering and design-led innovation."
            </p>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="font-bold text-sm">Jagmohan Singh</p>
              <p className="text-[10px] uppercase font-black text-brand-red tracking-widest">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
