import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';

const PROJECT_IMAGES = [
  { url: "https://th.bing.com/th/id/OIP.TqeOtLwH5fStyJWw33oH8gHaHa?w=190&h=191&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Global Heights", location: "Gurugram" },
  { url: "https://th.bing.com/th/id/OIP.jQP6ivPqUP7C-KshC20avgHaHa?w=140&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Omaxe Mall", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.NPsEmeHrxcXPslovhsNwxwAAAA?w=115&h=182&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Signature Tower", location: "New Delhi" },
  { url: "https://th.bing.com/th/id/OIP.248fZ0VIMhdgg-fHD2b7AgHaFR?w=251&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Emaar Palm", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.cDPf_U_qx9Uq7-9RpnvOaAHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Faridabad", location: "Faridabad" },
  { url: "https://th.bing.com/th/id/OIP.PWjO-XA2rb3WRS_tMsuWIgHaE-?w=286&h=192&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3", title: "Sector 19", location: "Faridabad" },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          title="Our Architectural Footprint"
          subtitle="A showcase of some of our most prestigious elevator installations across residential complexes and commercial hubs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_IMAGES.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={`${project.url}&auto=format&fit=crop&w=800&h=800`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-display font-bold text-2xl mb-1">{project.title}</p>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
