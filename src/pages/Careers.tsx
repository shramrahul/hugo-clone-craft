import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DUMMY_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for a Senior Software Engineer to join our growing team...",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    description: "Join us as a Product Manager to help shape the future of our products...",
  },
  {
    id: 3,
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    description: "We're seeking a talented UX Designer to create beautiful and intuitive interfaces...",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    description: "Looking for a DevOps Engineer to help us scale our infrastructure...",
  },
];

const Careers = () => {
  console.log("Rendering Careers page");
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
          <p className="text-gray-600 mb-12">
            We're always looking for talented individuals to join our team. Check out our current openings below.
          </p>
          
          <div className="space-y-6">
            {DUMMY_JOBS.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <Briefcase className="w-6 h-6 text-gray-400" />
                </div>
                <div className="mt-4">
                  <Button variant="outline">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;