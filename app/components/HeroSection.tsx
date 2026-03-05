'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Fighting Hunger, Feeding Hope'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Nourishing Our Community, One Meal at a Time'

  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80&fit=crop"
          alt="Volunteers working together at a food bank"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark gradient overlay — stronger at bottom where text sits */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-primary-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-6">
            Community Food Bank
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg">{subtitle}</p>
          )}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block bg-primary-600 text-white font-semibold px-7 py-3 rounded hover:bg-primary-700 transition-colors duration-200"
            >
              Donate Today
            </Link>
            <Link
              href="/programs"
              className="inline-block border-2 border-white text-white font-semibold px-7 py-3 rounded hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
