'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Game, BadgeType } from '@/lib/types'
import { Star } from 'lucide-react'

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
    <Link href={`/games/${game.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow duration-300 cursor-pointer w-50 h-30 flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />



          {/* Badge */}
          {badge && (
            <div className={`absolute top-2 right-2 ${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-bold`}>
              {badge.label}
            </div>
          )}
        </div>

        {/* Content */}
        {/* <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-foreground font-semibold text-sm line-clamp-2 mb-2 group-hover:text-accent transition-colors">
            {game.title}
          </h3> */}

        {/* Rating and Players */}
        {/* <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 mt-auto">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span>{game.rating.toFixed(1)}</span>
            </div>
            <span>{(game.playCount / 1000).toFixed(0)}K plays</span>
          </div> */}

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="text-xs bg-secondary text-muted-foreground rounded px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </Link>
  )
}
