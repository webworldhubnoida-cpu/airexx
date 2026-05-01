import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactPage = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Construct WhatsApp Message
    const message = `*New Contact Message from Website*\n\n` +
      `*Name:* ${data.fullName}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Message:* ${data.message}`;

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;

    console.log('Contact Message:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    form.reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070&auto=format&fit=crop" 
              alt="Contact Airrexx"
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
                Get in <span className="text-brand-red">Touch</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Reach out to our experts for consultation, maintenance, or new project inquiries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Contact Information */}
              <div>
                <SectionHeading 
                  title="Contact Information"
                  subtitle="We are committed to providing the best service. Feel free to contact us via any of the channels below."
                />
                
                <div className="mt-12 space-y-10">
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-[24px] flex items-center justify-center shrink-0 text-brand-red border border-slate-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 text-brand-navy">Our Office</h4>
                      <p className="text-slate-500 leading-relaxed text-lg">
                        {CONTACT_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-[24px] flex items-center justify-center shrink-0 text-brand-red border border-slate-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 text-brand-navy">Email Us</h4>
                      <div className="space-y-1">
                        {CONTACT_INFO.emails.map((email, i) => (
                          <p key={i} className="text-slate-500 hover:text-brand-red transition-colors cursor-pointer text-lg">{email}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-[24px] flex items-center justify-center shrink-0 text-brand-red border border-slate-100 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 text-brand-navy">Call Support</h4>
                      <div className="space-y-2">
                        {CONTACT_INFO.phones.map((p, i) => (
                          <p key={i} className="text-slate-500 text-lg italic">
                            <span className="font-bold text-brand-navy not-italic">{p.number}</span> — {p.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <Clock className="text-brand-red mb-4" size={24} />
                      <h5 className="font-bold text-brand-navy mb-1">Business Hours</h5>
                      <p className="text-xs text-slate-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <ShieldCheck className="text-brand-red mb-4" size={24} />
                      <h5 className="font-bold text-brand-navy mb-1">Emergency Support</h5>
                      <p className="text-xs text-slate-500">Available 24/7 for our clients</p>
                   </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-navy-dark p-12 rounded-[48px] text-white shadow-2xl relative"
              >
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-brand-red rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12">
                  <Send size={28} />
                </div>
                
                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <MessageSquare className="text-brand-red" />
                  Direct Message
                </h3>
                
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Sent!</h4>
                    <p className="text-white/60">Thank you for reaching out. Our team will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                        <input required name="fullName" type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all text-white placeholder:text-white/20" placeholder="Full Name" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                        <input required name="phone" type="tel" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all text-white placeholder:text-white/20" placeholder="+91 XXX" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                      <input required name="email" type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all text-white placeholder:text-white/20" placeholder="your@email.com" />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Message</label>
                      <textarea required name="message" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all text-white h-40 resize-none placeholder:text-white/20" placeholder="How can we help you?"></textarea>
                    </div>

                    <button 
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/20 hover:bg-red-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} /> Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] w-full bg-slate-100 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1403.953835925066!2d77.3493179!3d28.4197552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd7356bf4fed%3A0xbf812662c245df1a!2sAi%C5%95rex%20elevator!5e0!3m2!1sen!2sin!4v1714381589000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
};
