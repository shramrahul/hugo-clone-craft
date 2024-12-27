import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LaborTrends from "./pages/LaborTrends";
import GenerativeAI from "./pages/GenerativeAI";
import Careers from "./pages/Careers";
import DataSurvey from "./pages/DataSurvey";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/labor-trends" element={<LaborTrends />} />
              <Route path="/generative-ai" element={<GenerativeAI />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/data-survey" element={<DataSurvey />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;