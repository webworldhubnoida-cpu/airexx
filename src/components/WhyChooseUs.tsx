import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { WHY_CHOOSE_US } from '../constants';

export const WhyChooseUs = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/gallery/stick.jpg")' }}
      ></div>
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-brand-navy-dark/90 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <SectionHeading
              title="Why Industry Leaders Trust Us"
              subtitle="We combine decade-long expertise with cutting-edge engineering to deliver elevators that are more than just machines."
              light
            />
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  ease: [0.21, 1.11, 0.81, 0.99] // Custom spring-like easing
                }}
                className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group backdrop-blur-sm"
              >
                <div className="text-brand-red mb-6 scale-110 group-hover:scale-125 transition-transform duration-300">
                  <item.icon size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
