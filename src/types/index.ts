export interface ImageSlotConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: { x: number; y: number };
}

export interface ServiceSubTopic {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceConfig {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  cardImage: string;
  heroImage: string;
  description: string[];
  benefits: BenefitItem[];
  features: string[];
  detailImages: string[];
  faqKeys: string[];
  ctaHeading: string;
  ctaText: string;
  h1Override?: string;
  // Per-service section heading overrides — makes every service page feel bespoke
  overviewEyebrow?: string;
  overviewHeading?: string;
  benefitsEyebrow?: string;
  benefitsHeading?: string;
  benefitsSubtitle?: string;
  faqEyebrow?: string;
  faqHeading?: string;
  featureListItems?: Array<{ title: string; description: string }>;
  // SEO-focused sub-topic sections for service pages
  // These provide keyword-rich content with icon cards
  topicSectionA: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
  topicSectionB: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: ServiceSubTopic[];
  };
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}
