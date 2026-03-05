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

const icons = [
  { icon: Heart, label: 'With Love' },
  { icon: Users, label: 'Community' },
  { icon: Truck, label: 'Delivery' },
  { icon: Package, label: 'Fresh Food' },
  { icon: Hand, label: 'Volunteer' },
  { icon: MapPin, label: 'Local' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80&fit=crop', alt: 'Volunteers sorting food donations' },
  { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&fit=crop', alt: 'Food bank distribution event' },
  { src: 'https://images.unsplash.com/photo-1541802645635-11f2286a7482?w=800&q=80&fit=crop', alt: 'Community meal service' },
  { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80&fit=crop', alt: 'Donation drive event' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Programs - List View */}
      <section className="bg-[#fffdf8] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-8">Our Programs</h2>
          <div className="border-t border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
            {programs.map((program, i) => (
              <Link
                key={i}
                href={program.href}
                className="group flex items-center justify-between py-6 border-b border-gray-200 transition-all duration-200 hover:pl-1"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {program.title}
                  </h3>
                  <span className="text-sm text-gray-400 hidden sm:inline">{program.description}</span>
                </div>
                <span className="text-sm text-gray-400 shrink-0 ml-4">View</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="bg-primary-50 py-16 border-y border-primary-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-12 text-center">How We Help</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {icons.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <item.icon className="w-6 h-6 text-primary-700 mb-3" strokeWidth={1.8} />
                <span className="text-xs text-gray-500 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#fff8ef] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-8">In Action</h2>
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
