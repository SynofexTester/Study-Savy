import { motion } from "framer-motion";
import {
    ShoppingBag,
    Clock,
    AlertCircle,
    CheckCircle,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="font-display text-3xl font-bold">Welcome Back, Ahmed! 👋</h1>
                    <p className="text-muted-foreground">Here's what's happening with your learning journey today.</p>
                </div>
                <Button>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    New Order
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Active Orders"
                    value="3"
                    icon={ShoppingBag}
                    trend="+1 this week"
                    color="text-blue-500"
                    bg="bg-blue-500/10"
                />
                <StatsCard
                    title="Pending Tasks"
                    value="5"
                    icon={Clock}
                    trend="2 due soon"
                    color="text-orange-500"
                    bg="bg-orange-500/10"
                />
                <StatsCard
                    title="Completed"
                    value="12"
                    icon={CheckCircle}
                    trend="Total projects"
                    color="text-green-500"
                    bg="bg-green-500/10"
                />
                <StatsCard
                    title="Notifications"
                    value="4"
                    icon={AlertCircle}
                    trend="Unread alerts"
                    color="text-purple-500"
                    bg="bg-purple-500/10"
                />
            </div>

            {/* Recent Activity & Deadlines */}
            <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <ShoppingBag className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Order #204{i} - Calculus Assignment</h4>
                                            <p className="text-sm text-muted-foreground">Status: In Progress</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">View</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Deadlines</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex gap-3 items-start p-3 rounded-lg border border-border">
                                    <div className="mt-1">
                                        <Clock className="w-4 h-4 text-destructive" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm">Physics Lab Report</h4>
                                        <p className="text-xs text-muted-foreground mt-1">Due in 2 days</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

const StatsCard = ({ title, value, icon: Icon, trend, color, bg }: any) => (
    <Card>
        <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">{trend}</span>
            </div>
            <div>
                <p className="text-sm text-muted-foreground font-medium">{title}</p>
                <h3 className="text-2xl font-bold mt-1">{value}</h3>
            </div>
        </CardContent>
    </Card>
);

export default Overview;
