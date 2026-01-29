import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SellerAnalytics = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Analytics</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold mb-2">98%</div>
                        <Progress value={98} className="h-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">On-Time Delivery</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold mb-2">100%</div>
                        <Progress value={100} className="h-2" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">Response Rate</CardTitle></CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold mb-2">95%</div>
                        <Progress value={95} className="h-2" />
                    </CardContent>
                </Card>
            </div>

            <Card className="h-64 flex items-center justify-center border-dashed">
                <p className="text-muted-foreground">Performance Chart (Coming Soon)</p>
            </Card>
        </motion.div>
    );
};

export default SellerAnalytics;
