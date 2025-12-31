import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Technology from "./pages/Technology";
import Membership from "./pages/Membership";
import Reviews from "./pages/Reviews";
import NewPatients from "./pages/NewPatients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service sub-pages
import GeneralDentistry from "./pages/services/GeneralDentistry";
import ExamCleaning from "./pages/services/ExamCleaning";
import FamilyDentistry from "./pages/services/FamilyDentistry";
import DentalFillings from "./pages/services/DentalFillings";
import CosmeticDentistry from "./pages/services/CosmeticDentistry";
import TeethWhitening from "./pages/services/TeethWhitening";
import Invisalign from "./pages/services/Invisalign";
import DentalCrowns from "./pages/services/DentalCrowns";
import DentalImplants from "./pages/services/DentalImplants";
import RootCanal from "./pages/services/RootCanal";
import Dentures from "./pages/services/Dentures";
import EmergencyDentistry from "./pages/services/EmergencyDentistry";
import Orthodontics from "./pages/services/Orthodontics";
import WisdomToothRemoval from "./pages/services/WisdomToothRemoval";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
            <Route path="/services/exam-cleaning" element={<ExamCleaning />} />
            <Route path="/services/family-dentistry" element={<FamilyDentistry />} />
            <Route path="/services/dental-fillings" element={<DentalFillings />} />
            <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
            <Route path="/services/teeth-whitening" element={<TeethWhitening />} />
            <Route path="/services/invisalign" element={<Invisalign />} />
            <Route path="/services/dental-crowns" element={<DentalCrowns />} />
            <Route path="/services/dental-implants" element={<DentalImplants />} />
            <Route path="/services/root-canal" element={<RootCanal />} />
            <Route path="/services/dentures" element={<Dentures />} />
            <Route path="/services/emergency-dentistry" element={<EmergencyDentistry />} />
            <Route path="/services/orthodontics" element={<Orthodontics />} />
            <Route path="/services/wisdom-tooth-removal" element={<WisdomToothRemoval />} />
            <Route path="/technology" element={<Technology />} />
            
            <Route path="/membership" element={<Membership />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
