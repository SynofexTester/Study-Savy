import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FindExperts = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Find Experts</h2>

            <div className="flex gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search by subject, skill, or name..." className="pl-10" />
                </div>
                <Button>Search</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-6 text-center space-y-4">
                            <Avatar className="w-20 h-20 mx-auto">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                <AvatarFallback>XP</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold text-lg">Dr. Sarah Smith</h3>
                                <p className="text-muted-foreground text-sm">Physics Specialist • PhD</p>
                            </div>
                            <div className="flex items-center justify-center gap-1 text-orange-500">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-medium">4.9</span>
                                <span className="text-muted-foreground text-sm">(120 reviews)</span>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center">
                                <span className="text-xs bg-muted px-2 py-1 rounded-full">Physics</span>
                                <span className="text-xs bg-muted px-2 py-1 rounded-full">Calculus</span>
                            </div>
                            <Button className="w-full">View Profile</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

export default FindExperts;
