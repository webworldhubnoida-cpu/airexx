import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Zap, Flame, RotateCcw, CheckCircle2, Award, FileText, ArrowRight, Download } from 'lucide-react';

const SAFETY_FEATURES = [
  {
    title: "Emergency Braking System",
    description: "Advanced mechanical and electronic braking systems that activate instantly in any abnormal speed scenario.",
    icon: ShieldCheck
  },
  {
    title: "Overload Protection",
    description: "Intelligent sensors that prevent operation when capacity is exceeded, ensuring passenger safety and machine longevity.",
    icon: Zap
  },
  {
    title: "Fire Safety Integration",
    description: "Automatic integration with building fire alarms to return to designated floors for safe evacuation.",
    icon: Flame
  },
  {
    title: "Automatic Rescue Device (ARD)",
    description: "Reliable battery-operated systems that bring the lift to the nearest floor during power failures.",
    icon: RotateCcw
  }
];

const COMPLIANCE_STANDARDS = [
  {
    title: "BIS Standards",
    description: "Full compliance with Bureau of Indian Standards (BIS) for elevator construction and installation.",
    details: ["IS 14665 Compliant", "IS 15785 Compliant"]
  },
  {
    title: "Local Lift Regulations",
    description: "Adherence to state-specific Lift Acts and municipal corporation safety guidelines across India.",
    details: ["PWD Approvals", "Local Authority Licensing"]
  },
  {
    title: "Electrical Safety Norms",
    description: "Strict compliance with Central Electricity Authority (CEA) regulations for all vertical mobility installations.",
    details: ["CEIG Certification", "Earthing & Surge Protection"]
  }
];

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", issuer: "Quality Management System", icon: Award },
  { name: "CE Certification", issuer: "European Safety Standards", icon: Award },
  { name: "BIS Certified", issuer: "National Safety Standards", icon: Award },
  { name: "NSIC Registered", issuer: "Government of India", icon: Award }
];

export const SafetyCompliance = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1519003300449-424ad0405323?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Elevator Safety"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy-dark/80"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="text-brand-red font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Zero Compromise
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Safety & <span className="text-brand-red">Compliance</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                Ensuring the highest standards in elevator safety and regulatory compliance through precision engineering and rigorous testing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Safety Standards Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <SectionHeading 
              title="Advanced Safety Features"
              subtitle="Our elevators are equipped with state-of-the-art safety mechanisms to ensure peace of mind with every ride."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {SAFETY_FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-red mb-6 shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 bg-brand-navy text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Safety Matters to Us</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  At Airrexx, safety isn't just a checkbox—it's the core of our engineering philosophy. We understand that our products move millions of people every day, and we take that responsibility seriously.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-red" />
                    <span>24/7 Predictive Monitoring Systems</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-red" />
                    <span>Rigorous Multi-point Inspection Protocols</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="text-brand-red" />
                    <span>Certified Safety Engineers on Every Project</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white/5 rounded-full absolute -top-20 -right-20 w-80 h-80 blur-3xl"></div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
                    <div className="text-4xl font-bold text-brand-red mb-2">100%</div>
                    <div className="text-xs uppercase tracking-widest font-bold opacity-60">Compliance</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center mt-8">
                    <div className="text-4xl font-bold text-brand-red mb-2">0</div>
                    <div className="text-xs uppercase tracking-widest font-bold opacity-60">Critical Failures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <SectionHeading 
              title="Government Compliance"
              subtitle="We strictly adhere to national and regional regulations to ensure legal and technical excellence."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {COMPLIANCE_STANDARDS.map((standard, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{standard.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">{standard.description}</p>
                  <ul className="space-y-3">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-brand-navy">
                        <div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Badge Section */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
               <h2 className="text-2xl font-bold text-brand-navy uppercase tracking-widest">Industry Accreditations</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                    <cert.icon size={32} />
                  </div>
                  <h4 className="font-bold text-brand-navy">{cert.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-brand-red relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Elevate Your Building's Safety?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-brand-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-navy-dark transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Request Safety Inspection <ArrowRight size={18} />
              </a>
              <button className="bg-white text-brand-red px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                Download Compliance PDF <Download size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
