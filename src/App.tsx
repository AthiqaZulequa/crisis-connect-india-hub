
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AlertsPage from "./pages/AlertsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ReportPage from "./pages/ReportPage";
import InsightsPage from "./pages/InsightsPage";
import WeatherPage from "./pages/WeatherPage";
import DonatePage from "./pages/DonatePage";
import VolunteerPage from "./pages/VolunteerPage";
import Login from "./pages/Login";
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
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
