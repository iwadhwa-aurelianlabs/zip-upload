// @ts-nocheck
import React from 'react';
import { Users, Linkedin, Mail, Shield, ChevronRight } from 'lucide-react';

const AurelianTeam = () => {
  const team = [
    { name: "Nathaniel Norman", role: "Managing Partner", bio: "Architecting the convergence of decentralized ledgers and institutional credit markets.", tag: "STRATEGY" },
    { name: "Ryan Levychin", role: "Head of Capital Markets", bio: "Leading operations and automation for complex debt structuring and liquidity access.", tag: "CAPITAL" },
    { name: "Xavier Huang", role: "Head of Technology", bio: "Overseeing the proprietary RWA verification stack and AI underwriting core.", tag: "PLATFORM" },
    { name: "Lyndsay Goldfarb", role: "Head of Strategic Operations", bio: "Ensuring rigorous compliance and operational excellence across all lending verticals.", tag: "OPS" },
    { name: "Paul White", role: "Head of Credit", bio: "Decades of experience in structured finance and risk assessment for commercial assets.", tag: "RISK" },
    { name: "Ishita Wadhwa", role: "Head of Product", bio: "Translating complex financial workflows into seamless digital experiences.", tag: "PRODUCT" }
  ];

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap'); .font-cinzel { font-family: 'Cinzel', serif; } .font-lato { font-family: 'Lato', sans-serif; }`}</style>
      
      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="font-cinzel text-5xl md:text-6xl font-bold mb-6">Stewards of the <span className="text-[#D4AF37]">New Standard</span></h1>
      </section>
      
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="border border-gray-800 bg-[#051F16] p-8 hover:border-[#D4AF37]/50 transition-all group">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center bg-black/20">
                <Users className="w-10 h-10 text-[#D4AF37]" />
              </div>
            </div>
            
            <div className="text-center">
              <span className="font-mono text-[10px] text-[#D4AF37] tracking-widest uppercase block mb-2">{member.tag}</span>
              <h3 className="font-cinzel text-xl text-white mb-1">{member.name}</h3>
              <p className="font-lato text-[#D4AF37] text-sm mb-4">{member.role}</p>
              <p className="font-lato text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-black/50 px-6 py-2 rounded-sm backdrop-blur-sm mb-8">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] uppercase">Collective Excellence</span>
          </div>
          
          <h2 className="font-cinzel text-3xl text-white mb-6">United by Purpose</h2>
          <p className="font-lato text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Our team brings together decades of experience in institutional finance, technology innovation, and operational excellence. We are building the infrastructure that will power the next generation of private credit markets.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-cinzel text-2xl text-[#D4AF37] mb-2">50+</h3>
              <p className="font-lato text-gray-400 text-sm">Years Combined Experience</p>
            </div>
            <div>
              <h3 className="font-cinzel text-2xl text-[#D4AF37] mb-2">$2B+</h3>
              <p className="font-lato text-gray-400 text-sm">Assets Under Management</p>
            </div>
            <div>
              <h3 className="font-cinzel text-2xl text-[#D4AF37] mb-2">100%</h3>
              <p className="font-lato text-gray-400 text-sm">Commitment to Innovation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AurelianTeam;
