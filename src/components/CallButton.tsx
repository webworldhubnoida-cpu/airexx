import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const CallButton = () => {
  // Use the first phone number from CONTACT_INFO
  const phoneNumber = CONTACT_INFO.phones[0].number.replace(/\s+/g, '');
  
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-28 right-8 z-40 w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center text-white shadow-2xl shadow-brand-navy/30 hover:scale-110 active:scale-95 transition-all group"
      aria-label="Call us"
    >
      <div className="absolute inset-0 rounded-full bg-brand-navy animate-ping opacity-20"></div>
      <Phone className="w-6 h-6" />
      
      <div className="absolute right-full mr-4 bg-white text-brand-navy-dark text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 w-32 shadow-xl pointer-events-none">
        Call Experts
      </div>
    </a>
  );
};
