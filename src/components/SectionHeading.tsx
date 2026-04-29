import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeading = ({ title, subtitle, light }: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border ${light ? 'text-white/40 border-white/10' : 'text-brand-red border-brand-red/10'}`}>
          Engineering Excellence
        </span>
        <h2 className={`text-3xl md:text-5xl mb-4 font-extrabold ${light ? 'text-white' : 'text-brand-navy'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`max-w-2xl text-base md:text-lg leading-relaxed ${light ? 'text-slate-400' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};
