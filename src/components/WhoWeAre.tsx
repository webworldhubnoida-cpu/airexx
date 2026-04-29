import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Target, Users, Heart } from 'lucide-react';

export const WhoWeAre = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Vision",
      description: "To be the most trusted name in global vertical transportation, known for safety and reliability."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Culture",
      description: "We foster an environment of continuous learning, precision engineering, and customer-centric service."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Our Values",
      description: "Integrity, safety, and innovation are the cornerstones of every elevator we design and install."
    }
  ];

  return (
    <section className="section-padding bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              title="A Legacy of Engineering Excellence"
              subtitle="AIREXX ELEVATORS stands as a testament to Indian engineering prowess. We are a collective of designers, engineers, and visionaries dedicated to moving people safely."
            />
            
            <div className="mt-12 space-y-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white shadow-sm border border-slate-100 flex items-center justify-center rounded-2xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-brand-navy">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed max-w-md">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/8554322/pexels-photo-8554322.jpeg"
                  alt="Our Team at Work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full z-0"></div>
              <div className="absolute top-1/2 -left-12 w-24 h-24 bg-brand-red-light rounded-2xl rotate-12 z-0 hidden md:block"></div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-dashed border-brand-red/20 rounded-full z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
