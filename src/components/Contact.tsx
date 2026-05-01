import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Construct WhatsApp Message
    const message = `*New Inquiry from Website*\n\n` +
      `*Name:* ${data.fullName}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Service:* ${data.service}\n` +
      `*Message:* ${data.message}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;

    console.log('Inquiry:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    form.reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-brand-navy-dark text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeading
              title="Get in Touch with our Experts"
              subtitle="Whether you need a new installation or reliable maintenance, our team is ready to assist you. Reach out for a free consultation and quote."
              light
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Office</h4>
                  <p className="text-white/60 leading-relaxed max-w-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Addresses</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                    {CONTACT_INFO.emails.map((email, i) => (
                      <p key={i} className="text-white/60 text-sm hover:text-brand-red transition-colors cursor-pointer">{email}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-brand-red border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Connect with Us</h4>
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.phones.map((p, i) => (
                      <p key={i} className="text-white/60 text-sm italic">
                        <span className="font-bold text-white not-italic">{p.number}</span> — {p.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            <div className="pt-6 border-t border-white/10">
              <span className="bg-white/10 px-3 py-1.5 border border-white/10 rounded text-[10px] font-mono font-bold text-slate-200 tracking-wider">
                GSTIN: {CONTACT_INFO.gstin}
              </span>
            </div>
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 p-10 rounded-xl text-brand-navy shadow-2xl relative border border-slate-200"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-red rounded flex items-center justify-center text-white shadow-lg">
              <MessageSquare size={20} />
            </div>
            
            <h3 className="text-xl font-bold mb-8">Send us a Message</h3>
            
            {status === 'success' ? (
              <div className="py-10 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-2">Inquiry Sent!</h4>
                <p className="text-slate-500">Redirecting to WhatsApp for final confirmation...</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Full Name</label>
                    <input required name="fullName" type="text" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded focus:border-brand-red outline-none transition-all text-sm shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Phone</label>
                    <input required name="phone" type="tel" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded focus:border-brand-red outline-none transition-all text-sm shadow-sm" placeholder="+91 XXX" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Email</label>
                  <input required name="email" type="email" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded focus:border-brand-red outline-none transition-all text-sm shadow-sm" placeholder="your@email.com" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Service Required</label>
                  <select name="service" className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded focus:border-brand-red outline-none transition-all text-sm shadow-sm font-medium">
                    <option>Passenger Elevator</option>
                    <option>Home Elevator</option>
                    <option>Freight Elevator</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Message</label>
                  <textarea required name="message" rows={3} className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded focus:border-brand-red outline-none transition-all text-sm shadow-sm resize-none" placeholder="Your requirements..." />
                </div>

                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white py-3.5 rounded font-bold transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={16} /> Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Embed Placeholder */}
        <div className="mt-20 h-96 w-full rounded-2xl overflow-hidden  ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1403.953835925066!2d77.3493179!3d28.4197552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd7356bf4fed%3A0xbf812662c245df1a!2sAi%C5%95rex%20elevator!5e0!3m2!1sen!2sin!4v1714381589000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
