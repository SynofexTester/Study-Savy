import { motion } from "framer-motion";
import { ArrowRight, Upload, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* For Learners */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-primary-foreground relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Ready to Ace Your Exams?
              </h3>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                Browse our collection of high-quality notes, past papers, and study materials from top-performing students.
              </p>
              
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-6 rounded-xl"
                asChild
              >
                <Link to="/browse">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* For Sellers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 lg:p-12 border-2 border-accent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6">
                <Upload className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                Turn Your Notes into Income
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Your hard work can help others succeed. Upload your notes and start earning while you help fellow students.
              </p>
              
              <Button
                size="lg"
                className="h-12 px-6 rounded-xl bg-gradient-warm hover:opacity-90 text-white"
                asChild
              >
                <Link to="/sell">
                  Start Selling
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
