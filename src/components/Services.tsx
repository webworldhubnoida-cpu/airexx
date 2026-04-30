import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { SERVICES } from '../constants';

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          title="Engineered for Every Requirement"
          subtitle="From luxury home lifts to heavy-duty industrial freight elevators, our solutions are tailored to your specific architectural needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group h-64 rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-sleek transition-all"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/70 to-brand-navy-dark/40 group-hover:via-brand-navy-dark/80 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-brand-red/20">
                  <service.icon size={20} />
                </div>
                <h3 className="text-white font-bold text-sm uppercase mb-1.5 tracking-wide group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-2 mb-2 group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <div className="w-6 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
