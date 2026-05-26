'use client'

import Link from 'next/link'
import { categories } from '@/lib/mock-data'

const categoryColors = [
  'from-blue-900 to-blue-700 border-blue-600',
  'from-purple-900 to-purple-700 border-purple-600',
  'from-teal-900 to-teal-700 border-teal-600',
  'from-yellow-900 to-yellow-700 border-yellow-600',
  'from-green-900 to-green-700 border-green-600',
  'from-rose-900 to-rose-700 border-rose-600',
]

export function CategoryChips() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 lg:mx-0 lg:px-0">
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className={`flex flex-col items-center justify-center gap-3 px-4 py-4 rounded-lg bg-gradient-to-br ${categoryColors[index % categoryColors.length]} border border-opacity-50 hover:shadow-lg transition-all duration-300 flex-shrink-0 w-60 h-30 group`}
        >
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
          <span className="text-xs font-semibold text-white text-center line-clamp-2">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}
