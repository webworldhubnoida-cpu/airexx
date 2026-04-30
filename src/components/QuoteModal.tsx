import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export const QuoteModal = () => {
  const { isQuoteModalOpen, closeQuoteModal } = useQuote();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Construct WhatsApp Message
    const message = `*New Quote Request from Website*\n\n` +
      `*Name:* ${data.fullName}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Elevator Type:* ${data.elevatorType}\n` +
      `*Message:* ${data.message}`;
    
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    // Simulate API call or log
    console.log('Quote Request:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    form.reset();
    
    setTimeout(() => {
      closeQuoteModal();
      setStatus('idle');
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuoteModal}
            className="absolute inset-0 bg-brand-navy-dark/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-[32px] overflow-hidden shadow-2xl"
          >
            {status === 'success' ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy mb-4">Request Received!</h3>
                <p className="text-slate-500">Our experts will review your requirements and get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="bg-brand-navy p-8 text-white relative">
                  <button 
                    onClick={closeQuoteModal}
                    className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <h3 className="text-2xl font-bold mb-2">Get a Custom Quote</h3>
                  <p className="text-white/60 text-sm">Tell us about your project and we'll provide a detailed proposal.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                      <input required name="fullName" type="text" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-red outline-none transition-all text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                      <input required name="phone" type="tel" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-red outline-none transition-all text-sm" placeholder="+91 XXX" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input required name="email" type="email" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-red outline-none transition-all text-sm" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Elevator Type</label>
                    <select name="elevatorType" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-red outline-none transition-all text-sm appearance-none">
                      <option>Passenger Elevator</option>
                      <option>Home Elevator</option>
                      <option>Freight Elevator</option>
                      <option>Hospital Lift</option>
                      <option>Modernization</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Message</label>
                    <textarea name="message" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-brand-red outline-none transition-all text-sm h-28 resize-none" placeholder="Describe your requirements..."></textarea>
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-red/20 hover:bg-red-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : (
                      <>
                        Submit Request <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
