export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  benefits: string[];
  disclaimer: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  name: string;
  legalName: string;
  slogan: string;
  description: string;
  area: string;
  city: string;
  state: string;
  country: string;
  whatsapp: string;
  whatsappDisplay: string;
  siteUrl: string;
  services: Service[];
  faqs: FaqItem[];
};

export type DelayCalculation = {
  monthlyRent: number;
  monthlyCondo: number;
  annualIptu: number;
  annualTlrs: number;
  days: number;
  dailyCost: number;
  rentCost: number;
  condoCost: number;
  iptuCost: number;
  tlrsCost: number;
  estimatedCost: number;
};

export type SearchCostCalculation = {
  hourlyCost: number;
  hours: number;
  visits: number;
  transportPerVisit: number;
  laborCost: number;
  transportCost: number;
  estimatedCost: number;
};
