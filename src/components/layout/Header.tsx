import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/lending", label: "Lending" },
  { to: "/platform", label: "Platform" },
  { to: "/team", label: "Team" },
];

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-sm md:text-base tracking-[0.3em] uppercase font-medium text-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            Aurelian
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="institutional" size="sm" className="tracking-[0.15em] uppercase text-xs">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-border">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${
                    location.pathname === link.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="institutional" size="sm" className="tracking-[0.15em] uppercase text-xs w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
