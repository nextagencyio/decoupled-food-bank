import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Distribution Locations
export const GET_LOCATIONS = gql`
  query GetLocations($first: Int = 20) {
    nodeLocations(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeLocation {
          body {
            processed
            summary
          }
          address
          phone
          hours {
            processed
          }
          locationType {
            ... on TermInterface {
              id
              name
            }
          }
          servesArea
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_LOCATION_BY_PATH = gql`
  query GetLocationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeLocation {
            id
            title
            path
            body {
              processed
            }
            address
            phone
            hours {
              processed
            }
            locationType {
              ... on TermInterface {
                id
                name
              }
            }
            servesArea
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Programs
export const GET_PROGRAMS = gql`
  query GetPrograms($first: Int = 20) {
    nodePrograms(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          body {
            processed
            summary
          }
          programType {
            ... on TermInterface {
              id
              name
            }
          }
          eligibility {
            processed
          }
          schedule
          contactPhone
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROGRAM_BY_PATH = gql`
  query GetProgramByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programType {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility {
              processed
            }
            schedule
            contactPhone
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          volunteersNeeded
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            volunteersNeeded
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Impact Stories
export const GET_IMPACT_STORIES = gql`
  query GetImpactStories($first: Int = 20) {
    nodeImpactStories(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeImpactStory {
          body {
            processed
            summary
          }
          storyCategory {
            ... on TermInterface {
              id
              name
            }
          }
          featured
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_IMPACT_STORY_BY_PATH = gql`
  query GetImpactStoryByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeImpactStory {
            id
            title
            path
            body {
              processed
            }
            storyCategory {
              ... on TermInterface {
                id
                name
              }
            }
            featured
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeLocation {
            id
            title
            path
            body {
              processed
            }
            address
            phone
            hours {
              processed
            }
            locationType {
              ... on TermInterface {
                id
                name
              }
            }
            servesArea
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeProgram {
            id
            title
            path
            body {
              processed
            }
            programType {
              ... on TermInterface {
                id
                name
              }
            }
            eligibility {
              processed
            }
            schedule
            contactPhone
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermInterface {
                id
                name
              }
            }
            volunteersNeeded
          }
          ... on NodeImpactStory {
            id
            title
            path
            body {
              processed
            }
            storyCategory {
              ... on TermInterface {
                id
                name
              }
            }
            featured
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured programs for homepage (limit to 3)
export const GET_FEATURED_PROGRAMS = gql`
  query GetFeaturedPrograms {
    nodePrograms(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeProgram {
          programType {
            ... on TermInterface {
              id
              name
            }
          }
          schedule
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured impact stories for homepage
export const GET_FEATURED_IMPACT_STORIES = gql`
  query GetFeaturedImpactStories {
    nodeImpactStories(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeImpactStory {
          body {
            summary
          }
          storyCategory {
            ... on TermInterface {
              id
              name
            }
          }
          featured
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermInterface {
              id
              name
            }
          }
          volunteersNeeded
        }
      }
    }
  }
`
