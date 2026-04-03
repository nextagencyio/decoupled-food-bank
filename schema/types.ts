// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  endDate: { time: string };
  eventDate: { time: string };
  eventType: any[];
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  title: string;
  volunteersNeeded: number;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeImpactStory {
  id: string;
  body: { value: string; summary?: string };
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  storyCategory: any[];
  title: string;
}

export interface NodeLocation {
  id: string;
  address: string;
  body: { value: string; summary?: string };
  hours: { value: string };
  image: { url: string; alt: string; width: number; height: number };
  locationType: any[];
  path: string;
  phone: string;
  servesArea: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  body: { value: string; summary?: string };
  contactPhone: string;
  eligibility: { value: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  programType: any[];
  schedule: string;
  title: string;
}
