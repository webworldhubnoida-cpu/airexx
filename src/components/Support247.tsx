import { motion } from 'motion/react';
import { Phone, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Support247 = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="bg-brand-navy-dark rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Decorative background pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg" 
                alt="24/7 Support Center"
                loading="lazy"
                className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/80 to-transparent lg:hidden"></div>
              
              {/* Badge */}
              <div className="absolute top-8 left-8 bg-brand-red text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                <Clock size={16} />
                24/7 EMERGENCY RESPONSE
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Always Moving, Always <span className="text-brand-red">Supportive.</span>
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl">
                  We understand that elevator reliability is critical. Our dedicated emergency response team is available around the clock to ensure your safety and minimize downtime.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Rapid Response Team",
                    "Expert Technicians",
                    "Preventive Maintenance",
                    "Safety Certified"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 text-white"
                    >
                      <CheckCircle2 className="text-brand-red shrink-0" size={20} />
                      <span className="font-medium text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href={`tel:${CONTACT_INFO.phones[0].number}`}
                    className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-brand-red/20 group"
                  >
                    <Phone size={20} className="group-hover:animate-bounce" />
                    Call Emergency Support
                  </a>
                  <div className="text-white text-center sm:text-left">
                    <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Available at</div>
                    <div className="text-lg font-mono font-bold">{CONTACT_INFO.phones[0].number}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Large Background Icon */}
          <Shield 
            className="absolute -bottom-20 -right-20 text-white/[0.03] w-96 h-96 pointer-events-none" 
            strokeWidth={1}
          />
        </div>
      </div>
    </section>
  );
};
