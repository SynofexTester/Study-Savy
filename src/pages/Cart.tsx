import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight, FileText } from "lucide-react";

// Mock cart data
const cartItems = [
    { id: "1", title: "Calculus II - Complete Course Notes", price: 8.99, seller: "Ahmed Khan", image: "calc.jpg" },
    { id: "2", title: "Introduction to Psychology", price: 5.50, seller: "Maria Garcia", image: "psych.jpg" },
];

const Cart = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

                    {cartItems.length > 0 ? (
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Cart Items List */}
                            <div className="lg:col-span-2 space-y-4">
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center"
                                    >
                                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium truncate">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">by {item.seller}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold mb-1">${item.price.toFixed(2)}</p>
                                            <button className="text-destructive hover:text-destructive/80 transition-colors p-1">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-card border border-border rounded-xl p-6 sticky top-24"
                                >
                                    <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                                    <div className="space-y-3 text-sm border-b border-border pb-4 mb-4">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Tax (est.)</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg mb-6">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <Button className="w-full text-base h-11">
                                        Checkout <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <div className="mt-4 text-xs text-center text-muted-foreground">
                                        Secure checkout powered by Stripe
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                            <p className="text-muted-foreground mb-6">Looks like you haven't added any notes yet.</p>
                            <Button asChild>
                                <Link to="/browse">Browse Notes</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
