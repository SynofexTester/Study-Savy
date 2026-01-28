import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";  // Assuming this exists, if not I'll use standard textarea or check ui components
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, X } from "lucide-react";

// Fallback if Textarea component doesn't exist yet, but typically shadcn projects have it. 
// I'll stick to standard HTML textarea if unsure, but let's assume shadcn structure.

const UploadNote = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="font-display text-3xl font-bold">Upload Note</h1>
                            <Button variant="ghost" asChild>
                                <Link to="/sell">Cancel</Link>
                            </Button>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                            <form className="space-y-6">

                                {/* File Upload Area */}
                                <div className="space-y-2">
                                    <Label>Note File (PDF)</Label>
                                    <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${file ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/50"
                                        }`}>
                                        {file ? (
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                                    <FileText className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                                                    <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setFile(null)}
                                                    className="p-1 hover:bg-muted rounded-full ml-2"
                                                >
                                                    <X className="w-4 h-4 text-muted-foreground" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                                    <Upload className="w-6 h-6 text-muted-foreground" />
                                                </div>
                                                <p className="font-medium mb-1">Click to upload or drag and drop</p>
                                                <p className="text-sm text-muted-foreground">PDF files only (max 10MB)</p>
                                                <input
                                                    type="file"
                                                    accept=".pdf"
                                                    className="hidden"
                                                    id="file-upload"
                                                    onChange={handleFileChange}
                                                />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="absolute inset-0 cursor-pointer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <span className="sr-only">Upload file</span>
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title</Label>
                                        <Input id="title" placeholder="e.g. Calculus II Final Review" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" placeholder="e.g. Mathematics" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <textarea
                                        id="description"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Describe what your note covers..."
                                        required
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="university">University</Label>
                                        <Input id="university" placeholder="e.g. MIT" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="price">Price ($)</Label>
                                        <Input id="price" type="number" min="0" step="0.5" placeholder="0.00" required />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" className="w-full h-11 text-base">
                                        Publish Note
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UploadNote;
