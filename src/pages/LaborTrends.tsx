import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LaborTrends = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    setTimeout(() => {
      const insightsSection = document.getElementById('insights');
      if (insightsSection) {
        insightsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <button 
          onClick={handleBackToHome}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Labor and Industry Trends</h1>
          <p className="text-gray-600 mb-12">NOVEMBER 2024</p>

          <h2 className="text-3xl font-bold mb-6">Right down the middle</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The November BLS jobs report underscores a steady economic trajectory, even as October's data faced temporary disruptions from hurricanes and strikes. Throughout 2024, the economy has been carefully easing into a "soft landing," reflecting the Federal Reserve's deliberate approach to cooling growth. Despite these adjustments, the labor market's strength remains evident, with unemployment rates holding near historic lows—a clear sign of resilience amid change.
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">CURRENT LABOR INDICATORS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">4.2%</div>
                <div className="text-gray-600">Total Unemployment</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">227,000</div>
                <div className="text-gray-600">Total Job Gains</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.0%</div>
                <div className="text-gray-600">Wage Growth % Change (YoY)</div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500 mt-4">Source: U.S. Bureau of Labor Statistics</div>
          </div>

          <h2 className="text-3xl font-bold mb-6">What does this mean?</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              As the economic landscape stabilizes, businesses are expected to move beyond the prolonged uncertainty that has delayed critical technology initiatives. According to Avega's COO, the hesitation to invest in transformative projects has created a significant buildup of essential technology needs. This backlog, the COO predicts, will become an urgent focus for clients looking to gain a competitive edge in 2025.
            </p>
            <p>
              Meanwhile, Avega's CEO highlighted the transformative role of AI and other innovative technologies, emphasizing that increased efficiency historically drives greater demand for technological solutions rather than diminishing the need for them. The CEO also noted that the rapid evolution of these technologies will only accelerate, creating new opportunities across industries.
            </p>
            <p>
              Avega stands ready to help organizations meet these challenges head-on. By partnering with Avega's experienced team, businesses can strategically prepare for 2025 and beyond, ensuring they're ready to tackle their most pressing technology priorities with confidence.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LaborTrends;