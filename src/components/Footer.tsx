import { CONTACT_INFO, SERVICES } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Users, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Visitor Counter
    const storedCount = localStorage.getItem('visitor_count');
    const initialCount = storedCount ? parseInt(storedCount) : 12450;
    const newCount = initialCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitor_count', newCount.toString());

    // Google Translate Script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        );
      };
    }
  }, []);

  return (
    <footer className="bg-brand-navy-dark border-t border-white/5 pt-20 pb-10 text-slate-400">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src="/gallery/logo.png" alt="AIREXX ELEVATORS" className="h-10 w-auto object-contain brightness-0 invert" />
          </div>

          <p className="text-sm leading-relaxed text-slate-500 mb-6">
            Premium solutions provider for installation, maintenance, and modernization of vertical transportation systems.
          </p>

          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-brand-red">Home</a></li>
            <li><a href="#services" className="hover:text-brand-red">Services</a></li>
            <li><a href="#projects" className="hover:text-brand-red">Projects</a></li>
            <li><Link to="/certificates" className="hover:text-brand-red">Certificates</Link></li>
            <li><a href="#contact" className="hover:text-brand-red">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 5).map((service, i) => (
              <li key={i}>
                <a href="#services" className="hover:text-brand-red">
                  {service.title}
                </a>
              </li>
            ))}
             <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs uppercase opacity-50">Visitors</p>
              <p className="text-lg font-mono text-white tracking-wider">
                {visitorCount.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
          </ul>

        </div>

        {/* CONTACT + LANGUAGE + VISITOR */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-red mt-1" />
              <span>{CONTACT_INFO.address}</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={16} className="text-brand-red mt-1" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.phones.map((p, i) => (
                  <a key={i} href={`tel:${p.number}`} className="hover:text-white">
                    {p.number} ({p.name})
                  </a>
                ))}
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={16} className="text-brand-red mt-1" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.emails.slice(0, 2).map((email, i) => (
                  <a key={i} href={`mailto:${email}`} className="hover:text-white break-all">
                    {email}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* LANGUAGE */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
              <Globe size={14} className="text-brand-red" />
              Language
            </h4>

            <div className="bg-white/5 border border-white/10 rounded-lg p-2">
              <div id="google_translate_element" className="text-xs"></div>
            </div>
          </div>

          {/* VISITOR COUNTER */}
         
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        
        <div className="text-center md:text-left">
          © 2026 AIREXX ELEVATORS PRIVATE LIMITED
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>

        <a 
          href="https://www.webworldhub.co.in/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-red"
        >
          Web World Hub
        </a>
      </div>
    </footer>
  );
};