import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

export const Team = () => {
  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          title="The Minds Behind Airexx"
          subtitle="Meet the leadership team that drives our vision of excellence and technical superiority."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-lg transition-all group"
            >
              <div className="w-24 h-24 bg-brand-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white font-display font-bold text-3xl group-hover:bg-brand-red transition-colors">
                {member.name.charAt(0)}
              </div>
              <h4 className="text-lg font-bold mb-1">{member.name}</h4>
              <p className="text-brand-red text-[10px] uppercase font-black tracking-widest mb-6">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                <Linkedin size={18} className="cursor-pointer hover:text-brand-navy" />
                <Mail size={18} className="cursor-pointer hover:text-brand-navy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
