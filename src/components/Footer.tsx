import { CONTACT_INFO, SERVICES } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Users, Globe, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitor_count');
    const initialCount = storedCount ? parseInt(storedCount) : 12450;
    const newCount = initialCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem('visitor_count', newCount.toString());

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
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 text-gray-600">

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src="/gallery/footerlogo.png" alt="AIRREXX ELEVATORS" className="h-20 w-auto" />
          </div>

          <p className="text-sm leading-relaxed text-gray-500 mb-6">
            Premium solutions provider for installation, maintenance, and modernization of vertical transportation systems.
          </p>

          <div className="flex gap-3 mb-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Globe size={14} className="text-red-600" />
            <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              {CONTACT_INFO.website}
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600">About</Link></li>
            <li><Link to="/services" className="hover:text-red-600">Services</Link></li>
            <li><Link to="/projects" className="hover:text-red-600">Projects</Link></li>
            <li><Link to="/certificates" className="hover:text-red-600">Certificates</Link></li>
            <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 5).map((service, i) => (
              <li key={i}>
                <Link to="/services" className="hover:text-red-600">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
              <Users size={18} />
            </div>
            <div>
              <p className="text-xs uppercase text-gray-400">Visitors</p>
              <p className="text-lg font-mono text-gray-900 tracking-wider">
                {visitorCount.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-5 text-sm uppercase tracking-wider">
            Contact
          </h4>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-red-600 mt-1" />
              <span>{CONTACT_INFO.address}</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={16} className="text-red-600 mt-1" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.phones.map((p, i) => (
                  <a key={i} href={`tel:${p.number}`} className="hover:text-gray-900">
                    {p.number} ({p.name})
                  </a>
                ))}
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={16} className="text-red-600 mt-1" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.emails.slice(0, 2).map((email, i) => (
                  <a key={i} href={`mailto:${email}`} className="hover:text-gray-900 break-all">
                    {email}
                  </a>
                ))}
              </div>
            </li>
          </ul>

          {/* LANGUAGE */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-gray-900 font-semibold mb-3 text-xs uppercase tracking-wider flex items-center gap-2">
              <Globe size={14} className="text-red-600" />
              Language
            </h4>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2">
              <div id="google_translate_element" className="text-xs"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        
        <div className="text-center md:text-left">
          © 2026 AIRREXX ELEVATORS PRIVATE LIMITED
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Sitemap</a>
        </div>

        <a 
          href="https://www.webworldhub.co.in/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          Web World Hub
        </a>
      </div>
    </footer>
  );
};