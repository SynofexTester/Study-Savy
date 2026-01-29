import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Sparkles, CheckCheck } from "lucide-react";

// Placeholder for AI Tools
const SellerAiTools = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                    <h2 className="font-display text-2xl font-bold">AI Assistant for Sellers</h2>
                    <p className="text-muted-foreground">Optimize your profile and messages with AI.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-500" /> Content Improver</h3>
                    <p className="text-sm text-muted-foreground">Paste your gig description or bio to rewrite it more professionally.</p>
                    <Textarea placeholder="Enter your text here..." className="min-h-[150px]" />
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Detailed Rewrite</Button>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2"><CheckCheck className="w-4 h-4 text-green-500" /> Plagiarism Checker</h3>
                    <p className="text-sm text-muted-foreground">Check your notes for uniqueness before uploading.</p>
                    <div className="border-2 border-dashed border-border rounded-xl h-[150px] flex items-center justify-center text-muted-foreground">
                        Drag document here
                    </div>
                    <Button variant="outline" className="w-full">Scan Document</Button>
                </div>
            </div>
        </motion.div>
    );
};

export default SellerAiTools;
