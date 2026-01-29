import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const SellerReviews = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Reviews & Ratings</h2>

            <Card className="bg-orange-500/5 border-orange-200">
                <CardContent className="p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-orange-800">Overall Rating</p>
                        <h3 className="text-4xl font-bold text-orange-600 flex items-center gap-2">
                            4.9 <Star className="w-8 h-8 fill-current" />
                        </h3>
                        <p className="text-sm text-muted-foreground">Based on 124 reviews</p>
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 50}`} />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold">Student Name</h4>
                                        <div className="flex text-orange-500">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-xs text-muted-foreground">Oct 2{i}, 2024</span>
                            </div>
                            <p className="text-sm text-foreground/80 mb-4">
                                "The notes were extremely helpful and well organized. Helped me ace my exam!"
                            </p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">Reply</Button>
                                <Button variant="ghost" size="sm" className="text-muted-foreground"><Flag className="w-3 h-3 mr-1" /> Report</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
};

export default SellerReviews;
