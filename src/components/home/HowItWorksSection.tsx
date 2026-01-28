import { motion } from "framer-motion";
import { Search, Eye, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Find your specific course, subject, or textbook using our powerful search.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Eye,
    title: "Preview",
    description: "View a few pages for free to check quality before you commit.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Download,
    title: "Download",
    description: "Get instant digital access or order physical books delivered to you.",
    color: "bg-primary text-primary-foreground",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is easy. Find what you need in three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              )}

              <div className="text-center relative z-10">
                {/* Step number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mx-auto mb-6 shadow-soft`}>
                  <step.icon className="w-10 h-10" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
