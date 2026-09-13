export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  inrPrice: string;
  usdPrice: string;
  period: string;
  description: string;
  turnaround: string;
  idealFor: string;
  features: string[];
  highlight?: string;
}

export interface SiteTemplate {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  category: string;
  pages: number;
  accentColor: string;
  features: string[];
  mockupBg: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  stat: string;
}

export interface ServicePillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface ComparisonPoint {
  category: string;
  generic: string;
  kritsite: string;
}

export interface DesignPrinciple {
  number: string;
  title: string;
  description: string;
  tags: string[];
}
