import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { WHY_CHOOSE_US } from '../constants';

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <SectionHeading
              title="Why Industry Leaders Trust Us"
              subtitle="We combine decade-long expertise with cutting-edge engineering to deliver elevators that are more than just machines."
            />
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92fb1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                className="rounded-xl grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="text-brand-red mb-6 scale-110 group-hover:scale-125 transition-transform duration-300">
                  <item.icon size={40} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
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
