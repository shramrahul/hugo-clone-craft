import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader2 } from "lucide-react";

// Lazy load components
const Index = React.lazy(() => import("./pages/Index"));
const LaborTrends = React.lazy(() => import("./pages/LaborTrends"));
const GenerativeAI = React.lazy(() => import("./pages/GenerativeAI"));
const Careers = React.lazy(() => import("./pages/Careers"));
const DataSurvey = React.lazy(() => import("./pages/DataSurvey"));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/labor-trends" element={<LaborTrends />} />
                <Route path="/generative-ai" element={<GenerativeAI />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/data-survey" element={<DataSurvey />} />
              </Routes>
            </Suspense>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;