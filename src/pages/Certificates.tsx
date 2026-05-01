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
      file: "/gallery/gst.pdf",
      desc: "Goods and Services Tax registration certificate issued by the Government of India."
    },
    {
      name: "Certificate of Incorporation",
      number: CONTACT_INFO.cin,
      file: "/gallery/incor.jpeg",
      desc: "Official document issued by the Ministry of Corporate Affairs, Government of India."
    },
    {
      name: "UDYAM Registration Certificate",
      number: CONTACT_INFO.udyam,
      file: "/gallery/udyam2.pdf",
      desc: "Micro, Small and Medium Enterprises (MSME) registration certificate."
    },
      {
      name: "UDYAM  Certificate",
      number: CONTACT_INFO.udyam,
      file: "/gallery/udyam1.pdf",
      desc: "Micro, Small and Medium Enterprises (MSME) registration certificate."
    }
  ];

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Navbar />
      <main className="flex-grow pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-red font-bold mb-8 hover:gap-4 transition-all">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4">Our <span className="text-brand-red">Certifications</span></h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We take pride in our compliance and quality standards. View or download our official registration certificates below.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red shrink-0">
                    <FileText size={28} />
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleView(cert.file)}
                      className="bg-slate-50 text-brand-navy p-2.5 rounded-xl hover:bg-brand-red hover:text-white transition-colors border border-slate-100"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleDownload(cert.file, cert.name)}
                      className="bg-slate-50 text-brand-navy p-2.5 rounded-xl hover:bg-brand-red hover:text-white transition-colors border border-slate-100"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-brand-red font-mono text-[10px] uppercase tracking-widest font-black mb-4 bg-brand-red/5 inline-block px-2 py-0.5 rounded">
                    {cert.number}
                  </p>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-50">
                  <button 
                    onClick={() => handleView(cert.file)}
                    className="bg-brand-navy text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-navy-dark transition-colors flex items-center justify-center gap-2"
                  >
                      <Eye size={16} /> View
                  </button>
                  <button 
                    onClick={() => handleDownload(cert.file, cert.name)}
                    className="bg-brand-red text-white py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                      <Download size={16} /> Save
                  </button>
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
