import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// Custom Pinterest Icon since lucide-react doesn't have it built-in directly in some versions
const Pinterest = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22c.666-3.333 2.333-11.667 3-14.5-1.667-2.833 1.333-7.5 4.5-6 3.167 1.5 3 6.5-1.5 7.5 3.5.5 6 3.5 5 7s-4.5 5.5-8 5c-.666 3.333-1.333 4.667-3 6Z" />
    <circle cx="12" cy="12" r="10" stroke="none" fill="currentColor" opacity="0" />
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.854 0 1.265.64 1.265 1.41 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.847 0-4.518 2.135-4.518 4.341 0 .859.331 1.781.744 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.471 6.165 5.776 0 3.447-2.173 6.22-5.188 6.22-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62.93.285 1.914.438 2.935.438 5.523 0 10-4.477 10-10S17.523 2 12 2Z" fill="currentColor" stroke="none" />
  </svg>
);
import { CONTACT_INFO } from '../constants';
import { useQuote } from '../context/QuoteContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useQuote();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Safety', href: '/safety' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Top Header */}
      {!isScrolled && (
        <div className="bg-brand-navy-dark text-white py-2 px-8 hidden md:block border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-medium tracking-wider">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><span className="text-brand-red font-bold">GST:</span> {CONTACT_INFO.gstin}</span>
                <span className="flex items-center gap-1"><span className="text-brand-red font-bold">UDYAM:</span> {CONTACT_INFO.udyam}</span>
              </div>
              <div className="h-3 w-px bg-white/20"></div>
              <div className="flex items-center gap-4">
                <a href={`tel:${CONTACT_INFO.phones[0].number}`} className="flex items-center gap-1 hover:text-brand-red transition-colors">
                  <Phone size={10} className="text-brand-red" /> {CONTACT_INFO.phones[0].number}
                </a>
                <a href={`tel:${CONTACT_INFO.phones[1].number}`} className="flex items-center gap-1 hover:text-brand-red transition-colors">
                  <Phone size={10} className="text-brand-red" /> {CONTACT_INFO.phones[1].number}
                </a>
                <a href={`mailto:${CONTACT_INFO.emails[0]}`} className="flex items-center gap-1 hover:text-brand-red transition-colors">
                  <Mail size={10} className="text-brand-red" /> {CONTACT_INFO.emails[0]}
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Facebook size={12} /></a>
              <a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Twitter size={12} /></a>
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Instagram size={12} /></a>
              <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Linkedin size={12} /></a>
              <a href={CONTACT_INFO.socials.pinterest} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Pinterest size={12} /></a>
              <a href={CONTACT_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors opacity-70"><Youtube size={12} /></a>
            </div>
          </div>
        </div>
      )}

      <nav
        className={`transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-slate-200 py-1 shadow-md' : 'bg-white border-b border-slate-100 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 w-full flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/gallery/logo.png" alt="AIRREXX ELEVATORS" className="h-35 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`hover:text-brand-red transition-colors text-brand-navy ${link.name === 'Home' ? 'text-brand-red' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={openQuoteModal}
              className="bg-brand-red hover:bg-brand-red-hover text-white px-5 py-2 rounded shadow-lg shadow-brand-red/20 transition-all font-semibold uppercase tracking-wider text-xs"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-slate-700 p-3 hover:bg-slate-50 hover:text-brand-red rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="mt-2 bg-brand-red text-white p-4 rounded-xl text-center font-bold shadow-lg shadow-brand-red/20"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
