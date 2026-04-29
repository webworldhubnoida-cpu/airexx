import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { WORK_PROCESS } from '../constants';

export const WorkProcess = () => {
  return (
    <section className="section-padding bg-brand-navy-dark text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[50%] aspect-square rounded-full bg-brand-red blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          title="From Concept to Commissioning"
          subtitle="Our streamlined 5-step process ensures transparency, speed, and uncompromising quality at every stage of the project."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

          {WORK_PROCESS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="px-6 py-10 lg:py-0 relative z-10 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-navy border-2 border-brand-red flex items-center justify-center font-display font-bold text-xl mb-8 shadow-xl shadow-brand-red/10">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
