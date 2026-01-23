// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  RefreshCw, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

const Calculator = () => {
  // State for Inputs
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(10);
  const [termMonths, setTermMonths] = useState(12);
  const [projectedRevenue, setProjectedRevenue] = useState(1500000);

  // State for Outputs
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [viabilityScore, setViabilityScore] = useState(0);
  const [dealStatus, setDealStatus] = useState("ANALYZING");

  // Calculation Engine
  useEffect(() => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100;
    const months = parseFloat(termMonths);
    const revenue = parseFloat(projectedRevenue);

    const monthlyRate = rate / 12;
    let payment = 0;
    
    if (rate === 0) {
      payment = principal / months;
    } else {
      payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalRepayment = payment * months;
    const profit = revenue - totalRepayment;
    
    // Viability Score Logic
    const roi = (profit / totalRepayment) * 100;
    let score = 50; 

    if (roi > 20) score += 20;
    else if (roi > 10) score += 10;
    else score -= 10;

    if (rate < 10) score += 15;
    else if (rate > 15) score -= 15;

    if (months < 24) score += 10;

    score = Math.min(Math.max(score, 0), 99);

    setMonthlyPayment(payment);
    setTotalCost(totalRepayment);
    setNetProfit(profit);
    setViabilityScore(Math.floor(score));

    if (score >= 80) setDealStatus("OPTIMAL STRUCTURE");
    else if (score >= 60) setDealStatus("VIABLE / MODERATE RISK");
    else setDealStatus("NEEDS RE-STRUCTURING");

  }, [loanAmount, interestRate, termMonths, projectedRevenue]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');
        
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
        
        input[type=range] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #D4AF37;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
          cursor: pointer;
          margin-top: -7px;
          border: 2px solid #031811;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          background: #1a2e26;
          border-radius: 2px;
        }
        .circuit-bg {
          background-image: radial-gradient(#D4AF37 0.5px, transparent 0.5px);
          background-size: 24px 24px;
        }
      `}</style>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        
        {/* INPUTS PANEL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#051F16] border border-[#D4AF37]/10 p-8 rounded-sm relative shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={40} className="text-[#D4AF37]" />
            </div>
            
            <h2 className="font-cinzel text-lg mb-8 flex items-center gap-3 text-[#D4AF37]">
              <RefreshCw className="w-4 h-4 animate-spin-slow" /> 
              <span className="tracking-widest">DEAL PARAMETERS</span>
            </h2>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">Capital Request</label>
                  <span className="font-mono text-xl text-white">{formatCurrency(loanAmount)}</span>
                </div>
                <input 
                  type="range" min="100000" max="5000000" step="50000" 
                  value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">Exit Revenue Projection</label>
                  <span className="font-mono text-xl text-white">{formatCurrency(projectedRevenue)}</span>
                </div>
                <input 
                  type="range" min="150000" max="10000000" step="50000" 
                  value={projectedRevenue} onChange={(e) => setProjectedRevenue(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">Annual Interest Rate</label>
                  <span className="font-mono text-xl text-[#D4AF37]">{interestRate}%</span>
                </div>
                <input 
                  type="range" min="5" max="30" step="0.5" 
                  value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] text-gray-500 uppercase tracking-tighter">Duration (Months)</label>
                  <span className="font-mono text-xl text-white">{termMonths} Mo</span>
                </div>
                <input 
                  type="range" min="3" max="60" step="1" 
                  value={termMonths} onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="p-6 border border-[#D4AF37]/5 bg-[#02110c]">
            <p className="font-lato text-[11px] text-gray-500 leading-relaxed italic">
              *Aurelian proprietary risk-weighting engine. Figures presented are algorithmic simulations and do not constitute a formal offer of credit.
            </p>
          </div>
        </div>

        {/* OUTPUTS PANEL */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Scorecard */}
          <div className="bg-black border border-[#D4AF37]/40 p-10 relative overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 circuit-bg pointer-events-none opacity-[0.03]"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center md:text-left">
                <h3 className="font-cinzel text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] mb-4 opacity-70">Stress Test Viability</h3>
                <div className="flex items-baseline justify-center md:justify-start">
                  <span className="text-8xl font-mono font-bold text-white tracking-tighter leading-none">
                    {viabilityScore}
                  </span>
                  <span className="text-2xl font-mono text-gray-700 ml-2">/100</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`flex items-center gap-3 px-5 py-3 rounded-sm border ${viabilityScore > 60 ? 'border-emerald-500/50 bg-emerald-500/5 text-emerald-400' : 'border-rose-500/50 bg-rose-500/5 text-rose-400'}`}>
                  {viabilityScore > 60 ? <CheckCircle className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
                  <span className="font-mono text-sm font-bold tracking-widest uppercase">{dealStatus}</span>
                </div>
                <p className="font-lato text-gray-400 text-sm leading-relaxed">
                  {viabilityScore > 60 
                    ? "Structure indicates high capital efficiency. Debt service coverage ratio is optimal for current market conditions." 
                    : "Caution: Debt load exceeds standard safety margins. Consider increasing equity stake or extending term length."}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-[#051F16] border border-[#D4AF37]/10 p-6 rounded-sm group hover:border-[#D4AF37]/30 transition-colors">
               <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Monthly Servicing</div>
               <div className="font-mono text-2xl text-white">{formatCurrency(monthlyPayment)}</div>
             </div>
             <div className="bg-[#051F16] border border-[#D4AF37]/10 p-6 rounded-sm group hover:border-[#D4AF37]/30 transition-colors">
               <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Cost of Capital</div>
               <div className="font-mono text-2xl text-[#D4AF37]">{formatCurrency(totalCost - loanAmount)}</div>
             </div>
             <div className="bg-[#051F16] border border-[#D4AF37]/10 p-6 rounded-sm group hover:border-[#D4AF37]/30 transition-colors">
               <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-4">Projected Margin</div>
               <div className={`font-mono text-2xl ${netProfit > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                 {formatCurrency(netProfit)}
               </div>
             </div>
          </div>

          {/* CTA Section */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#8a6d21] rounded-sm blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#031811] border border-[#D4AF37]/30 p-10 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm">
              <div className="text-center md:text-left">
                <h3 className="font-cinzel text-2xl text-white mb-3 tracking-wide">SECURE THE FACILITY</h3>
                <p className="font-lato text-gray-500 text-sm max-w-md">
                  Submit this stress test result to our underwriting board for a priority audit and certified term sheet.
                </p>
              </div>
              <button className="w-full md:w-auto bg-[#D4AF37] text-[#031811] px-10 py-5 font-cinzel font-bold tracking-[0.2em] uppercase hover:bg-white transition-all transform active:scale-95 shadow-xl flex items-center justify-center gap-3">
                INITIATE AUDIT <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Calculator;
