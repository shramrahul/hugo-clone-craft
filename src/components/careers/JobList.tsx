import React from "react";
import { Briefcase, MapPin, Clock, DollarSign, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: number;
  expertise: string;
  remote: string;
  industry: string;
  skills: string[];
  datePosted: string;
  description: string;
}

interface JobListProps {
  jobs: Job[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      {jobs.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No jobs found matching your search criteria.
        </div>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow bg-white animate-fade-up"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-gray-600 mb-4 text-sm md:text-base">
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
                <p className="text-gray-600 mb-4 text-sm md:text-base">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs md:text-sm text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex md:flex-col items-center gap-4">
                <Briefcase className="w-6 h-6 text-gray-400 hidden md:block" />
                <Button variant="outline" className="w-full md:w-auto">Apply Now</Button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};