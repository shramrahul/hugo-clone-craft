import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, Search, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DUMMY_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: 150000,
    description: "We're looking for a Senior Software Engineer to join our growing team...",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    salary: 130000,
    description: "Join us as a Product Manager to help shape the future of our products...",
  },
  {
    id: 3,
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    salary: 110000,
    description: "We're seeking a talented UX Designer to create beautiful and intuitive interfaces...",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: 140000,
    description: "Looking for a DevOps Engineer to help us scale our infrastructure...",
  },
];

const LOCATIONS = ["All Locations", "San Francisco, CA", "New York, NY", "Austin, TX", "Remote"];
const JOB_TYPES = ["All Types", "Full-time", "Part-time", "Contract"];
const SALARY_RANGES = [
  { label: "All Salaries", value: "all" },
  { label: "$80k - $100k", min: 80000, max: 100000 },
  { label: "$100k - $130k", min: 100000, max: 130000 },
  { label: "$130k - $160k", min: 130000, max: 160000 },
  { label: "$160k+", min: 160000, max: Infinity },
];

const Careers = () => {
  console.log("Rendering Careers page");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all");
  
  const filteredJobs = DUMMY_JOBS.filter((job) => {
    const searchTerm = searchQuery.toLowerCase();
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm);

    const matchesLocation = 
      selectedLocation === "All Locations" || job.location === selectedLocation;

    const matchesType = 
      selectedType === "All Types" || job.type === selectedType;

    const matchesSalary = () => {
      if (selectedSalaryRange === "all") return true;
      const range = SALARY_RANGES.find(range => range.value === selectedSalaryRange);
      if (!range) return true;
      return job.salary >= range.min && job.salary <= range.max;
    };

    return matchesSearch && matchesLocation && matchesType && matchesSalary();
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
          <p className="text-gray-600 mb-12">
            We're always looking for talented individuals to join our team. Check out our current openings below.
          </p>

          <div className="space-y-6 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {JOB_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <RadioGroup
                value={selectedSalaryRange}
                onValueChange={setSelectedSalaryRange}
                className="space-y-2 p-2 border rounded-md"
              >
                {SALARY_RANGES.map((range) => (
                  <div key={range.value || range.label} className="flex items-center space-x-2">
                    <RadioGroupItem value={range.value || range.label} id={range.value || range.label} />
                    <label htmlFor={range.value || range.label} className="text-sm">
                      {range.label}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No jobs found matching your search criteria.
              </div>
            ) : (
              filteredJobs.map((job) => (
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
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {`${(job.salary / 1000).toFixed(0)}k`}
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
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;