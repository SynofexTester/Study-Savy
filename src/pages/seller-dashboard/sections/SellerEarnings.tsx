import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowUpRight, Download } from "lucide-react";

const SellerEarnings = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Earnings & Wallet</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-hero text-primary-foreground border-none">
                    <CardContent className="p-6">
                        <p className="text-primary-foreground/80 mb-2">Available for Withdrawal</p>
                        <h3 className="text-4xl font-bold mb-4">$847.50</h3>
                        <Button variant="secondary" className="w-full">
                            <ArrowUpRight className="w-4 h-4 mr-2" /> Withdraw Funds
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-2">Pending Clearance</p>
                        <h3 className="text-3xl font-bold mb-4">$400.00</h3>
                        <p className="text-xs text-muted-foreground">Funds clear 14 days after order completion.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <p className="text-muted-foreground mb-2">Total Income (All Time)</p>
                        <h3 className="text-3xl font-bold mb-4">$12,450.00</h3>
                        <Button variant="outline" size="sm" className="w-full">Download Report</Button>
                    </CardContent>
                </Card>
            </div>

            {/* Payout Methods */}
            <Card>
                <CardHeader><CardTitle>Payment Methods</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                            <div>
                                <h4 className="font-medium">Payoneer</h4>
                                <p className="text-sm text-muted-foreground">ID: 982***21</p>
                            </div>
                        </div>
                        <Button variant="outline" disabled>Connected</Button>
                    </div>
                    <Button variant="ghost" className="w-full">+ Add Payment Method</Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default SellerEarnings;
