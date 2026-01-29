import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Briefcase, MapPin, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
    {
        title: "Senior Full Stack Engineer",
        department: "Engineering",
        location: "Remote / New York",
        type: "Full-time"
    },
    {
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time"
    },
    {
        title: "Community Manager",
        department: "Marketing",
        location: "London",
        type: "Full-time"
    },
    {
        title: "Customer Success Specialist",
        department: "Support",
        location: "Remote",
        type: "Full-time"
    }
];

const Careers = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-4xl md:text-5xl font-bold mb-6"
                        >
                            Join Our Mission to Democratize Education
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            We're building the future of peer-to-peer learning.
                            We're looking for passionate individuals who want to make a real impact on students' lives globally.
                        </motion.p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Zap,
                                title: "Move Fast",
                                desc: "We iterate quickly and aren't afraid to break things to make them better."
                            },
                            {
                                icon: Users,
                                title: "Students First",
                                desc: "Every decision we make starts with how it benefits the student community."
                            },
                            {
                                icon: MapPin,
                                title: "Remote First",
                                desc: "Work from anywhere. We believe in output over hours and location."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card p-8 rounded-2xl border border-border text-center"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Open Positions */}
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl font-bold mb-8 text-center">Open Positions</h2>
                        <div className="space-y-4">
                            {positions.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-card p-6 rounded-xl border border-border flex flex-col md:flex-row items-center justify-between gap-4 group hover:border-primary/50 transition-colors"
                                >
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>
                                    <Button>Apply Now</Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
