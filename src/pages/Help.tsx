import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Help = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="font-display text-4xl font-bold mb-6"
                        >
                            Help Center
                        </motion.h1>
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                placeholder="Search for help..."
                                className="pl-12 h-12 rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Buying Notes</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How do I download notes after purchase?</AccordionTrigger>
                                    <AccordionContent>
                                        After completing your purchase, you will be redirected to a download page. You will also receive an email with a download link. You can access all your purchased notes anytime from your profile dashboard.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                    <AccordionContent>
                                        We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. All payments are processed securely.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I get a refund?</AccordionTrigger>
                                    <AccordionContent>
                                        Due to the digital nature of the products, we generally do not offer refunds unless the file is corrupt or significantly not as described. Please review the preview carefully before purchasing.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-6">Selling Notes</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>How much can I earn?</AccordionTrigger>
                                    <AccordionContent>
                                        You set your own prices! Study Savvy takes a small 20% commission fee to cover platform costs. You keep 80% of every sale.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>When do I get paid?</AccordionTrigger>
                                    <AccordionContent>
                                        Earnings are processed weekly. Once your balance reaches $20, you can request a payout to your bank account or PayPal.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>What kind of notes can I sell?</AccordionTrigger>
                                    <AccordionContent>
                                        You can sell your own original study notes, summaries, and guides. You cannot sell copyrighted materials like textbooks or professor's slides.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                    <div className="bg-muted p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                        <p className="text-muted-foreground mb-6">Our support team is just a click away.</p>
                        <Button asChild>
                            <Link to="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Help;
