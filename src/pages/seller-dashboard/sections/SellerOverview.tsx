import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    DollarSign,
    Download,
    FileText,
    Eye,
    ArrowUpRight,
    AlertCircle,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    { label: "Total Earnings", value: "$1,247.50", icon: DollarSign, change: "+12.5%" },
    { label: "Total Downloads", value: "892", icon: Download, change: "+8.3%" },
    { label: "Active Orders", value: "3", icon: FileText, change: "+1" },
    { label: "Profile Views", value: "2.4K", icon: Eye, change: "+15%" },
];

const SellerOverview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="font-display text-3xl font-bold">Welcome back, Ahmed! 👋</h1>
                        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">Top Rated</span>
                    </div>
                    <p className="text-muted-foreground">Here's what's happening with your business today.</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Service
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card rounded-2xl border border-border p-5"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <stat.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Active Orders */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Pending Deliveries</CardTitle>
                        <Button variant="ghost" size="sm">View All</Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                    <div>
                                        <h4 className="font-semibold">Calculus Assignment #42{i}</h4>
                                        <p className="text-sm text-muted-foreground">Due in 2 days • $40.00</p>
                                    </div>
                                    <Button size="sm">Deliver Now</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Alerts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Important Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start p-3 bg-red-50 text-red-700 rounded-lg border border-red-100">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-sm">Revision Requested</p>
                                    <p className="text-xs mt-1 opacity-90">Order #221 requires changes.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-sm">New Message</p>
                                    <p className="text-xs mt-1 opacity-90">Buyer awaiting response.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

import { MessageCircle } from "lucide-react"; // Import missing

export default SellerOverview;
