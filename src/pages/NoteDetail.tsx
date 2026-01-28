import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Download,
  FileText,
  User,
  Calendar,
  Globe,
  ShoppingCart,
  Eye,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data for the note
const noteData = {
  id: "1",
  title: "Calculus II - Complete Course Notes",
  description:
    "Comprehensive hand-written notes covering all topics from Calculus II including integration techniques, infinite series, parametric equations, and polar coordinates. Perfect for exam preparation.",
  price: 8.99,
  format: "PDF",
  pages: 85,
  language: "English",
  subject: "Mathematics",
  university: "MIT",
  semester: "Spring 2024",
  uploadDate: "2024-01-15",
  downloads: 234,
  rating: 4.8,
  reviews: 42,
  seller: {
    name: "Ahmed Khan",
    avatar: "AK",
    rating: 4.9,
    totalSales: 156,
    university: "MIT",
  },
  tags: ["Calculus", "Integration", "Series", "Engineering Math"],
  previewPages: [1, 2, 3],
};

const reviews = [
  {
    id: "1",
    user: "Sarah M.",
    rating: 5,
    date: "2024-01-20",
    text: "Excellent notes! Very clear handwriting and well-organized. Helped me ace my midterm.",
  },
  {
    id: "2",
    user: "Ali H.",
    rating: 5,
    date: "2024-01-18",
    text: "Worth every penny. The examples are super helpful for understanding the concepts.",
  },
  {
    id: "3",
    user: "Fatima R.",
    rating: 4,
    date: "2024-01-15",
    text: "Great notes overall. Would have liked more practice problems, but the theory coverage is excellent.",
  },
];

const NoteDetail = () => {
  const [currentPreviewPage, setCurrentPreviewPage] = useState(0);
  const totalPreviewPages = 3;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              to="/browse"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Browse
            </Link>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Preview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                {/* Preview Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    Preview ({currentPreviewPage + 1} of {totalPreviewPages})
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCurrentPreviewPage((p) => Math.max(0, p - 1))
                      }
                      disabled={currentPreviewPage === 0}
                      className="p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPreviewPage((p) =>
                          Math.min(totalPreviewPages - 1, p + 1)
                        )
                      }
                      disabled={currentPreviewPage === totalPreviewPages - 1}
                      className="p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Preview Content */}
                <div className="aspect-[3/4] bg-muted relative flex items-center justify-center">
                  {/* Watermark overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <p className="text-4xl font-bold text-foreground/5 rotate-[-30deg] select-none">
                      PREVIEW
                    </p>
                  </div>

                  {/* Sample content */}
                  <div className="relative z-10 p-8 max-w-lg">
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <h3 className="font-display text-xl font-bold mb-4 text-primary">
                        Chapter {currentPreviewPage + 1}: Integration Techniques
                      </h3>
                      <div className="space-y-3 text-muted-foreground text-sm">
                        <p>
                          In this chapter, we'll explore various integration
                          techniques including:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Integration by parts</li>
                          <li>Trigonometric substitution</li>
                          <li>Partial fractions</li>
                          <li>Improper integrals</li>
                        </ul>
                        <div className="pt-4 border-t border-border mt-4">
                          <p className="italic">
                            Example: ∫ x·e^x dx = x·e^x - e^x + C
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blur overlay for locked content hint */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Lock className="w-4 h-4" />
                      Purchase to unlock all {noteData.pages} pages
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h2 className="font-display text-xl font-bold mb-4">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {noteData.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {noteData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-lg">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl font-bold">
                    Reviews ({noteData.reviews})
                  </h2>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                    <span className="font-semibold">{noteData.rating}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="pb-6 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                            {review.user[0]}
                          </div>
                          <div>
                            <p className="font-medium">{review.user}</p>
                            <div className="flex gap-0.5">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-accent text-accent"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Purchase Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-2xl border border-border p-6 sticky top-24"
              >
                <h1 className="font-display text-2xl font-bold mb-2">
                  {noteData.title}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium">{noteData.rating}</span>
                    <span className="text-muted-foreground">
                      ({noteData.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Download className="w-4 h-4" />
                    <span>{noteData.downloads} downloads</span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-muted/50 rounded-xl p-4 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-primary">
                      ${noteData.price}
                    </span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {noteData.pages} pages • {noteData.format}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span>{noteData.language}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {noteData.university} • {noteData.semester}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button className="w-full h-12 rounded-xl text-base">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl text-base"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Ask Seller
                  </Button>
                </div>

                {/* Seller Info */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Sold by</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold">
                      {noteData.seller.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{noteData.seller.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        <span>{noteData.seller.rating}</span>
                        <span>•</span>
                        <span>{noteData.seller.totalSales} sales</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NoteDetail;
