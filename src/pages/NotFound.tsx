import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <SEO 
        title="Page Not Found — Aurelian Labs"
        description="The page you're looking for doesn't exist."
      />
      
      <section className="section-spacing pt-32 md:pt-40">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="institutional" size="lg">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
