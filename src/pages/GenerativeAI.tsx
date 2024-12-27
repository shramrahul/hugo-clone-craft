import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Brain, Shield, Users, ChartLine } from "lucide-react";
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
          className="group inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium transition-colors rounded-lg hover:bg-[#E5DEFF] text-[#8B5CF6]"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </button>

        <h1 className="text-5xl font-bold mb-4">Preparing Your Organization for Generative AI</h1>
        <h2 className="text-3xl text-gray-700 mb-8">Generative AI: Is Your Company Ready for Its Opportunities & Challenges?</h2>
        <p className="text-gray-600 mb-12">NOVEMBER 2024</p>

        <p className="text-gray-700 mb-12 leading-relaxed">
          As generative AI continues to reshape industries, businesses are presented with both exciting opportunities and significant challenges. From content creation and product development to customer service and operations, generative AI has the potential to revolutionize how companies operate. However, with this power comes the need to carefully navigate its complexities and ensure readiness for the changes it brings.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Brain className="mr-3 h-8 w-8 text-blue-600" />
            The Opportunities of Generative AI
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Generative AI, which involves machine learning models capable of producing new content, designs, solutions, and even code, offers a range of opportunities for businesses across various sectors. Here's how your company could benefit:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Enhanced Creativity and Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                Generative AI can assist in brainstorming ideas, generating designs, writing copy, and creating digital assets—tasks that once required significant human effort and creativity. By automating these processes, companies can unlock new levels of creativity and streamline their development cycles.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Improved Efficiency</h3>
              <p className="text-gray-700 leading-relaxed">
                By automating repetitive tasks and optimizing workflows, generative AI can help businesses reduce operational costs. This increased efficiency not only saves time but also frees up valuable resources for more strategic endeavors.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Personalized Experiences</h3>
              <p className="text-gray-700 leading-relaxed">
                Generative AI can analyze vast amounts of customer data to create personalized content and recommendations. Whether it's customizing marketing materials or delivering tailored product suggestions, businesses can provide more targeted and meaningful interactions with customers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Advanced Problem-Solving</h3>
              <p className="text-gray-700 leading-relaxed">
                Generative AI's ability to simulate complex scenarios and predict outcomes opens new doors for problem-solving. It can assist in areas such as drug discovery, financial modeling, and logistics optimization, giving businesses access to powerful tools for making informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Shield className="mr-3 h-8 w-8 text-blue-600" />
            The Challenges of Generative AI
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Data Privacy and Security Concerns</h3>
              <p className="text-gray-700 leading-relaxed">
                Generative AI requires access to large datasets to function effectively. However, handling sensitive data responsibly and ensuring the privacy of customers is crucial. Businesses must implement robust security measures and adhere to data protection regulations to mitigate risks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Ethical Considerations</h3>
              <p className="text-gray-700 leading-relaxed">
                Generative AI raises ethical concerns, particularly around the creation of deepfakes, biased algorithms, and misinformation. It's essential for companies to adopt ethical AI practices, ensure transparency, and actively work to eliminate biases from AI models.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Integration and Adaptation</h3>
              <p className="text-gray-700 leading-relaxed">
                Incorporating generative AI into existing systems and workflows can be complex. Companies need to invest in training their teams, updating infrastructure, and ensuring seamless integration to avoid disruptions. This requires both time and resources but is essential for maximizing the potential of AI.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Talent Shortage and Skills Gap</h3>
              <p className="text-gray-700 leading-relaxed">
                The rapid pace of AI development has led to a shortage of skilled professionals. Businesses must invest in upskilling their workforce or collaborate with AI specialists to ensure they have the expertise required to implement and maintain these technologies effectively.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <ChartLine className="mr-3 h-8 w-8 text-blue-600" />
            Preparing Your Business for Generative AI
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Educate Your Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensuring your employees understand the capabilities and limitations of generative AI is critical. Provide training and resources to help them adapt to new tools and technologies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Invest in Data Infrastructure</h3>
              <p className="text-gray-700 leading-relaxed">
                Prepare your organization by investing in robust data management systems. High-quality data is essential for effective AI models, so ensure your company is gathering and analyzing data in a way that can support AI-driven innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Collaborate with AI Experts</h3>
              <p className="text-gray-700 leading-relaxed">
                Partner with AI specialists or consultants who can guide your company in navigating the complexities of generative AI. Their expertise can help you avoid common pitfalls and ensure that AI is integrated effectively within your business operations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Monitor and Adapt to Ethical Guidelines</h3>
              <p className="text-gray-700 leading-relaxed">
                As generative AI evolves, staying updated on ethical guidelines, legal requirements, and industry standards is crucial. Implement strong governance policies to address privacy, fairness, and transparency in AI usage.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GenerativeAI;
