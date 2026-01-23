import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { FinancingHelpForm } from "@/components/forms/FinancingHelpForm";
import { HBHPrequalForm } from "@/components/forms/HBHPrequalForm";
import { PartnershipsForm } from "@/components/forms/PartnershipsForm";

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      <SEO 
        title="Contact — Aurelian Labs"
        description="Financing help, HBH pre-qualification, and partnership inquiries. Typical response: 1–2 business days."
      />

      {/* Hero */}
      <section className="section-spacing pt-32 md:pt-40">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="max-w-3xl mb-8">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Choose the path that matches your goal. Intake stays simple.            </p>
          </motion.div>
        </div>
      </section>

      {/* Financing Help Form */}
      <section id="financing-help" className="section-spacing-sm scroll-mt-24">
        <div className="container-wide">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block">01</span>
            <h2 className="mb-4">
              Financing Help
            </h2>
            <p className="text-muted-foreground mb-10">
              For business and real estate operators. Use this for qualification, structuring, packaging, or execution support.
            </p>
            <FinancingHelpForm />
          </motion.div>
        </div>
      </section>

      {/* HBH Pre-Qualification Form */}
      <section id="hbh-prequal" className="section-spacing-sm bg-card scroll-mt-24">
        <div className="container-wide">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block">02</span>
            <h2 className="mb-4">
              HBH Pre-Qualification
            </h2>
            <p className="text-muted-foreground mb-10">
              Explore low-to-no downpayment mortgage pathways (including $0 down where eligible).
            </p>
            <div className="text-xs text-muted-foreground space-y-2 mb-8">
              <p>What happens next: quick intake review → next-step request (if applicable).</p>
              <p>Availability depends on borrower profile, property, jurisdiction, and partner terms.</p>
              <p>HBH is an intake and navigation layer—not a lender decisioning engine.</p>
            </div>
            <HBHPrequalForm />
          </motion.div>
        </div>
      </section>

      {/* Partnerships Form */}
      <section id="partnerships" className="section-spacing-sm scroll-mt-24">
        <div className="container-wide">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block">03</span>
            <h2 className="mb-4">
              Partnerships
            </h2>
            <p className="text-muted-foreground mb-10">
              For capital partners and serious service providers.
            </p>
            <PartnershipsForm />
          </motion.div>
        </div>
      </section>

      {/* General Contact */}
      <section className="section-spacing bg-card">
        <div className="container-wide text-center">
          <p className="text-muted-foreground">
            Prefer email?
          </p>
          <a 
            href="mailto:hello@aurelianlabs.com" 
            className="text-foreground hover:text-muted-foreground transition-colors duration-300 underline underline-offset-4"
          >
            hello@aurelianlabs.com
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            If time-sensitive, put your deadline in the first line.
          </p>
        </div>
      </section>
    </Layout>
  );
}
