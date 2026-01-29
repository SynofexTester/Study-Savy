import { useState } from "react";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder imports for sections
import Overview from "./sections/Overview";
import Settings from "./sections/Settings";
import Orders from "./sections/Orders";
import FindExperts from "./sections/FindExperts";
import Messages from "./sections/Messages";
import Wallet from "./sections/Wallet";
import MyLearning from "./sections/MyLearning";
import Assistant from "./sections/Assistant";
import Support from "./sections/Support";

const UserDashboard = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderSection = () => {
        switch (activeSection) {
            case "overview": return <Overview />;
            case "orders": return <Orders />;
            case "experts": return <FindExperts />;
            case "messages": return <Messages />;
            case "wallet": return <Wallet />;
            case "learning": return <MyLearning />;
            case "assistant": return <Assistant />;
            case "settings": return <Settings />;
            case "support": return <Support />;
            default: return <Overview />;
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            <DashboardSidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden bg-card border-b border-border p-4 flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </Button>
                    <span className="font-display font-bold text-lg">Dashboard</span>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-4 lg:p-8">
                    <div className="max-w-7xl mx-auto">
                        {renderSection()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;
