import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Users, Globe, BookOpen } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Empowering Students Worldwide
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Study Savvy is a global marketplace for students to share, discover,
                            and monetize high-quality study materials. We believe in the power
                            of peer-to-peer learning.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-display text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-muted-foreground mb-6">
                                To democratize access to high-quality educational resources by connecting
                                top performing students with those seeking to learn. We aim to reward
                                knowledge sharing and help every student achieve their academic potential.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Quality assured content",
                                    "Direct support to creators",
                                    "Global community",
                                    "Affordable prices"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-muted rounded-3xl aspect-square flex items-center justify-center"
                        >
                            <BookOpen className="w-32 h-32 text-muted-foreground/20" />
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Users,
                                title: "Community First",
                                desc: "Built by students, for students. We understand the academic journey."
                            },
                            {
                                icon: Globe,
                                title: "Global Reach",
                                desc: "Access study materials from top universities around the world."
                            },
                            {
                                icon: CheckCircle2,
                                title: "Verified Quality",
                                desc: "All notes are reviewed to ensure they meet our high standards."
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
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
