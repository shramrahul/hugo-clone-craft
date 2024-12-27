import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const insights = [
  {
    title: "Preparing your organization for generative AI",
    description: "Interest in AI is at an all-time high, but there is more to mastering this technology than simply deploying the latest tools.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link: "/generative-ai"
  },
  {
    title: "Avega survey: Quality and security dominate data and analytics concerns",
    description: "Collecting meaningful data and data security are the biggest challenges when it comes to data analytics, according to a recent survey on Avega.com.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    link: "/data-survey"
  },
  {
    title: "Labor and Industry Trends Report November 2024",
    description: "The labor markets remain very much intact, as demonstrated by a still historically low unemployment rate.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "/labor-trends"
  }
];

export const Insights = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
    if (!link.startsWith('#')) {
      window.scrollTo(0, 0);
      navigate(link);
    }
  };

  return (
    <section id="insights" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 min-h-[4rem]">{insight.title}</h3>
                <p className="text-base text-gray-600 mb-4 flex-grow">{insight.description}</p>
                {insight.link.startsWith('#') ? (
                  <a
                    href={insight.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-base font-medium mt-auto"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavigation(insight.link)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-base font-medium mt-auto"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};