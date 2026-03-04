'use client'

import Image from 'next/image'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'No one should go hungry'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="bg-white pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-950 leading-[0.9]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 mt-8 max-w-xl">{subtitle}</p>
        )}
        {description && !subtitle && (
          <div className="text-lg text-gray-400 mt-8 max-w-xl" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80&fit=crop"
            alt="Volunteers working together at a food bank"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  )
}
