export type Tier = "Essential" | "Standard" | "Premium";

export interface MachineCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

export interface SupportContract {
  id: string;
  slug: string;
  name: string;
  tier: Tier;
  categorySlug: string;
  price: number;
  billingPeriod: "year";
  tagline: string;
  description: string;
  features: string[];
  responseTime: string;
  calibrationVisits: number;
  compatibleMachines: string[];
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
