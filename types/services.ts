export interface Feature {
  title: string;
  description: string;
  videoUrl: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number | string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  projects: Project[];
  features: Feature[];
  pricingPlans: PricingPlan[];
  domainNote: string;
}

export interface ServicesData {
  services: Service[];
} 