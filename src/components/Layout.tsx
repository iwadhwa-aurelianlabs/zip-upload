// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInitiateAudit = () => {
    if (location.pathname === '/lending') {
      // If already on lending page, just scroll to form
      const formElement = document.getElementById('application-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to lending page and then scroll to form
      navigate('/lending');
      // Use a timeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const formElement = document.getElementById('application-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#031811] text-white font-sans selection:bg-[#D4AF37] selection:text-[#031811]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#031811]/95 border-[#D4AF37]/30 backdrop-blur-md py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center rounded-sm bg-black/20">
               <span className="font-cinzel text-xl text-[#D4AF37]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-lg tracking-[0.15em] text-white">AURELIAN</span>
              <span className="font-lato text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">Labs</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-lato text-sm tracking-widest text-gray-300">
            <Link 
              to="/platform" 
              className={`transition-colors ${location.pathname === '/platform' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}
            >
              PORTFOLIO
            </Link>
            <Link 
              to="/lending" 
              className={`transition-colors ${location.pathname === '/lending' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}
            >
              CAPITAL
            </Link>
            <Link 
              to="/team" 
              className={`transition-colors ${location.pathname === '/team' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}
            >
              TEAM
            </Link>
            <Link 
              to="/calculator" 
              className={`transition-colors ${location.pathname === '/calculator' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}
            >
              CALCULATOR
            </Link>
            <button 
              onClick={handleInitiateAudit}
              className="border border-[#D4AF37] px-6 py-2 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#031811] transition-all duration-300 uppercase text-xs font-bold tracking-widest"
            >
              Initiate Audit
            </button>
          </div>

          <button className="md:hidden text-[#D4AF37]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#031811]/95 backdrop-blur-md border-t border-[#D4AF37]/30">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              <Link 
                to="/platform" 
                className={`block font-lato text-sm tracking-widest transition-colors ${location.pathname === '/platform' ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}`}
              >
                PORTFOLIO
              </Link>
              <Link 
                to="/lending" 
                className={`block font-lato text-sm tracking-widest transition-colors ${location.pathname === '/lending' ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}`}
              >
                CAPITAL
              </Link>
              <Link 
                to="/team" 
                className={`block font-lato text-sm tracking-widest transition-colors ${location.pathname === '/team' ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}`}
              >
                TEAM
              </Link>
              <Link 
                to="/calculator" 
                className={`block font-lato text-sm tracking-widest transition-colors ${location.pathname === '/calculator' ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}`}
              >
                CALCULATOR
              </Link>
              <button 
                onClick={handleInitiateAudit}
                className="block border border-[#D4AF37] px-6 py-2 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#031811] transition-all duration-300 uppercase text-xs font-bold tracking-widest text-center w-full"
              >
                Initiate Audit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-600 py-16 px-6 border-t border-gray-900 font-lato text-sm">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          {/* AURELIAN Column */}
          <div>
            <h3 className="font-cinzel text-xl text-white mb-4">AURELIAN</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building asset manager of next century. On blockchain rails. With AI-native operations.
            </p>
          </div>
          
          {/* NAVIGATE Column */}
          <div>
            <h4 className="font-cinzel text-sm text-white mb-4 tracking-widest uppercase">NAVIGATE</h4>
            <ul className="space-y-2">
              <li><Link to="/lending" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Lending</Link></li>
              <li><Link to="/platform" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Team</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* SERVICES Column */}
          <div>
            <h4 className="font-cinzel text-sm text-white mb-4 tracking-widest uppercase">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Get financing help</a></li>
              <li><Link to="/hbh-prequal" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Start HBH pre-qualification</Link></li>
            </ul>
          </div>
          
          {/* LEGAL Column */}
          <div>
            <h4 className="font-cinzel text-sm text-white mb-4 tracking-widest uppercase">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 text-[10px] leading-relaxed text-center">
          <p className="mb-2">Aurelian Labs is not a bank or direct lender. Nothing on this site is an offer or solicitation of securities.</p>
          <p>© {new Date().getFullYear()} Aurelian Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
