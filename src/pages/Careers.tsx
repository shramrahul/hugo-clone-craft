import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobFilters } from "@/components/careers/JobFilters";
import { JobList } from "@/components/careers/JobList";
import { Testimonials } from "@/components/careers/Testimonials";
import { DUMMY_JOBS } from "@/data/jobsData";

// Constants moved to separate files to reduce file size
import {
  SALARY_RANGES,
  LOCATIONS,
  JOB_TYPES,
  EXPERTISE_AREAS,
  REMOTE_OPTIONS,
  INDUSTRIES,
  JOB_SKILLS,
  DATE_POSTED_OPTIONS,
} from "@/data/filterOptions";

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