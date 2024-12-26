import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const GenerativeAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Generative AI</h1>
          <p className="text-sm text-gray-600 mb-12">FEBRUARY 2024</p>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">The AI Revolution in Business</h2>
          <p className="text-base text-gray-700 mb-8 leading-relaxed">
            Generative AI is reshaping how businesses operate, innovate, and deliver value to their customers. From automating routine tasks to generating creative content and providing intelligent insights, AI technologies are becoming indispensable tools across industries.
          </p>

          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              At Avega Solutions, we're at the forefront of this technological revolution, helping organizations harness the power of AI to transform their operations and create new opportunities for growth.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenerativeAI;