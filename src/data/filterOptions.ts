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