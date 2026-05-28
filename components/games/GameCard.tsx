'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Game, BadgeType } from '@/lib/types'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface GameCardProps {
  game: Game
}

const badgeConfig: Record<BadgeType, { bg: string; text: string; label: string }> = {
  top: { bg: 'bg-yellow-500', text: 'text-white', label: 'Top' },
  hot: { bg: 'bg-orange-500', text: 'text-white', label: 'Hot' },
  updated: { bg: 'bg-blue-500', text: 'text-white', label: 'Updated' },
  originals: { bg: 'bg-purple-500', text: 'text-white', label: 'Originals' },
}

export function GameCard({ game }: GameCardProps) {
  const badge = game.badge ? badgeConfig[game.badge] : null

  return (
    <Link href={`/game/${game.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
        <AspectRatio ratio={4 / 3} className="relative overflow-hidden bg-muted">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent p-3">
            <h3 className="line-clamp-1 text-sm font-semibold text-white">
              {game.title}
            </h3>
          </div>

          {badge && (
            <div className={`absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-bold shadow-md ${badge.bg} ${badge.text}`}>
              {badge.label}
            </div>
          )}

        </AspectRatio>
      </div>
    </Link>
  )
}
