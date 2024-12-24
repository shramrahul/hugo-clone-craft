import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkShowcase />
      <About />
      <Footer />
    </div>
  );
};

export default Index;