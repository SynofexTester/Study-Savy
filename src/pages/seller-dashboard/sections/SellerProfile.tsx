import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SellerProfile = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Profile Settings</h2>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center gap-4">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Change Photo</Button>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input defaultValue="Ahmed Khan" />
                        </div>
                        <div className="space-y-2">
                            <Label>Display Name</Label>
                            <Input defaultValue="Prof. Ahmed" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Professional Headline</Label>
                        <Input defaultValue="Expert Mathematics Tutor & Note Creator" />
                    </div>

                    <div className="space-y-2">
                        <Label>Bio</Label>
                        <Input defaultValue="I am a PhD student with 5 years of teaching experience..." />
                    </div>

                    <div className="pt-4 border-t border-border">
                        <h3 className="font-semibold mb-4">Verification</h3>
                        <div className="flex items-center justify-between p-4 bg-green-50 text-green-700 rounded-lg border border-green-100">
                            <span>Identity Verified</span>
                            <span className="font-bold">✓</span>
                        </div>
                    </div>

                    <Button className="w-full md:w-auto">Save Changes</Button>
                </div>
            </div>
        </motion.div>
    );
};

export default SellerProfile;
