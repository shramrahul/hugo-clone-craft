import { DUMMY_JOBS, SALARY_RANGES } from "@/data/jobsData";

interface FilterParams {
  searchQuery: string;
  selectedLocation: string;
  selectedType: string;
  selectedExpertise: string;
  selectedRemote: string;
  selectedIndustry: string;
  selectedSkills: string[];
  selectedDatePosted: string;
  selectedSalaryRange: string;
}

export const useFilteredJobs = ({
  searchQuery,
  selectedLocation,
  selectedType,
  selectedExpertise,
  selectedRemote,
  selectedIndustry,
  selectedSkills,
  selectedDatePosted,
  selectedSalaryRange
}: FilterParams) => {
  return DUMMY_JOBS.filter((job) => {
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
};