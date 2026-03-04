import Link from 'next/link'
import { DrupalProgram } from '@/lib/types'

interface ProgramCardProps {
  item: DrupalProgram
}

export default function ProgramCard({ item }: ProgramCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group flex items-center justify-between py-6 border-b border-gray-200 transition-all duration-200 hover:pl-1"
    >
      <div className="flex items-baseline gap-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
          {item.title}
        </h3>
        {(item as any).schedule && (
          <span className="text-sm text-gray-400">{(item as any).schedule}</span>
        )}
      </div>
      <span className="text-sm text-gray-400 shrink-0 ml-4">View</span>
    </Link>
  )
}
