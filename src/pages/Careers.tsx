import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobFilters } from "@/components/careers/JobFilters";
import { JobList } from "@/components/careers/JobList";
import { Testimonials } from "@/components/careers/Testimonials";

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <CareersHero />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <JobFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedExpertise={selectedExpertise}
            setSelectedExpertise={setSelectedExpertise}
            selectedRemote={selectedRemote}
            setSelectedRemote={setSelectedRemote}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            selectedDatePosted={selectedDatePosted}
            setSelectedDatePosted={setSelectedDatePosted}
            selectedSalaryRange={selectedSalaryRange}
            setSelectedSalaryRange={setSelectedSalaryRange}
            LOCATIONS={LOCATIONS}
            JOB_TYPES={JOB_TYPES}
            EXPERTISE_AREAS={EXPERTISE_AREAS}
            REMOTE_OPTIONS={REMOTE_OPTIONS}
            INDUSTRIES={INDUSTRIES}
            JOB_SKILLS={JOB_SKILLS}
            DATE_POSTED_OPTIONS={DATE_POSTED_OPTIONS}
            SALARY_RANGES={SALARY_RANGES}
          />
          <JobList jobs={filteredJobs} />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Careers;
