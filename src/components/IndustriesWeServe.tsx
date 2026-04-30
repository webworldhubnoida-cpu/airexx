import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Home, Building2, Hospital, Hotel } from 'lucide-react';

const INDUSTRIES = [
  {
    title: "Residential",
    icon: Home,
    image: "https://tse2.mm.bing.net/th/id/OIP.R4JQ705j3gc7-fC_VTUhTwHaF4?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Elegant and silent elevator solutions designed for modern luxury apartments and private villas."
  },
  {
    title: "Commercial",
    icon: Building2,
    image: "https://www.balarbuilders.com/images/gateway.jpg",
    description: "High-capacity vertical transportation for office towers, shopping malls, and corporate hubs."
  },
  {
    title: "Hospitals",
    icon: Hospital,
    image: "https://th.bing.com/th/id/OIP.TRUnzK9Q7nieg0sUgxLZ-gHaFk?w=221&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3",
    description: "Specialized stretcher and patient lifts engineered for precision, hygiene, and emergency response."
  },
  {
    title: "Hotels",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    description: "Premium, aesthetically superior lifts that enhance the guest experience in hospitality sectors."
  }
];

export const IndustriesWeServe = () => {
  return (
    <section id="industries" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored vertical mobility solutions for every architectural environment, ensuring safety and excellence."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sleek hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center text-white shadow-lg">
                    <industry.icon size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                  {industry.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="w-8 h-1 bg-brand-navy group-hover:w-full group-hover:bg-brand-red transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
