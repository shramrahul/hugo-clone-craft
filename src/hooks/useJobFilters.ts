import { useState } from "react";

export const useJobFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedExpertise, setSelectedExpertise] = useState("All Areas");
  const [selectedRemote, setSelectedRemote] = useState("All Options");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState("all");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all");

  return {
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
  };
};