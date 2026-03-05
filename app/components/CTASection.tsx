'use client'

import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Help Us End Hunger'
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Donate Today'

  return (
    <section className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4">Make a Difference</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Every dollar you give helps us put nutritious food on the tables of families, children, and seniors in our community.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary-600 text-white font-semibold px-10 py-4 rounded hover:bg-primary-700 transition-colors duration-200 text-base"
        >
          {primaryLabel}
        </a>
      </div>
    </section>
  )
}
