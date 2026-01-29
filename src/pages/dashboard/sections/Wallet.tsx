import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Download, Plus } from "lucide-react";

const Wallet = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Payments & Wallet</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-hero text-primary-foreground border-none">
                    <CardContent className="p-6">
                        <p className="text-primary-foreground/80 mb-2">Total Balance</p>
                        <h3 className="text-4xl font-bold mb-4">$250.00</h3>
                        <Button variant="secondary" className="w-full">
                            <Plus className="w-4 h-4 mr-2" /> Add Funds
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">Payment Methods</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3 p-3 border border-border rounded-xl mb-3">
                            <div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
                            <div className="flex-1">
                                <p className="font-medium text-sm">Visa ending in 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 12/25</p>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full">Manage Cards</Button>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center justify-between p-2 border-b border-border/50 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                        {i % 2 === 0 ? <DollarSign className="w-4 h-4" /> : <CreditCard className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm">Payment for Order #204{i}</h4>
                                        <p className="text-xs text-muted-foreground">Oct 2{i}, 2024</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">-$40.00</p>
                                    <Button variant="ghost" size="sm" className="h-6 text-xs text-blue-500"><Download className="w-3 h-3 mr-1" /> Invoice</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Wallet;
