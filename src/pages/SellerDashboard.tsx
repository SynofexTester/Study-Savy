import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Upload,
  DollarSign,
  TrendingUp,
  FileText,
  Eye,
  Download,
  Plus,
  Wallet,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock data
const stats = [
  { label: "Total Earnings", value: "$1,247.50", icon: DollarSign, change: "+12.5%" },
  { label: "Total Downloads", value: "892", icon: Download, change: "+8.3%" },
  { label: "Active Notes", value: "15", icon: FileText, change: "+2" },
  { label: "Profile Views", value: "2.4K", icon: Eye, change: "+15%" },
];

const recentNotes = [
  { id: "1", title: "Calculus II Notes", downloads: 234, earnings: "$421.32", views: 1250 },
  { id: "2", title: "Physics 101 Guide", downloads: 156, earnings: "$280.80", views: 890 },
  { id: "3", title: "Organic Chemistry", downloads: 89, earnings: "$160.20", views: 456 },
];

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-3xl font-bold mb-2">
              Welcome back, Ahmed! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's how your notes are performing this month.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-accent-foreground bg-accent/20 px-2 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upload CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">
                      Upload New Notes
                    </h3>
                    <p className="text-primary-foreground/80 mb-4 max-w-md">
                      Share your knowledge and start earning. Your notes could help
                      thousands of students.
                    </p>
                    <Button variant="secondary" className="rounded-xl">
                      <Plus className="w-4 h-4 mr-2" />
                      Upload Notes
                    </Button>
                  </div>
                  <div className="hidden sm:block w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Upload className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>

              {/* Recent Notes Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-2xl border border-border"
              >
                <div className="p-5 border-b border-border flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">
                    Your Top Notes
                  </h3>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/seller/notes">
                      View All
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>

                <div className="divide-y divide-border">
                  {recentNotes.map((note) => (
                    <div key={note.id} className="p-5 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{note.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {note.views} views
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{note.earnings}</p>
                        <p className="text-sm text-muted-foreground">
                          {note.downloads} downloads
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Wallet Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-card rounded-2xl border border-border p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Your Wallet</h3>
                </div>

                <div className="bg-muted/50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Available Balance
                  </p>
                  <p className="font-display text-3xl font-bold">$847.50</p>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Pending</span>
                  <span className="font-medium">$400.00</span>
                </div>

                <Button className="w-full rounded-xl">
                  Withdraw Funds
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-card rounded-2xl border border-border p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">This Month</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">New Downloads</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">New Reviews</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Avg. Rating</span>
                    <span className="font-semibold">4.8 ⭐</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Profile Visits</span>
                    <span className="font-semibold">456</span>
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

export default SellerDashboard;
