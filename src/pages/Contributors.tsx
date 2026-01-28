import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Star, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const contributors = [
    {
        id: 1,
        name: "Ahmed Khan",
        university: "MIT",
        sales: 156,
        rating: 4.9,
        avatar: "AK",
        color: "bg-blue-500"
    },
    {
        id: 2,
        name: "Sarah Miller",
        university: "Stanford",
        sales: 142,
        rating: 4.8,
        avatar: "SM",
        color: "bg-green-500"
    },
    {
        id: 3,
        name: "James Chen",
        university: "Harvard",
        sales: 98,
        rating: 5.0,
        avatar: "JC",
        color: "bg-purple-500"
    },
    {
        id: 4,
        name: "Maria Garcia",
        university: "Oxford",
        sales: 87,
        rating: 4.7,
        avatar: "MG",
        color: "bg-orange-500"
    }
];

const Contributors = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Top Contributors
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Meet the brilliant minds sharing their knowledge with the world.
                            Join them and start earning from your study notes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {contributors.map((contributor, i) => (
                            <motion.div
                                key={contributor.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-card rounded-2xl border border-border p-6 relative overflow-hidden group hover:shadow-lg transition-shadow"
                            >
                                <div className="absolute top-4 right-4">
                                    {i < 3 && <Trophy className={`w-6 h-6 ${i === 0 ? "text-yellow-500" :
                                            i === 1 ? "text-gray-400" : "text-amber-700"
                                        }`} />}
                                </div>

                                <div className={`w-20 h-20 rounded-full ${contributor.color} mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                                    {contributor.avatar}
                                </div>

                                <div className="text-center mb-4">
                                    <h3 className="font-display text-lg font-bold">{contributor.name}</h3>
                                    <p className="text-sm text-muted-foreground">{contributor.university}</p>
                                </div>

                                <div className="flex items-center justify-center gap-4 text-sm mb-6">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-medium">{contributor.rating}</span>
                                    </div>
                                    <div className="w-px h-4 bg-border" />
                                    <span className="text-muted-foreground">{contributor.sales} Sales</span>
                                </div>

                                <Button variant="outline" className="w-full" asChild>
                                    <Link to={`/browse?seller=${contributor.id}`}>
                                        View Notes
                                    </Link>
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-3xl mx-auto">
                            <h2 className="font-display text-2xl font-bold mb-4">Become a Contributor</h2>
                            <p className="text-muted-foreground mb-6">
                                Share your notes and earn money while helping other students succeed.
                            </p>
                            <Button size="lg" asChild>
                                <Link to="/signup">
                                    Start Selling Now <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contributors;
