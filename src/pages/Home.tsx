// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Building2, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 circuit-bg pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#031811]/0 via-[#031811]/50 to-[#031811] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block border border-[#D4AF37]/30 px-4 py-1 rounded-full backdrop-blur-sm">
            <span className="font-lato text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Private Credit Infrastructure V.1.0</span>
          </div>
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold leading-tight tracking-wide">
            The Infrastructure of <br />
            <span className="gold-gradient-text">Modern Capital</span>
          </h1>
          <p className="font-lato text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We engineer the convergence of creative finance, blockchain verification, and automated asset management.
          </p>
          <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/platform" className="group relative bg-[#D4AF37] text-[#031811] px-8 py-4 font-cinzel font-bold tracking-widest uppercase overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2">Explore Technology <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/lending" className="group border border-[#D4AF37]/50 text-gray-300 px-8 py-4 font-cinzel font-bold tracking-widest uppercase hover:border-[#D4AF37] hover:text-white transition-all flex items-center justify-center">
              Capital Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="border-y border-[#D4AF37]/20 bg-black/40 py-4 overflow-hidden relative">
        <div className="whitespace-nowrap flex gap-12 text-sm font-lato tracking-widest text-gray-400 animate-[ticker_40s_linear_infinite]">
          {[1,2,3,4].map((i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> CONSTRUCTION BRIDGE <span className="text-white">50k</span> [STRUCTURED]</span>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> MULTI-FAMILY ACQ <span className="text-white">.2M</span> [VERIFIED]</span>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> EQUIPMENT LEASE <span className="text-white">80k</span> [EXECUTED]</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Silos */}
      <section className="py-24 bg-gradient-to-b from-[#031811] to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/platform" className="group relative border border-gray-800 bg-[#051F16] p-10 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden">
               <Cpu className="w-12 h-12 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500" />
               <h3 className="font-cinzel text-2xl text-white mb-2">Operational Intelligence</h3>
               <p className="font-lato text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-6">Aurelian Labs Technology</p>
               <p className="font-lato text-gray-400 mb-8 h-20">Proprietary workflows for underwriting, deal structuring, and asset verification.</p>
               <span className="flex items-center gap-3 text-sm font-cinzel text-white group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                 View Technology <ChevronRight className="w-4 h-4" />
               </span>
            </Link>

            <Link to="/lending" className="group relative border border-gray-800 bg-[#051F16] p-10 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden">
               <Building2 className="w-12 h-12 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500" />
               <h3 className="font-cinzel text-2xl text-white mb-2">Capital Deployment</h3>
               <p className="font-lato text-gray-400 mb-8 h-20">Direct liquidity solutions for commercial and creative financing needs.</p>
               <span className="flex items-center gap-3 text-sm font-cinzel text-white group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                 Access Capital <ChevronRight className="w-4 h-4" />
               </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
