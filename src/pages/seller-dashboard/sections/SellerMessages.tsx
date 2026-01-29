import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Reusing similar structure to User Messages but tailored for Seller
const SellerMessages = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] flex bg-card rounded-2xl overflow-hidden border border-border">
            <div className="w-80 border-r border-border flex flex-col">
                <div className="p-4 border-b border-border">
                    <h3 className="font-semibold mb-2">Inbox</h3>
                    <Input placeholder="Search students..." />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 hover:bg-muted cursor-pointer flex gap-3 border-b border-border/50">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 10}`} />
                                <AvatarFallback>ST</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium text-sm">Student Name</h4>
                                    <span className="text-xs text-muted-foreground">11:00 AM</span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">Can you help with this assignment?</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-950/20">
                <div className="p-4 border-b border-border bg-card flex justify-between items-center">
                    <h3 className="font-semibold">Student Name</h3>
                </div>
                <div className="flex-1 p-4 flex items-center justify-center text-muted-foreground">
                    Select a conversation to start chatting
                </div>
            </div>
        </motion.div>
    );
};

export default SellerMessages;
