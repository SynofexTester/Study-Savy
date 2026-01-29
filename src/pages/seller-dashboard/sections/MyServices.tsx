import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MyServices = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold">My Services / Notes</h2>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Service
                </Button>
            </div>

            <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
                            <div className="w-full sm:w-32 h-20 bg-muted rounded-lg flex items-center justify-center">
                                <span className="text-muted-foreground text-xs">Thumbnail</span>
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-bold text-lg">Calculus II Comprehensive Notes</h3>
                                <div className="flex gap-4 justify-center sm:justify-start text-sm text-muted-foreground mt-1">
                                    <span>$25.00</span>
                                    <span>•</span>
                                    <span>152 Sales</span>
                                    <span>•</span>
                                    <span>4.9 Rating</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon"><Eye className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon"><Edit2 className="w-4 h-4" /></Button>
                                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

export default MyServices;
