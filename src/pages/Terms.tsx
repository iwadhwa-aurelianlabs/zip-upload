import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <Layout>
      <SEO 
        title="Terms + Disclosures — Aurelian Labs"
        description="Terms of use and important disclosures for Aurelian Labs services."
      />

      {/* Hero - Left aligned */}
      <section className="section-spacing">
        <div className="container-wide">
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-3xl">
            Terms + Disclosures
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing-sm border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl space-y-8">
            <div className="p-6 border border-border bg-muted/50">
              <h2 className="font-serif text-xl font-medium mb-3">Important Disclosures</h2>
              <ul className="text-muted-foreground space-y-3 leading-relaxed">
                <li>
                  <strong className="text-foreground">Not a Bank or Lender:</strong> Aurelian Labs is not a bank, credit union, direct lender, or broker-dealer. We do not make lending decisions or approve loans.
                </li>
                <li>
                  <strong className="text-foreground">No Securities Solicitation:</strong> Nothing on this website constitutes an offer or solicitation of securities. We do not issue, underwrite, or sell securities of any kind.
                </li>
                <li>
                  <strong className="text-foreground">HBH Disclaimers:</strong> The HBH (Homebuyer Help) program is an intake and navigation layer only. Pre-qualification is not approval or commitment. Eligibility varies by individual profile, property, jurisdiction, and partner terms. "$0 down" options are not guaranteed and depend on partner programs and applicant eligibility.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Terms of Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using this website, you agree to these terms of use. This website and its contents are provided for informational purposes only and do not constitute financial, legal, or professional advice.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Informational Nature</h2>
              <p className="text-muted-foreground leading-relaxed">
                All information on this website is provided for general informational purposes. While we strive to keep information current and accurate, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may connect you with third-party lenders, financial institutions, or service providers. These third parties operate independently from Aurelian Labs, and we are not responsible for their products, services, terms, or privacy practices.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Aurelian Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and design elements, is the property of Aurelian Labs and is protected by applicable intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of this website following any changes constitutes acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at{" "}
                <a 
                  href="mailto:legal@aurelianlabs.com" 
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
                >
                  legal@aurelianlabs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
