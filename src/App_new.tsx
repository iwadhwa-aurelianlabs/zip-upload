import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Building2, ChevronRight, Menu, X, Globe, ShieldCheck } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen bg-[#031811] text-white font-sans selection:bg-[#D4AF37] selection:text-[#031811]"
      style={{ backgroundColor: '#031811', color: 'white' }} // Fallback inline style to prevent white flash
    >
      {/* --- GLOBAL STYLES & FONTS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;700&family=Lato:wght@300;400;700&display=swap');

        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-lato { font-family: 'Lato', sans-serif; }

        .text-gold { color: #D4AF37; }
        .bg-gold { background-color: #D4AF37; }
        .border-gold { border-color: #D4AF37; }

        .gold-gradient-text {
          background: linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent; 
        }

        .gold-border-gradient {
          border-image: linear-gradient(to right, #BF953F, #FCF6BA, #AA771C) 1;
        }

        /* Circuit Pattern Background Effect */
        .circuit-bg {
          background-image: radial-gradient(#D4AF37 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.03;
        }

        /* Ticker Animation */
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }

        /* Smooth Fade In */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#031811]/95 border-[#D4AF37]/30 backdrop-blur-md py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
             {/* Placeholder for uploaded icon */}
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center rounded-sm bg-black/20">
               <span className="font-cinzel text-xl text-[#D4AF37]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-lg tracking-[0.15em] text-white">AURELIAN</span>
              <span className="font-lato text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Labs</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-lato text-sm tracking-widest text-gray-300">
            <a href="#thesis" className="hover:text-[#D4AF37] transition-colors">THESIS</a>
            <a href="#platform" className="hover:text-[#D4AF37] transition-colors">PLATFORM</a>
            <a href="#capital" className="hover:text-[#D4AF37] transition-colors">CAPITAL</a>
            <button className="border border-[#D4AF37] px-6 py-2 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#031811] transition-all duration-300 uppercase text-xs font-bold tracking-widest">
              Enter Ecosystem
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#D4AF37]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#031811] border-b border-[#D4AF37]/30 p-6 flex flex-col gap-6 text-center z-50">
            <a href="#thesis" className="font-cinzel text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>Thesis</a>
            <a href="#platform" className="font-cinzel text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>Platform</a>
            <a href="#capital" className="font-cinzel text-[#D4AF37]" onClick={() => setIsMenuOpen(false)}>Capital</a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 circuit-bg pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#031811]/0 via-[#031811]/50 to-[#031811] z-0"></div>

        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 fade-in">
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
            <button className="group relative bg-[#D4AF37] text-[#031811] px-8 py-4 font-cinzel font-bold tracking-widest uppercase overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Explore Technology <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="group border border-[#D4AF37]/50 text-gray-300 px-8 py-4 font-cinzel font-bold tracking-widest uppercase hover:border-[#D4AF37] hover:text-white transition-all">
              Capital Solutions
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="font-lato text-[10px] tracking-widest uppercase text-[#D4AF37]">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </div>
      </section>

      {/* --- PROOF OF CONCEPT (TICKER) --- */}
      <div className="border-y border-[#D4AF37]/20 bg-black/40 py-4 overflow-hidden relative">
        <div className="whitespace-nowrap animate-ticker flex gap-12 text-sm font-lato tracking-widest text-gray-400">
          {[1,2,3,4].map((i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> CONSTRUCTION BRIDGE <span className="text-white">$450k</span> [STRUCTURED]</span>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> MULTI-FAMILY ACQ <span className="text-white">$1.2M</span> [VERIFIED]</span>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> EQUIPMENT LEASE <span className="text-white">$180k</span> [EXECUTED]</span>
              <span className="flex items-center gap-2"><span className="text-[#D4AF37]">///</span> CREATIVE EQUITY <span className="text-white">N/A</span> [DEPLOYED]</span>
            </React.Fragment>
          ))}
        </div>
        {/* Fade edges for ticker */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#031811] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#031811] to-transparent z-10"></div>
      </div>

      {/* --- THESIS SECTION (Split) --- */}
      <section id="thesis" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: The Problem/Old World */}
          <div className="relative border border-gray-800 p-8 bg-black/20">
             <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#D4AF37]"></div>
             <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#D4AF37]"></div>

             <h3 className="font-cinzel text-2xl text-gray-500 mb-4">The Fragmentation</h3>
             <p className="font-lato text-gray-400 leading-relaxed mb-6">
               Private credit markets are historically opaque, slow, and disconnected. Capital sits idle while assets struggle for validation. The "Old World" relies on paper, phone calls, and trust.
             </p>
             <div className="h-[1px] w-full bg-gray-800 my-4"></div>
             <div className="flex gap-4 text-xs font-lato text-gray-600 uppercase tracking-widest">
               <span>Slow Velocity</span>
               <span>\u2022</span>
               <span>High Friction</span>
               <span>\u2022</span>
               <span>Opaque</span>
             </div>
          </div>

          {/* Right: The Solution/New World */}
          <div className="space-y-6">
            <h2 className="font-cinzel text-4xl font-bold">Bridging the Gap</h2>
            <div className="w-20 h-[2px] bg-[#D4AF37]"></div>
            <p className="font-lato text-lg text-gray-300 font-light leading-relaxed">
              Aurelian Labs builds the proprietary rails that bring <strong className="text-[#D4AF37]">velocity</strong> and <strong className="text-[#D4AF37]">transparency</strong> to complex asset transactions.
            </p>
            <p className="font-lato text-gray-400">
              We replace trust with verification. We replace paper with code. We are the bridge between raw capital and real-world assets.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="flex items-center gap-3">
                 <Globe className="text-[#D4AF37] w-5 h-5" />
                 <span className="text-sm font-lato tracking-wide">Global Liquidity</span>
               </div>
               <div className="flex items-center gap-3">
                 <ShieldCheck className="text-[#D4AF37] w-5 h-5" />
                 <span className="text-sm font-lato tracking-wide">RWA Verification</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE FORK (SILOS) --- */}
      <section className="py-24 bg-gradient-to-b from-[#031811] to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-3xl md:text-5xl mb-4 gold-gradient-text">Choose Your Path</h2>
            <p className="font-lato text-gray-500 tracking-[0.2em] uppercase text-sm">The Aurelian Ecosystem</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Silo 1: PLATFORM */}
            <div id="platform" className="group relative border border-gray-800 bg-[#051F16] p-10 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden">
               {/* Hover Glow */}
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37] opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-opacity duration-500"></div>

               <Cpu className="w-12 h-12 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500" />

               <h3 className="font-cinzel text-2xl text-white mb-2">Operational Intelligence</h3>
               <p className="font-lato text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-6">Aurelian Labs Technology</p>

               <p className="font-lato text-gray-400 mb-8 h-20">
                 Proprietary workflows for underwriting, deal structuring, and asset verification. Built for institutions and partners.
               </p>

               <button className="flex items-center gap-3 text-sm font-cinzel text-white group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                 View Technology <ChevronRight className="w-4 h-4" />
               </button>
            </div>

            {/* Silo 2: CAPITAL */}
            <div id="capital" className="group relative border border-gray-800 bg-[#051F16] p-10 hover:border-[#D4AF37]/50 transition-all duration-500 overflow-hidden">
               {/* Hover Glow */}
               <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#D4AF37] opacity-0 group-hover:opacity-[0.05] blur-[80px] transition-opacity duration-500"></div>

               <Building2 className="w-12 h-12 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500" />

               <h3 className="font-cinzel text-2xl text-white mb-2">Capital Deployment</h3>
               <p className="font-lato text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-6">Aurelian Capital Solutions</p>

               <p className="font-lato text-gray-400 mb-8 h-20">
                 Direct liquidity solutions for commercial and creative financing needs. Fast, flexible, and structured for growth.
               </p>

               <button className="flex items-center gap-3 text-sm font-cinzel text-white group-hover:text-[#D4AF37] transition-colors uppercase tracking-widest">
                 Access Capital <ChevronRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRAND STORY --- */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 mx-auto mb-8 border rounded-full border-[#D4AF37] flex items-center justify-center opacity-50">
           {/* Placeholder for Roman Coin/Bust */}
           <span className="font-cinzel text-2xl text-[#D4AF37]">A</span>
        </div>
        <h2 className="font-cinzel text-3xl mb-6">Restorer of the World</h2>
        <p className="font-lato text-lg text-gray-400 leading-relaxed italic">
          "Inspired by Emperor Aurelian, we are restoring sanity to financial markets through rigorous code and sound money principles."
        </p>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-gray-600 py-16 px-6 border-t border-gray-900 font-lato text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <span className="font-cinzel text-xl text-[#D4AF37] block mb-4">AURELIAN</span>
            <p className="max-w-md text-xs leading-relaxed">
              We are building the asset manager of the next century.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-white mb-4">Sitemap</h4>
            <ul className="space-y-2 text-xs uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Lending Solutions</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Platform</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-cinzel text-white mb-4">Connect</h4>
             <ul className="space-y-2 text-xs uppercase tracking-widest">
               <li><a href="#" className="hover:text-[#D4AF37]">LinkedIn</a></li>
               <li><a href="#" className="hover:text-[#D4AF37]">Twitter</a></li>
               <li><a href="#" className="hover:text-[#D4AF37]">Portal Login</a></li>
             </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 text-[10px] leading-relaxed text-justify">
          <div className="border border-gray-800 p-4 bg-[#031811]/50 rounded mb-4">
             <strong className="text-gray-400 block mb-1">DISCLAIMER:</strong>
             Aurelian Labs is a technology and operations company. "Aurelian Capital Solutions" is a separate entity responsible for all financing activities. Aurelian Labs does not issue loans, solicit securities, or provide investment advice. All figures shown are for illustrative purposes regarding platform capabilities.
          </div>
          <p>\u00a9 {new Date().getFullYear()} Aurelian Labs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
