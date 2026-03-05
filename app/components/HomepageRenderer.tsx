'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Truck, Package, MapPin, Hand } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const programs = [
  { title: 'Mobile Food Pantry', description: 'Bringing fresh food to underserved neighborhoods', href: '/programs' },
  { title: 'Senior Meal Program', description: 'Weekly meals for homebound seniors', href: '/programs' },
  { title: 'Kids Backpack Program', description: 'Weekend food for school-age children', href: '/programs' },
  { title: 'Community Kitchen', description: 'Hot meals served daily', href: '/programs' },
]

const howWeHelp = [
  { icon: Heart, title: 'With Love', description: 'Every meal is prepared and delivered with care and dignity.' },
  { icon: Users, title: 'Community', description: 'Powered by over 500 dedicated volunteers across the region.' },
  { icon: Truck, title: 'Delivery', description: 'Mobile pantries bring fresh food directly to neighborhoods in need.' },
  { icon: Package, title: 'Fresh Food', description: 'Nutritious produce, proteins, and staples sourced from local farms.' },
  { icon: Hand, title: 'Volunteer', description: 'Join our team and make a real difference in your community.' },
  { icon: MapPin, title: 'Local', description: '12 distribution sites across the county for easy access.' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&fit=crop', alt: 'Volunteers sorting food donations' },
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&fit=crop', alt: 'Food bank distribution event' },
  { src: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?w=800&q=80&fit=crop', alt: 'Community meal service' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80&fit=crop', alt: 'Donation drive event' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Programs - List View */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-8">Our Programs</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            {programs.map((program, i) => (
              <Link
                key={i}
                href={program.href}
                className="group flex items-center justify-between px-6 py-6 border-b border-gray-100 last:border-b-0 transition-all duration-200 hover:bg-gray-50"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {program.title}
                  </h3>
                  <span className="text-sm text-gray-500 hidden sm:inline">{program.description}</span>
                </div>
                <span className="text-sm text-gray-400 group-hover:text-primary-600 shrink-0 ml-4 transition-colors duration-200">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-primary-50 py-20 border-y border-primary-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-4 text-center">How We Help</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">From farm-fresh food to community kitchens, we serve our neighbors with compassion.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {howWeHelp.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <item.icon className="w-8 h-8 text-primary-600 mb-4" strokeWidth={1.8} />
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-2">In Action</h2>
          <p className="text-gray-600 mb-8">See our volunteers and programs making a difference every day.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950 text-white border-t border-primary-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-300">
              &copy; {new Date().getFullYear()} Community Harvest Food Bank
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/programs" className="text-sm text-primary-300 hover:text-white transition-colors">Programs</Link>
              <Link href="/locations" className="text-sm text-primary-300 hover:text-white transition-colors">Locations</Link>
              <Link href="/contact" className="text-sm text-primary-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
