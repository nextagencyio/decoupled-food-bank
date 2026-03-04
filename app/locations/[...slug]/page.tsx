import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_LOCATION_BY_PATH } from '@/lib/queries'
import { DrupalLocation } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface LocationByPathData {
  route: {
    entity: DrupalLocation
  } | null
}

async function getLocation(path: string): Promise<DrupalLocation | null> {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<LocationByPathData>({
      query: GET_LOCATION_BY_PATH,
      variables: { path },
      fetchPolicy: 'cache-first',
    })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching location:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/locations/${slug.join('/')}`
  const item = await getLocation(path)

  if (!item) {
    return { title: 'Location Not Found | Community Harvest Food Bank' }
  }

  return {
    title: `${item.title} | Community Harvest Food Bank`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/locations/${slug.join('/')}`
  const item = await getLocation(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-48 md:pb-24">
        <Link
          href="/locations"
          className="inline-flex items-center text-sm text-gray-400 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Locations
        </Link>

        <article>
          {(item as any).image?.url && (
            <div className="mb-8 rounded-sm overflow-hidden">
              <ResponsiveImage
                src={(item as any).image.url}
                alt={(item as any).image.alt || item.title}
                fill
                className="object-cover"
                variations={(item as any).image.variations}
                targetWidth={800}
              />
            </div>
          )}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 leading-[0.95] mb-8">
            {item.title}
          </h1>

          {(item as any).address && (
            <p className="text-sm text-gray-400 mb-8">{(item as any).address}</p>
          )}

          {(item as any).body?.processed && (
            <div
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary-600"
              dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
            />
          )}
        </article>
      </main>
    </div>
  )
}
