// @ts-nocheck
import React, { useRef } from 'react';
import { ArrowRight, Building2, Briefcase, FileSearch, Network, ShieldCheck, Landmark, TrendingUp, CheckCircle } from 'lucide-react';

const AurelianCapitalSolutions = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { title: "Revenue Based Financing", desc: "Convert future cash flow into immediate working capital without equity dilution." },
    { title: "Asset-Backed Lending", desc: "Unlock liquidity trapped in accounts receivable, inventory, and machinery." },
    { title: "Commercial Real Estate", desc: "Bridge and permanent financing for acquisition, development, and refinancing." },
    { title: "Equipment Leasing", desc: "Tax-advantaged structures to acquire mission-critical hardware and fleet vehicles." }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Lato:wght@300;400;700&display=swap');
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20 border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 circuit-bg pointer-events-none"></div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
           <svg viewBox="0 0 200 400" className="w-full h-full stroke-[#D4AF37] fill-none stroke-[0.5]">
             <rect x="50" y="50" width="100" height="300" />
             <line x1="70" y1="50" x2="70" y2="350" />
             <line x1="90" y1="50" x2="90" y2="350" />
             <line x1="110" y1="50" x2="110" y2="350" />
             <line x1="130" y1="50" x2="130" y2="350" />
           </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="fade-in">
            <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-black/50 px-6 py-2 rounded-sm backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Capital Solutions v1.0</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-cinzel text-4xl md:text-6xl font-bold leading-tight tracking-wide mb-6">
                  Strategic Capital <br /><span className="text-[#D4AF37]">For Modern Business</span>
                </h1>
                <p className="font-lato text-gray-400 text-lg mb-8 leading-relaxed">
                  Access the liquidity you need with terms that work for your business. From revenue-based financing to asset-backed lending, we structure capital that aligns with your growth trajectory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToForm} className="bg-[#D4AF37] text-[#031811] px-8 py-4 font-cinzel font-bold tracking-widest uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="/platform" className="border border-[#D4AF37]/50 text-gray-300 px-8 py-4 font-cinzel font-bold tracking-widest uppercase hover:border-[#D4AF37] hover:text-white transition-all flex items-center justify-center">
                    View Technology
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-800 bg-[#051F16] p-6 hover:border-[#D4AF37]/50 transition-all">
                  <TrendingUp className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="font-cinzel text-lg text-white mb-2">$50M+</h3>
                  <p className="font-lato text-gray-400 text-sm">Capital Deployed</p>
                </div>
                <div className="border border-gray-800 bg-[#051F16] p-6 hover:border-[#D4AF37]/50 transition-all">
                  <Briefcase className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="font-cinzel text-lg text-white mb-2">200+</h3>
                  <p className="font-lato text-gray-400 text-sm">Businesses Funded</p>
                </div>
                <div className="border border-gray-800 bg-[#051F16] p-6 hover:border-[#D4AF37]/50 transition-all">
                  <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="font-cinzel text-lg text-white mb-2">14-21</h3>
                  <p className="font-lato text-gray-400 text-sm">Day Funding</p>
                </div>
                <div className="border border-gray-800 bg-[#051F16] p-6 hover:border-[#D4AF37]/50 transition-all">
                  <Network className="w-8 h-8 text-[#D4AF37] mb-4" />
                  <h3 className="font-cinzel text-lg text-white mb-2">A+</h3>
                  <p className="font-lato text-gray-400 text-sm">Partner Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl text-white mb-4">Financing Solutions</h2>
            <p className="font-lato text-gray-400 max-w-2xl mx-auto">Tailored capital structures for every stage of your business journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-800 bg-[#051F16] p-8 hover:border-[#D4AF37]/50 transition-all group">
                <FileSearch className="w-12 h-12 text-[#D4AF37] mb-6 opacity-80" />
                <h3 className="font-cinzel text-xl text-white mb-4">{service.title}</h3>
                <p className="font-lato text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="py-24 px-6 bg-gradient-to-b from-black to-[#031811]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl text-white mb-4">Begin Your Application</h2>
            <p className="font-lato text-gray-400">Submit your funding request and receive a preliminary analysis within 24 hours</p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Business Name</label>
                <input type="text" className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Industry</label>
                <select className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors">
                  <option>Select Industry</option>
                  <option>Technology</option>
                  <option>Manufacturing</option>
                  <option>Real Estate</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Funding Amount</label>
                <select className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors">
                  <option>Select Amount</option>
                  <option>$50,000 - $250,000</option>
                  <option>$250,000 - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Use of Funds</label>
                <select className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors">
                  <option>Select Purpose</option>
                  <option>Working Capital</option>
                  <option>Equipment Purchase</option>
                  <option>Real Estate</option>
                  <option>Expansion</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Email</label>
              <input type="email" className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors" />
            </div>

            <div>
              <label className="font-lato text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">Business Overview</label>
              <textarea rows={4} className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <div className="pt-4">
              <button type="button" className="w-full bg-[#D4AF37] text-[#031811] py-4 font-cinzel font-bold tracking-widest uppercase hover:bg-white transition-colors flex justify-center items-center gap-3 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                Submit for Analysis <CheckCircle className="w-5 h-5" />
              </button>
              <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest">
                By submitting, you agree to our Terms. Your data is encrypted.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AurelianCapitalSolutions;
