import { motion } from 'motion/react';
import { STATS } from '../constants';

export const Stats = () => {
  return (
    <section className="bg-brand-navy py-10 px-12 border-b border-brand-navy-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="text-white font-bold text-3xl md:text-4xl mb-1">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-slate-200 text-[10px] uppercase tracking-widest font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
