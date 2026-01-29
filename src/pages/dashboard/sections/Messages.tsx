import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Phone, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Messages = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] flex bg-card rounded-2xl overflow-hidden border border-border">
            {/* Sidebar List */}
            <div className="w-80 border-r border-border flex flex-col">
                <div className="p-4 border-b border-border">
                    <h3 className="font-semibold mb-2">Messages</h3>
                    <Input placeholder="Search messages..." />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-4 hover:bg-muted cursor-pointer flex gap-3 border-b border-border/50">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium text-sm">Dr. Sarah Smith</h4>
                                    <span className="text-xs text-muted-foreground">10:30 AM</span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">Hello! I've reviewed the requirements...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-border flex justify-between items-center bg-muted/20">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                            <AvatarFallback>SS</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold">Dr. Sarah Smith</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-xs text-muted-foreground">Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon"><Phone className="w-5 h-5" /></Button>
                        <Button variant="ghost" size="icon"><Video className="w-5 h-5" /></Button>
                    </div>
                </div>

                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50 dark:bg-slate-950/20">
                    <div className="flex justify-start">
                        <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                            <p className="text-sm">Hi there! How can I help you with your physics assignment today?</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                            <p className="text-sm">I'm struggling with the projectile motion problems. Can you check my work?</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-border bg-card">
                    <div className="flex gap-2">
                        <Input placeholder="Type a message..." className="flex-1" />
                        <Button><Send className="w-4 h-4" /></Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Messages;
