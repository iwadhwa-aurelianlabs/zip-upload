import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="text-sm tracking-[0.3em] uppercase font-medium text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Aurelian
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs leading-relaxed">
              Building the asset manager of the next century. On blockchain rails. With AI-native operations.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Navigate</span>
            <Link 
              to="/lending" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Lending
            </Link>
            <Link 
              to="/platform" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Platform
            </Link>
            <Link 
              to="/team" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Services</span>
            <Link 
              to="/contact#financing-help" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Get financing help
            </Link>
            <Link 
              to="/contact#partnerships" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Partner with us
            </Link>
            <Link 
              to="/contact#hbh-prequal" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Start HBH pre-qualification
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Legal</span>
            <Link 
              to="/privacy" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclosure */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
            Aurelian Labs is not a bank or direct lender. Nothing on this site is an offer or solicitation of securities.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-4">
            © {new Date().getFullYear()} Aurelian Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
