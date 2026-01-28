import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, FileText, Plus, Edit, Trash2, Eye } from "lucide-react";

// Mock data
const myNotes = [
    { id: "1", title: "Calculus II Notes", price: "$8.99", downloads: 234, earned: "$421.32", status: "Active", date: "2024-01-15" },
    { id: "2", title: "Physics 101 Guide", price: "$5.50", downloads: 156, earned: "$280.80", status: "Active", date: "2024-01-10" },
    { id: "3", title: "Organic Chemistry", price: "$12.00", downloads: 89, earned: "$160.20", status: "Review", date: "2024-01-22" },
    { id: "4", title: "History of Art", price: "$4.00", downloads: 12, earned: "$36.00", status: "Active", date: "2023-12-05" },
    { id: "5", title: "Intro to Psychology", price: "$6.50", downloads: 0, earned: "$0.00", status: "Draft", date: "2024-01-25" },
];

const SellerNotes = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="font-display text-3xl font-bold mb-1">My Notes</h1>
                                <p className="text-muted-foreground">Manage your uploaded study materials.</p>
                            </div>
                            <Button asChild>
                                <Link to="/upload">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Upload New Note
                                </Link>
                            </Button>
                        </div>

                        <div className="bg-card border border-border rounded-2xl overflow-hidden">
                            <div className="p-4 border-b border-border">
                                <div className="relative max-w-sm">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input placeholder="Search notes..." className="pl-9" />
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Downloads</TableHead>
                                            <TableHead>Earned</TableHead>
                                            <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {myNotes.map((note) => (
                                            <TableRow key={note.id}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                                                            <FileText className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">{note.title}</p>
                                                            <p className="text-xs text-muted-foreground">{note.date}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{note.price}</TableCell>
                                                <TableCell>
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${note.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                            note.status === 'Review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                                'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                                                        }`}>
                                                        {note.status}
                                                    </span>
                                                </TableCell>
                                                <TableCell>{note.downloads}</TableCell>
                                                <TableCell>{note.earned}</TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                            <DropdownMenuItem asChild>
                                                                <Link to={`/note/${note.id}`}>
                                                                    <Eye className="mr-2 h-4 w-4" /> View Page
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Edit className="mr-2 h-4 w-4" /> Edit Details
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="text-destructive focus:text-destructive">
                                                                <Trash2 className="mr-2 h-4 w-4" /> Delete Note
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SellerNotes;
