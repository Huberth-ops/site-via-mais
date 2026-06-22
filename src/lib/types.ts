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
  days: number;
  dailyCost: number;
  estimatedCost: number;
};
