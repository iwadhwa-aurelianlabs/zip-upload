import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy — Aurelian Labs"
        description="How Aurelian Labs collects, uses, and protects your information."
      />

      {/* Hero - Left aligned */}
      <section className="section-spacing">
        <div className="container-wide">
          <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-3xl">
            Privacy Policy
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
            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us through form submissions on this website, including:
              </p>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Name and contact information (email, phone)</li>
                <li>Business information and financing requirements</li>
                <li>Property and homebuying information for HBH inquiries</li>
                <li>Partnership and organizational information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to respond to your inquiries, evaluate financing or partnership opportunities, and connect you with appropriate third-party partners when relevant to your request.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Third-Party Partners</h2>
              <p className="text-muted-foreground leading-relaxed">
                In the course of providing our services, we may share your information with third-party lenders, financial institutions, or service providers who can assist with your specific needs. We only share information necessary for the stated purpose and require our partners to maintain appropriate confidentiality.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access to, correction of, or deletion of your personal information by contacting us at the email address provided below.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries, contact us at{" "}
                <a 
                  href="mailto:privacy@aurelianlabs.com" 
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground"
                >
                  privacy@aurelianlabs.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
