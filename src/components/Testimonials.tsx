import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    building: "Global Residency",
    comment: "Excellent service and high-quality installation. The elevator is extremely silent and smooth. Highly recommended!",
    stars: 5
  },
  {
    name: "Amit Sharma",
    building: "Omaxe Mall",
    comment: "The maintenance team is very proactive. We've had zero downtime since we switched to Airexx for our mall elevators.",
    stars: 5
  },
  {
    name: "Sonia Verma",
    building: "Private Residence",
    comment: "The home elevator design perfectly matches our interior. It adds so much luxury and convenience to our home.",
    stars: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real feedback from property owners and developers who have experienced the Airexx difference."
        />

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ 
              repeat: Infinity, 
              duration: 40, 
              ease: "linear" 
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, index) => (
              <div
                key={index}
                className="bg-slate-50 p-10 rounded-2xl relative min-w-[400px] whitespace-normal"
              >
                <div className="absolute top-6 right-8 text-brand-red/10">
                  <Quote size={48} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-brand-navy-dark leading-relaxed mb-8 italic">
                  "{review.comment}"
                </p>
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-brand-red text-[10px] uppercase font-black tracking-widest">{review.building}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Faded edges for smoother transition */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
