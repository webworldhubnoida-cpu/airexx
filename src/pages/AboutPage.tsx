import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { Target, Users, Heart, Award, ShieldCheck, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const BACKGROUND_IMAGES = [
  "https://wallpapers.com/images/hd/elevator-pictures-1920-x-1080-jbr53jqa0c9vsgny.jpg",
  "https://wallpapers.com/images/hd/elevator-pictures-1500-x-1000-r0khrfr05yhdo2uu.jpg",
  "https://images.pexels.com/photos/31168892/pexels-photo-31168892.jpeg",
  "https://images.pexels.com/photos/16383996/pexels-photo-16383996.jpeg"
];

export const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the most trusted name in global vertical transportation, known for safety and reliability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Culture",
      description: "We foster an environment of continuous learning, precision engineering, and customer-centric service."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Integrity, safety, and innovation are the cornerstones of every elevator we design and install."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("${BACKGROUND_IMAGES[currentImageIndex]}")` }}
              ></motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-brand-navy-dark/90 z-[1]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                About <span className="text-brand-red">Airexx</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Pioneering excellence in vertical transportation with a legacy built on safety, innovation, and trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Story Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeading 
                  title="A Legacy of Engineering Excellence"
                  subtitle="AIREXX ELEVATORS stands as a testament to Indian engineering prowess. We are a collective of designers, engineers, and visionaries dedicated to moving people safely."
                />
                <div className="mt-8 space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Founded with a vision to redefine urban mobility, Airexx Elevators has grown into a leader in the infrastructure sector. Our journey is marked by continuous innovation and a commitment to delivering superior vertical transportation solutions.
                  </p>
                  <p>
                    From high-rise commercial complexes to luxury residential villas, our elevators are engineered to provide seamless, silent, and safe travel for millions.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                  <img
                    src="https://images.pexels.com/photos/8554322/pexels-photo-8554322.jpeg"
                    alt="Our Team at Work"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl z-0"></div>
                <div className="absolute -bottom-10 -left-10 bg-brand-red p-8 text-white rounded-3xl shadow-xl z-20">
                  <p className="text-5xl font-bold mb-1">15+</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">Years of Experience</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <SectionHeading 
                title="Our Core Values"
                subtitle="The principles that guide every decision we make and every elevator we install."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-20 h-20 bg-slate-50 flex items-center justify-center rounded-2xl text-brand-red mx-auto mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-brand-navy">{value.title}</h4>
                  <p className="text-slate-500 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
