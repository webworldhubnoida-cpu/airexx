import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { SERVICES } from '../constants';

export const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519003300449-424ad0405323?q=80&w=2070&auto=format&fit=crop" 
              alt="Airrexx Services"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy-dark/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Our <span className="text-brand-red">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive elevator solutions tailored to meet the unique needs of every structure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20">
              <SectionHeading 
                title="Vertical Transportation Experts"
                subtitle="From concept to commissioning, Airrexx provides end-to-end services that prioritize safety and user experience."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 flex flex-col md:flex-row h-full"
                >
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                    <img 
                      src={`${service.image}&auto=format&fit=crop&w=1000&h=800`} 
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-navy-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  <div className="md:w-3/5 p-10 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="mt-8 flex items-center gap-3 text-brand-red font-bold text-xs uppercase tracking-widest group-hover:gap-5 transition-all cursor-pointer">
                      Learn More <div className="h-0.5 w-8 bg-brand-red rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 bg-brand-navy-dark text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
              <div className="p-8">
                <h4 className="text-4xl font-bold text-brand-red mb-4">24/7</h4>
                <p className="text-lg font-bold mb-2">Technical Support</p>
                <p className="text-slate-400 text-sm">Round-the-clock assistance for all emergency service requirements.</p>
              </div>
              <div className="p-8 border-y lg:border-y-0 lg:border-x border-white/10">
                <h4 className="text-4xl font-bold text-brand-red mb-4">100%</h4>
                <p className="text-lg font-bold mb-2">Safety Record</p>
                <p className="text-slate-400 text-sm">Zero critical failures since inception due to rigorous maintenance.</p>
              </div>
              <div className="p-8">
                <h4 className="text-4xl font-bold text-brand-red mb-4">15+</h4>
                <p className="text-lg font-bold mb-2">Years Expertise</p>
                <p className="text-slate-400 text-sm">Deep industry knowledge applied to every project we undertake.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
