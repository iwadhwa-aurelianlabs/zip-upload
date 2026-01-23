// @ts-nocheck
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, Sun, ArrowRight } from 'lucide-react';

const HBH = () => {
  const formRef = useRef(null);
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#031811] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Nav */}
      <nav className="fixed w-full z-50 bg-[#FDFCF8]/95 border-b border-[#D4AF37]/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center rounded-sm bg-white">
               <Home className="text-[#D4AF37] w-5 h-5" /> 
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-lg tracking-[0.15em] text-[#031811]">AURELIAN</span>
              <span className="font-lato text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Home Buyer Helper</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-lato text-sm tracking-widest text-gray-500">
            <Link to="/" className="hover:text-[#D4AF37]">HOME</Link>
            <button onClick={scrollToForm} className="bg-[#031811] text-white px-6 py-2 hover:bg-[#D4AF37] transition-all uppercase text-xs font-bold tracking-widest rounded-sm">
              Check Eligibility
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#031811]/5 px-4 py-1 rounded-full">
            <Sun className="w-3 h-3 text-[#D4AF37]" />
            <span className="font-lato text-xs tracking-[0.2em] text-[#031811] uppercase">A Program for Future Homeowners</span>
          </div>
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold leading-tight tracking-wide text-[#031811]">
            Unlock the Door to <br /> <span className="gold-gradient-text">Your Future.</span>
          </h1>
          <button onClick={scrollToForm} className="bg-[#D4AF37] text-white px-10 py-4 font-cinzel font-bold tracking-widest uppercase shadow-lg hover:bg-[#031811] transition-all rounded-sm flex items-center justify-center gap-2 mx-auto">
            Start My Journey <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Form */}
      <section ref={formRef} className="py-24 px-6 bg-[#031811] text-white">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="font-cinzel text-4xl mb-4">See If You Qualify</h2>
             <p className="font-lato text-gray-400 text-lg">No impact to your credit score. We'll review your goals and reach out within 24 hours.</p>
           </div>
           <div className="bg-white text-[#031811] p-8 md:p-10 rounded-lg shadow-2xl">
             <form className="space-y-6">
               <input type="text" placeholder="Your Name" className="w-full border border-gray-200 p-3 rounded focus:border-[#D4AF37] outline-none" />
               <input type="email" placeholder="Email Address" className="w-full border border-gray-200 p-3 rounded focus:border-[#D4AF37] outline-none" />
               <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 p-3 rounded focus:border-[#D4AF37] outline-none" />
               <select className="w-full border border-gray-200 p-3 rounded focus:border-[#D4AF37] outline-none bg-white">
                   <option>Estimated Budget...</option>
                   <option>00k - 00k</option>
                   <option>00k - 00k</option>
                   <option>00k+</option>
               </select>
               <button className="w-full bg-[#D4AF37] text-white py-4 font-cinzel font-bold tracking-widest uppercase hover:bg-[#031811] transition-colors shadow-lg mt-4 rounded-sm">
                 Get Pre-Qualified
               </button>
             </form>
           </div>
         </div>
      </section>
    </div>
  );
};
export default HBH;
