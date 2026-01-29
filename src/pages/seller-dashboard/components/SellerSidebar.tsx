import {
    LayoutDashboard,
    ShoppingBag,
    MessageSquare,
    DollarSign,
    Briefcase,
    Star,
    BarChart2,
    Bot,
    User,
    HelpCircle,
    LogOut,
    X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "earnings", label: "Earnings", icon: DollarSign },
    { id: "services", label: "My Services", icon: Briefcase },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "analytics", label: "Analytics", icon: BarChart2 },
    { id: "ai-tools", label: "AI Tools", icon: Bot },
    { id: "profile", label: "Profile", icon: User },
    { id: "support", label: "Support", icon: HelpCircle },
];

export const SellerSidebar = ({ activeSection, setActiveSection, isOpen, onClose }: SidebarProps) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar - Desktop & Mobile */}
            <aside className={cn(
                "fixed lg:static top-0 left-0 h-full w-64 bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-display text-lg font-bold text-foreground">
                            Seller Hub
                        </span>
                    </div>
                    <button onClick={onClose} className="lg:hidden p-1 rounded-md hover:bg-muted">
                        <X className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>

                <div className="px-3 py-4 space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveSection(item.id);
                                if (window.innerWidth < 1024) onClose();
                            }}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                                activeSection === item.id
                                    ? "bg-orange-500/10 text-orange-600"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="p-4 mt-auto border-t border-border">
                    <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>
            </aside>
        </>
    );
};
