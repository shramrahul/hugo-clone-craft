import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { JobFilters } from "@/components/careers/JobFilters";
import { JobList } from "@/components/careers/JobList";
import { Testimonials } from "@/components/careers/Testimonials";
import { EVerifyBadge } from "@/components/careers/EVerifyBadge";
import { useJobFilters } from "@/hooks/useJobFilters";
import { useFilteredJobs } from "@/hooks/useFilteredJobs";
import {
  LOCATIONS,
  JOB_TYPES,
  EXPERTISE_AREAS,
  REMOTE_OPTIONS,
  INDUSTRIES,
  JOB_SKILLS,
  DATE_POSTED_OPTIONS,
  SALARY_RANGES
} from "@/data/jobsData";

const Careers = () => {
  console.log("Rendering Careers page");
  const {
    searchQuery,
    selectedLocation,
    selectedType,
    selectedExpertise,
    selectedRemote,
    selectedIndustry,
    selectedSkills,
    selectedDatePosted,
    selectedSalaryRange,
    setSearchQuery,
    setSelectedLocation,
    setSelectedType,
    setSelectedExpertise,
    setSelectedRemote,
    setSelectedIndustry,
    setSelectedSkills,
    setSelectedDatePosted,
    setSelectedSalaryRange
  } = useJobFilters();

  const filteredJobs = useFilteredJobs({
    searchQuery,
    selectedLocation,
    selectedType,
    selectedExpertise,
    selectedRemote,
    selectedIndustry,
    selectedSkills,
    selectedDatePosted,
    selectedSalaryRange
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <CareersHero />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <EVerifyBadge />
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