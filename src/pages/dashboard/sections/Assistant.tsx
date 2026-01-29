import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles } from "lucide-react";

const Assistant = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-[calc(100vh-140px)] flex flex-col">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold">Study Savvy AI</h2>
                <p className="text-muted-foreground">Ask me anything about your studies, assignments, or finding experts.</p>
            </div>

            <div className="flex-1 bg-card border border-border rounded-2xl p-6 mb-4 overflow-y-auto space-y-6">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="space-y-4">
                        <div className="bg-muted/50 p-4 rounded-2xl rounded-tl-none">
                            <p className="text-sm">Hello! I'm your AI study assistant. How can I help you today?</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Button variant="outline" size="sm" className="text-xs h-8"><Sparkles className="w-3 h-3 mr-1" /> Explain Quantum Physics</Button>
                            <Button variant="outline" size="sm" className="text-xs h-8"><Sparkles className="w-3 h-3 mr-1" /> Check my Math answers</Button>
                            <Button variant="outline" size="sm" className="text-xs h-8"><Sparkles className="w-3 h-3 mr-1" /> Summarize a text</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-2">
                <Input placeholder="Ask AI something..." className="h-12" />
                <Button size="icon" className="h-12 w-12"><Send className="w-5 h-5" /></Button>
            </div>
        </motion.div>
    );
};

export default Assistant;
