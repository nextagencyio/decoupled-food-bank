import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_IMPACT_STORIES } from '@/lib/queries'
import { ImpactStoriesData } from '@/lib/types'
import Header from '../components/Header'
import ImpactStoryCard from '../components/ImpactStoryCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Impact Stories | Community Harvest Food Bank',
  description: 'Stories of community impact and lives changed through our programs.',
}

async function getImpactStories() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<ImpactStoriesData>({
      query: GET_IMPACT_STORIES,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeImpactStories?.nodes || []
  } catch (error) {
    console.error('Error fetching impact stories:', error)
    return []
  }
}

export default async function ImpactStoriesPage() {
  const items = await getImpactStories()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-gray-950 leading-[0.9]">
            Impact Stories
          </h1>
          <p className="text-lg text-gray-400 mt-6 max-w-xl">
            Stories of community impact and lives changed.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Impact stories will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="border-t border-gray-200">
              {items.map((item) => (
                <ImpactStoryCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
