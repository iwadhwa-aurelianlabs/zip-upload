// @ts-nocheck
import React, { useRef, useState } from 'react';
import { ArrowRight, Building2, Briefcase, FileSearch, Network, ShieldCheck, Landmark, TrendingUp, CheckCircle, User, Clock, Wallet, Send, AlertCircle } from 'lucide-react';

// Direct Supabase integration to avoid import issues
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const submitToSupabase = async (formData: any) => {
  // Check if Supabase is configured
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://your-project-id.supabase.co') {
    console.warn('Supabase not configured, using localStorage fallback');
    return { success: false, useLocalStorage: true };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/intake_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        client_name: formData.clientName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        state: formData.state,
        revenue: formData.revenue ? parseFloat(formData.revenue.replace(/,/g, '')) : null,
        deal_type: formData.dealType,
        time_in_business: formData.timeInBusiness,
        existing_debt: formData.existingDebt || null,
        notes: formData.notes || null,
        status: 'pending'
      })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Supabase error:', error);
      throw new Error(error);
    }

    const data = await response.json();
    console.log('Supabase submission successful:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Supabase submission error:', error);
    return { success: false, error };
  }
};

// Temporary interface to avoid import issues
interface FormData {
  clientName: string;
  companyName: string;
  email: string;
  phone: string;
  state: string;
  revenue: string;
  dealType: string;
  timeInBusiness: string;
  existingDebt: string;
  notes: string;
}

const AurelianCapitalSolutions = () => {
  const formRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState<FormData>({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    state: '',
    revenue: '',
    dealType: 'MCA',
    timeInBusiness: '',
    existingDebt: '',
    notes: ''
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Environment variables check:');
      console.log('VITE_SUPABASE_URL:', supabaseUrl);
      console.log('VITE_SUPABASE_ANON_KEY exists:', !!supabaseAnonKey);
      console.log('Form data:', formData);

      // Try Supabase first
      const result = await submitToSupabase(formData);
      
      if (result.success) {
        // Supabase submission successful
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! We will contact you within 24 hours.'
        });
      } else if (result.useLocalStorage) {
        // Fallback to localStorage
        console.log('Using localStorage fallback');
        const existingSubmissions = JSON.parse(localStorage.getItem('intakeSubmissions') || '[]');
        const submission = {
          ...formData,
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          status: 'pending'
        };
        
        existingSubmissions.push(submission);
        localStorage.setItem('intakeSubmissions', JSON.stringify(existingSubmissions));
        
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! (Stored locally - configure Supabase for cloud storage)'
        });
      } else {
        // Supabase error
        throw new Error(result.error || 'Unknown error');
      }
      
      // Reset form
      setFormData({
        clientName: '',
        companyName: '',
        email: '',
        phone: '',
        state: '',
        revenue: '',
        dealType: 'MCA',
        timeInBusiness: '',
        existingDebt: '',
        notes: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit application. Please try again or contact support.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section id="application-form" ref={formRef} className="py-24 px-6 bg-gradient-to-b from-black to-[#031811]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl text-white mb-4">Begin Your Application</h2>
            <p className="font-lato text-gray-400">Submit your funding request and receive a preliminary analysis within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {submitStatus.type && (
              <div className={`p-4 rounded-lg text-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/50 border border-green-500/50 text-green-300' 
                  : 'bg-red-900/50 border border-red-500/50 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            {/* Identity & Contact Section */}
            <div className="space-y-6">
              <h3 className="text-[#D4AF37]/90 text-xl border-b border-gray-700 pb-2 flex items-center gap-2">
                <User className="w-4 h-4" /> Identity & Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Client Name</label>
                  <input 
                    type="text" 
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="Marcus Aurelius"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="Rome Holdings LLC"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="senate@rome.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Business Metrics Section */}
            <div className="space-y-6">
              <h3 className="text-[#D4AF37]/90 text-xl border-b border-gray-700 pb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Business Metrics
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Monthly Revenue ($)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">$</span>
                    <input 
                      type="number" 
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 pl-8 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                      placeholder="100000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Time in Business</label>
                  <input 
                    type="text" 
                    name="timeInBusiness"
                    value={formData.timeInBusiness}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="e.g. 5 Years"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Deal Type</label>
                  <div className="relative">
                    <select 
                      name="dealType"
                      value={formData.dealType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded appearance-none cursor-pointer"
                    >
                      <option value="MCA">Merchant Cash Advance (MCA)</option>
                      <option value="Term Loan">Term Loan</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="LOC">Line of Credit</option>
                      <option value="SBA">SBA Loan</option>
                      <option value="Equipment">Equipment Financing</option>
                    </select>
                    <div className="absolute right-3 top-3.5 pointer-events-none text-gray-500">
                      <Wallet className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">State of Incorporation</label>
                  <input 
                    type="text" 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                    placeholder="e.g. DE, NY, TX"
                  />
                </div>
              </div>
            </div>

            {/* Context & Requirements Section */}
            <div className="space-y-6">
              <h3 className="text-[#D4AF37]/90 text-xl border-b border-gray-700 pb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Context & Requirements
              </h3>
              <div className="space-y-2">
                <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Existing Debt / Positions?</label>
                <input 
                  type="text" 
                  name="existingDebt"
                  value={formData.existingDebt}
                  onChange={handleInputChange}
                  className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded" 
                  placeholder="e.g. 1 position with Knight Capital, $10k balance"
                />
              </div>
              <div className="space-y-2">
                <label className="font-lato text-xs tracking-widest uppercase text-gray-500 font-bold block">Additional Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-black/50 border border-gray-800 text-white px-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors rounded resize-none"
                  placeholder="Describe the use of funds or any specific constraints..."
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full bg-[#D4AF37] text-[#031811] font-cinzel font-bold py-4 px-6 rounded transition-all duration-300 transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:bg-white flex justify-center items-center gap-2 tracking-widest uppercase"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-[#031811] border-t-transparent rounded-full"></span>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit to Pipeline <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
              
              {submitStatus.type === 'error' && (
                <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-sm flex items-center gap-2 justify-center">
                  <AlertCircle className="w-4 h-4" />
                  Transmission failed. Please check your connection or try again.
                </div>
              )}
              
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
