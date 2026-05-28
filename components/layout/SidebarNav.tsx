'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { categories } from '@/lib/mock-data'
import { Gamepad2, Flame, Star, Zap, TrendingUp } from 'lucide-react'

const mainNavItems = [
  {
    icon: Gamepad2,
    label: 'All Games',
    href: '/',
    id: 'all',
    filter: undefined,
  },
  {
    icon: Flame,
    label: 'Hot',
    href: '/?filter=hot',
    id: 'hot',
    filter: 'hot',
  },
  {
    icon: Star,
    label: 'Top Picks',
    href: '/?filter=top',
    id: 'top',
    filter: 'top',
  },
  {
    icon: TrendingUp,
    label: 'New Games',
    href: '/?filter=new',
    id: 'new',
    filter: 'new',
  },
]

export function SidebarNav() {
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const filter = searchParams?.get('filter') || ''

  const isActive = (href: string, itemFilter?: string) => {
    if (href === '/') {
      return pathname === '/' && !filter
    }

    if (itemFilter) {
      return pathname === '/' && filter === itemFilter
    }

    return pathname === href
  }

  return (
    <aside
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`hidden lg:flex flex-col bg-card border-r border-border min-h-screen sticky top-0 transition-all duration-300 ${isHovered ? 'w-64' : 'w-20'
        }`}
    >
      {/* Main Navigation */}
      <div className="p-4 border-b border-border">
        {isHovered && <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">Menu</h2>}
        <nav className="space-y-2">
          {mainNavItems.map(item => {
            const Icon = item.icon
            const active = isActive(item.href, item.filter)
            return (
              <Link
                key={item.id}
                href={item.href}
                title={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active
                  ? 'bg-primary/10 text-primary border-l-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {isHovered && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Categories */}
      <div className="p-4 flex-1">
        {isHovered && <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">Categories</h2>}
        <nav className="space-y-2">
          {categories.map(category => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              title={category.name}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary group`}
            >
              <span className="text-lg flex-shrink-0">{category.icon}</span>
              {isHovered && <span className="text-sm font-medium line-clamp-1">{category.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-2">
        <Link
          href="/wishlist"
          title="My Wishlist"
          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
        >
          💝 {isHovered && <span>My Wishlist</span>}
        </Link>
        <Link
          href="/profile"
          title="My Profile"
          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
        >
          👤 {isHovered && <span>My Profile</span>}
        </Link>
      </div>
    </aside>
  )
}
