import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface JobFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedExpertise: string;
  setSelectedExpertise: (value: string) => void;
  selectedRemote: string;
  setSelectedRemote: (value: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (value: string) => void;
  selectedSkills: string[];
  setSelectedSkills: (skills: string[]) => void;
  selectedDatePosted: string;
  setSelectedDatePosted: (value: string) => void;
  selectedSalaryRange: string;
  setSelectedSalaryRange: (value: string) => void;
  LOCATIONS: string[];
  JOB_TYPES: string[];
  EXPERTISE_AREAS: string[];
  REMOTE_OPTIONS: string[];
  INDUSTRIES: string[];
  JOB_SKILLS: string[];
  DATE_POSTED_OPTIONS: { label: string; value: string; }[];
  SALARY_RANGES: { label: string; value: string; min: number; max: number; }[];
}

export const JobFilters: React.FC<JobFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation,
  selectedType,
  setSelectedType,
  selectedExpertise,
  setSelectedExpertise,
  selectedRemote,
  setSelectedRemote,
  selectedIndustry,
  setSelectedIndustry,
  selectedSkills,
  setSelectedSkills,
  selectedDatePosted,
  setSelectedDatePosted,
  selectedSalaryRange,
  setSelectedSalaryRange,
  LOCATIONS,
  JOB_TYPES,
  EXPERTISE_AREAS,
  REMOTE_OPTIONS,
  INDUSTRIES,
  JOB_SKILLS,
  DATE_POSTED_OPTIONS,
  SALARY_RANGES,
}) => {
  return (
    <div className="space-y-6 mb-8 bg-white p-6 rounded-lg shadow-sm border animate-fade-up">
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
                setSelectedSkills(
                  pressed ? [...selectedSkills, skill] : selectedSkills.filter((s) => s !== skill)
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
          <div key={range.value} className="flex items-center space-x-2">
            <RadioGroupItem value={range.value} id={range.value} />
            <label htmlFor={range.value} className="text-sm">
              {range.label}
            </label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};