import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROJECT_IMAGES = [
  { url: "https://th.bing.com/th/id/OIP.TqeOtLwH5fStyJWw33oH8gHaHa?w=190&h=191&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Global Heights", location: "Gurugram" },
  { url: "https://th.bing.com/th/id/OIP.jQP6ivPqUP7C-KshC20avgHaHa?w=140&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Omaxe Mall", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.NPsEmeHrxcXPslovhsNwxwAAAA?w=115&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Signature Tower", location: "New Delhi" },
  { url: "https://th.bing.com/th/id/OIP.248fZ0VIMhdgg-fHD2b7AgHaFR?w=251&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Emaar Palm", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.cDPf_U_qx9Uq7-9RpnvOaAHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Metro Plaza", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.PWjO-XA2rb3WRS_tMsuWIgHaE-?w=286&h=192&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Sector 19", location: "Faridabad" },
];

export const Projects = () => {
  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...PROJECT_IMAGES, ...PROJECT_IMAGES];

  return (
    <section id="projects" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex justify-between items-end">
        <div className="max-w-2xl">
          <SectionHeading
            title="Our Architectural Footprint"
            subtitle="A showcase of some of our most prestigious elevator installations across residential complexes and commercial hubs."
          />
        </div>
        <Link 
          to="/projects" 
          className="hidden md:flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all mb-8"
        >
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>

      <div className="relative">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={{
            x: [0, -1920], // Adjust based on total width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedImages.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl w-[350px] md:w-[450px] aspect-[4/3] shrink-0 shadow-lg"
            >
              <img
                src={`${project.url}&auto=format&fit=crop&w=800&h=600`}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-white font-bold text-xl md:text-2xl mb-1">{project.title}</p>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-brand-red"></div>
                  <p className="text-white/70 text-[10px] md:text-xs uppercase tracking-widest font-bold">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center md:hidden px-4">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-xs"
        >
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};
