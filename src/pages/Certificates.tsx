import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FileText, Download, Eye, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export const Certificates = () => {
  const certificates = [
    {
      name: "GST Registration Certificate",
      number: CONTACT_INFO.gstin,
      image: "https://images.pexels.com/photos/7063737/pexels-photo-7063737.jpeg", // Placeholder for GST certificate
      desc: "Goods and Services Tax registration certificate issued by the Government of India."
    },
    {
      name: "UDYAM Registration Certificate",
      number: CONTACT_INFO.udyam,
      image: "https://images.pexels.com/photos/7063738/pexels-photo-7063738.jpeg", // Placeholder for UDYAM certificate
      desc: "Micro, Small and Medium Enterprises (MSME) registration certificate."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Navbar />
      <main className="flex-grow pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-red font-bold mb-8 hover:gap-4 transition-all">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">Our <span className="text-brand-red">Certifications</span></h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              We take pride in our compliance and quality standards. View or download our official registration certificates below.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
              >
                <div className="aspect-[1.414/1] relative overflow-hidden bg-slate-50 flex items-center justify-center border-b border-slate-50">
                   <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="bg-white text-brand-navy p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                        <Eye size={20} />
                      </button>
                      <button className="bg-white text-brand-navy p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                        <Download size={20} />
                      </button>
                   </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-1">{cert.name}</h3>
                      <p className="text-slate-500 font-mono text-sm underline decoration-brand-red/30">{cert.number}</p>
                    </div>
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-red">
                      <FileText size={24} />
                    </div>
                  </div>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {cert.desc}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-navy-dark transition-colors flex items-center justify-center gap-2">
                       <Eye size={18} /> View
                    </button>
                    <button className="flex-1 bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                       <Download size={18} /> Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
