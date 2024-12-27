import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataSurvey = () => {
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Avega Survey: Quality and Security Dominate Data and Analytics Concerns</h1>
          <p className="text-gray-600 mb-12">NOVEMBER 2024</p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            In an era where data is the new oil, organizations worldwide are grappling with the challenges of harnessing its full potential. Avega, a leading IT consulting company in the United States, recently conducted an insightful survey on its platform, Avega.com, to uncover the primary concerns faced by businesses in the realm of data and analytics. The results reveal that data quality and security are at the forefront of these challenges, highlighting the evolving priorities in the digital landscape.
          </p>

          <h2 className="text-3xl font-bold mb-6">Data Quality: The Foundation of Effective Analytics</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The survey underscores that collecting meaningful and accurate data is one of the most significant hurdles for organizations. With an overwhelming amount of data being generated daily, businesses often struggle to sift through noise to extract actionable insights. Respondents emphasized issues such as:
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li><span className="font-semibold">Data Silos:</span> Fragmented data stored across multiple platforms and departments often leads to inconsistencies.</li>
              <li><span className="font-semibold">Data Accuracy:</span> Ensuring the correctness of data is critical for informed decision-making, yet many organizations face challenges due to incomplete or outdated information.</li>
              <li><span className="font-semibold">Integration Complexities:</span> Combining data from various sources into a unified system remains a technical challenge, hampering seamless analytics.</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Addressing these challenges requires robust data governance frameworks, investment in modern data integration tools, and fostering a culture of data literacy within organizations. Avega's expertise in IT consulting enables businesses to design and implement these solutions effectively.
          </p>

          <h2 className="text-3xl font-bold mb-6">Data Security: Protecting the Crown Jewels</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            As data breaches and cyber threats grow in sophistication and frequency, ensuring data security has become a non-negotiable priority for organizations. The survey revealed that over 70% of respondents ranked data security as their top concern in analytics initiatives. Key challenges include:
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li><span className="font-semibold">Cyber Threats:</span> Organizations face constant risks from malicious actors aiming to exploit vulnerabilities in their systems.</li>
              <li><span className="font-semibold">Compliance Requirements:</span> Meeting regulatory standards such as GDPR, CCPA, and HIPAA demands rigorous security protocols.</li>
              <li><span className="font-semibold">Insider Threats:</span> Even trusted employees can inadvertently or intentionally compromise data security, highlighting the need for internal controls.</li>
            </ul>
          </div>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Avega's data security solutions help businesses mitigate these risks by implementing cutting-edge technologies, such as encryption, zero-trust architecture, and advanced threat detection systems. Moreover, Avega provides consulting on compliance to ensure organizations remain ahead of regulatory demands.
          </p>

          <h2 className="text-3xl font-bold mb-6">Bridging the Gap Between Quality and Security</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            While data quality and security are often treated as separate priorities, the survey highlights the importance of integrating both into a cohesive strategy. Poor data quality can compromise security measures, while inadequate security can jeopardize the integrity of high-quality data. Businesses must strike a balance to unlock the full potential of their data analytics initiatives.
          </p>

          <div className="bg-gray-100 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Avega's holistic approach to IT consulting addresses these dual priorities by:</h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Developing comprehensive data management strategies that prioritize both quality and security.</li>
              <li>Leveraging AI-driven tools to automate data cleaning and anomaly detection.</li>
              <li>Training teams to recognize and address data vulnerabilities proactively.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The findings from Avega's survey serve as a wake-up call for organizations to reevaluate their data and analytics strategies. As businesses increasingly rely on data-driven decision-making, ensuring data quality and security is not just a technical necessity but a strategic imperative. Avega's leadership in IT consulting positions it as a trusted partner for organizations aiming to overcome these challenges and thrive in the data-driven age.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed italic">
            Visit Avega.com to learn more about how we can empower your business with innovative data and security solutions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataSurvey;