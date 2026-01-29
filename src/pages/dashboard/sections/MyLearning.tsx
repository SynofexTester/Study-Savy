import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, BookOpen } from "lucide-react";

const MyLearning = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold">My Learning & Progress</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>Course Progress</CardTitle></CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-sm">Calculus II</span>
                                <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-sm">Physics 101</span>
                                <span className="text-sm text-muted-foreground">40%</span>
                            </div>
                            <Progress value={40} className="h-2" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-sm">Intro to CS</span>
                                <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Study Schedule</CardTitle></CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
                                <div>
                                    <p className="font-medium text-sm">Physics Lab</p>
                                    <p className="text-xs text-muted-foreground">Today, 2:00 PM</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="mt-1 w-2 h-2 rounded-full bg-orange-500"></div>
                                <div>
                                    <p className="font-medium text-sm">Math Quiz Prep</p>
                                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-none">
                <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-white/50 rounded-xl dark:bg-black/20">
                        <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">AI Recommendation</h3>
                        <p className="text-muted-foreground text-sm">Based on your recent scores, we recommend reviewing <strong>Vector Calculus</strong> concepts before your next exam.</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default MyLearning;
