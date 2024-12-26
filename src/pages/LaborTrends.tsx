import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LaborTrends = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

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
              Once the macro uncertainties begin to clear, we expect clients to initiate their backlog of high-priority technology initiatives at an accelerated pace. As Avega COO recently commented, "Clients' prolonged caution in initiating new investments has resulted in an increasingly strong backlog of strategically imperative technology investments. We believe this backlog may be a high priority for our clients to initiate at an accelerated pace as macro uncertainties begin to clear in 2025."
            </p>
            <p>
              Avega CEO emphasized that, over the long term, advancements in AI and other innovative technologies are likely to follow the historic pattern where increased efficiency leads to greater demand for technology resources rather than replacing them, and that the pace of change will continue to accelerate.
            </p>
            <p>
              Avega is ideally positioned to meet this eventual demand. While finalizing technology plans for 2025, clients would be well served to partner with their Avega experts as they prepare to tackle key technology initiatives.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LaborTrends;