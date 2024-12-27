import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Industries } from "@/components/Industries";
import { Insights } from "@/components/Insights";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WorkShowcase />
      <Industries />
      <Insights />
      <About />
      <Footer />
    </div>
  );
};

export default Index;