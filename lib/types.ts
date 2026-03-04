// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Distribution Location
export interface DrupalLocation extends DrupalNode {
  address?: string
  phone?: string
  hours?: {
    processed: string
  }
  locationType?: DrupalTerm[]
  servesArea?: string
}

export interface LocationsData {
  nodeLocations: {
    nodes: DrupalLocation[]
  }
}

// Program
export interface DrupalProgram extends DrupalNode {
  programType?: DrupalTerm[]
  eligibility?: {
    processed: string
  }
  schedule?: string
  contactPhone?: string
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventType?: DrupalTerm[]
  volunteersNeeded?: number
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Impact Story
export interface DrupalImpactStory extends DrupalNode {
  storyCategory?: DrupalTerm[]
  featured?: boolean
}

export interface ImpactStoriesData {
  nodeImpactStories: {
    nodes: DrupalImpactStory[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
