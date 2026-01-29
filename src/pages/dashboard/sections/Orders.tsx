import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Star } from "lucide-react";

const Orders = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Order Management</h2>

            <div className="flex gap-2">
                <Button>All Orders</Button>
                <Button variant="outline">Active</Button>
                <Button variant="outline">Completed</Button>
            </div>

            <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Calculus II - Final Project</h3>
                                    <p className="text-muted-foreground text-sm">Due: Oct 24, 2024 • Budget: $40</p>
                                    <div className="flex gap-2 mt-2">
                                        <Badge variant="secondary">In Progress</Badge>
                                        <Badge variant="outline">Math</Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                                <Button variant="outline" className="flex-1">View Details</Button>
                                <Button className="flex-1">Contact Expert</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

export default Orders;
