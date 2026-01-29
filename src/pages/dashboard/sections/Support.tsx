import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, FileQuestion } from "lucide-react";

const Support = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Support & Help</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Live Chat</h3>
                        <p className="text-sm text-muted-foreground mb-4">Chat with our support team in real-time.</p>
                        <Button variant="outline" className="w-full">Start Chat</Button>
                    </CardContent>
                </Card>
                <Card className="text-center hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Email Support</h3>
                        <p className="text-sm text-muted-foreground mb-4">Get response within 24 hours.</p>
                        <Button variant="outline" className="w-full">Send Email</Button>
                    </CardContent>
                </Card>
                <Card className="text-center hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                            <FileQuestion className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold mb-2">FAQs</h3>
                        <p className="text-sm text-muted-foreground mb-4">Find answers to common questions.</p>
                        <Button variant="outline" className="w-full">Browse FAQs</Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How do I request a refund?</AccordionTrigger>
                            <AccordionContent>
                                You can request a refund through the Order Management page within 3 days of delivery if the work does not meet the requirements.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How are expert ratings calculated?</AccordionTrigger>
                            <AccordionContent>
                                Ratings are an average of scores given by students after completed orders.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we use industry-standard encryption and do not store your credit card details on our servers.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Support;
