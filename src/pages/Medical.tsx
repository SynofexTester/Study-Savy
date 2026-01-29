import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Search,
    Filter,
    Star,
    Download,
    FileText,
    ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data for Medical
const notes = [
    {
        id: "med-1",
        title: "Human Anatomy - Complete Guide",
        subject: "Anatomy",
        university: "Johns Hopkins",
        price: 19.99,
        rating: 5.0,
        reviews: 102,
        downloads: 678,
        seller: "Dr. Khan",
        format: "PDF",
        pages: 200,
    },
    {
        id: "med-2",
        title: "Pharmacology Cheat Sheets",
        subject: "Pharmacology",
        university: "UCSF",
        price: 14.50,
        rating: 4.8,
        reviews: 88,
        downloads: 410,
        seller: "Jessica M.",
        format: "PDF",
        pages: 50,
    },
    {
        id: "med-3",
        title: "Pathology Basics",
        subject: "Pathology",
        university: "Harvard Medical",
        price: 16.99,
        rating: 4.9,
        reviews: 120,
        downloads: 550,
        seller: "Alex B.",
        format: "PDF",
        pages: 140,
    },
    {
        id: "med-4",
        title: "Biochemistry Clinical Correlates",
        subject: "Biochemistry",
        university: "Mayo Clinic",
        price: 15.00,
        rating: 4.7,
        reviews: 65,
        downloads: 300,
        seller: "Samantha P.",
        format: "PDF",
        pages: 115,
    },
    {
        id: "med-5",
        title: "Microbiology & Immunology",
        subject: "Microbiology",
        university: "Oxford",
        price: 13.99,
        rating: 4.8,
        reviews: 45,
        downloads: 220,
        seller: "Ryan T.",
        format: "PDF",
        pages: 98,
    },
];

const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
];

const Medical = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [showFilters, setShowFilters] = useState(false);

    const [visibleCount, setVisibleCount] = useState(6);

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.university.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-10"
                    >
                        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                            Medical Study Materials
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Comprehensive notes for Anatomy, Physiology, Pharmacology, and more.
                        </p>
                    </motion.div>

                    {/* Search and Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        {/* Search Bar */}
                        <div className="flex gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search medical topics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="h-12 pl-12 pr-4 rounded-xl bg-card border-border"
                                />
                            </div>
                            <Button
                                variant="outline"
                                className="h-12 px-4 rounded-xl lg:hidden"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <Filter className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Sort and Filter Bar */}
                        <div className="flex items-center justify-between">
                            <p className="text-muted-foreground">
                                Showing <span className="font-medium text-foreground">{filteredNotes.length}</span> results
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Notes Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredNotes.slice(0, visibleCount).map((note, index) => (
                            <motion.div
                                key={note.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                            >
                                <Link
                                    to={`/note/${note.id}`}
                                    className="group block bg-card rounded-2xl border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Preview Thumbnail */}
                                    <div className="aspect-[4/3] bg-gradient-hero flex items-center justify-center relative">
                                        <FileText className="w-16 h-16 text-primary-foreground/50" />
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-card text-foreground shadow-soft">
                                                {note.format}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                            {note.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                            <span>{note.subject}</span>
                                            <span>•</span>
                                            <span>{note.university}</span>
                                        </div>

                                        <div className="flex items-center gap-3 text-sm mb-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-accent text-accent" />
                                                <span className="font-medium">{note.rating}</span>
                                                <span className="text-muted-foreground">
                                                    ({note.reviews})
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground">
                                                <Download className="w-4 h-4" />
                                                <span>{note.downloads}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div>
                                                <span className="font-display text-xl font-bold text-primary">
                                                    ${note.price.toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                by {note.seller}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    {visibleCount < filteredNotes.length && (
                        <div className="text-center mt-12">
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-xl"
                                onClick={handleLoadMore}
                            >
                                Load More Notes
                                <ChevronDown className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    )}

                    {filteredNotes.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">No notes found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Medical;
