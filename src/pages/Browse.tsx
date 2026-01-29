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
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data
const notes = [
  {
    id: "1",
    title: "Calculus II - Complete Course Notes",
    subject: "Mathematics",
    university: "MIT",
    price: 8.99,
    rating: 4.8,
    reviews: 42,
    downloads: 234,
    seller: "Ahmed K.",
    format: "PDF",
    pages: 85,
  },
  {
    id: "2",
    title: "Organic Chemistry I - Lab Notes + Theory",
    subject: "Chemistry",
    university: "Stanford",
    price: 12.99,
    rating: 4.9,
    reviews: 67,
    downloads: 412,
    seller: "Fatima R.",
    format: "PDF",
    pages: 120,
  },
  {
    id: "3",
    title: "Data Structures & Algorithms",
    subject: "Computer Science",
    university: "Harvard",
    price: 9.99,
    rating: 4.7,
    reviews: 89,
    downloads: 523,
    seller: "Ali H.",
    format: "PDF",
    pages: 95,
  },
  {
    id: "4",
    title: "Microeconomics Principles",
    subject: "Economics",
    university: "Yale",
    price: 7.99,
    rating: 4.6,
    reviews: 34,
    downloads: 187,
    seller: "Sarah M.",
    format: "PDF",
    pages: 72,
  },
  {
    id: "5",
    title: "Constitutional Law Notes",
    subject: "Law",
    university: "Columbia",
    price: 14.99,
    rating: 4.9,
    reviews: 56,
    downloads: 298,
    seller: "Omar Z.",
    format: "PDF",
    pages: 145,
  },
  {
    id: "6",
    title: "Human Anatomy - Complete Guide",
    subject: "Medicine",
    university: "Johns Hopkins",
    price: 19.99,
    rating: 5.0,
    reviews: 102,
    downloads: 678,
    seller: "Dr. Khan",
    format: "PDF",
    pages: 200,
  },
];

const categories = [
  "All",
  "Engineering",
  "Medical",
  "Law",
  "Business",
  "Computer Science",
  "Mathematics",
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Filter notes based on search and category
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.university.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Medical" && note.subject === "Medicine") ||
      (selectedCategory === "Business" && note.subject === "Economics") ||
      note.subject === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
              Browse Study Materials
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover thousands of high-quality notes from top students around
              the world.
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
                  placeholder="Search by subject, course, or university..."
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

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => {
                const isSpecialCategory = ["Engineering", "Medical", "Law", "Business"].includes(category);
                return (
                  isSpecialCategory ? (
                    <Link
                      key={category}
                      to={`/${category.toLowerCase()}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors bg-muted text-muted-foreground hover:bg-muted/80`}
                    >
                      {category}
                    </Link>
                  ) : (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                    >
                      {category}
                    </button>
                  )
                );
              })}
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
                          ${note.price}
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

export default Browse;
