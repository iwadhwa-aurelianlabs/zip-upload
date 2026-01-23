// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Lock, Database, Zap } from 'lucide-react';

const Platform = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 matrix-bg overflow-hidden text-center">
        <div className="absolute top-32 left-10 font-mono text-[#D4AF37]/20 text-xs hidden lg:block text-left">
          <div>{'>>'} INIT_SYSTEM_CORE</div>
          <div>{'>>'} STATUS: <span className="text-green-500">ONLINE</span></div>
        </div>
        <div className="max-w-5xl z-10 space-y-8">
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-black/50 px-6 py-2 rounded-sm backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] uppercase">System Operational v2.4</span>
          </div>
          <h1 className="font-cinzel text-5xl md:text-8xl font-bold leading-tight tracking-wide">
            The Operating System <br /> <span className="text-[#D4AF37]">For Private Credit</span>
          </h1>
          <p className="font-lato text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
             <span className="text-[#D4AF37]">Blockchain Verification</span> • <span className="text-[#D4AF37]">AI Underwriting</span> • <span className="text-[#D4AF37]">Automated Settlement</span>
          </p>
        </div>
      </section>

      {/* Stack Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="border border-gray-800 bg-[#051F16] p-8 hover:border-[#D4AF37] transition-all group">
              <Database className="w-12 h-12 text-[#D4AF37] mb-6 opacity-80" />
              <h3 className="font-cinzel text-xl text-white mb-2">Layer 1: Verification</h3>
              <p className="font-mono text-xs text-[#D4AF37] mb-4">BLOCKCHAIN_LEDGER</p>
              <p className="font-lato text-gray-400 text-sm">Tokenized Real World Assets (RWA) for immutable audit trails.</p>
            </div>
            <div className="border border-gray-800 bg-[#051F16] p-8 hover:border-[#D4AF37] transition-all group">
              <Cpu className="w-12 h-12 text-[#D4AF37] mb-6 opacity-80" />
              <h3 className="font-cinzel text-xl text-white mb-2">Layer 2: Intelligence</h3>
              <p className="font-mono text-xs text-[#D4AF37] mb-4">AI_UNDERWRITING</p>
              <p className="font-lato text-gray-400 text-sm">Dynamic "Health Scores" based on real-time cash flow data.</p>
            </div>
            <div className="border border-gray-800 bg-[#051F16] p-8 hover:border-[#D4AF37] transition-all group">
              <Zap className="w-12 h-12 text-[#D4AF37] mb-6 opacity-80" />
              <h3 className="font-cinzel text-xl text-white mb-2">Layer 3: Settlement</h3>
              <p className="font-mono text-xs text-[#D4AF37] mb-4">SMART_CONTRACTS</p>
              <p className="font-lato text-gray-400 text-sm">Automated payment waterfalls and instant capital deployment.</p>
            </div>
        </div>
      </section>
    </>
  );
};
export default Platform;
