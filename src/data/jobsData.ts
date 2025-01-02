export interface Job {
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
  status: 'open' | 'closed';
}

export const DUMMY_JOBS: Job[] = [
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
    status: 'open'
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
    status: 'closed'
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
    status: 'open'
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
    status: 'open'
  }
];