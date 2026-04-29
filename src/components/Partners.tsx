import { motion } from "motion/react";

const PARTNERS = [
  { name: "MRF", logo: "https://th.bing.com/th/id/OIP.-pBSwI7Uy3YPbTNRMkEGywHaFb?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "SBI", logo: "data:image/webp;base64,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" },
  { name: "V-Mart", logo: "https://th.bing.com/th/id/OIP.9ETF4L-IZWA__66MdO4SQAHaEK?w=298&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Zudio", logo: "https://th.bing.com/th/id/OIP.0Ws_jmte75VJLf4cOHHZtgHaBq?w=322&h=78&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Reliance", logo: "https://th.bing.com/th/id/OIP.jCv025elxqYuXA-WSQMojwHaEq?w=217&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Vishal Mega Mart", logo: "https://th.bing.com/th/id/OIP.hWw60XgK65TIEu6ZS33SDwAAAA?w=118&h=128&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
  { name: "Red Tape", logo: "https://th.bing.com/th/id/OIP.F4ZVATd891aRx0sY-nzBJwHaHG?w=180&h=150&c=6&o=7&dpr=1.8&pid=1.7&rm=3" }
];

export const Partners = () => {
  return (
    <section className="bg-slate-50 py-16 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-xs uppercase font-bold text-slate-500 tracking-[0.3em]">
          Our Trusted Partners
        </p>
        <h2 className="text-3xl font-bold text-slate-800 mt-2">
          Brands We Work With
        </h2>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="flex gap-12 px-10"
        >
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, y: -6 }}
              className="min-w-[240px] h-[150px] bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-6"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 object-contain mb-3"
              />
              <p className="text-sm font-semibold text-slate-700 text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};