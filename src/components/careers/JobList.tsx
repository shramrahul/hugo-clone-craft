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
    <div className="space-y-6">
      {jobs.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No jobs found matching your search criteria.
        </div>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white animate-fade-up"
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
              <Button variant="outline">Apply Now</Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};