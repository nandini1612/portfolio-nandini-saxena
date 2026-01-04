import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import Skills from "./pages/Skills";
import Extracurricular from "./pages/Extracurricular";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AiFinancialCrimeDetector from "./pages/projects/AiFinancialCrimeDetector";
import ChicagoCrimeAnalytics from "./pages/projects/ChicagoCrimeAnalytics";
import VogueAlytics from "./pages/projects/VogueAlytics";
import CnnsInductiveBiases from "./pages/writing/CnnsInductiveBiases";
import GradientDescentOptimizers from "./pages/writing/GradientDescentOptimizers";
import MarkovChains from "./pages/writing/MarkovChains";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ai-financial-crime-detector" element={<AiFinancialCrimeDetector />} />
          <Route path="/projects/chicago-crime-analytics" element={<ChicagoCrimeAnalytics />} />
          <Route path="/projects/vogue-alytics" element={<VogueAlytics />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/cnns-inductive-biases" element={<CnnsInductiveBiases />} />
          <Route path="/writing/gradient-descent-optimizers" element={<GradientDescentOptimizers />} />
          <Route path="/writing/markov-chains" element={<MarkovChains />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
