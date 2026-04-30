import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

export const Team = () => {
  return (
    <section id="team" className="relative section-padding overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/gallery/stick1.jpg")' }}
      ></div>
      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-brand-navy-dark/80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          title="The Minds Behind Airexx"
          subtitle="Meet the leadership team that drives our vision of excellence and technical superiority."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all group backdrop-blur-sm"
            >
              <div className="w-24 h-24 bg-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white font-display font-bold text-3xl group-hover:bg-brand-red transition-colors">
                {member.name.charAt(0)}
              </div>
              <h4 className="text-lg font-bold mb-1 text-white">{member.name}</h4>
              <p className="text-brand-red text-[10px] uppercase font-black tracking-widest mb-6">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity text-slate-400">
                <Linkedin size={18} className="cursor-pointer hover:text-white" />
                <Mail size={18} className="cursor-pointer hover:text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
