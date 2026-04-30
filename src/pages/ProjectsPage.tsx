import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';

const PROJECT_GALLERY = [
  { 
    url: "https://th.bing.com/th/id/OIP.TqeOtLwH5fStyJWw33oH8gHaHa?w=190&h=191&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Global Heights", 
    location: "Gurugram",
    category: "Residential",
    desc: "Premium residential lift installation with smart glass aesthetics."
  },
  { 
    url: "https://th.bing.com/th/id/OIP.jQP6ivPqUP7C-KshC20avgHaHa?w=140&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Omaxe Mall", 
    location: "Faridabad",
    category: "Commercial",
    desc: "High-capacity freight and passenger lifts for heavy commercial traffic."
  },
  { 
    url: "https://th.bing.com/th/id/OIP.NPsEmeHrxcXPslovhsNwxwAAAA?w=115&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Signature Tower", 
    location: "New Delhi",
    category: "Corporate",
    desc: "Custom high-speed elevators for modern corporate office spaces."
  },
  { 
    url: "https://th.bing.com/th/id/OIP.248fZ0VIMhdgg-fHD2b7AgHaFR?w=251&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Emaar Palm", 
    location: "Faridabad",
    category: "Residential",
    desc: "Luxury home elevator integration in premium villa projects."
  },
  { 
    url: "https://th.bing.com/th/id/OIP.cDPf_U_qx9Uq7-9RpnvOaAHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Metro Plaza", 
    location: "Faridabad",
    category: "Commercial",
    desc: "Robust vertical mobility solutions for retail and office hubs."
  },
  { 
    url: "https://th.bing.com/th/id/OIP.PWjO-XA2rb3WRS_tMsuWIgHaE-?w=286&h=192&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", 
    title: "Sector 19 Hub", 
    location: "Faridabad",
    category: "Mixed Use",
    desc: "Energy-efficient elevators for multi-functional urban buildings."
  },
];

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Airrexx Projects"
              loading="eager"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy-dark/85"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Our <span className="text-brand-red">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                A showcase of excellence and engineering precision across residential and commercial landscapes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <SectionHeading 
                title="Engineering Landmarks"
                subtitle="Explore our portfolio of successfully completed projects, each reflecting the Airrexx commitment to quality."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECT_GALLERY.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-[32px] aspect-[4/5] shadow-xl"
                >
                  <img
                    src={`${project.url}&auto=format&fit=crop&w=1000&h=1200`}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy-dark/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brand-red font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-3xl mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-3 text-white/40 text-xs font-bold uppercase tracking-widest">
                      <div className="w-8 h-px bg-brand-red"></div>
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-6">Have a Prestigious Project in Mind?</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Let's collaborate to bring the world's finest vertical transportation solutions to your building.
            </p>
            <a href="/#contact" className="inline-block bg-brand-red text-white px-10 py-4 rounded-2xl font-bold shadow-xl shadow-brand-red/20 hover:bg-red-700 transition-all">
              Discuss Your Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
