import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const ManageOrders = () => {
    const orders = [
        { id: 1, title: "Physics Lab Report", status: "new", price: "$50" },
        { id: 2, title: "Calculus Homework", status: "progress", price: "$30" },
        { id: 3, title: "Essay Editing", status: "revision", price: "$25" },
        { id: 4, title: "Java Project", status: "completed", price: "$100" },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Manage Orders</h2>

            <Tabs defaultValue="active" className="space-y-6">
                <TabsList className="bg-muted/50 p-1 rounded-xl w-full sm:w-auto overflow-x-auto justify-start">
                    <TabsTrigger value="active" className="rounded-lg">Active</TabsTrigger>
                    <TabsTrigger value="new" className="rounded-lg">New Requests</TabsTrigger>
                    <TabsTrigger value="completed" className="rounded-lg">Completed</TabsTrigger>
                    <TabsTrigger value="cancelled" className="rounded-lg">Cancelled</TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="space-y-4">
                    {orders.filter(o => ["progress", "revision"].includes(o.status)).map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </TabsContent>
                <TabsContent value="new" className="space-y-4">
                    {orders.filter(o => o.status === "new").map(order => (
                        <OrderCard key={order.id} order={order} isNew />
                    ))}
                </TabsContent>
                <TabsContent value="completed" className="space-y-4">
                    {orders.filter(o => o.status === "completed").map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

const OrderCard = ({ order, isNew }: any) => (
    <Card>
        <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{order.title}</h3>
                    <Badge variant={order.status === 'revision' ? 'destructive' : 'secondary'}>{order.status.toUpperCase()}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Order #{order.id}234 • {order.price}</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
                {isNew ? (
                    <>
                        <Button variant="outline" className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50">Reject</Button>
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">Accept Order</Button>
                    </>
                ) : (
                    <>
                        <Button variant="outline" className="flex-1">View Details</Button>
                        <Button className="flex-1">Deliver Now</Button>
                    </>
                )}
            </div>
        </CardContent>
    </Card>
);

export default ManageOrders;
