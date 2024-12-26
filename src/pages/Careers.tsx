import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, Search, DollarSign, Building, Code, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";

const SALARY_RANGES = [
  { label: "All Salaries", value: "all", min: 0, max: Infinity },
  { label: "$0 - $50,000", value: "0-50", min: 0, max: 50000 },
  { label: "$50,000 - $100,000", value: "50-100", min: 50000, max: 100000 },
  { label: "$100,000 - $150,000", value: "100-150", min: 100000, max: 150000 },
  { label: "$150,000+", value: "150+", min: 150000, max: Infinity },
];

const DUMMY_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: 150000,
    expertise: "Technology",
    remote: "Full",
    industry: "Financial Services",
    skills: ["cloud", "agile", "testing"],
    datePosted: "2024-02-20",
    description: "We're looking for a Senior Software Engineer to join our growing team...",
  },
  {
    id: 2,
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    salary: 130000,
    expertise: "Business Services - Other",
    remote: "Partial",
    industry: "Business Services - Other",
    skills: ["agile", "cpa"],
    datePosted: "2024-02-18",
    description: "Join us as a Product Manager to help shape the future of our products...",
  },
  {
    id: 3,
    title: "UX Designer",
    location: "Remote",
    type: "Full-time",
    salary: 110000,
    expertise: "Technology",
    remote: "Full",
    industry: "Healthcare Services",
    skills: ["testing", "training"],
    datePosted: "2024-02-15",
    description: "We're seeking a talented UX Designer to create beautiful and intuitive interfaces...",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: 140000,
    expertise: "Technology",
    remote: "Partial",
    industry: "Energy and Utilities",
    skills: ["cloud", "network"],
    datePosted: "2024-02-10",
    description: "Looking for a DevOps Engineer to help us scale our infrastructure...",
  },
];

const LOCATIONS = ["All Locations", "San Francisco, CA", "New York, NY", "Austin, TX", "Remote"];
const JOB_TYPES = ["All Types", "Full-time", "Part-time", "Contract", "Permanent"];
const EXPERTISE_AREAS = [
  "All Areas",
  "Finance and Accounting",
  "Technology",
];
const REMOTE_OPTIONS = ["All Options", "Full", "Partial", "No Remote"];
const INDUSTRIES = [
  "All Industries",
  "Accounting and Auditing Services",
  "Banking and Consumer Lending",
  "Business Services - Other",
  "Energy and Utilities",
  "Financial Services",
  "Healthcare Services",
  "Real Estate and Property Management",
  "Retail",
  "Staffing/Employment Agencies",
  "Other/Not Classified",
];
const JOB_SKILLS = [
  "able",
  "agile",
  "cloud",
  "cpa",
  "network",
  "networking",
  "office",
  "testing",
  "training",
  "virtual",
];
const DATE_POSTED_OPTIONS = [
  { label: "All Time", value: "all" },
  { label: "Last 24 Hours", value: "24h" },
  { label: "Last 3 Days", value: "3d" },
];

const Careers = () => {
  console.log("Rendering Careers page");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedExpertise, setSelectedExpertise] = useState("All Areas");
  const [selectedRemote, setSelectedRemote] = useState("All Options");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState("all");
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

    const matchesExpertise =
      selectedExpertise === "All Areas" || job.expertise === selectedExpertise;

    const matchesRemote =
      selectedRemote === "All Options" || job.remote === selectedRemote;

    const matchesIndustry =
      selectedIndustry === "All Industries" || job.industry === selectedIndustry;

    const matchesSkills =
      selectedSkills.length === 0 || 
      selectedSkills.every(skill => job.skills.includes(skill));

    const matchesDatePosted = () => {
      if (selectedDatePosted === "all") return true;
      const postedDate = new Date(job.datePosted);
      const now = new Date();
      const hoursDiff = (now.getTime() - postedDate.getTime()) / (1000 * 60 * 60);
      if (selectedDatePosted === "24h") return hoursDiff <= 24;
      if (selectedDatePosted === "3d") return hoursDiff <= 72;
      return true;
    };

    const matchesSalary = () => {
      if (selectedSalaryRange === "all") return true;
      const range = SALARY_RANGES.find(range => range.value === selectedSalaryRange);
      if (!range) return true;
      return job.salary >= range.min && job.salary <= range.max;
    };

    return (
      matchesSearch && 
      matchesLocation && 
      matchesType && 
      matchesExpertise && 
      matchesRemote && 
      matchesIndustry && 
      matchesSkills && 
      matchesDatePosted() && 
      matchesSalary()
    );
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

              <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                <SelectTrigger>
                  <SelectValue placeholder="Area of Expertise" />
                </SelectTrigger>
                <SelectContent>
                  {EXPERTISE_AREAS.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRemote} onValueChange={setSelectedRemote}>
                <SelectTrigger>
                  <SelectValue placeholder="Remote Options" />
                </SelectTrigger>
                <SelectContent>
                  {REMOTE_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDatePosted} onValueChange={setSelectedDatePosted}>
                <SelectTrigger>
                  <SelectValue placeholder="Date Posted" />
                </SelectTrigger>
                <SelectContent>
                  {DATE_POSTED_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Job Skills</h3>
              <div className="flex flex-wrap gap-2">
                {JOB_SKILLS.map((skill) => (
                  <Toggle
                    key={skill}
                    pressed={selectedSkills.includes(skill)}
                    onPressedChange={(pressed) => {
                      setSelectedSkills(prev =>
                        pressed
                          ? [...prev, skill]
                          : prev.filter(s => s !== skill)
                      );
                    }}
                    className="capitalize"
                  >
                    {skill}
                  </Toggle>
                ))}
              </div>
            </div>

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
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
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
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {job.industry}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
