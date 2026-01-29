import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import NoteDetail from "./pages/NoteDetail";
import SellerDashboard from "./pages/seller-dashboard/SellerDashboard";
import SellerNotes from "./pages/SellerNotes";
import UploadNote from "./pages/UploadNote";
import About from "./pages/About";
import Contributors from "./pages/Contributors";
import Cart from "./pages/Cart";
import Profile from "./pages/dashboard/UserDashboard";
import Engineering from "./pages/Engineering";
import Medical from "./pages/Medical";
import Law from "./pages/Law";
import Business from "./pages/Business";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Copyright from "./pages/Copyright";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="/sell" element={<SellerDashboard />} />
          <Route path="/seller/notes" element={<SellerNotes />} />
          <Route path="/upload" element={<UploadNote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/law" element={<Law />} />
          <Route path="/business" element={<Business />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
