import { useState } from "react";
import { SellerSidebar } from "./components/SellerSidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sections
import SellerOverview from "./sections/SellerOverview";
import ManageOrders from "./sections/ManageOrders";
import SellerMessages from "./sections/SellerMessages";
import SellerEarnings from "./sections/SellerEarnings";
import MyServices from "./sections/MyServices";
import SellerReviews from "./sections/SellerReviews";
import SellerAnalytics from "./sections/SellerAnalytics";
import SellerAiTools from "./sections/SellerAiTools";
import SellerProfile from "./sections/SellerProfile";
import SellerSupport from "./sections/SellerSupport";

const SellerDashboard = () => {
    const [activeSection, setActiveSection] = useState("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderSection = () => {
        switch (activeSection) {
            case "overview": return <SellerOverview />;
            case "orders": return <ManageOrders />;
            case "messages": return <SellerMessages />;
            case "earnings": return <SellerEarnings />;
            case "services": return <MyServices />;
            case "reviews": return <SellerReviews />;
            case "analytics": return <SellerAnalytics />;
            case "ai-tools": return <SellerAiTools />;
            case "profile": return <SellerProfile />;
            case "support": return <SellerSupport />;
            default: return <SellerOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            <SellerSidebar
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
                    <span className="font-display font-bold text-lg">Seller Dashboard</span>
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

export default SellerDashboard;
