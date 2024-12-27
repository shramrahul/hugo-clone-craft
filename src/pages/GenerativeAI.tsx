import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GenerativeAI = () => {
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
          <h1 className="text-5xl font-bold mb-4">Preparing Your Organization for Generative AI</h1>
          <p className="text-gray-600 mb-12">NOVEMBER 2024</p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Key Takeaways:</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>AI adoption requires careful planning and strategic implementation</li>
              <li>Organizations need to assess their readiness and infrastructure</li>
              <li>Training and change management are crucial for success</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Understanding Generative AI</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Generative AI represents a significant leap forward in artificial intelligence technology. Unlike traditional AI systems that follow predetermined rules, generative AI can create new content, generate ideas, and solve complex problems in innovative ways.
          </p>

          <h2 className="text-3xl font-bold mb-6">Implementation Strategies</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Successful implementation of generative AI requires a well-thought-out strategy that considers technical requirements, ethical implications, and organizational impact. Organizations must carefully evaluate their needs and capabilities before embarking on their AI journey.
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Key Steps for Implementation:</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Assess current technological infrastructure and capabilities</li>
              <li>Identify specific use cases and potential applications</li>
              <li>Develop a comprehensive training program for staff</li>
              <li>Establish governance frameworks and ethical guidelines</li>
              <li>Create monitoring and evaluation mechanisms</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Challenges and Considerations</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            While the potential benefits of generative AI are significant, organizations must be prepared to address various challenges, including data privacy concerns, ethical considerations, and the need for specialized expertise.
          </p>

          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The journey to implementing generative AI requires careful planning, robust infrastructure, and a commitment to continuous learning and adaptation. Organizations that take a thoughtful, strategic approach to AI adoption will be better positioned to realize its benefits while managing associated risks.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenerativeAI;