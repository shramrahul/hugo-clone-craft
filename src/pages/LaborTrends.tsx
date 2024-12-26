import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LaborTrends = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Labor and Industry Trends Report November 2024</h1>
          <p className="text-lg text-gray-600 mb-12">Latest insights and analysis on labor market trends</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Executive Summary</h2>
            <p className="text-base text-gray-600 mb-8">
              The labor markets remain very much intact, as demonstrated by a still historically low unemployment rate. However, there are signs of cooling in certain sectors, particularly technology and finance.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Findings</h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Employment Growth</h3>
                <p className="text-base text-gray-600">
                  Employment growth has remained steady but shows signs of moderation. The economy added jobs at a slower pace compared to the previous quarter, indicating a potential shift in hiring patterns.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Wage Growth</h3>
                <p className="text-base text-gray-600">
                  Wage growth continues to outpace historical averages but has shown signs of stabilization. This suggests a potential equilibrium point between employer costs and worker demands.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Industry Shifts</h3>
                <p className="text-base text-gray-600">
                  Traditional industries are showing resilience while tech sector layoffs continue. Manufacturing and healthcare remain strong employers with steady growth trajectories.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Sector Analysis</h2>
            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Technology</h3>
                <p className="text-base text-gray-600">
                  Despite high-profile layoffs, the technology sector continues to be a major employer. However, hiring patterns have become more selective and focused on specific skill sets.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Healthcare</h3>
                <p className="text-base text-gray-600">
                  Healthcare remains a robust sector with consistent job growth. The demand for healthcare workers continues to exceed supply in many regions.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Manufacturing</h3>
                <p className="text-base text-gray-600">
                  Manufacturing shows signs of recovery with steady job additions. Reshoring trends and infrastructure investments are contributing to sector growth.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900">Future Outlook</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Short-term Projections</h3>
                <p className="text-base text-gray-600">
                  The labor market is expected to maintain its resilience while showing signs of normalization. Wage growth may continue to moderate as inflation pressures ease.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Long-term Trends</h3>
                <p className="text-base text-gray-600">
                  Structural changes in the economy, driven by technological advancement and demographic shifts, will continue to reshape the labor market landscape.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Recommendations</h3>
                <p className="text-base text-gray-600">
                  Organizations should focus on workforce development and skills training to address emerging needs. Flexibility in hiring and work arrangements will remain important factors in attracting and retaining talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LaborTrends;