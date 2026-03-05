'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="bg-primary-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-1">
                {stat.value || stat.statValue}
              </div>
              <div className="text-sm text-primary-200 font-medium uppercase tracking-wide">
                {stat.label || stat.statLabel || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
