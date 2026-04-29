import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
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
              <a href="#" className="hover:text-brand-red transition-colors opacity-70"><Facebook size={12} /></a>
              <a href="#" className="hover:text-brand-red transition-colors opacity-70"><Twitter size={12} /></a>
              <a href="#" className="hover:text-brand-red transition-colors opacity-70"><Instagram size={12} /></a>
              <a href="#" className="hover:text-brand-red transition-colors opacity-70"><Linkedin size={12} /></a>
            </div>
          </div>
        </div>
      )}

      <nav
        className={`transition-all duration-300 h-16 flex items-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200' : 'bg-white border-b border-slate-100'
        }`}
      >
      <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/gallery/logo.png" alt="AIREXX ELEVATORS" className="h-35 w-auto object-contain" />
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
          <a
            href="#contact"
            className="bg-brand-red hover:bg-brand-red-hover text-white px-5 py-2 rounded shadow-lg shadow-brand-red/20 transition-all font-semibold uppercase tracking-wider text-xs"
          >
            Get a Quote
          </a>
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
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-700 p-2 hover:bg-slate-50 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-red text-white p-4 rounded text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </div>
  );
};
