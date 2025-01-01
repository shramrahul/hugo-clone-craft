export const SALARY_RANGES = [
  { label: "All Salaries", value: "all", min: 0, max: Infinity },
  { label: "$0 - $50,000", value: "0-50", min: 0, max: 50000 },
  { label: "$50,000 - $100,000", value: "50-100", min: 50000, max: 100000 },
  { label: "$100,000 - $150,000", value: "100-150", min: 100000, max: 150000 },
  { label: "$150,000+", value: "150+", min: 150000, max: Infinity },
];

export const LOCATIONS = ["All Locations", "San Francisco, CA", "New York, NY", "Austin, TX", "Remote"];
export const JOB_TYPES = ["All Types", "Full-time", "Part-time", "Contract", "Permanent"];
export const EXPERTISE_AREAS = ["All Areas", "Finance and Accounting", "Technology"];
export const REMOTE_OPTIONS = ["All Options", "Full", "Partial", "No Remote"];
export const INDUSTRIES = [
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
export const JOB_SKILLS = [
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
export const DATE_POSTED_OPTIONS = [
  { label: "All Time", value: "all" },
  { label: "Last 24 Hours", value: "24h" },
  { label: "Last 3 Days", value: "3d" },
];

export const DUMMY_JOBS = [
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