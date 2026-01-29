import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Ticket } from "lucide-react";

const SellerSupport = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Seller Support</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                            <Ticket className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg">My Support Tickets</h3>
                        <p className="text-muted-foreground">View status of your open inquiries.</p>
                        <Button variant="outline" className="w-full">View Tickets</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                            <Headphones className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-lg">Contact Agent</h3>
                        <p className="text-muted-foreground">Start a live chat with our support team.</p>
                        <Button className="w-full">Start Chat</Button>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

export default SellerSupport;
