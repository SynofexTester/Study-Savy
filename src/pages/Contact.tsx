import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="font-display text-4xl md:text-5xl font-bold mb-6"
                            >
                                Get in Touch
                            </motion.h1>
                            <p className="text-xl text-muted-foreground">
                                Have questions? We'd love to hear from you.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="bg-card p-8 rounded-2xl border border-border">
                                    <h3 className="font-display text-xl font-bold mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <Mail className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">Email Us</h4>
                                                <p className="text-muted-foreground mb-1">Our friendly team is here to help.</p>
                                                <a href="mailto:support@studysavvy.com" className="text-primary hover:underline">support@studysavvy.com</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <MapPin className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">Office</h4>
                                                <p className="text-muted-foreground mb-1">Come say hello at our office headquarters.</p>
                                                <p className="text-sm">100 Student Way, Innovation City, NY 10001</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <MessageSquare className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">Live Chat</h4>
                                                <p className="text-muted-foreground mb-1">Available Mon-Fri, 9am-5pm EST.</p>
                                                <Button variant="link" className="p-0 h-auto">Start Chat</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-card p-8 rounded-2xl border border-border"
                            >
                                <h3 className="font-display text-xl font-bold mb-6">Send us a message</h3>
                                <form className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                            <Input id="first-name" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                            <Input id="last-name" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                                    </div>
                                    <Button className="w-full">
                                        Send Message <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
